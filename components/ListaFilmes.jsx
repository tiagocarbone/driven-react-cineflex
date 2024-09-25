import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Movie from "./Movie"
import { Link } from "react-router-dom"

export default function ListaFilmes() {

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then((response) => setMovies(response.data))
            .catch((error) => console.error("Erro ao buscar filmes:", error))

    }, [])

    const [movies, setMovies] = useState([])

    return (
        <Container>
            {movies.map((movie) => (
                <Link key={movie.id} to={`sessoes/${movie.id}`} >
                    <Movie url={movie.posterURL} title={movie.title} />
                </Link>
            ))}
        </Container>
    )
}

const Container = styled.div`
    background-color: #000000f0;
    height: 635px;
    display: flex;
    flex-wrap: wrap;
    width: inherit;
    align-items: center;
    justify-content: center;
    gap: 25px;
    overflow: auto;
 `
