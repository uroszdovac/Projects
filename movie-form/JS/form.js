var createMovieButton = document.querySelector("#createMovie");
var titleOfMovie = document.querySelector("#title");
var lengthOfMovie = document.querySelector("#length");
var genreOfMovie = document.querySelector("#genre");
var createdMoviesList = document.querySelector("#createdMoviesList");
var error = document.querySelector("#error");
var movieSelectList = document.querySelector("#movieSelectList");
var createProgramButton = document.querySelector("#createProgram");
var dateInput = document.querySelector("#date");
var dateError = document.querySelector("#dateError");
var programsList = document.querySelector("#programsList");
var addMovieToProgramButton = document.querySelector("#addMovieToProgram");
var programSelect = document.querySelector("#programSelect");
// var option = document.querySelectorAll('option');
// console.log(option)

var listOfMovies = [];
var listOfPrograms = [];

createMovieButton.addEventListener("click", function() {
  if (titleOfMovie.value === "" || lengthOfMovie.value === "" || genreOfMovie.value === "-") {
    error.textContent = "All fields are required";
  } else {
    var movie = new Movie(titleOfMovie.value, lengthOfMovie.value, genreOfMovie.value);
    var listItem = document.createElement("li");
    var text = document.createTextNode(movie.getData());
    listItem.appendChild(text);
    createdMoviesList.appendChild(listItem);
    var movieItem = document.createElement("option");
    var index = listOfMovies.push(movie) - 1;
    movieItem.setAttribute('value', index);
    var movieItemTitle = document.createTextNode(movie.title);
    movieItem.appendChild(movieItemTitle);
    movieSelectList.appendChild(movieItem);
    error.textContent = "";
  }

  titleOfMovie.value = "";
  lengthOfMovie.value = "";
  genreOfMovie.value = "-";
});

createProgramButton.addEventListener("click", function() {
  if (dateInput.value === "") {
    dateError.textContent = "Please select date";
  } else {
    var program = new Program(dateInput.value);
    var index = listOfPrograms.push(program) - 1;
    var programItem = document.createElement("li");
    programItem.setAttribute('value', index)
    var programDuration;
    }
    if(program.lengthOfAllMovies){
        programDuration = program.lengthOfAllMovies;
    }else{
        programDuration = 0;
    }

    var programItemString = document.createTextNode(program.getProgramInfo());
    programItem.appendChild(programItemString);
    programsList.appendChild(programItem);

    var programItemOption = document.createElement("option");
    
    programItemOption.setAttribute('value', index)
    var programItemString1 = document.createTextNode(program.dateString + ", program duration: ");
    programItemOption.appendChild(programItemString1);
    programSelect.appendChild(programItemOption);

    dateError.textContent = "";
    dateInput.value = "";
  
});

addMovieToProgramButton.addEventListener("click", function() {
    var movieIndex = movieSelectList.value;
    var programIndex = programSelect.value;
    var programUListLi = document.querySelectorAll('#programsList li');
    // console.log(programUListLi);
    
    
    
    var oldProgram = listOfPrograms[programIndex].getProgramInfo();
    // console.log(oldProgram);
    
    listOfPrograms[programIndex].addMovie(listOfMovies[movieIndex]);
    
    console.log(listOfPrograms[programIndex]);
    
    
    programUListLi.forEach(function(li){

        if(li.textContent === oldProgram){
            li.textContent = listOfPrograms[programIndex].getProgramInfo();

            console.log('bla');
            
            
        }
    })
    
    

    
            
 
});


