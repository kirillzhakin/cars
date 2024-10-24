<script setup lang="ts">
	import { Card } from '@/entities/goods/ui'
	import { useCarsStore } from '@/entities/goods/model/useCarsStore'
	const carsStore = useCarsStore()

	const { carsData } = storeToRefs(carsStore)

	carsStore.getData()
</script>
<template>
	<div class="cars-list">
		<ClientOnly>
			<Card v-for="item in carsData" :data="item" :key="item.id" />
		</ClientOnly>
	</div>
</template>
<style lang="scss" scoped>
	@use './MainPage.scss';
</style>
