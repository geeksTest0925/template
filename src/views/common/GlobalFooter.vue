<template>
    <div class="footer">
        <div class="copyright">
            Copyright
            <copyright-outlined />
            <span v-html="copyright"></span>
        </div>
    </div>
</template>

<script>
import { CopyrightOutlined } from '@ant-design/icons-vue'

export default {
    name: 'GlobalFooter',
    props: ['copyright'],
    components: { CopyrightOutlined },
}
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
