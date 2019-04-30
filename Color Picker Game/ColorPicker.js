var rgbNum = document.querySelector('#rgbNum');
var header = document.querySelector('#header');
var squares = document.querySelectorAll('.square');
var tryAgain = document.querySelector('#tryAgain');
var newColorsBtn = document.querySelector('#newColors');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var randomColor;
var lengthOfSquares = 5;
var gameFinished = false;




function randomRGB(painted) {
    var rgb = '';
    var r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    rgb = r + ', ' + g + ', ' + b;
    painted.setAttribute('style', 'background-color: rgb(' + rgb + ' )');
}

function newGame() {

    for ( var i = 0; i <= lengthOfSquares; i++) {
        randomRGB(squares[i]);
       
        squares[i].addEventListener('click', function () {
            console.log(randomColor);
            
            var squareColor = this.getAttribute('style').split(':')[1];
            if (squareColor != randomColor && !gameFinished) {
                this.classList.add('hidden');
                tryAgain.textContent = 'Try Again!';
                tryAgain.classList.add('run');
                setTimeout(function () {
                    tryAgain.classList.remove('run');
                }, 500)
            } else {
                gameFinished = true;
                tryAgain.textContent = 'You made it!';
                tryAgain.classList.add('run');
                setTimeout(function () {
                    tryAgain.classList.remove('run');
                }, 500)
                for (var j = 0; j <= lengthOfSquares; j++) {
                    squares[j].style.backgroundColor = randomColor;
                    squares[j].classList.remove('hidden');

                }
                newColorsBtn.textContent = 'PLAY AGAIN?';
                header.style.backgroundColor = randomColor;
        }
        })
        


    }
}    

    function pickRandomColor(lengthOfSquares) {
        var randomColorString;
        var randomSquareIndex = Math.floor(Math.random() * lengthOfSquares + 1);
        randomColorString = squares[randomSquareIndex].getAttribute('style');
        randomColor = randomColorString.split(':')[1];
        rgbNum.textContent = randomColor.split('b')[1];
    }

    function newGame1() {
        newGame();
        pickRandomColor(lengthOfSquares);
    }

    newGame1();

    newColorsBtn.addEventListener('click', function () {
        newGame1();
        header.style.backgroundColor = 'rgb(60, 132, 203)';
        squares.forEach(function (square) {
            square.classList.remove('hidden');
        })
        tryAgain.textContent = '';
        newColorsBtn.textContent = 'NEW COLORS';
        gameFinished = false;        
    })

    easyBtn.addEventListener('click', function () {
        squares.forEach(function (square) {
            square.style.backgroundColor = 'rgb(100, 97, 97)';
            square.classList.remove('hidden');
        })
        lengthOfSquares = 2;
        tryAgain.textContent = '';        
        header.style.backgroundColor = 'rgb(60, 132, 203)';
        newGame1();
        newColorsBtn.textContent = 'NEW COLORS';
        gameFinished = false;
        this.classList.add('selected');
        hardBtn.classList.remove('selected');        
    })
    
    hardBtn.addEventListener('click', function () {
        squares.forEach(function (square) {
            square.style.backgroundColor = 'rgb(100, 97, 97)';
            square.classList.remove('hidden');
        })
        lengthOfSquares = 5;
        tryAgain.textContent = '';
        header.style.backgroundColor = 'rgb(60, 132, 203)';
        newGame1();
        newColorsBtn.textContent = 'NEW COLORS';
        gameFinished = false;
        this.classList.add('selected');
        easyBtn.classList.remove('selected');           
    })
