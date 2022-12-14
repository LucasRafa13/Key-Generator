export const generatorPassword = (
	specialCharacters,
	uppercaseLetters,
	numbers,
	length,
	setPassword,
) => {
	const sort = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	const specialCharactersArray = [
		'!',
		'@',
		'#',
		'$',
		'%',
		'^',
		'&',
		'*',
		'(',
		')',
		'_',
		'+',
		'-',
		'=',
		'{',
		'}',
		'[',
		']',
		'|',
		':',
		';',
		'"',
		"'",
		'<',
		'>',
		',',
		'.',
		'?',
		'/',
	]
	const letterUpperCaseArr = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]
	const letterLowerCaseArr = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	]
	const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	let password = ''
	let characters = ''

	console.log({ length, specialCharacters, uppercaseLetters, numbers })

	if (specialCharacters) characters += specialCharactersArray.join('')
	if (uppercaseLetters) characters += letterUpperCaseArr.join('')
	if (numbers) characters += numberArray.join('')
	characters += letterLowerCaseArr.join('')

	for (let i = 0; i < length[0]; i++) {
		password += characters[sort(0, characters.length - 1)]
		console.log(password)
	}

	setPassword(password)
}
