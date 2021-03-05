import styled, {css} from 'styled-components'
import {colors} from '../liblary'


export const StyledProjectCard = styled.div`
    position: relative; 
    text-align: center;  
    z-index: 1; 
    font-size: 2rem;
    font-weight: 300; 
    width: 300px;
    border-radius: 10px;   
    height: 40px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin: 40px 0; 
    position: relative; 
    z-index: 1;
    cursor: pointer; 
        
    ${({right}) => right &&
    css`
    color: ${({isEven}) => isEven ? colors.secondary : colors.primary};
    background: ${({isEven}) => isEven ? colors.primary : colors.secondary};
    `
    }

    :hover{
        transform:scale(1.1);
    }
    

`