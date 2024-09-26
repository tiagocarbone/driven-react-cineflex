import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SessionDay from "./SessionDay"
import styled from "styled-components"


export default  function MovieSession(props){
    const {idFilme} = useParams()
    const [days, setDays] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        .then((response) => {
            setDays(response.data.days);
            props.setFilmTitle(response.data.title); 
        })
            .catch((error) => console.error("Erro ao buscar filmes:", error))
    }, [])

    

    return (
        <Container>
            <H1>Selecione o horário</H1>
        {days.map((day) => (
            <SessionDay key={day.id} 
            weekday={day.weekday} 
            idFilme={idFilme} 
            dayId={day.id} 
            days={days} 
            date={day.date} 
            filmTitle={props.filmTitle} 
            setFilmDate={props.setFilmDate}  
            setFilmHour={props.setFilmHour}
            />
        ))}
        </Container>
    )
}

const Container = styled.div`
    background-color: #000000f0;
    padding-top: 20px;
    padding-bottom: 5px;
    width: inherit;
    overflow: auto;
    height: 688px;
    
`;

const H1 = styled.h1`
font-family: "Sarala", sans-serif;
font-size: 24px;
font-weight: 400;
line-height: 39.13px;
letter-spacing: 0.04em;
text-align: center;
color: white;
padding-bottom: 10px;


`;