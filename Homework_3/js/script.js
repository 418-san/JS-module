// 1 task
let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
let C = A.concat(B);

console.log(C);

// 2 task
let area = [1, null, 0, null, 1, null, null, null, null];
let value = [];

for (let i = 0; i < area.length; i++) {
    if (area[i] === 0) {
        value.push("0");
    } else if (area[i] === 1) {
        value.push("X");
    } else if (area[i] === null) {
        value.push("_");
    }
}

let desk = '<table border="1">';
for(let i = 0; i < value.length; i = i + 3) {
    desk += '<tr><td>'+value[i]+'</td><td>'+value[i + 1]+'</td><td>'+value[i + 2]+'</td></tr>';
}
document.write(`${desk}</table>`); 

// 3 task
arrNum =  [12,4,3,10,1,20];

for(let i = 0; i < arrNum.length-1; i++) { 
    for(let j = 0; j < arrNum.length - 1 - i; j++) {
        if(arrNum[j] > arrNum[j + 1]) {
            let temp = arrNum[j];
            arrNum[j] = arrNum[j + 1];
            arrNum[j + 1] = temp;
        }
    }    
}
arrNum.pop();
arrNum.shift();
console.log(arrNum);