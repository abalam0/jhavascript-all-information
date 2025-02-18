

/* This class about function. */


// isCartEmpty();

// var shoppingCart='';


// function isCartEmpty (cart /* peramitar*/){
//     if(cart){
//         console.log('The cart is not empty');
//     }else{
//         console.log('The cart is empty');
//     }

//     console.log(cart)
// }

// shoppingCart='keya bat hey';
// isCartEmpty(shoppingCart  /* argument*/);

// shoppingCart='';
// isCartEmpty(shoppingCart);


/*function about a number is even or odd */

function evenOrodd (num){
    if (num % 2 === 0){
        console.log('Even');
    }else{
        console.log('Odd');
    }
}

evenOrodd(2229925043);

/* multiple parameter , multiple arguments*/

function addition (num1 , num2){
    return num1 + num2;
}

console.log(addition(45,40));



/* three parameter , two  arguments. (আর্গুমেন্ট থাইকা প্যারামিটার একটা বেশি থাকলে কি হবে?)*/

function addition2 (num1 , num2,num3){
    return num1 + num2 + num3;
}
console.log(addition2(45,40)); /* ফলাফল NAN আসবে। কারণ প্রথম দুইটা নাম্বার এর মান আছে কিন্তু তিন নাম্বার এর মান নাই যা undefind  দিবে আর দুইটা নাম্বার আর একটা undefind মিলে পুরোটা নাম্বার নয় বুজাবে মানে NAN দেখাবে */ 


/* three parameter , two  arguments.( নান যাতে না আসে টার জন্য করনীয়)*/

function addition2 (num1 , num2,num3 = 0){
    return num1 + num2 + num3;
}
console.log(addition2(45,40,80)) ;/* এখানে যখন  num3 আর্গুমেন্ট থাকবে না অর্থাৎ num3 এর মান থাকবে না তখন সে তার মান (০) নিবে আর আর্গুমেন্ট থাকলে ঐ আর্গুমেন্ট এর মানটাই নিবে।   */



