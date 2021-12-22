const stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

const order = (fruitName, callProduction) => {
    setTimeout(() => {
        console.log(`Cut the fruit: ${stocks.fruits[fruitName]} was selected.`);
        callProduction();
    }, 2000)
};

const production = () => {
    setTimeout(() => {
        console.log("production has started.");
        setTimeout(() => {
            console.log("the fruit has been chopped.");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);
                setTimeout(() => {
                    console.log("the machine started.");
                    setTimeout(() => {
                        console.log(`place icecream in ${stocks.holder[0]}`);
                        setTimeout(() => {
                            console.log(`added ${stock.toppings[0]} to icecream`);
                            setTimeout(() => {
                                console.log("Ice Cream is served!");
                            })
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);  
    }, 0);
};

order(0, production);