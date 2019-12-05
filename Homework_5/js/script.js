'use strict';
// 1 task 
// Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и возвращает true, если массивы равны и false, если не равны.
function compare(a, b) {
    if (!Array.isArray(a || b)){
        return false;
    }

    return (a.length == b.length)?true:false;
}

console.log( compare([7, 49, 11, 13], [5, 15, 25]) );

// 2 task 
// Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
// третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
// Функция возвращает массив, который содержит все числа из него, включая начальное и конечное.
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
function range(start, end, step = 1) {
    let result = [];
    for (let i = start; i <= end; i+= step){
        result.push(i);
    }
    return result;
}

console.log(range(1, 10, 2));

// 3 task 
// Построить объект студент со свойствами: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// Написать отдельную функцию, которой передается объект студент,
// а она выводит его содержимое.
let studentArr = {
    Name: 'Имя',
    Surname: 'Фамилия',
    Age: 'Возраст',
    Hobby: ['Интересы', ],
    Studies: 'Место обучения'
};

function showStudent(studentArr) {
    for (let [key, value] of Object.entries(studentArr)) {
        console.log(`${key}: ${value}`);
    }
}

showStudent(studentArr);
