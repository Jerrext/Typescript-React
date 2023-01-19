var users = [
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
];
// Имена через запятую
var userNames = users.map(function (item) { return item.name; }).join(', ');
console.log(userNames);
// Количество машин у пользователей
var userCarsAmount = users.reduce(function (sum, current) {
    if (current.cars) {
        sum += current.cars.length;
    }
    return sum;
}, 0);
console.log(userCarsAmount);
// Проверка на наличие образования
var checkEducation = function (arr, education) {
    var a = arr.filter(function (item) { return item.hasEducation === education; }).map(function (item) { return item.name; }).join(', ');
    if (education) {
        return "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0435\u0441\u0442\u044C \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ".concat(a);
    }
    else {
        return "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0435\u0442 \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ".concat(a);
    }
};
console.log(checkEducation(users, true));
console.log(checkEducation(users, false));
// Проверка на наличие животных
var checkAnimals = function (arr, animal) {
    var a = arr.filter(function (item) {
        if (animal) {
            return item.animals !== undefined;
        }
        else {
            return item.animals === undefined;
        }
    }).map(function (item) { return item.name; }).join(', ');
    if (animal) {
        return "\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u0435\u0441\u0442\u044C \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ".concat(a);
    }
    else {
        return "\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u043D\u0435\u0442 \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ".concat(a);
    }
};
console.log(checkAnimals(users, true));
console.log(checkAnimals(users, false));
//Названия марок автомобилей
var carBrands = function (arr) {
    var a = [];
    arr.forEach(function (item) {
        if (item.cars) {
            a.push("\u0423 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ".concat(item.name, " \u0435\u0441\u0442\u044C \u043C\u0430\u0448\u0438\u043D\u044B: ").concat(item.cars.join(', ')));
        }
        else {
            a.push("\u0423 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ".concat(item.name, " \u043D\u0435\u0442 \u043C\u0430\u0448\u0438\u043D"));
        }
    });
    return a.join('\n');
};
console.log(carBrands(users));
