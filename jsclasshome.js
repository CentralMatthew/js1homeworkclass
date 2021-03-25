//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
const str = 'Привет';
const num = 123;
const flag = true;
const txt = 'true';

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);


// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);


// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height), шириной 10см (переменная width), значение площади должно хранится в числовой переменной
const width = 23;
const height = 10;
s = width * height;
console.log(parseInt(s) + 'см^2');

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v.
const heightC = 10;
const dC = 4;
r = dC / 2;
v = 3.14 * r * r * heightC;
console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n = 3;
let m = 4;
k = Math.pow(n, 2) + Math.pow(m, 2)
result = Math.sqrt(k);
console.log(result);

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str11 = 'Hello world';
// document.write(str11);
// // alert(str1);
// console.log(str11);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
let userName = 'Жалівців Матвій Євгенійович';
let userAge = 19;
let userHobby = 'Програмування\nЧитання\nЇзда на велосипеді';

// alert(userName + '\n' + userAge + '\n' + userHobby);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.Вывести в документ содержимое переменной concatenation спомощью document.write
let str1 = 'Кто';
let str2 = 'ты';
let str3 = 'такой?'
concatenation = (`${str1} ${str2} ${str3}`);
document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str5 = "20";
// let a = 5;
// document.write(str5 + a + "<br/>"); - 205 до строки додається числове значення
// document.write(str5 - a + "<br/>"); - 15
// document.write(str5 * "2" + "<br/>"); - 40
// document.write(str5 / 2 + "<br/>"); - 10

//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14")); - 3
// console.log(parseInt("-7.875")); - -7
// console.log(parseInt("435")); - 435
// console.log(parseInt("Вася")); - NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str6 = prompt("Enter something", "ho-ho")
// console.log(str6);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let num1 = +prompt('Введіть число x: ');
// let num2 = +prompt('Введіть число y: ');
// z = num1 + num2;
// alert(z);


// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let userName1 = prompt('Введіть ваше імя');
// let userSurname = prompt('Введіть ваше прізвище');
// let userAge1 = prompt('Введіть вік');
//
// alert('Доброго вечора ' + userName1 + ' ' + userSurname + ' мої вітання, що вам ' + userAge);