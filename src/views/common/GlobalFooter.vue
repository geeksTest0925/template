<template>
    <div class="footer">
        <div class="copyright">
            Copyright
            <copyright-outlined />
            <span v-html="props.copyright"></span>
        </div>
    </div>
</template>

<script setup>
import { CopyrightOutlined } from '@ant-design/icons-vue';
import { defineProps } from 'vue';
const props = defineProps({
    copyright: {
        type: String,
    },
});
</script>

<style lang="less" scoped>
.footer {
    padding: 21px 0;
    text-align: center;
    width: 100%;
    // position: absolute;
    // bottom: 0;
    background: #2a2b33;
    color: #b9b9b9;
    // left: 0;
    // z-index: 999;
    .copyright {
        i {
            font-size: 0.8rem;
        }
    }

    &a {
        text-decoration: none;
    }
}
</style>
