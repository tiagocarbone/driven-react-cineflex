import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function SessionDay(props) {
    const [sessionDays, setSessionDays] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${props.idFilme}/showtimes`)
            .then((response) => setSessionDays(response.data.days))
            .catch((error) => console.error("Erro ao buscar filmes:", error))
    }, [])


    const selectedDay = sessionDays.find((day) => day.id === props.dayId)
    console.log("selected day", selectedDay)
    return (
        <>
           
            <Container>

                <H2>{props.weekday}, {props.date}  </H2>
                <hr />

                <ContainerHours  >
                    {selectedDay && selectedDay.showtimes.map((showtime) => (
                        <LinkHour to={`/assentos/${showtime.id}`} key={showtime.id} >{showtime.name}  </LinkHour>
                    ))}
                </ContainerHours>
            </Container>
        </>
    )
}

const Container = styled.div`
    margin: auto;
    width: 90%;
    margin-bottom: 20px;
    padding-bottom: 5px;
    padding-top: 5px;
    
    background-color: #2B2D36;



`;

const H2 = styled.h2`
  font-family: "Sarala", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding-top: 10px;
  color: white;
    padding-bottom: 10px;


`;



const ContainerHours = styled.div`
  
    display: flex;
    justify-content: space-around;
    


`;


const LinkHour = styled(Link)`
      padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-bottom: 6px;
        margin-top: 5px;
        border: 2px solid #EE897F;
        font-family: "Sarala", sans-serif;
        font-family: Sarala;
        font-size: 16px;
        font-weight: 400;
        line-height: 26.09px;
        text-align: center;
        color: #EE897F;
        text-decoration: none;
`
