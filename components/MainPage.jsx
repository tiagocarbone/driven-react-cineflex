import styled from "styled-components"
import ListaFilmes from "./ListaFilmes";

export default function MainPage(){
    return (

        <>
        
        <Feature>
            <h1>Em cartaz</h1>
        </Feature>

        <ListaFilmes/>

        </>
    )
}

const Feature = styled.div`

	height: 78px;
    background-color: #000000f0;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-family: "Sarala", sans-serif;
        font-weight: 400;
        font-size: 24px;
        color: white;
    }
`;