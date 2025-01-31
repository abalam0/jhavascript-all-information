

// This class about function.


isCartEmpty();

var shoppingCart='';


function isCartEmpty (cart /* peramitar*/){
    if(cart){
        console.log('The cart is not empty');
    }else{
        console.log('The cart is empty');
    }

    console.log(cart)
}

shoppingCart='keya bat hey';
isCartEmpty(shoppingCart  /* argument*/);

shoppingCart='hai';
isCartEmpty(shoppingCart);


// function about a number is even or odd.

function evenOrodd (num){
    if (num % 2 === 0){
        console.log('Even');
    }else{
        console.log('Odd');
    }
}

evenOrodd(222992504);

// Single parameter , multiple arguments