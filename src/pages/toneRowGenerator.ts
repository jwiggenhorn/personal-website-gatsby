export function buildToneRowStrings(octave: number): string[] {
	const numbers = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
	let str = ''
	for (let i = 0; i < 12; i++) {
		if (i % 4 === 0 && i !== 0) str += '\n'
		str += Note[numbers[i]] + octave
		if (i % 4 === 0) str += '/q'
		str += ', '
	}
	str.replace('s', '#')
	const measureStrings = str.split('\n')
	return measureStrings
}

function shuffle(array: number[]) {
	let currentIndex = array.length,
		randomIndex
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		]
	}
	return array
}

enum Note {
	'C' = 0,
	'C#' = 1,
	'D' = 2,
	'D#' = 3,
	'E' = 4,
	'F' = 5,
	'F#' = 6,
	'G' = 7,
	'G#' = 8,
	'A' = 9,
	'A#' = 10,
	'B' = 11,
}
