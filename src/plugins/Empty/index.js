import mEmptyComponent from "./components/empty.vue";
import mText from "./components/mText.vue";

export const mEmpty = {
    install: function (Vue) {
        Vue.component('mEmpty', mEmptyComponent);
        Vue.component('mText', mText);
    }
}
