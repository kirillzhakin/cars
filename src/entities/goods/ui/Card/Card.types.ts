interface Image {
	id: number
	is_primary: boolean
	size: number
	index: number
	url: string
	thumbnail_url: string
	image500: string
	image100: string
}

export interface ICard {
	id: number
	title: string
	name: string
	engine: string
	images: Image[]
}

