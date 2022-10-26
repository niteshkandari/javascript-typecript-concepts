const {performance} = require('perf_hooks');
const firstTime = performance.now();
function something(){
    const numbers = ["10", "20", 40, "40.67", [54]];
    const castedNumbers = numbers.map(Number);
};
something();
const secondTime = performance.now();

console.log(`the something function took ${secondTime - firstTime} milliseconds`);

//for ts
// import {performance, PerformanceObserver} from 'perf_hooks';

// const observer = new PerformanceObserver(items => items.getEntries().forEach((entry) => console.log(entry)));    
// observer.observe({entryTypes: ['measure']});

// performance.mark('start');
// performance.mark('stop');
// performance.measure('Measurement', 'start', 'stop');