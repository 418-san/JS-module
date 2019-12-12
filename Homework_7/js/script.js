//  task_1
// Создать функцию которая выводит время в html и обновляет значения каждую секунду. Время выводить в формате чч:мм:cc, при этом часы, минуты и секунды отобразить разными цветами.

function getTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let time = document.getElementById('time');
    time.innerHTML = `<span style = 'color:blue'>${hours}</span> : <span style = 'color:orange'>${minutes}</span> : <span style = 'color:purple'>${seconds}</span>`;
}

getTime();
setInterval(getTime, 1000);



//  task_2
// // Дан массив с объектами, где каждый объект описывает товар: фото, артикул, описание и т.п.
// Сформировать функцию, которой передаётся массив товаров, и которая создаст и внесёт все
// необходимые html элементы, стили, и содержание для отображения всей информации о товарах.
let items = [
    {
        img: '../img/giga.jpg',
        name: 'Gigabyte Z390 GAMING SLI',
        desc: 'Поддерживает установку до четырех модулей оперативной памяти DDR4 суммарным объемом до 64 Гб (4х16 Гб). Может работать с двумя высокопроизводительными M.2 SSD накопителями работающими в режиме PCI-E 3.0 4x, имеет встроенный GbE-адаптер Intel и звуковую подсистему на топовом HDA-кодеке Realtek ALC1220-VB.',
        price: 9960
    },
    {
        img: '../img/msi.jpg',
        name: 'MSI Z390-A PRO',
        desc: 'Поддерживает установку до 128 Гб оперативной памяти (4х32Гб, до DDR4-4266). Предусмотрено подключение одного полноскоростного M.2 SSD накопителя (PCI-E 3.0 4x) и шести HDD/SSD-накопителей SATA 3 с возможностью организации RAID-массивов 0/1/5/10. Имеется разъем M.2 Key E для установки адаптера Intel Wi-Fi/Bluetooth. Передачу данных в кабельной сети Gigabit Ethernet обеспечивает контроллер Intel I219-V. Для подключения периферийных устройств имеются 14 портов USB, в том числе 2хUSB 3.2 Gen2.',
        price: 7450 
    }
];

function getItems(product) {
    let prdiv = document.createElement('div');
    document.body.insertBefore(prdiv, time.nextSibling);

    for(let i = 0; i < product.length; i++) {
        let Obj = document.createElement('div'),
            img = document.createElement('img'),
            name = document.createElement('h3'),
            desc = document.createElement('p'),
            price = document.createElement('span');
        prdiv.append(Obj);
        
        img.setAttribute('src', product[i].img);
        img.setAttribute('height', '200px');
        name.innerHTML = product[i].name;
        desc.innerHTML = product[i].desc;
        price.innerHTML = product[i].price + 'руб.';

        Obj.appendChild(img);
        Obj.appendChild(name);
        Obj.appendChild(desc);
        Obj.appendChild(price);
    }
}
getItems(items);

//  task_3
// Создать светофор (красный, желтый, зелёный). Переключать цвет у светофора через каждые 2 сек сверху вниз и снизу вверх.


/* пока еще не разобрался до конца  */


let allTables = document.getElementsByClassName("lights");
let table = allTables[0];
table.setAttribute("border", "1");

let row = table.insertRow(0);
let row1 = table.insertRow(1);
let row2 = table.insertRow(2);

row.innerHTML = 
    `<svg height='100' width='100'>
        <circle cx='50' cy='50' r='40'  fill='grey' />
    /<svg>`;
row1.innerHTML = 
    `<svg height='100' width='100'>
        <circle cx='50' cy='50' r='40'  fill='red' />
    /<svg>`;
row2.innerHTML = 
    `<svg height='100' width='100'>
        <circle cx='50' cy='50' r='40'  fill='yellow' />
    /<svg>`;
row3.innerHTML = 
    `<svg height='100' width='100'>
        <circle cx='50' cy='50' r='40'  fill='green' />
    /<svg>`;


// таймер
let i = 0;

function showColor () {
    alert ('');
    if (i++ < 10)
        setTimeout(showColor, 2000);
}

function changeCol() {
    let counter = 0;
    let j = 1;

    function skipCol() {
        counter = j + counter;
        for(let i = 0; i <= 3; i++){
            if(i === counter) {
                document.getElementsByTagName(`tbody`);
            }
        }
    }
}
