///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


 const summedPrice = cart.map((obj) => {return obj.price}).reduce((acc,currentPrice) => acc + currentPrice);
//console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal,couponValue,tax){
    cartTotal += (cartTotal * tax);
    return cartTotal - couponValue;
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer Properties;
    - DeliveryOption - We'll need to know where to ship the items to (bool)
    - PaymentOption - How the custom would pay, maybe through credit cards or points or cash (string)
    - Total cost of product - The cart has to reflect what is owed to the restaurant.(Number)
    - Discounts - The cart would show any amount or percentage reduction to total cost(Number)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customerObj = {
    delivery: true,
    payment: "Credit Card",    
    amountDue: 30,
    discount: 3
}

