//Список курсов
let courses = [
	{ name: "Courses in England", prices: [0, 100] },
	{ name: "Courses in Germany", prices: [500, Infinity] },
	{ name: "Courses in Italy", prices: [100, 200] },
	{ name: "Courses in Russia", prices: [0, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, Infinity] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [0, Infinity] },
];

//Варианты цен
let requiredRange1 = [0, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, Infinity];

const result = function (requiredRange) {

	if (requiredRange[0] === 0) {
		//Диапазон от null до 200
		a = courses.filter(i => i.prices[0] <= requiredRange[1]);
	} else if (requiredRange[1] === Infinity) {
		//Диапазон от 200 и выше
		a = courses.filter(i => i.prices[0] >= requiredRange[0] || i.prices[1] >= requiredRange[0]);
	} else {
		//Диапазон от 100 до 350
		a = courses.filter(i => i.prices[0] <= requiredRange[1] && i.prices[1] <= requiredRange[1]);
	}
	return a
}

console.log(result(requiredRange1));
console.log(result(requiredRange2));
console.log(result(requiredRange3));












