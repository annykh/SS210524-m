// Function
// showMessage('Tom'); //Hello Tom
// showMessage(user_name); //Cannot access 'user_name' before initialization

// let user_name = 'John';

// // showMessage(user_name); //Hello John

// function showMessage(name){
//     console.log(`Hello ${name}`);
// }

// showMessage(user_name); //Hello John

//example 1
// function showMessage1(){
//     let first_name = 'Bob';
//     console.log(`Hello ${first_name}`);
// }

// showMessage1(); // Hello Bob 

//example 2
// let first_name = 'Bob';

// function showMessage1(){
//     console.log(`Hello ${first_name}`);
// }

// showMessage1(); // Hello Bob 

//example 3
// let first_name = 'Bob';

// function showMessage1(){
//     let first_name = 'Tom';
//     console.log(`Hello ${first_name}`);
// }

// showMessage1(); // Hello Tom 

// Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// function getResult(num1, num2){
//     if(num1>num2){
//         return 1;
//     }
//     else if(num1<num2){
//         return -1;
//     }
//     else{
//         return 0;
//     }
// }

// console.log(getResult(5, 8)); //-1
// console.log(getResult(10, 2)); //1
// console.log(getResult(3, 3)); //0

// let a = prompt('enter the first number');
// let b = prompt('enter the second number');
// console.log(getResult(a, b));

// return (first_name+ ' ' +
//     last_name + ' ' + age
// )


// В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар. 
// Пример массива

// let arr = [
//     {
//         id: 1,
//         title: "bicycle",
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: "roller-skates",
//         price: 15000,
//         discount: 5
//     },
//     {
//         id: 3,
//         title: "Kick scooter",
//         price: 10000,
//         discount: 30
//     },
//     {
//         id: 4,
//         title: "skis",
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 5,
//         title: "skate",
//         price: 10000,
//         discount: 0
// }
// ];

// Написать цикл, который выводит только названия товаров.
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i].title);
// }


// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
// bicycle (45000)

// console.log(`${arr[0].title} (${arr[0].price})`);

// for(let i = 0; i < arr.length; i++){
//     console.log(`${arr[i].title} (${arr[i].price})`);
//     // console.log(arr[i].title + ' (' + arr[i].price + ')');
// }

// if(Условие){
//     действие
// }
// else if(Условие){
//     действие
// }
// else{
//     действие
// }

// Испольуя цикл вывести все однозначные положительные числа
// 1-9(вкл.)

// for (let i = 1; i <= 9 ; i++ ) {
//     console.log(i);
// }

// Вывести все двузначные положительные числа, которые делятся на 3 без остатка.
// 10-100(не вкл.)
// 12 15 18 21 24...99

// for(let num = 10; num < 100; num++){
//     if(num % 3 === 0){
//         console.log(num);
//     }
// }

// Есть массив:
// let numbers = [12, 0, -5, -23, 6, 34, 58, 2, 70, 0, -4, 7];

// Вывести из массива все положительные четные числа

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 0 && numbers[i]%2 == 0){
//         console.log(numbers[i]);
//     }
// }

// Дан массив numbers. Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

// let numbers_squared = [144, 0, 25,  ....];

// Создание пустого массива
// let numbers_squared = [];

// for(let i = 0; i < numbers.length; i++){
//     // Вывод всех элементов массива в квадрате
//     // console.log(numbers[i]**2);
//     numbers_squared.push(numbers[i] ** 2);
// }

// console.log(numbers_squared);

// Дан массив numbers. Сформировать новый массив even_numbers и передать в него все четные элементы из массива numbers

// let even_numbers = [];

// // for(let i = 0 ; i < numbers.length; i++){
// //     if(numbers[i] % 2 == 0){
// //         even_numbers.push(numbers[i]);
// //     }
// // }

// console.log(even_numbers);


// Написать функцию, получающую на вход два числа. 
// Если оба числа чётные - функция возвращает их произведение. 
// Если оба числа нечётные - функция возвращает их сумму. 
// Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

// function numbers_Two(num1, num2) {
//     if (num1 % 2 == 0 && num2 % 2 == 0) {
//         return num1 * num2;
//     }
//     else if (num1 % 2 != 0 && num2 % 2 != 0) {
//         return num1 + num2;
//     }
//     // else if (num1%2==0 && num2%2!=0){
//     //     return num2;
//     // }
//     // else{
//     //     return num1;
//     // }

//     // //    v2
//     else {
//         if (num1 % 2 != 0) {
//             return num1;
//         }
//         else {
//             return num2;
//         }
//     }
// }

// let num1 = prompt('enter the number');
// let num2 = prompt('enter the number');

// console.log(numbers_Two(num1, num2));

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа больше определенного порога(15).

let numbers1 = [12, 0, -5, -23, 6, 34, 58, 2, 70, 0, -4, 7];

function getNewArray(numbers){
    let new_array = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 15){
            new_array.push(numbers[i])
        }
    }
    return new_array;
}

console.log(getNewArray(numbers1));
