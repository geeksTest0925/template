const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = process.env.NODE_ENV === 'production' ? true : false;
const Timestamp = Date.now();
const APP_NAME = require('./package.json').name;

module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    outputDir: `dist/${process.env.VUE_APP_OUTPUT_DIR}`,
    assetsDir: 'static',
    lintOnSave: false, //IS_PROD ? false : 'error' 关闭eslint
    productionSourceMap: false,
    transpileDependencies: ['sm-crypto'],
    devServer: {
        port: 1800,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    "primary-color": "#FFF",
                    'menu-dark-color': '#FFF',
                    'menu-dark-bg': '#2A2D3E', //菜单背景色
                    'menu-dark-item-active-bg': '#388AFC', //一级菜单选中背景颜色
                    'menu-dark-submenu-bg': '#FFF', //二级菜单背景色
                    'menu-dark-submenu-item-selected-bg': '#388AFC', //二级菜单选中背景色
                    'menu-dark-submenu-open-bg': '#FFF' //二级菜单弹出时背景色
                }
            }
        }
    },
    configureWebpack: {
        output: {
            // 微应用的包名，这里与主应用中注册的微应用名称一致
            library: `${APP_NAME}-[name]`,
            // 将你的 library 暴露为所有的模块定义下都可运行的方式
            libraryTarget: "umd",
            // 按需加载相关，设置为 webpackJsonp_微应用名称 即可
            jsonpFunction: `webpackJsonp_${APP_NAME}`
        }
    },
    chainWebpack: config => {
        if(IS_PROD){
            config.plugins.delete('preload');
            config.plugins.delete('prefetch');
        }
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm-browser.js')
            .set('@', resolve('src'))
            .set('~', resolve('src/components'))
            .set('utils', resolve('src/utils'))
            .set('assets', resolve('src/assets'));

        config.resolve.symlinks(true);
        
        return config;
    }
}
