const Drinks = (data) => {
    let that = {};
    that.name = data.name;
    console.log(that,"drinks")
    return that;
}
const Coffee = (data) => {
    let that = Drinks(data);
    that.giveName = () => 'This is ' + that.name;
    console.log(that,"coffe")
    return that;
};

let firstCoffee = Coffee({name:'cappuccino'});
console.log(firstCoffee.giveName());