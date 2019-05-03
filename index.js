var express = require('express');
var app = express();

app.get('/recursiveFibonacci/:value', (req, res) => {
    let value = req.params.value;
    let data = recursiveFibonacci(value);
    res.json({ result: data });
});

app.get('/fibonacci/:value', (req, res) => {
    let value = req.params.value;
    console.log("fibonaccirequest:start");    
    let data = fibonacci(value);
    let datas = res.json({ result: data });
    console.log("fibonaccirequest:start:end", [{datas}]);    
    return datas
});

function recursiveFibonacci(number) {
    if(number < 2) {
        return number;
    } 
    let data = recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
    return data;
}

function fibonacci(number) {

    var a = 1,
        b = 0,
        temp;

    while (number >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        number--;
    }

    return b;
}

app.listen(3000)