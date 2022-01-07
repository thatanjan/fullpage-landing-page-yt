const albumNames = [
	'Taylor Swift',
	'Fearless',
	'Speak Now',
	'Red',
	'1989',
	'Reputation',
	'Lover',
	'Folklore',
	'Evermore',
	"Fearless (Taylor's Version)",
	"Red (Taylor's Version)",
]

new fullpage('#fullpage', {
	navigation: true,
	navigationPositon: 'right',
	showActiveTooltip: true,
	navigationTooltips: albumNames,
	anchors: ['one', 'two', 'three'],
})
