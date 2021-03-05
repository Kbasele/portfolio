import React , {useContext} from 'react'
import { StyledPageContentAreaa } from '../Style/StyledPageContentAreaa'
import {UserContext} from "../contexts/UserContext"

export default function AboutPageContentArea(right, left) {
    const {isEven} = useContext(UserContext)

    return (
        <>
        {left && 
        <StyledPageContentAreaa left={left} isEven={isEven}>
            <div className="about-left">
                <p>
                    Mitt namn är Kevin och jag är en studerande fullstack utvecklare!<br/>
                    <br></br>Jag har alltid dragits till problemlösning och väldigt mån om att 
                    utmana mig själv för att utvecklas.
                    <br></br>
                    <br></br>
                    Lite information om min utbildning
                    <br></br>
                    "Hos oss blir du redo för jobb. Nackademin är en yrkeshögskola (YH)
                    som erbjuder pricksäkra och relevanta utbildningar som kombinerar 
                    teori och praktik (LIA). Utbildningarna planeras och genomförs i 
                    nära samarbete med näringslivet. 
                    
                    <br></br>
                    <br></br>
                    " Utbildningen som jag går är 
                    Fullstack Open Source som är en tvåårig utbildning där vi lär oss 
                    både frontend och backend utvcekling. Här får vi kunskaper i 
                    blandannat HTML, CSS, Javascript, NodeJS och mycket mer. 
                </p>
            </div> 
        </StyledPageContentAreaa>
        }
        {right && 
        <StyledPageContentAreaa right={right} isEven={isEven}>
            <div className="about-right">
                    <h1>HELLO WORLD</h1>
            </div> 
        </StyledPageContentAreaa>
        }

    </>
    )
}
