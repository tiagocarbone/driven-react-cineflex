import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Succes(props) {

    console.log(props.filmTitle)
    console.log(props.filmDate)
    console.log(props.filmHour)
    console.log(props.seatNumbers)
    const navigate = useNavigate()


    function endOrder() {
        props.setSeatNumbers([])
        navigate("/")
    }

    return (
        <Container>
            <H1>Pedido Finalizado</H1>


            <ContainerMovieInfo>
                <H2>Filme e Sessão</H2>
                <hr />
                    <p>{props.filmTitle}</p>
                    <p>{props.filmDate}</p>
                    <p>{props.filmHour}</p>

                    <H2>Ingressos</H2>
                    <hr />
                    {props.seatNumbers.map((number) => (
                        <p>Assento {number}</p>
                    ))}

                    <H2>Comprador(a)</H2>
                    <hr />
                    <p> CPF: {props.clientCPF}</p>
                    <p>Nome: {props.clientName}</p>

            </ContainerMovieInfo>


            <Button onClick={() => endOrder()} >Voltar para tela inicial</Button>


        </Container>
    )
}


const Container = styled.div`

background-color: #000000f0;
height: 658px;
`

const ContainerMovieInfo = styled.div`
    background: #2B2D36;
    width: 88%;
    margin: auto;
    border-radius: 10px;
    padding-bottom: 15px;
    

    p{
        color: white;
        font-family: Sarala;
font-size: 20px;
font-weight: 400;
line-height: 32.61px;
letter-spacing: 0.04em;


    }

    p, h2{
        padding-left: 20px;
    }
    hr{
        border: 1px solid #4E5A65;
        width: 90%;
    }

`


const Button = styled.div `
    color: white;
    text-align: center;
    height: 42px;
    background-color: #EE897F;
    font-family: "Sarala";
font-size: 18px;
font-weight: 700;
line-height: 29.35px;
letter-spacing: 0.04em;
display: flex;
border-radius: 10px;
justify-content: center;
align-items: center;
width: 88%;
margin-left: 22px;
margin-top: 20px;
border-radius: 10px;

`

const H1 = styled.h1`
    font-family: "Sarala";
font-size: 24px;
font-weight: 400;
line-height: 39.13px;
letter-spacing: 0.04em;
text-align: center;
color: #9DB899;
padding-top:20px;
padding-bottom:20px;

`

const H2 = styled.h2 `
    font-family: "Sarala";
font-size: 22px;
font-weight: 700;
line-height: 35.87px;
letter-spacing: 0.04em;
text-align: left;
color: #EE897F;
padding-top: 15px;
`