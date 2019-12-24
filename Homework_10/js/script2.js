// Создать шаблон объектов «Человек».
// Свойства «Имя», «Возраст», «Пол», «Интересы».
// Метод преобразования к строке вида: «Человек:
// Иван. Возраст: 25 лет. Пол: м. Интересы:
// музыка, программирование.»
// Создать шаблон объектов «Студент».
// Свойства от наследованные от шаблона объектов
// «Человек» и добавить «Институт».
// Переопределить метод преобразования к строке
// вида: «Студент: Иван. Возраст: 25 лет. Пол: м.
// Интересы: музыка, программирование.
// Обучается в ИТМО.»

function Human(name, age, sex, hobby) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hobby = hobby;
    this.toString = () => (`Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.sex} Интересы: ${this.hobby.toString()}.`);
}

let human = new Human('Иван', '25 лет', 'м.', ['музыка, программирование']);
console.log(human.toString());

function Student(name, age, sex, hobby, university) {
    Human.call(this, name, age, sex, hobby);
    this.university = university;
    this.toString = () => (`Студент: ${this.name}. Возраст: ${this.age}. Пол: ${this.sex} Интересы: ${this.hobby.toString()}. Обучается в ${this.university}.`);
}

let student = new Student('Иван', '25 лет', 'м.', ['музыка, программирование'], 'ИТМО');
console.log(student.toString());