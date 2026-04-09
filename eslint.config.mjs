// ESLint flat config for Next.js 16 + TypeScript
// 目标：零警告、零格式冲突、类型感知、路径约束。

// 关闭与 Prettier 冲突的所有规则（保持单一格式化来源）
import eslintConfigPrettier from 'eslint-config-prettier'
// 导入顺序与分组
import eslintPluginImport from 'eslint-plugin-import'
// 清理未使用的 import/变量
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
// ESLint 官方推荐基础规则
import js from '@eslint/js'
// Next.js 官方规则（包含 React / Hooks / JSX 最佳实践）
import next from 'eslint-config-next'
// TypeScript ESLint flat config 工具与规则集
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        // 全局忽略目录，避免扫描构建产物与依赖
        ignores: [
            '.next/**',
            'node_modules/**',
            'dist/**',
            'build/**',
            'out/**',
            'coverage/**',
            '.turbo/**',
            '.vercel/**',
            'pnpm-lock.yaml',
            'rio.yaml'
        ]
    },
    {
        // 额外的 Linter 选项
        linterOptions: {
            // 报告多余的 eslint-disable 指令
            reportUnusedDisableDirectives: true
        },
        rules: {
            // 启用 ESLint 官方推荐基础规则
            ...js.configs.recommended.rules
        }
    },
    {
        // Next.js 官方 + TS 严格 + 风格化规则
        extends: [...next, ...tseslint.configs.recommendedTypeChecked, ...tseslint.configs.stylisticTypeChecked],
        // 仅对 TS/TSX 文件生效
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                // 指定类型检查用的 tsconfig
                project: ['./tsconfig.json'],
                // 配合 project 使用，定位根目录
                tsconfigRootDir: import.meta.dirname
            }
        },
        plugins: {
            // 导入顺序 / 依赖分组
            import: eslintPluginImport,
            // 未使用的 import/变量
            'unused-imports': eslintPluginUnusedImports
        },
        rules: {
            // 导入分组 + 字母序 + 分组间空行
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                    'newlines-between': 'always'
                }
            ],
            // 禁止未使用的 import
            'unused-imports/no-unused-imports': 'error',
            // 未使用变量（允许以下划线开头忽略）
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ],
            // 类型定义统一使用 type（保持风格一致）
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            // 允许通过类型推断返回值
            '@typescript-eslint/explicit-function-return-type': 'off',
            // Promise 使用检查（表单事件属性不强制）
            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: { attributes: false }
                }
            ],
            // 禁止悬空 Promise（强制 await 处理）
            '@typescript-eslint/no-floating-promises': 'error',
            // 交由 unused-imports 统一处理未使用变量
            '@typescript-eslint/no-unused-vars': 'off',
            // 强制使用 @/* 绝对路径，避免 ../ 穿越
            'no-restricted-imports': [
                'error',
                {
                    patterns: [
                        {
                            group: ['../*'],
                            message: 'Use absolute @/* imports instead of relative traversals.'
                        }
                    ]
                }
            ]
        },
        settings: {
            next: {
                // 兼容单体/monorepo 的根目录探测
                rootDir: ['apps/*/', 'src/']
            }
        }
    },
    {
        // 对 app 路由的 Server Components 放宽 React 作用域规则
        name: 'server-components-jsx-relax',
        files: ['src/app/**/page.tsx', 'src/app/**/layout.tsx', 'src/app/**/template.tsx'],
        rules: {
            'react/jsx-no-undef': 'off',
            'react/react-in-jsx-scope': 'off'
        }
    },
    {
        // 最后关闭与 Prettier 冲突的所有规则
        name: 'prettier-last',
        rules: {
            ...eslintConfigPrettier.rules
        }
    }
)
