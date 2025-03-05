
/* this class  about Loop */

/* start লুপ দিয়া অ্যাঁরে আইটেম কে কল  */

// var shoppingCart = ['Alam','kayes', 'Jorina','Morjina'];


// shoppingCart.push('Shavana');
// shoppingCart.push('kulsum');

// for (var i = 0; i < shoppingCart.length; i++){
//   console.log(`${i + 1}. ${shoppingCart[i]}`);
// }

/* end লুপ দিয়া অ্যাঁরে আইটেম কে কল  */


/* Start অ্যারের আইটেম গুলোকে নিচের মতো করে আউট পুট করানো।
   Product Name: Ator 
   Product Price:75     */


// var shoppingCart = [
//   'Tasbee',
//   180,
//   7,
//   'Javascript Book',  /* name । এই আইটেম শুরু হইছে 0 থাইকা । আর প্রতিবার তিন আইটেম এ  name  পাউয়া যাই  */
//    375,               /* price। এই আইটেম শুরু হইছে 1 থাইকা ।  আর প্রতিবার তিন আইটেম এ  price পাউয়া যাই  */
//    25,                /* discountএই আইটেম শুরু হইছে 2 থাইকা ।  আর প্রতিবার তিন আইটেম এ  discount পাউয়া যাই  */
//    'Calculator',      /* name   */
//    1020,              /* price */
//    5,                 /* discount */
//    'Ator',            /* name   */
//    75,                /* price */
//    12,                /* discount */
// ]  



// for ( var i = 0; i < shoppingCart.length; i = i + 3){
//   console.log(`  Product Name: ${shoppingCart[i]}  `);   
//   console.log(`  Base Price:   ${shoppingCart[i+1]} `);
//   console.log(`  Dscount:      ${shoppingCart[i+2]} `);
//   console.log(`  Final Price:  ${shoppingCart[i+1] - (shoppingCart[i+2] * shoppingCart[i+1] /100)  } `);

// }

/* End অ্যারের আইটেম গুলোকে উপরের মতো করে আউটপুট করানো। */

/* Start of object  */

var productOne ={ /* second ব্রাকেট এর মধ্যে object লেখা হয়  */
  productName:'Tasbee', /*  productName , Tasbee  কে  productOne এর যথাক্রমে kay , value বলা হয়।   */
  basePrice:120,
  discount:7,
  totalReview:999,
  rating:4.9,
}
var productTwo ={
  productName:'Javascript',
  basePrice:280,
  discount:10,
  totalReview:15,
  rating:4.9,
}
var productThree ={
  productName:'Calculetor',
  basePrice:480,
  discount:10,
  totalReview:9,
  rating:2.9,
}
var productFour ={
  productName:'Ator',
  basePrice:100,
  discount:7,
  totalReview:12,
  rating:2.9,
}

// console.log(productOne.productName) /* variable এর নামের সাথে ডট দিয়া কিনেইম দিতে হয়।  */
// console.log(productOne.basePrice);

/* Output1: Product , Base Price , Discount , Qunt , Price After Discount 
   Output2: Total Qty , Total Price 
   এই দুইটা আউট পুট দেখাতে হবে। 
*/

var shoppingCart = [productOne,1 , productTwo,2 , productThree,3 , productFour,8,];

var count = 1;
var totalQty = 0;
var totalPrice = 0;

for (var i =0; i< shoppingCart.length; i = i + 2 ){
  console.log(`${count}.  Product Name: ${shoppingCart[i].productName} 
  | Base Price: ${shoppingCart[i].basePrice}  
  | Discount: ${shoppingCart[i].discount}%
  | Quantity : ${shoppingCart[i + 1]} 
  | After Discount Price: ${shoppingCart[i].basePrice - (shoppingCart[i].discount * shoppingCart[i].basePrice) / 100}
  `);
  count++;

  totalQty =totalQty + shoppingCart[i+1];
  totalPrice = totalPrice + (shoppingCart[i].basePrice - (shoppingCart[i].discount * shoppingCart[i].basePrice) / 100) * shoppingCart[i+1];
  
}

console.log(`${count} Total Item Purchased: ${totalQty} , Total Price: ${totalPrice}`);
