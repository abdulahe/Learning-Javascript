// const reverseString = (someString) => {
// 	let arr = someString.split(' ');
// 	arr.reverse();
// 	for (let i = 0; i < arr.length; i++) {
// 		let arr1 = arr[i].split('');
// 		arr1.reverse();
// 		arr[i] = arr1.join('');
// 	}
// 	someString = arr.join(' ');
// 	return someString;
// };

// console.log(reverseString('I am a string')); // gnirts a ma I

// const isPalindrome = (someString) => {
// 	let stringUnazad = someString.split('');
// 	stringUnazad.reverse();
// 	stringUnazad = stringUnazad.join('');
// 	if (stringUnazad.toLowerCase() === someString.toLowerCase()) {
// 		return true;
// 	}
// 	return false;
// };

// console.log(isPalindrome('Racecar')); // true
// console.log(isPalindrome('apple')); // false

// const removeCharacters = (someString, charactersToRemove) => {
// 	someString = someString.split('');
// 	for (let i = 0; i < charactersToRemove.length; i++) {
// 		for (let j = 0; j < someString.length; j++) {
// 			if (someString[j] === charactersToRemove[i]) {
// 				someString.splice(j, 1);
// 				j--;
// 			}
// 		}
// 	}
// 	someString = someString.join('');
// 	return someString;
// };

// console.log(removeCharacters('I am an example string', ['a', 'x']));
// I m n emple string

// const mostCommonCharacter = (someString) => {
// 	let maxPonavljanja = 0;
// 	let maxSlovo = someString[0];
// 	for (let i = 0; i < someString.length; i++) {
// 		let brojac = 0;
// 		for (let j = 0; j < someString.length; j++) {
// 			if (someString[i] === someString[j]) {
// 				brojac++;
// 			}
// 		}
// 		if (brojac > maxPonavljanja) {
// 			maxPonavljanja = brojac;
// 			maxSlovo = someString[i];
// 		} else if (brojac === maxPonavljanja) {
// 			if (someString[i].localeCompare(maxSlovo) === -1) {
// 				maxSlovo = someString[i];
// 				maxPonavljanja = brojac;
// 			}
// 		}
// 	}
// 	return maxSlovo;
// };

// console.log(mostCommonCharacter('abcddefg')); // d
// console.log(mostCommonCharacter('hfeggbdef')); // f

// const findDuplicates = (someString, repeatTimes) => {
// 	let charToReturn = [];
// 	for (let i = 0; i < someString.length; i++) {
// 		let brojac = 1;
// 		for (let j = i; someString[j] === someString[j + 1]; j++) brojac++;
// 		if (
// 			brojac >= repeatTimes &&
// 			charToReturn.includes(someString[i]) === false
// 		) {
// 			charToReturn.push(someString[i]);
// 		}
// 	}
// 	return charToReturn;
// };

// console.log(findDuplicates('abcddef', 2)); // [d]
// console.log(findDuplicates('tfghhhplffzaaa', 3)); // [h, a]

// const vowelOrConsonant = (someString, position) => {
// 	if (
// 		someString[position] === 'a' ||
// 		someString[position] === 'e' ||
// 		someString[position] === 'i' ||
// 		someString[position] === 'o' ||
// 		someString[position] === 'u'
// 	) {
// 		return 'vowel';
// 	} else if (typeof someString[position] === 'string') {
// 		return 'consonant';
// 	} else {
// 		return undefined;
// 	}
// };

// console.log(vowelOrConsonant('hello', 4)); // consonant
// console.log(vowelOrConsonant('cat', 2)); // vowel

// const sortString = (someString, reverseOrder) => {
// 	someString = someString.split('');
// 	if (reverseOrder === false) {
// 		someString.sort((a, b) => a.localeCompare(b));
// 	} else if (reverseOrder === true) {
// 		someString.sort((a, b) => b.localeCompare(a));
// 	}
// 	someString = someString.join('');
// 	return someString;
// };

// console.log(sortString('bacd', false)); // "abcd"
// console.log(sortString('axedzpq', true)); // "zxqpeda"

// const isOrderedAlphabetically = (someString, reverseOrder) => {
// 	let arr = someString.split('');
// 	if (reverseOrder === false) {
// 		arr.sort((a, b) => a.localeCompare(b));
// 	} else if (reverseOrder === true) {
// 		arr.sort((a, b) => b.localeCompare(a));
// 	}
// 	arr = arr.join('');
// 	if (arr === someString) {
// 		return true;
// 	}
// 	return false;
// };

// console.log(isOrderedAlphabetically('abbcddeikl', false)); // true
// console.log(isOrderedAlphabetically('jheca', true)); // true

// const capitalizeFirstLetterOfEachWord = (someString) => {
// 	someString = someString.split(' ');
// 	for (let i = 0; i < someString.length; i++) {
// 		someString[i] =
// 			someString[i].charAt(0).toUpperCase() + someString[i].slice(1);
// 	}
// 	return someString.join(' ');
// };

// console.log(capitalizeFirstLetterOfEachWord('i am a string')); // I Am A String

// const stringContains = (someString, stringToSearchFor) => {
// 	let j = 0;
// 	for (let i = 0; i < someString.length; i++) {
// 		j = 0;
// 		while (stringToSearchFor[j] === someString[i]) {
// 			i++;
// 			j++;
// 		}
// 		if (j === stringToSearchFor.length) return true;
// 	}
// 	return false;
// };

// console.log(stringContains('catapult', 'cat')); // true

// const shuffle = (someString) => {
// 	let randomOrder = [];
// 	let newString = [];
// 	let max = someString.length;
// 	for (let i = 0; i < someString.length; i++) {
// 		let pom = Math.floor(Math.random() * max);
// 		if (randomOrder.includes(pom) === true) {
// 			i--;
// 		} else {
// 			randomOrder.push(pom);
// 			newString.push(someString[pom]);
// 		}
// 	}
// 	return newString.join('');
// };

// console.log(shuffle('hello')); // lelho

// const alternateCaps = (someString) => {
// 	let capital = 1;
// 	someString = someString.split('');
// 	for (let i = 0; i < someString.length; i++) {
// 		if (someString[i] === ' ') continue;
// 		if (capital === 1) {
// 			someString[i] = someString[i].toUpperCase();
// 		}
// 		capital *= -1;
// 	}
// 	return someString.join('');
// };

// console.log(alternateCaps('I am a string')); // I aM a StRiNg

// const extractQuote = (quote) => {
// 	quote = quote.replaceAll(' - ', '');
// 	quote = quote.split('"');
// 	quote.splice(0, 1);
// 	return quote;
// };

// const quote = `"The unexamined life is not worth living." - Socrates`;
// console.log(extractQuote(quote));
// ["The unexamined life is not worth living.", "Socrates"]

// const verifyEmail = (email) => {
// 	email = email.split('@');
// 	if (email.length > 2 || email.length < 2) return false;
// 	email[1] = email[1].split('.'); //i will only consider ".com" a valid domain name
// 	if (email[1].length > 2 || email[1].length < 2) return false;
// 	if (email[1][1] === 'com' && email[1][0].length > 0) return true;
// 	else return false;
// };

// console.log(verifyEmail('somebody@somewhere')); // false
// console.log(verifyEmail('person@company.com')); // true
