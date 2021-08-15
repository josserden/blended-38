// * 41 задача из автопроверки 3 модуль

// const atTheOldToad = {
// 	potions: [
// 		{ name: 'Speed potion', price: 460 },
// 		{ name: 'Dragon breath', price: 780 },
// 		{ name: 'Stone skin', price: 520 },
// 	],
// 	// Change code below this line
// 	getPotions() {
// 		return this.potions;
// 	},

// 	addPotion(newPotion) {
// 		for (const value of this.potions) {
// 			if (value.name === newPotion.name) {
// 				return `Error! Potion ${newPotion.name} is already in your inventory!`;
// 			}
// 		}
// 		this.potions.push(newPotion);
// 		this.getPotions();
// 	},

// 	removePotion(potionName) {
// 		for (let i = 0; i < this.potions.length; i += 1) {
// 			if (this.potions[i].name === potionName) {
// 				this.potions.splice(i, 1);
// 			}
// 			this.getPotions();
// 		}
// 		return `Potion ${potionName} is not in inventory!`;
// 	},

// 	updatePotionName(oldName, newName) {
// 		for (const value of this.potions) {
// 			if (value.name === oldName) {
// 				return (value.name = newName);
// 			}
// 		}
// 		return `Potion ${oldName} is not in inventory!`;
// 	},
// 	// Change code above this line
// };

// TASK 1
/*
 * Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
 */

const arr = [1, 2, 3, -1, -2, -3];

function isPositive(num) {
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}

const newArr = [];
for (let i = 0; i <= arr.length; i++) {
	if (isPositive(arr[i])) {
		newArr.push(arr[i]);
	}
}

console.log(newArr);

// TASK 2
/*
 * Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
 */

const arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
}
console.log(sum);

// TASK 3
/*
 * Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
 * Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
 */

const palindrome = string => {
	string.toLowerCase();

	return string === string.split('').reverse().join('');
};

// TASK 4
/*
 * Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
 * Гласными являются «a», «e», «i», «o», «u».
 */

const findVowels = string => {
	let count = 0;
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	for (const char of string.toLowerCase()) {
		if (vowels.includes(char)) {
			count += 1;
		}
	}
	return count;
};

console.log(findVowels('anna'));
