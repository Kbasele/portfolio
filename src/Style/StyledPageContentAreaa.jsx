import styled, {css} from 'styled-components'
import {colors} from '../liblary'

export const StyledPageContentAreaa = styled.div`
        display: flex; 
        height: 90vh;
        justify-content: center; 
        align-items: center; 
        width: 50%; 
        font-size: 10em; 
        font-weight: 800; 
        position: relative; 
        z-index: 1;

        
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

        .about-left{
                text-align: center;
                font-size: 20px; 
                font-weight: 300;
                width: 90%;  

        }
        .about-right{

                h1{
                        display: flex; 
                        justify-content: center; 
                        font-size: 5rem; 
                        justify-content: center; 
                        align-items: center; 
                        margin-left: 10px; 
                        text-align: center; 

                }
        }

        .project-card{

                div{
                        margin: 10px; 
                }
                 
        }

        .contact{
                font-size: 0.2em
        }

        @media screen and (max-width: 1350px) {
                font-size: 4rem;

               .about-left{
                text-align: center;
                font-size: 13px !important; 
                font-weight: 300;
                width: 90%;  

                }

        } 
        @media screen and (max-width: 800px) {
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

                width: 90%; 
                overflow: scroll; 

                .about-left{
                        margin-top: 200px; 
                        position: relative; 
                        text-align: center;
                        font-size: 14px; 
                        z-index: 100; 
                        width: 90%; 
                        }
                .about-right{
                        h1{
                        text-align: center; 
                        display: flex; 
                        font-size: 4rem; 
                        }
                }   
                
                       .project-card{
                               height: 45%; 
                               overflow-y: scroll; 


                div{
                        margin: 10px; 
                }
                 
        }
        } 

   
`