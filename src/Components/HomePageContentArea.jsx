import React , {useContext} from 'react'
import { StyledPageContentAreaa } from '../Style/StyledPageContentAreaa'
import {UserContext} from "../contexts/UserContext"

export default function ContentArea(right, left) {
    const {isEven, changeColor} = useContext(UserContext)

    return (
        <>
            {left && 
            <StyledPageContentAreaa left={left} isEven={isEven}>
                Kevin 
            </StyledPageContentAreaa>
            }
            {right && 
            <StyledPageContentAreaa right={right} isEven={isEven}>
                Basele
            </StyledPageContentAreaa>
            }

        </>
    )
}
