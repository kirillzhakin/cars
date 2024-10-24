<script setup lang="ts">
	import { MainPage } from '@/pages'
	import { LAYOUTS_KEYS } from '@/widgets/Layout'

	definePageMeta({
		layout: LAYOUTS_KEYS.MAIN_LAYOUT
	})
</script>

<template>
	<MainPage />
</template>

