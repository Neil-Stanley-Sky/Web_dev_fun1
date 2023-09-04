const movies = [
    { "title": "Jaws", "director": "Steven Spielberg", "year": "1975" },
    { "title": "Star Wars", "director": "George Lucas", "year": "1977" },
    { "title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018" },
    { "title": "Top Gun", "director": "Tony Scott", "year": "1986" },
    { "title": "Justice League", "director": "Zack Snyder", "year": "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail
// function findMovie(movieTitle) {
//     for (const movie of movies) {
//         if (movie.title === movieTitle) {
//             console.log(movie)
//         }
//     }

// Part 2 = Create a function to return a movie object
function returnMovie(movieTitle) {
    for (const movie of movies) {
        if (movie.title === movieTitle) {
            console.log(movie)
            return movie;
        }
        // console.log("Any text. Any text at all")
        console.log("Movie not Found")
    }
}
let myMovie = returnMovie("Avengers: Infinity War")
console.log("myMovie",myMovie);

console.log ("My favourite film is", myMovie.title, "made by", myMovie.director, "in", myMovie.year,)

let myOtherMovie=returnMovie("Thor: Ragnorok")
console.log(myOtherMovie)

function myMovieDetails(anyMovie){
    if (typeof anyMovie === 'object'){
        return "Found"
    }
    else{
        return anyMovie
    }
}

console.log (myMovieDetails(myOtherMovie))

console.log (myMovieDetails("Jaws"))
