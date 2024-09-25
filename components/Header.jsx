import styled from "styled-components"

export default function Header() {
    return (
        <Container>
            
            <Photo src="https://s3-alpha-sig.figma.com/img/a320/d762/672523591ef2f811a382ae5c89e262c0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HROpEZ2-eZBauSH4~nndHjskgdqanhy9WETBNEBcJm8ohRTPuRY-k9FDXQNq3F3BUwHc3~cZx2~Q9EIj5aHta98EDNtaFC-Gj9ULIoGdsoRPFZTX6jHEKUwhMWPRhZV7DhG6ittP~y3ace09IVvGmb3zWiCOMT40tVr3LSU4Fs4j9x07D246GWU8e7aGCRdIcTUDFDSISgrauqvC8KCLW3RYNydq51tnmFNfOGBzKq84E3L1wgit-5TfNvCUdzUs1B-jVI-vJ5tcz5aG4JTX1NURsorwWE63K8kESNGt3kkxDPO-v20ytFwNTXQFmNMgq9v7QuNXUXp1awQZ-m~KyA__" alt="" />
            <h1>Cineflex</h1>
        </Container>
    )
}



const Container = styled.div`
	display: flex;
    background-color: #EE897F;
    height: 67px;
    font-family: "Raleway", sans-serif;
    align-items: center;
    justify-content: space-around;
    h1{
        font-weight: 600;
        font-size: 34px;
        color: #FADBC5;

    }
`;

const Photo = styled.img`
	width: 40px;
	height: 40px;
`;