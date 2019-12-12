// 'use strict';
//  task 1
// Реализовать функцию foo:
// let a = {
// name: 'static',
// count: 0
// }
// console.log(foo(a, 'count', 10)); /* В консоль выведет: [{name:'static', count:0},
// {name:'static', count:1}, ..., {name:'static', count:9}] */

let a = {
    name: 'static',
    count: 0
}
console.log(foo(a, 'count', 10));


function foo (obj, j, count) {
    let result = [];
    for (let i = obj.count; i < count; i++){
        Obj = Object.assign({},obj);
        Obj[j] += i;
        result.push(Obj);
    }
    return result;
}

//  task 2
// Сделайте функцию, каждый вызов который будет генерировать одно случайное число
// от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен
// хранится массив чисел, которые уже были сгенерированы функцией.
let min = 1,
    max = 100;

function getRunnum () {
    let result = [];
    
    return function getNumInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        
    }
}

console.log(getRunnum());

//  task 3
// Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод объекта выводящий в консоль биографическую справку в виде, например:
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.
let student = {
    Name: 'Иван',
    Surname: 'Петров',
    Age: '21 год',
    Hobby: ['программирование', 'музыка', 'аниме'],
    Studies: 'Учится в ИТМО',

    getOwnObject () {
        console.log(`${this.Name} ${this.Surname}. ${this.Age}. Интересы: ${this.Hobby}. ${this.Studies}`);
    }
};

student.getOwnObject();


//  task 4
// Написать функцию вычисляющую факториал числа с использованием рекурсии.
// Факториал числа - это число, умноженное на себя минус один, затем на себя
// минус два и так далее, до единицы. Обозначается n!
// Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1
function writeN(n) { 
    return (n !== 1) ? n * writeN(n - 1) : 1;
}

console.log(writeN(3));

//  task 5
// Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию,
// определяющую порядок сортировки. Массив для тестирования:
// let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5},
// { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];

arr.sort(function(a, b) { return a.price - b.price; });

console.log(arr);