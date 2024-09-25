
import styled from "styled-components"


export default function Movie(props ){
    return (
        <Container>
            <img src={props.url} alt={props.title}/>
        </Container>
    )
}

const Container = styled.div`
    img{
        height: 210px;
        width: 145px;
    }
`;