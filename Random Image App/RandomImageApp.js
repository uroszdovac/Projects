var but = document.querySelector('#btn');
var img = document.querySelector('#image')

but.addEventListener('click', function(){
   
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var url = JSON.parse(XHR.responseText).message;
            img.src = url;
        }
    }
    
    XHR.open('get', 'https://dog.ceo/api/breeds/image/random');
    XHR.send();
    
    
})