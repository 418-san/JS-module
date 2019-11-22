"use strict"

// 1_task
let s_area = parseInt( (10 * 100) + 'm2' );
let s_1gr = parseInt( (15 * 25) + 'm2' );
let gr_amount = parseInt(s_area / s_1gr);
console.log(gr_amount);
let s_gr = gr_amount * s_1gr;
console.log(s_gr);
let s_free = s_area - s_gr;
console.log(s_free + 'm2');

// 2_task
let sbig_ellipse = parseInt(15 + 'dm2');
let ssmall_ellipse = parseInt( (600 / 100) + 'dm2' );
let sring = sbig_ellipse - ssmall_ellipse;
console.log(sring + 'dm2');

// 3_task
function popBox () 
{
    x = confirm( Math.min(9, 25, 13) ); 

    if (x == true )
    {
        document.write('Вы нажали ок');
    }
}
// 4_ task
let x = 10;
let m = Math.abs(x - '30');
let n = Math.abs(x - '-1');
let res = ( m < n ) ? "m ближе к 10" :
    ( m > n ) ? "n ближе к 10" :
    '';
console.log(res);