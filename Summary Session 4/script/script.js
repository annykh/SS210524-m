// let result = prompt('Enter your name');

// Задание: Написать программу, которая запрашивает у пользователя Имя, Фамилию, Возраст и выводит в консоль строку 
// “Hello, my name is UserName UserSurname. I’m UserAge”. 
// Для вывода использовать два варианта: конкатенация и интерполяция.

// let userName = prompt('Enter your name');
// let userSurname = prompt('Enter your surname');
// let userAge = prompt('Enter your age');

// console.log("Hello, my name is " + userName + " " + userSurname + ". I'm " + userAge + ".");

// console.log(`Hello, my name is ${userName} ${userSurname}. I'm ${userAge}.`);

// Задание : Написать программу, которая считывает два числа (объявляем две переменные (a b) и записываем туда результат работы двух вызовов prompt) и выводит их разницу, сумму и произведение 
// (“Разность чисел a и b равна sub, сумма чисел a и b равна sum, произведение чисел a и b равно mult”)

// let a = +prompt('enter the first number');
// let b = +prompt('enter the second number');

// console.log(`Разность чисел ${a} и ${b} равна ${a-b}, сумма чисел ${a} и ${b} равна ${a+b}, произведение чисел ${a} и ${b} равно ${a*b}`);

// if
// else if
// else


// Если число положительное или делится на 3 без остатка, выводим 'true'
// Если нет выводим 'false'

// let num = +prompt('enter the number');

// if(num > 0 || num % 3 == 0){
//     console.log('true');
// }
// else{
//     console.log('false');
// }

// Если число положительное и делится на 3 без остатка, выводим 'true'
// Если нет выводим 'false'

// let num1 = +prompt('enter the number');

// if(num1 > 0 && num1 % 3 == 0){
//     console.log('true');
// }
// else{
//     console.log('false');
// }

// let array = ['value1', 'value2', 'value3'];

// console.log(array[0]);

// array.push('value4');
// array.pop();

// array.shift();
// array.unshift('value0');

// console.log(array.length); // длина массива

// индекс последнего элемента
// array.lenght - 1

// let i = 0;
// i=i+1
// i++
// ++

// i=i-1
// i--
// --

// let fruits = ['Apple', 'Banana', 'Orange', 'Avocado', 'Pineapple'];

// // console.log(fruits.length);
// // console.log(fruits[1]); //Banana
// // console.log(fruits[fruits.length-1]); //Pineapple
// // fruits.push('Strawberry');
// // fruits.pop();
// // fruits.unshift('Mango');
// // fruits.shift();

// // splice(start, deleteCount, elem1, elem2);

// // Удалить 2 элемета из массива начиная со второго
// fruits.splice(1, 2);

// // Добаить Pear и Berries после первого элемента
// fruits.splice(1, 0, 'Pear', 'Berries');

// // Заменить первые два элемента на 'Mandarin', 'Orange'
// fruits.splice(0, 2, 'Mandarin', 'Orange');

// // Добавить три фрукта apple, kiwi, coconut после второго элемента
// fruits.splice(2, 0, 'Apple', 'Kiwi', 'Coconut');

// // Удалить четвертый элемент
// fruits.splice(3, 1);

// // Заменить 3 и 4 элемент на Pomegrante, Lime
// fruits.splice(2, 2, 'Pomegrante', 'Lime');

// console.log(fruits);

// Вывести в консоль все фрукты из массива fruits

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// Есть массив из чисел:
let numbers = [1, 4, 2, 0, -12, 5, 23, -4, 0, -1, -6, 9];

// Вывести только положительные числа массива

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 0){
//         console.log(numbers[i]);
//     }
// }

// Вывести все нечетные элементы массива

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 !== 0){
//         console.log(numbers[i]);
//     }
// }


// Найти сумму всех элементов массива

// let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3];

// let sum = 0;

// sum = sum + numbers[0]; // 0 + 1
// sum = sum + numbers[1]; // 1 + 4
// sum = sum + numbers[2]; // 5 + 2

// for(let i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i];
//     console.log(sum);
// }

// console.log(sum);

// Найти сумму положительных чисел массива
let pos_sum = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        pos_sum = pos_sum + numbers[i];
    }
}

console.log(pos_sum);
