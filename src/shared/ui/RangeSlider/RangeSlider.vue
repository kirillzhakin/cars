<script setup lang="ts">
	import {
		computed,
		type CSSProperties,
		toRefs,
		reactive,
		watch,
		ref
	} from 'vue'
	import { minMax, withPercent } from '@/shared'
	import type { RangeSliderProps } from './RangeSlider.types'

	const emit = defineEmits<{
		(e: 'update:rangeStart', value: number): void
		(e: 'update:rangeEnd', value: number): void
	}>()

	const props = withDefaults(defineProps<RangeSliderProps>(), {
		step: 1
	})

	const { max, min, rangeStart, rangeEnd } = toRefs(props)

	const inputRange = reactive({
		start: minMax(rangeStart.value, min.value, max.value),
		end: minMax(rangeEnd.value, min.value, max.value)
	})

	const sliderDifference = computed(() => {
		return Math.abs(rangeStart.value - rangeEnd.value)
	})

	const getPercent = (value: number, minVal: number, maxVal: number) => {
		return ((value - minVal) / (maxVal - minVal)) * 100
	}

	const differencePercent = computed(() => {
		return minMax(
			(sliderDifference.value / (max.value - min.value)) * 100,
			0,
			100
		)
	})

	const rangeStartProcent = computed(() => {
		return minMax(getPercent(rangeStart.value, min.value, max.value), 0, 100)
	})

	const sliderStyle = computed<CSSProperties>(() => {
		return {
			width: withPercent(differencePercent.value),
			left: withPercent(rangeStartProcent.value)
		}
	})

	const toValidRange = (possibleStart: number, possibleEnd: number) => {
		const possibleStartByMaxMin = Math.min(
			Math.max(possibleStart, min.value),
			max.value
		)
		const possibleEndByMaxMin = Math.min(
			Math.max(possibleEnd, min.value),
			max.value
		)

		const res = [possibleStartByMaxMin, possibleEndByMaxMin].sort()

		return res
	}

	const checkIsInputRangeNotEqualToProps = () => {
		const res =
			rangeStart.value !== inputRange.start || rangeEnd.value !== inputRange.end
		return res
	}

	const isNeedToSkipSetRangeInputs = ref(false)

	watch(
		inputRange,
		() => {
			if (checkIsInputRangeNotEqualToProps()) {
				const [validRangeStart, validRangeEnd] = toValidRange(
					inputRange.start,
					inputRange.end
				)
				emit('update:rangeStart', validRangeStart)
				emit('update:rangeEnd', validRangeEnd)
				isNeedToSkipSetRangeInputs.value = true
			}
		},
		{ deep: true }
	)

	watch(
		[max, min, rangeStart, rangeEnd],
		() => {
			if (checkIsInputRangeNotEqualToProps()) {
				const [validRangeStart, validRangeEnd] = toValidRange(
					rangeStart.value,
					rangeEnd.value
				)

				if (validRangeStart !== rangeStart.value) {
					emit('update:rangeStart', validRangeStart)
				}
				if (validRangeEnd !== rangeEnd.value) {
					emit('update:rangeEnd', validRangeEnd)
				}
				if (!isNeedToSkipSetRangeInputs.value) {
					inputRange.start = rangeStart.value
					inputRange.end = rangeEnd.value
				} else {
					isNeedToSkipSetRangeInputs.value = false
				}
			}
		},
		{ immediate: true }
	)

	const onChangeStartInput = (e: Event) => {
		const { value } = e.target as HTMLInputElement
		emit('update:rangeStart', +value)
	}

	const onChangeEndInput = (e: Event) => {
		const { value } = e.target as HTMLInputElement
		emit('update:rangeEnd', +value)
	}
</script>
<template>
	<form class="range-slider__inputs">
		<input
			:value="rangeStart"
			aria-label="randge-start"
			class="range-slider__input"
			type="number"
			:min="min"
			:max="max"
			@change="onChangeStartInput"
		/>
		<input
			:value="rangeEnd"
			aria-label="range-end"
			class="range-slider__input"
			type="number"
			:min="min"
			:max="max"
			@change="onChangeEndInput"
		/>
	</form>
	<div class="range-slider">
		<span class="range-slider__track" :style="sliderStyle"></span>
		<input
			v-model="inputRange.start"
			aria-label="randge-start"
			type="range"
			:step="step"
			:min="min"
			:max="max"
		/>
		<input
			v-model="inputRange.end"
			aria-label="range-end"
			type="range"
			:step="step"
			:min="min"
			:max="max"
		/>
	</div>
</template>

<style lang="scss" scoped>
	@use './RangeSlider.scss';
</style>

