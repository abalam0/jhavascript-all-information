


// function day (time){
//     if (time>=6 && time<12){
//         console.log('Morning');
//     }else if (time>=12 && time<=18){
//         console.log('Afternoon');
//     }else if (time>1 && time<6){
//         console.log('Night');
//     }else{
//         console.log('Invalide Time');
//     }
// }

// day(11);





// This class about Array.

var shoppingCart = ['Alam ','kayes', 'Jorina ','Morjina'];
console.log(`There are ${shoppingCart.length} ittems in the shopping cart`);

// shoppingCart.push('Shavana');
// shoppingCart.push('kulsum');
// shoppingCart.push('kabila');

// console.log(`There are ${shoppingCart.length} ittems in the shopping cart`);
// console.log(`Recently added: ${shoppingCart[shoppingCart.length - 1]}`);


// console.log(shoppingCart[3]);

// shoppingCart.push(null);
// console.log(5 + null);


// last iteam dekhar jonno function.


shoppingCart.push('Shavana');
newIteamAdd(shoppingCart);
shoppingCart.push('kulsum');
newIteamAdd(shoppingCart);
shoppingCart.push('kabila');
newIteamAdd(shoppingCart);

function newIteamAdd (cart){
    console.log(`There are ${shoppingCart.length} ittems in the shopping cart`);
    console.log(`Recently added: ${shoppingCart[shoppingCart.length - 1]}`);
}



// Removing element form array. (last element delete)
// shoppingCart.pop();
// shoppingCart.pop();
// console.log(shoppingCart);

// specific element delete.
var dletItem = shoppingCart.indexOf('Morjina');
shoppingCart.slice(dletItem, 1);
console.log(shoppingCart);