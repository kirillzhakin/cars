<script setup lang="ts">
	import { BaseLayout } from '../BaseLayout'
	import { Footer } from '../Footer'
	import { Header } from '../Header'
</script>
<template>
	<BaseLayout>
		<div class="container">
			<Header></Header>

			<main class="content">
				<slot></slot>
			</main>
			<Footer></Footer>
		</div>
	</BaseLayout>
</template>
<style lang="scss" scoped>
	@use './MainLayout.scss';
</style>
