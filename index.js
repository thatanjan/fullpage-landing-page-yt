
class Image {
	constructor(src, bgPosition) {
		this.src = src
		this.bgPosition = bgPosition
	}
}

class Album {
	constructor(name) {
		this.name = name
		this.images = []
	}

	addImages(images, album = '') {
		images.forEach(([image, bgPosition]) => {
			const src = album ? `media/${album}/${image}` : `media/${image}`

			const imageObj = new Image(src, bgPosition || '')

			this.images.push(imageObj)
		})

		return this
	}
}

const albums = [
	new Album('Taylor Swift').addImages([['taylor_swift.jpg']], ''),
	new Album('Fearless').addImages(
		[['1.jpg'], ['2.jpg', 'center 80%'], ['3.jpg']],
		'fearless'
	),
	new Album('Speak Now').addImages(
		[['1.jpg'], ['2.jpg'], ['3.jpg']],
		'speak_now'
	),
	new Album('Red').addImages(
		[['1.jpg'], ['2.jpg'], ['3.jpg', 'center']],
		'red'
	),
	new Album('1989').addImages([['1989.jpeg']], ''),
	new Album('Reputation').addImages(
		[['1.jpg'], ['2.jpg'], ['3.jpg']],
		'reputation'
	),
	new Album('Lover').addImages(
		[['1.jpg'], ['2.jpg', 'center bottom'], ['3.jpg', 'center']],
		'lover'
	),
	new Album('folklore').addImages(
		[
			['1.jpg', 'center bottom'],
			['2.jpg', 'center'],
			['3.jpg', 'center bottom'],
		],
		'folklore'
	),
	new Album('Evermore').addImages(
		[['1.jpg', 'center'], ['2.jpg'], ['3.jpg']],
		'evermore'
	),
	new Album("Fearless (taylor's version)").addImages(
		[['fearlesstv.jpg', 'center 70%']],
		''
	),
	new Album("Red (taylor's version)").addImages(
		[['redtv.jpg', 'center bottom']],
		''
	),
]

const fullPageEl = document.getElementById('fullpage')

const createSlides = images =>
	images.map(image => {
		const slide = document.createElement('div')
		slide.classList.add('slide')

		slide.style.backgroundImage = `url(${image.src})`
		slide.style.backgroundPosition = image.bgPosition

		return slide
	})

const createSection = album => {
	const section = document.createElement('section')
	section.classList.add('section')

	const slides = createSlides(album.images)

	slides.forEach(slide => section.appendChild(slide))

	const title = document.createElement('h1')
	title.classList.add('title')
	title.innerText = album.name

	section.appendChild(title)

	return section
}

albums.forEach(album => {
	const section = createSection(album)

	fullPageEl.appendChild(section)
})

const albumNames = albums.map(album => album.name)

new fullpage('#fullpage', {
	navigation: true,
	navigationPositon: 'right',
	showActiveTooltip: true,
	navigationTooltips: albumNames,
	anchors: ['one', 'two', 'three'],
})
