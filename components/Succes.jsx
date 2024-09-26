export default function Succes(props){

    console.log(props.filmTitle)
    console.log(props.filmDate)
    console.log(props.filmHour)
    console.log(props.seatNumbers)

    return (
        <>
        <h1>Pedido Finalizado</h1>
        <p>{props.filmTitle}</p>
        <p>{props.filmDate}</p>
        <p>{props.filmHour}</p>
        {props.seatNumbers.map((number) => (
            <p>Assento {number}</p>
        ))}
        <p>{props.clientCPF}</p>
        <p>{props.clientName}</p>
        </>
    )
}

/*

    Nome do filme
    Data e hora do filme
    Numero dos assentos
    Nome e cpf do comprador


*/