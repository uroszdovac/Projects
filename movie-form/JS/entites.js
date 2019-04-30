// function Festival() {
//   this.listOflMovies = [];
//   this.listOfPrograms = [];
// }

function Movie(title, duration, genre) {
  this.title = title;
  this.duration = duration;
  this.genre = genre;
}

Movie.prototype.getData = function() {
  return (
    this.title +
    ", " +
    this.duration +
    "min, " +
    this.genre.charAt(0).toUpperCase() +
    this.genre.charAt(this.genre.length - 1).toUpperCase()
  );
};

function Program(date) {
  this.date = new Date(date);
  var dd = this.date.getDate();
  var mm = this.date.getMonth() + 1;
  var year = this.date.getFullYear();
  this.dateString = dd + ". " + mm + ". " + year;
  this.listOfMovies = [];
  this.lengthOfAllMovies = 0;
  this.addMovie = function(movie) {
    this.listOfMovies.push(movie);
    this.lengthOfAllMovies += parseInt(movie.duration);
  };
  this.getProgramInfo = function(){
    var dd = this.date.getDate();
    var mm = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var dateString = dd + ". " + mm + ". " + year;
//   console.log(dateString);

  return dateString + ", program duration: " + this.lengthOfAllMovies + ' min, ' + this.listOfMovies.length + ' movies' ;
  }
}

// Program.prototype.addMovie = function(movie){
//     this.listOfMovies.push(movie);
//     this.lengthOfAllMovies += parseInt(movie.length);
// }

Program.prototype.Info = function() {

     
  return this.dateString + " ," + " program duration:"

};
