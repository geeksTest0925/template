import Cookies from 'js-cookie'
const pre = 'LJYT_';
let cookie = {
    save (key, value) {
        const v = value || ''
        Cookies.set(pre+key, JSON.stringify(v))
    },
    get (key, defaultValue = '') {
        return Cookies.get(pre+key) ? JSON.parse(Cookies.get(pre+key)) : defaultValue
    },
    remove (key) {
        Cookies.remove(pre+key)
    },
    clear () {
        let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (let i = keys.length; i--;) {
                document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的,例如：m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的，例如 .m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的，例如 .kevis.com
            }
        }
    }
}

export default cookie
