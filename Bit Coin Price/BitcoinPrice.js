var priceSpan = document.querySelector('#price');
var btn = document.querySelector('#btn');
var usd = document.querySelector('#usd');
var gbp = document.querySelector('#gbp');
var eur = document.querySelector('#eur');
var currency = 'USD';


usd.addEventListener('click', function(){
    currency = 'USD';
});

gbp.addEventListener('click', function(){
    currency = 'GBP';
});

eur.addEventListener('click', function(){
    currency = 'EUR';
})

var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
        var price = JSON.parse(XHR.responseText).bpi[currency].rate_float;
        priceSpan.textContent = price.toFixed(2) + ' ' + currency;
    }
}

XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
XHR.send();



btn.addEventListener('click', function(){
    XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    XHR.send();
})