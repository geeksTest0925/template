<template>
    <span v-html="fmtEmptyString(text)"></span>
</template>

<script>
import { fmtEmptyString } from '@/utils/index'
export default {
    name: 'm-Text',
    props: {
        text: String,
    },
    methods: {
        fmtEmptyString,
    },
}
</script>
