export const people = [
    {
        id:"1",
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id:"2",
        name: "Jisu",
        age: 18,
        gender: "female"
    },
    {
        id:"3",
        name: "Bob",
        age: 18,
        gender: "female"
    }
]

export let movies = [
    { 
        id: 0,
        name: "Star Wars",
        score: 1
    },
    {
        id:1,
        name: "Avengers -The new one",
        score: 8 
    },
    {
        id:2,
        name:"The Godfater",
        score: 12
    }
]

export const getById = id =>{
    const filteredPeople = people.filter(person=> person.id === String(id));
    return filteredPeople[0];
}


export const getMovies = () => movies;

export const getMovieById = id =>{
    const filteredMovie = movies.filter(movie=> movie.id === String(id));
    return folteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovie = movies.filter(movie => movie.id !== String(id));
    if(movies.length>cleanedMovie.length){
        movies = cleanedMovie
        return true;
    }else{
        return false;
    }

}

export const addMovie = (name, score)=>{
    const newMovie = {
        id: `${movies.length+1}`,
        name,
        score
    };
}