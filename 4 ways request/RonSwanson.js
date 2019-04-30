var xhrBtn = document.querySelector('#XHR');
var fetchBtn = document.querySelector('#Fetch');
var jQueryBtn = document.querySelector('#jQuery');
var axiosBtn = document.querySelector('#AXIOS');
var displayQuote = document.querySelector('#displayQuote');
var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

xhrBtn.addEventListener('click', function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);
            displayQuote.textContent = data;
        }
    }

    XHR.open('GET', url);
    XHR.send();
})

fetchBtn.addEventListener('click', function(){
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data[0]);
        
        displayQuote.textContent = data;
    })
})

jQueryBtn.addEventListener('click', function(){
    $.get(url)
    .done(function(res){
        displayQuote.textContent = res;
        
    })
})

axiosBtn.addEventListener('click', function(){
    axios(url)
    .then(function(res){
        console.log(res.data[0]);
        displayQuote.textContent = res.data;
    })
})