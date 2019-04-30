var url = 'https://randomuser.me/api';

var btn = document.querySelector('#btn');
var userName = document.querySelector('#userName');
var image = document.querySelector('#userImg');
var nick = document.querySelector('#nick');
var email = document.querySelector('#email')
var city = document.querySelector('#city');

btn.addEventListener('click', function(){
    fetch(url)
    .then(handleError)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)

    function handleError(request){
        if(!request.ok){
            throw Error(request.status);
        }
        return request;
    }

    function parseJSON(response){
        return response.json().then(function(parsedData){
            return parsedData.results[0];
        });
    }

    function updateProfile(data){
        image.src = data.picture.medium;
        userName.textContent = data.name.first + ' ' + data.name.last ;
        nick.textContent = data.login.username;
        email.textContent = data.email;
        city.textContent = data.location.city;
    }

    function printError(error){
        console.log(error);
        
    }
})