const stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let isShopOpen = true;

let order = (work, time) => {
    return new Promise((resolve, reject) => {
        if(isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time)
        }
        else {
            reject(reject(console.log("Our shop is closed.")));
        }
    });
 };


// The work parameter is a callback that executes in the order function.
// Passes an anonymous function as a work parameter.
// .catch() only works when Promise is rejected.
// .finally() works when Promise is Resolved or Rejected.
order(() => console.log(`${stocks.fruits[1]} was cut.`), 2000)
.then(() => {
    return order(() => console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]}.`), 2000)
})
.then(() => {
    return order(() => console.log(`Started the machine.`), 1000)
})
.then(() => {
    return order(() => console.log(`Selected ${stocks.holder[0]}`), 2000)
})
.then(() => {
    return order(() => console.log(`Selected ${stocks.toppings[0]}`), 3000)
})
.then(() => {
    return order(() => console.log(`Ice Cream is Served!`), 2000)
})
.catch(() => {
    console.log("Customer left.");
})
.finally(() => {
    console.log("Day ended, shop is closed.");
})