<script setup lang="ts">
	import { useCarsStore } from '@/entities/goods/model/useCarsStore'
	import { type ICard } from './Card.types'
	const props = defineProps<{
		data: ICard
	}>()

	const imgUrl = computed(() => props.data.images[0].url)

	const carsStore = useCarsStore()

	const { isPending } = storeToRefs(carsStore)
</script>
<template>
	<div class="card">
		<div v-if="isPending" class="skeleton"></div>
		<img v-else-if="imgUrl" :src="imgUrl" :alt="props.data.name" class="card__image" />
		<div class="card__body">
			<h5 class="card__title">{{ props.data.name }}</h5>
			<p class="card__text">Объем двигателя: {{ props.data.engine }}</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
	@use './Card.scss';
</style>
