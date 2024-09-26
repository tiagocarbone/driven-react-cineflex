import { useState } from "react"
import styled from "styled-components"

export default function Seat(props){

    const [clicked, setClicked] = useState(false)

    function choseSeat(seatId, seatNumber){
        if (props.isAvailable && !clicked ){
            props.setSeatsArray([...props.seatsArray, seatId])
            setClicked(!clicked)
            props.setSeatNumbers([...props.seatNumbers, seatNumber])
            
        } else if (props.isAvailable && clicked){
            const newSeatsArray = props.seatsArray.filter((id) => id !== seatId);
            props.setSeatsArray(newSeatsArray);
            setClicked(!clicked)
            
        }
    }

    

    return (
        <>

            <Element isAvailable={props.isAvailable}
                clicked={clicked}
                onClick={() => choseSeat(props.seatId, props.number)}  >
               <ElementNumber  > {props.number}</ElementNumber> 
            </Element>
        </>
    )
}


const Element = styled.div`
    width: 26px;
    height: 26px;
    background-color:  ${(props) => (props.isAvailable ? "#9DB899" : "#2B2D36")};
    background-color:  ${(props) => (props.clicked ? " #FADBC5" : "")};
    border: ${(props) => (props.clicked? " 2px solid #EE897F" :  " 1px solid #808F9D" )};
  
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