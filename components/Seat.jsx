import { useState } from "react"
import styled from "styled-components"

export default function Seat(props){

    const [seats, setSeats] = useState([])

    function escolherAssento(seatId){
        if (props.isAvailable){
            setSeats([...seats, seatId])
            alert("disponivel")
            
        } else if (!props.isAvailable){
            return
        }
    }

    
        

    return (
        <>

            <Element isAvailable={props.isAvailable}
                onClick={() => escolherAssento(props.seatId)}  >
               <ElementNumber  > {props.number}</ElementNumber> 
            </Element>
        </>
    )
}


const Element = styled.div`
    width: 26px;
    height: 26px;
    background-color:  ${(props) => (props.isAvailable ? "#9DB899" : "#2B2D36")};
    border: 1px solid #808F9D;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ElementNumber = styled.p`
    font-family: "Roboto";
    font-size: 11px;
    font-weight: 400;
    line-height: 12.89px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #2B2D36;

`