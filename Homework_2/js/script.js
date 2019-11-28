// 1 task
let month = parseInt(prompt ("Выберите месяц:") );
	
switch(month) {
    case 12:
	case 1:
    case 2:
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Лето");
		break;
    case 9:
    case 10:
    case 11:
		alert("Осень");
		break;
	default:
		alert("Неккоректная команда.");
}

// 2 task
let length = parseInt(prompt ("Выберите размерность:\n1-дециметр\n2-километр\n3-метр\n4-миллиметр\n5-сантиметр") );
let length_num = parseInt(prompt ("Введите длину") );

switch(length) {
    case 1:
        alert( (length_num * 0.1) + "m");
        break;
    case 2:
        alert( (length_num * 1000) + "m");
        break;
    case 3:
        alert ( (length_num * 1) + "m");
        break;
    case 4:
        alert( (length_num * 0.001) + "m");
        break;
    case 5:
        alert( (length_num * 0.01) + "m");
        break;
    default:
        alert("Неккоректная команда.");
}

// 3 task 
let num = parseInt(prompt ("Введите число") );

if (num === 0) {
    alert('нулевое число');
} else if (num >= 10 && num <= 99 ) {
    alert('положительное двузначное число'); //
} else if (num <= -10 && num >= -99 ) {
    alert('отрицательное двузначное число');
} else if (num >= 1 && num <= 9 ) {
    alert('положительное однозначное число'); //
} else if (num <= -1 && num >= -9 ) {
    alert('отрицательное однозначное число'); 
} else if (num >= 100 && num <= 999 ) {
    alert('положительное трехзначное число'); //
} else if (num <= -100 && num >= -999 ) {
    alert('отрицательное трехзначное число'); 
} else {
	alert("Неккоректная команда.");
}

// 4 task
let x = 100;

for (let i = 1; i <= x; i++) {
    if (i % 3 === 0) {
        console.log('Three');
    } else if (i % 5 === 0) {
        console.log('Five');
    } else if (i % 3 === 0 && i % 5 === 0 ) {
        console.log('ThreeFive');   
    } else { 
        console.log(i); 
    }
}