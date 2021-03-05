import styled from 'styled-components'
import {colors} from '../liblary'


export const StyledContainer = styled.div`
    position: relative; 
    z-index: 10; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    z-index: 1;

    .content{
        width: 90vw; 
        height: 90vh;
        background-image: linear-gradient(to right, ${colors.bgPrimary} 50%, ${colors.secondary} 50%);
        background-position-x: ${props => props.isEven ? "0vw" :  "45vw"};
        transition: all ease-in-out 0.5s; 
    }

    .main-content{
        position: absolute; 
        height: 90%; 
        width: 90%;
    }

    @media screen and (max-width: 800px) {
        .content{
            background-position-y: ${props => props.isEven ? "0vh" :  "50vh"};
            background-image: linear-gradient( ${colors.bgPrimary} 50%, ${colors.secondary} 50%);
            transition: all ease-in-out 0.5s; 
            width: 100vw; 
            height: 100vh;
            .main-content{
                position: absolute; 
                height: 100%; 
                width: 100%;
            }
        }

        } 

    

`