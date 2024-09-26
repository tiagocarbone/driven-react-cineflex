import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Seat from "./Seat";


export default function Seats(props) {

    const { idSessao } = useParams()
    const [seats, setSeats] = useState(null)
    const [seatsArray, setSeatsArray] = useState([])
    const [textoNome, setTextoNome] = useState("")
    const [textoCpf, setTextoCpf] = useState("")
    const navigate = useNavigate()


    console.log(textoNome, textoCpf)
    
    function submitForm(e){
        e.preventDefault()
        if(seatsArray.length == 0){
            alert("selecione assentos por favor")
            return
        }

        const body = {
            ids: seatsArray, 
            name: textoNome, 
            cpf: textoCpf
        }

        props.setClientName(textoNome)
        props.setClientCPF(textoCpf)

        console.log(body)

        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)
            .then((res) => {
                alert("Operação concluída com sucesso")
                navigate("/sucesso")
            })

            .catch((err) => {
                console.error(err)
            })
                
    }

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
                            <Seat setSeatNumbers={props.setSeatNumbers} seatNumbers={props.seatNumbers} key={seat.id} seatId={seat.id} isAvailable={seat.isAvailable} number={seat.name} seatsArray={seatsArray} setSeatsArray={setSeatsArray} />
                        ))}
                    </ContainerElements>
                    <Hr />

                    <div>
                        
                        <FormContainer>
                        <form onSubmit={(e) => submitForm(e)} >
                            <label htmlFor="name">Nome do comprador(a)</label>
                            <input type="text" 
                            name="name" 
                            id="name" 
                            placeholder="  Digite o seu nome..."
                            value={textoNome}
                            required
                            onChange={((e) => setTextoNome(e.target.value))}
                            />
                         

                            <label htmlFor="cpf">CPF do comprador(a)</label>
                            <input type="number" 
                            name="cpf" 
                            id="cpf" 
                            placeholder=" Digite o seu CPF..." 
                            value={textoCpf}
                            required
                            onChange={((e) => setTextoCpf(e.target.value) )}
                            />

                            <input type="submit" 
                            name="submit" 
                            id="submit" 
                            value="Reservar assentos(s) " 
                            
                            />
                           

                            </form>
                            </FormContainer>
                       
                    </div>

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

const FormContainer = styled.div`

    form{
        display: flex;
        flex-direction: column;
        gap: 7px;

    }

  label{
    padding-left: 40px;
    color: white;
    font-family: "Sarala";
    font-size: 16px;
    font-weight: 400;
    line-height: 26.09px;
    text-align: left;

  }
  input{
    width: 80%;
    margin: auto;
    border: 1px solid #D4D4D4;
    height: 35px;
    border-radius: 10px;
  }

  #submit{
    font-family: Sarala;
font-size: 18px;
font-weight: 700;
line-height: 29.35px;
letter-spacing: 0.04em;
text-align: center;
background-color: #EE897F;
color: #2B2D36;
border: none;
width: 81%;
margin-top: 25px;
height: 42px;
  }

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