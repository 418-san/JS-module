// Создать шаблон объектов «Пользователь».
// Метод преобразования к строке выводит имя пользователя.
// Два фабричных метода:
// - «Создать анонимного пользователя» не получает аргументов,
// в качества имя пользователя устанавливает «Аноним».
// - «Создать пользователя из данных» в качества аргументов
// получает объект с именем и возрастом пользователя.

function User(name) {
    this.name = name;
    this.toString = function () {
        return `Имя: ${this.name}`;
    };
}

User.Anonim = function () {
    let user = new User('Аноним');
    return user;
};

User.Data = function (data) {
    let user = new User();
    user.name = data.name;
    user.age = data.age;
    user.toString = function () {
        return `Имя: ${this.name}. Возраст: ${this.age}`
    };
    return user;
};

let a = new User.Anonim();
console.log(a.toString());

let b = new User.Data( {name: 'Joe', age: 30} );
console.log(b.toString());


