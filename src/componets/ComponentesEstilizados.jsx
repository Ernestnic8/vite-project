import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";

export default function ComponentesEstilizados(){
    let mainColor="#db7093",
    mainColor80="#db709380"

    const setTransitionTime = (time) => `all ${time} ease-in-out`;

    const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0.6;
    }
    100%{
        opacity: 1
    }
    `;

    const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${({color}) => color || "#ff4800"};
    background-color: ${mainColor};
    transition: ${setTransitionTime("0.5s")};
    animation: ${fadeIn} 5s ease-out;

    ${({isButton}) => isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: 0.25rem;
            cursor: pointer;
        `}

    &:hover{
        background-color: ${mainColor80};
    }
`;
    const light={
        color:"#222",
        bgColor:"#DDD",
    };
    const dark= {
        color:"#DDD",
        bgColor:"#222"
    };
    
    const GlobalStyle=createGlobalStyle`
    h2{
        padding: 2rem;
        background-color: #fff;
        color: #61dafb;
        text-transform: uppercase;
    }
    `;

    const Box=styled.div`
    padding: 1rem;
    margin: 1rem;
    color:${({theme}) => theme.color};
    background-color:${({theme}) => theme.bgColor}
    `;

    const BoxRounded = styled(Box)`
    border-radius: 1rem;
    `;

    return(
        <>
        <GlobalStyle/>
        <h2>Styled-Components</h2>
        <MyH3>Estoy siendo estilizado con styled-components</MyH3>
        <MyH3 color="#e0a628">Estoy siendo estilizado con styled-components</MyH3>
        <MyH3 isButton>Soy un h3 estilizado como boton</MyH3>
        <ThemeProvider theme={light}>
            <Box>Soy una caja Blanca</Box>            
            <BoxRounded>Caja redondeada blanca</BoxRounded>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
            <Box>Soy una caja Negra</Box>
            <BoxRounded>Caja redondeada negra</BoxRounded>
        </ThemeProvider>
        </>
    )
}