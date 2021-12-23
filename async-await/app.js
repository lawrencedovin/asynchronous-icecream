const stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let isShopOpen = true;

function order(work, time) {
    return new Promise((resolve, reject) => {
        if(isShopOpen) {
            setTimeout(() => {
                resolve(work())
            }, time);
        }
        else {
            reject(console.log("Shop is closed."));
        }
    })
}

async function kitchen() {
    try {
        await order(() => console.log(`${stocks.fruits[1]} was cut.`), 2000);
        await order(() => console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]}.`), 2000);
        await order(() => console.log("Started the machine."), 1000);
        await order(() => console.log(`Selected ${stocks.holder[0]}.`), 2000);
        await order(() => console.log(`Selected ${stocks.toppings[0]}.`), 3000);
        await order(() => console.log("Ice Cream is Served!"), 2000);
    }
    catch(error) {
        console.log("Customer left.", error);
    }
    finally {
        console.log("Day ended, shop is closed.")
    }
}

kitchen();