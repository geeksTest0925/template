module.exports = {
	presets: [
		[
			'@vue/app',
			{
				polyfills: ['es.promise', 'es.symbol'],
				useBuiltIns: 'entry'
			}
		]
	],
	plugins: [['import', { libraryName: 'ant-desgin-vue', libraryDirectory: 'es', style: true }]]
};
