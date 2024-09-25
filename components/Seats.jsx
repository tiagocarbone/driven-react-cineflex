import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Seat from "./Seat";

export default function Seats() {

    const { idSessao } = useParams()
    const [seats, setSeats] = useState(null)
    const [seatsArray, setSeatsArray] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((response) => setSeats(response.data.seats))
            .catch((error) => console.error("Erro ao buscar filmes:", error))
    }, [])

    return (
        <>
            {!seats && <h1>Carregando...</h1>}

            {seats &&
                <Container  >
                    <H1>Selecione os assentos</H1>
                    <ContainerElements>
                        {seats.map((seat) => (
                                 <Seat key={seat.id} seatId={seat.id} isAvailable={seat.isAvailable} number={seat.name} seatsArray={seatsArray} setSeatsArray={setSeatsArray}/>
                        ))}
                    </ContainerElements>
                    <Hr />
                </Container>

            }
        </>
    );
}




const Container = styled.div`
  background-color: #2B2D36;;
  width: inherit;

    height: 713px;

`;

const Hr = styled.hr`
    
    width: 90%;


`;

const ContainerElements = styled.div`
display: flex;
flex-wrap: wrap;
gap: 5px;
align-items: center;
justify-content: center;
padding-top: 20px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
    
`







const H1 = styled.h1`
    font-family: Sarala;
font-size: 24px;
font-weight: 400;
line-height: 39.13px;
letter-spacing: 0.04em;
text-align: center;
color: white;
padding-top: 10px;


`