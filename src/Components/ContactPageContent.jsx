import React , {useContext} from 'react'
import { StyledPageContentAreaa } from '../Style/StyledPageContentAreaa'
import {UserContext} from "../contexts/UserContext"

export default function ContactPageContent({left, right}) {
    const {isEven} = useContext(UserContext)

    return (
        <>
            {left && 
            <StyledPageContentAreaa  left={left} isEven={isEven}>
                <p className="contact">Kevinbasele@hotmail.se </p>
            </StyledPageContentAreaa>
            }
            {right && 
            <StyledPageContentAreaa right={right} isEven={isEven}>
                <p className="contact">0707572996</p>
            </StyledPageContentAreaa>
            }

        </>
    )
}
