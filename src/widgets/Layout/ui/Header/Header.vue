<script setup lang="ts"></script>
<template>
	<header class="header">
		<nav>
			<ul class="header__links">
				<li>
					<NuxtLink to="/" active-class="header__active"> CARS </NuxtLink>
				</li>
				<li>
					<NuxtLink to="/test" active-class="header__active"> Пример кода </NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	@use './Header.scss';
</style>
