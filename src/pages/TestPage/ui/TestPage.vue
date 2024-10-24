<script setup lang="ts">
	import { RangeSlider } from '@/shared'
	const MOCK_ARGS = {
		min: 10,
		max: 50,
		step: 1
	}
	const rangeStart = shallowRef(10)
	const rangeEnd = shallowRef(50)
</script>
<template>
	<div class="test-wrapper">
		<h1>Компонент RangeSlider</h1>
		<div>minValue: {{ rangeStart }}</div>
		<div>maxValue: {{ rangeEnd }}</div>
		<RangeSlider
			v-bind="MOCK_ARGS"
			v-model:range-start="rangeStart"
			v-model:range-end="rangeEnd"
		/>
	</div>
</template>
<style lang="scss" scoped>
	@use './TestPage.scss';
</style>
