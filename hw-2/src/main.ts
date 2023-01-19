interface user {
	name: string,
	phone: string,
	email: string,
	animals?: string[],
	cars?: string[],
	hasChildren: boolean,
	hasEducation: boolean
}

type usersType = user[]

type checkType = (arr: usersType, arg?: boolean) => string

const users: usersType = [
	{
		name: "Harry Felton",
		phone: "(09) 897 33 33",
		email: "felton@gmail.com",
		animals: ["cat"],
		cars: ["bmw"],
		hasChildren: false,
		hasEducation: true
		
	},
	{
		name: "May Sender",
		phone: "(09) 117 33 33",
		email: "sender22@gmail.com",
		hasChildren: true,
		hasEducation: true
	},
	{
		name: "Henry Ford",
		phone: "(09) 999 93 23",
		email: "ford0@gmail.com",
		cars: ["bmw", "audi"],
		hasChildren: true,
		hasEducation: false
	}
]

// Имена через запятую
const userNames: string = users.map((item: user): string => item.name).join(', ')

console.log(userNames)

// Количество машин у пользователей
const userCarsAmount: number = users.reduce((sum: number, current: user): number => {
    if (current.cars) {
        sum += current.cars.length 
    }
    return sum
}, 0)

console.log(userCarsAmount)

// Проверка на наличие образования
const checkEducation: checkType = (arr, education)=> {
	const a: string = arr.filter((item: user): boolean => item.hasEducation === education).map((item: user): string => item.name).join(', ')
	if (education){
		return `Образование есть у пользователей: ${a}`
	} else {
		return `Образования нет у пользователей: ${a}`
	}
	
}

console.log(checkEducation(users, true))
console.log(checkEducation(users, false))

// Проверка на наличие животных
const checkAnimals: checkType = (arr, animal) => {
	const a: string = arr.filter((item:user): boolean => {
		if (animal) {
			return item.animals !== undefined
		} else {
			return item.animals === undefined
		}}).map((item: user): string => item.name).join(', ')
	if (animal) {
		return `Животные есть у пользователей: ${a}`
	} else {
		return `Животных нет у пользователей: ${a}`
	}
}

console.log(checkAnimals(users, true))
console.log(checkAnimals(users, false))

//Названия марок автомобилей
const carBrands: checkType = (arr) => {
	const a: string[] = []
	arr.forEach((item: user): void => {
		if (item.cars) {
			a.push(`У пользователя ${item.name} есть машины: ${item.cars.join(', ')}`)
		} else {
			a.push(`У пользователя ${item.name} нет машин`)
		}
	})
	return a.join('\n')
}

console.log(carBrands(users))