import styled from 'styled-components'


export const StyledNavigation = styled.div`
    display: flex; 
    justify-content: space-between; 
    position: absolute; 
    transform: translate(-50%, 0);
    left: 50%; 
    width: 40%; 
    min-width: 400px; 
    z-index: 1; 
    bottom: 10%; 

    
    @media screen and (max-width: 800px) {
        max-width: 100%; 
        min-width: 360px; 
        width: 88%;
        position: absolute;
        height: fit-content;  
        bottom: 0; 

    } 
    

    
`