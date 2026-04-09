// https://prettier.nodejs.cn/

/** @type {import("prettier").Config} */
const config = {
    /**
     * 功能: 控制代码行的最大宽度，超过则换行
     * 参数值: 120 表示每行最多 120 个字符
     * 可选值: 任意正整数，常见如 80/100/120
     * 效果: 统一行长，提升可读性与审阅体验
     */
    printWidth: 120,
    /**
     * 功能: 每一级缩进的空格数量
     * 参数值: 4 表示缩进为 4 个空格
     * 可选值: 任意正整数，常见如 2/4
     * 效果: 统一缩进宽度，配合 `useTabs` 决定缩进风格
     */
    tabWidth: 4,
    /**
     * 功能: 是否使用制表符进行缩进
     * 参数值: false 表示使用空格缩进
     * 可选值: true | false
     * 效果: 与团队约定保持一致，false 更通用且跨编辑器一致
     */
    useTabs: false,
    /**
     * 功能: 控制语句末尾是否打印分号
     * 参数值: false 表示不打印分号
     * 可选值: true | false
     * 效果: 与 ESLint `semi: ['warn','never']` 保持一致风格
     */
    semi: false,
    /**
     * 功能: 统一字符串使用单引号
     * 参数值: true 表示统一使用单引号
     * 可选值: true | false
     * 效果: 与 ESLint `quotes: 'single'` 保持一致
     */
    singleQuote: true,
    /**
     * 功能: 在 JSX 属性中使用单引号
     * 参数值: true 表示使用单引号
     * 可选值: true | false
     * 效果: 与整体引号风格统一
     */
    jsxSingleQuote: true,
    /**
     * 功能: 控制尾随逗号的打印策略
     * 参数值: 'none' 表示不打印尾随逗号
     * 可选值: 'none' | 'es5' | 'all'
     * 效果:
     *   - 'none': 不添加尾随逗号
     *   - 'es5': 在 ES5 支持的结构（对象/数组等）添加
     *   - 'all': 在函数参数等所有可能位置添加（需运行环境支持）
     */
    trailingComma: 'none',
    /**
     * 功能: 控制对象字面量花括号内的空格
     * 参数值: true 表示开启空格（如 { foo: bar }）
     * 可选值: true | false
     * 效果: 提升对象字面量的可读性
     */
    bracketSpacing: true,
    /**
     * 功能: 控制多行元素的右尖括号是否与最后一行同一行
     * 参数值: false 表示将 `>` 放置到新的一行
     * 可选值: true | false
     * 效果: 影响多行 HTML/JSX 标签的排版风格
     */
    bracketSameLine: false,
    /**
     * 功能: 控制单参数箭头函数是否包含括号
     * 参数值: 'avoid' 单参数时省略括号
     * 可选值: 'avoid' | 'always'
     * 效果:
     *   - 'avoid': 格式为 x => x
     *   - 'always': 格式为 (x) => x
     */
    arrowParens: 'avoid',
    /**
     * 功能: 控制文件换行符风格
     * 参数值: 'lf' 使用 LF（Unix 风格）
     * 可选值: 'auto' | 'lf' | 'crlf' | 'cr'
     * 效果:
     *   - 'auto': 根据现有文件内容或系统自动决定
     *   - 'lf': 使用 \n，跨平台更通用
     *   - 'crlf': 使用 \r\n（Windows 风格）
     *   - 'cr': 使用 \r（旧 Mac 风格）
     */
    endOfLine: 'lf'
}

export default config
