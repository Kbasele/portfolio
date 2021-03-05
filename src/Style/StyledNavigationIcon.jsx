import styled, {keyframes, css} from "styled-components"
import {colors} from '../liblary'


const jump = keyframes`
    0%{transform: translateY(0px);}
    50%{transform: translateY(-20px);}
    100%{transform: translateY(0px);}
`
export const StyledNavigationIcon = styled.div`
    position: relative; 
    z-index: 1;
    display: flex; 
    flex-flow: column; 
    justify-content: center; 
    align-items: center; 
    font-size: 3rem; 
    cursor: pointer;
    
    .link{
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-direction: column; 
        text-decoration: none; 
        
        ${({left}) => left &&
        css`
        color: ${({isEven}) => isEven ? colors.secondary : colors.primary};
        `
        }
        
        ${({right}) => right &&
        css`
        color: ${({isEven}) => isEven ? colors.primary : colors.secondary};
        `
        }
    }
    

    

    p{
        font-size: 1rem
    }

    &:hover{
        
        .faIcon{
            animation: ${jump} 0.3s linear; 
            
        }
    }

    @media screen and (max-width: 800px) {
        font-size: 2rem; 

        p{
        font-size:0.7rem
    }

        .link{
            ${({left}) => left &&
            css`
            color: ${({isEven}) => isEven ? colors.primary : colors.secondary};
            `
            }
            
            ${({right}) => right &&
            css`
            color: ${({isEven}) => isEven ? colors.primary : colors.secondary};
            `
            }

        }
    } 

`