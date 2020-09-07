import {people, movies, getById, getMovieById } from "./db"

const resolvers = {
    Query: {
        people: ()=>people,
        person: (_,{id})=>getById(id),
        movies: ()=>movies,
        movie: (_,{id})=>getMovieById(id),
        },
    Mutation:{
        addMovie:(_, {name, score}) =>addMovie(name, score)
        }
    } 

export default resolvers;