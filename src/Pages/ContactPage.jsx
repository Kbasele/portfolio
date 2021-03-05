import React from 'react'
import ContactPageContent from '../Components/ContactPageContent'
import { StyledHomePage } from '../Style/StyledHomePage'

export default function ContactPage() {
    return (
        <StyledHomePage>
            <ContactPageContent left={true} right={true}/>
        </StyledHomePage>
    )
}
