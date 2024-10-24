// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-10-20',
	app: {
		rootAttrs: {
			class: 'h-full'
		}
	},
	devtools: { enabled: true },
	srcDir: 'src',
	dir: {
		pages: 'pages-router'
	},

	modules: ['@pinia/nuxt'],
	css: ['@/app/styles/index.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern'
				}
			}
		}
	},
	imports: {
		dirs: ['entities/goods/model'],
		presets: [
			{
				from: 'pinia',
				imports: ['defineStore', 'storeToRefs', 'acceptHMRUpdate']
			}
		]
	}
})
