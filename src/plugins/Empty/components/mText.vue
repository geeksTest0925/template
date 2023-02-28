<template>
	<span v-html="fmtEmptyString(text)"></span>
</template>

<script setup>
import { fmtEmptyString } from '@/utils/index';
import { defineProps } from 'vue';
const props = defineProps({
	text: {
		type: String
	}
});
</script>
