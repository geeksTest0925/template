// npx prettier --write .  格式化所有文件
// npx prettier --write src/index.js 格式化单个文件
module.exports = {
	// 箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: "<always|avoid>"）
	arrowParens: 'always',
	// 将>单独一行还是在最末尾
	bracketSameLine: false,
	// object对象里面的key和value值和括号间的空格
	bracketSpacing: true,
	// embeddedLanguageFormatting: "off",默认是auto,控制被引号包裹的代码是否进行格式化
	embeddedLanguageFormatting: 'auto',
	// 指定HTML文件的全局空格敏感度 css|strict|ignore
	htmlWhitespaceSensitivity: 'css',
	// 在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了
	insertPragma: false,
	// 在jsx文件中的引号需要单独设置
	jsxSingleQuote: false,
	// jsx标签多行属性写法时，尖括号是否另起一行(jsxBracketSameLine: <bool>)
	jsxBracketSameLine: false,
	// 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	proseWrap: 'preserve',
	// object对象中key值是否加引号（quoteProps: "<as-needed|consistent|preserve>"）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
	quoteProps: 'as-needed',
	// 严格按照文件顶部的一些特殊的注释格式化代码
	requirePragma: false,
	// 结尾是否添加分号，false的情况下只会在一些导致ASI错误的其工况下在开头加分号
	semi: true,
	// HTML元素有多个属性，每个属性格式化为单独一行
	singleAttributePerLine: false,
	// 使用单引号(singleQuote: <bool>)
	singleQuote: true,
	// 尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境。（trailingComma: "<es5|none|all>"）
	trailingComma: 'none',
	// 是否使用tab来缩进
	useTabs: true,
	// vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
	vueIndentScriptAndStyle: false,
	// 一行代码的最大字符数，默认是80
	printWidth: 130,
	// tab宽度为2空格
	tabWidth: 2
};
