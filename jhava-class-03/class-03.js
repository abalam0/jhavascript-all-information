




var pamentmethod ='nagad';
var tutalamount= 5600;


if (pamentmethod === 'bikash') {
    if(tutalamount >= 5500) {
        console.log(" Congratuletion, you have got 100 taka cashback!"); 
    }
    else if(pamentmethod === 'bikash') {
        if (tutalamount >=500) {
            console.log(" Congratuletion, you have got 50 taka cashback!"); 
        }
    }
}else if (pamentmethod === 'nagad') {
    if(tutalamount >= 5500){
        console.log(" Congratuletion, you have got 100 taka cashback!"); 
    }
}else if (pamentmethod === 'visa') {
    if(tutalamount >= 5500){
        var discount = (5500*5)/5;
        if(discount<500){
            console.log("You have got ${discount} taka discount for using Visa Card!");
        }else {
            console.log("You have got 500 taka discount for using Visa Card!");
        }
    }else if (tutalamount >=1010){
        console.log("You have got 100 taka discount for using Visa Card!");
    }
}