



/* This class about Array.*/

var shoppingCart = ['Alam','kayes', 'Jorina','Morjina'];

// console.log(`There are ${shoppingCart.length} ittems in the shopping cart`); /* এখানে ভেরিয়েবল এর নামের পাশে length প্রপার্টি টা  আরের মধ্যে কইটা আইটেম আছে টা জানতে ব্যাবহার করা হয়  */

// shoppingCart.push('Shavana');
// shoppingCart.push('kulsum');

// console.log(`There are ${shoppingCart.length} ittems in the shopping cart`);

// shoppingCart.push(null);/*এখানে  null টা এরকম ভেলু  */
// console.log(5 + null); /*এখানেও  null টা এরকম ভেলু  */

// console.log(shoppingCart[0]); /* অ্যারের এর পাশে [0] টা দিয়া ভিতরের প্রথম  আইটেম  গুলারে কল করা হয়। আইটেম গুলার ইনডেক্স নাম্বার শুরু হয় 0 দিয়া। অর্থাৎ প্রথম আইটেম এর ইনডেক্স নাম্বার 0 তার পরে 1,2,3,4,5.......   */
 
/*  সর্বশেষ  অ্যাড করা আইটেম টা যেভাবে দেখব*/

// console.log(`Recently added: ${shoppingCart[shoppingCart.length - 1]}`); /* length মোট আইটেম সংখ্যা আউট পুট দেই। আর মোট আইটেম সংখ্যা থেকে সর্বশেষ আইটেম এর ইনডেক্স  নাম্বার 1 কম থাকে।তাই সর্বশেষ length থাইকা 1 মাইনাস করা হয়েছে    */

/*  মোট আইটেম আর সর্বশেষ অ্যাড করা আইটেম দেখার জন্য  ফাংশন   */

// function cartDisplay(cart) {
//     console.log(`There are ${shoppingCart.length} ittems in the shopping cart`);
//     console.log(`Recently added: ${shoppingCart[shoppingCart.length - 1]}`); 
// }

// shoppingCart.push('Shavana');
// cartDisplay(shoppingCart);
// shoppingCart.push('kulsum');
// cartDisplay(shoppingCart);

/* return দিয়ে মোট আইটেম আর সর্বশেষ অ্যাড করা আইটেম দেখার জন্য  ফাংশন   */

// function cartDisplay(cart) {
//     var cartItem=cart.length;
//     var recentItem=cart[cart.length - 1];

//     return [cartItem , recentItem]; /* অ্যারে হিসাবে  return করা হয়েছে। তাই ফাংশন কল করার  সময় console.log এর ভিতর কল করতে হয়   */
// }

// shoppingCart.push('Shavana');
// console.log(cartDisplay(shoppingCart));
// shoppingCart.push('kulsum');
// console.log(cartDisplay(shoppingCart));


/* আইটেম ডিলিট করা */
// shoppingCart.pop(); /* pop মেথড টা লাস্ট এর একটা আইটেম ডিলিট করে দেই  */

// console.log(shoppingCart);

/* নির্দিষ্ট কোন একটা আইটেম ডিলিট  */
// var deleteItem = shoppingCart.indexOf('Jorina');  /* indexOf মেথড টা আইটেম এর ইনডেক্স নাম্বার আউটপুট দেই  */

// shoppingCart.splice(deleteItem , 1); /* splice মেথড টা দিয়া নির্দিষ্ট আইটেম ডিলিট করা হয়। এখানে deleteItem অর্থাৎ আইটেম এর ইনডেক্স নাম্বার বুজাচ্ছে, পরের 1 দ্বারা বুঝাছে ডিলিট করা হবে। আর যদি 0 থাকতো , তাহলে ডিলিট করা হবে না বুঝাইত   */

// console.log(shoppingCart);