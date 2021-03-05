import React, {useContext} from 'react'
import { faAddressCard, faHome, faPencilAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { StyledNavigation } from '../Style/StyledNavigation'
import NavigationIcon from './NavigationIcon'


export default function Navigation() {

    return (
        <StyledNavigation>
            <NavigationIcon label="Hem" icon={faHome} left={true} link={"/"}/>
            <NavigationIcon label="Om mig" icon={faAddressCard} left={true} link={"/omMig"}/>
            <NavigationIcon label="Projekt" icon={faPencilAlt} right={true} link={"/projekt"}/>
            <NavigationIcon label="Kontakt" icon={faPhone} right link={"/kontakt"}/>
        </StyledNavigation>
    )
}
