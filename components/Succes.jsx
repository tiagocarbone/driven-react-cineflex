import { useNavigate } from "react-router-dom"

export default function Succes(props){

    console.log(props.filmTitle)
    console.log(props.filmDate)
    console.log(props.filmHour)
    console.log(props.seatNumbers)
    const navigate = useNavigate()


    function endOrder(){
        props.setSeatNumbers([])
        navigate("/")
    }

    return (
        <>
        <h1>Pedido Finalizado</h1>
        <p>{props.filmTitle}</p>
        <p>{props.filmDate}</p>
        <p>{props.filmHour}</p>
        {props.seatNumbers.map((number) => (
            <p>Assento {number}</p>
        ))}
        <p> CPF: {props.clientCPF}</p>
        <p>Nome: {props.clientName}</p>

        <div onClick={() => endOrder() } >Voltar para tela inicial</div>


        </>
    )
}

/*

    Nome do filme
    Data e hora do filme
    Numero dos assentos
    Nome e cpf do comprador


*/