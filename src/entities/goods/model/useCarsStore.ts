import { ref, type Ref } from 'vue'
import { type ICard } from '../ui/Card/Card.types'
import { API_URL } from '../const'

export const useCarsStore = defineStore('Cars', () => {
	const isPending: Ref<boolean> = ref(false)

	const carsData: Ref<ICard[]> = ref([])

	const getData = async () => {
		try {
			isPending.value = true
			const { data } = await useFetch<ICard[]>(`${API_URL}/api/v1/cars/list`)
			if (data.value) carsData.value = data.value
		} catch (error) {
			console.error('Ошибка при загрузке данных', error)
		} finally {
			isPending.value = false
		}
	}

	return {
		isPending,
		carsData,
		getData
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCarsStore, import.meta.hot))
}
