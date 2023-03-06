# background-template

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## axios

[使用文档](http://www.axios-js.com/zh-cn/docs/)

## core-js

```html
// 主要是因为IE浏览器无法兼容新的语法、api，所有就需要用到core.js进行兼容性处理，从而解决问题。

// 导入所有新提案api
import "core-js";
// 唯一稳定的'core js'功能-es和web标准
import "core-js/stable";
// 仅支持稳定的ES功能
import "core-js/es";
// 只导入指定api
import "core-js/features/set";
 
import "core-js/stable/set";
import "core-js/es/set";
```
[使用文档](https://www.npmjs.com/package/core-js)

## cross-env

```html
// 它是运行跨平台设置和使用环境变量(Node中的环境变量)的脚本。
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "build:stage": "cross-env OUTPUT_DIR=deploy-platform vue-cli-service build --mode stage",
    "build:pre": "cross-env OUTPUT_DIR=deploy-platform vue-cli-service build --mode pre",
    "deploy:stage": "npm run build:stage && cross-env NODE_ENV=stage OUTPUT_DIR=deploy-platform node ../cmd-deploy-config",
    "deploy:pre": "npm run build:pre && cross-env NODE_ENV=stage OUTPUT_DIR=deploy-platform node ../cmd-deploy-config"
}
```
[使用文档](https://www.npmjs.com/package/cross-env)

## js-md5

```html
// 在应用程序代码中，通过使用字符串作为参数调用md5方法来计算字符串的（十六进制编码）md5哈希
import md5 from 'js-md5'
let hash = md5('abc123')
console.log(hash)
```
[使用文档](https://www.npmjs.com/package/js-md5)

## lodash

```html
// lodash是一套工具库，内部封装了很多字符串、数组、对象等常见数据类型的处理函数。
import _ from 'lodash'
```
[使用文档](https://www.lodashjs.com/)

## qrcode

```html
// QRCode.js 是一个用于生成二维码的 JavaScript 库。主要是通过获取 DOM 的标签,再通过 HTML5 Canvas 绘制而成,不依赖任何库。
import QRCode from "qrcode";
qrcode.makeCode("http://www.w3cschool.cc"); //要生成二维码的链接
```
[使用文档](https://www.npmjs.com/package/qrcode)

## qs

```html
// qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库。主要用于将url后面的值转换为对象，或者将对象拼接未url后面的值
import qs from "qs";
```
[使用文档](https://www.npmjs.com/package/qs)

## mitt

```html
// 因为vue3已经没有提供配套的事件总线bus，需要使用第三方库mitt来完成vue2中bus完成的事情
import mitt from 'mitt'
export const bus = mitt()
// 父组件
bus.emit('函数名', 需要传的值)

//子组件
bus.on('函数名'，（接收到的值）=>{
	逻辑操作
})
```

## moment

```html
// moment.js是一个时间处理库，在前端经常用到比如ui框架里datePicker，rangePicker等组件会用到。
import moment from 'moment'
```
[使用文档](https://www.npmjs.com/package/qs)