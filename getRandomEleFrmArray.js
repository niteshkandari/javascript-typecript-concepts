const randomItem = (items)  => {
    const randomIndex = Math.floor(
        Math.random() * items.length
    );
    return items[randomIndex];
};

console.log(randomItem([1,32,14,23]));
