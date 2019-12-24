// #1. Создать шаблон объектов «Товар».
// Свойства товара «Имя» и «Цена».
// Создать шаблон объектов «Корзина товаров».
// Приватные свойства объекта:
// - Массив товаров;
// - Количество товаров;
// - Сумма товаров.
// Методы объекта:
// - Добавить товар;
// - Вернуть сумму товара;
// - Вернуть количество товара.

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Basket() {
    let prods = [];
    let sumProd = 0;
    let quantity = 0;

    this.addProduct = function(product) {
        prods.push(product);
        sumProd += product.price;
        quantity++;
    };
    this.getSum = function() {
        return sumProd;
    };
    this.getQuantity = function() {
        return quantity;
    }
}

let product1 = new Product('product1', 25);
let product2 = new Product('product2', 50);
let product3 = new Product('product3', 100);

let basket = new Basket();
basket.addProduct(product1);
basket.addProduct(product2);
basket.addProduct(product3);
console.log(basket.getSum());
console.log(basket.getQuantity());