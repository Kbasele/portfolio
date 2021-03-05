import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React , {useContext} from 'react'
import { StyledNavigationIcon } from '../Style/StyledNavigationIcon'
import {UserContext} from "../contexts/UserContext"
import  { Link } from "react-router-dom"


export default function NavigationIcon({icon, label, left, right, link}) {
    const {isEven, changeColor} = useContext(UserContext)
    
    return (
        <>
        {left &&  
            <StyledNavigationIcon onClick={changeColor} isEven={isEven} left={true}>
                <Link to={link} className="link">
                    <FontAwesomeIcon className="faIcon" icon={icon}/>
                    <p>{label}</p>
                </Link>
            </StyledNavigationIcon> 
        }
        {right &&  
            <StyledNavigationIcon onClick={changeColor} isEven={isEven} right={true}>
                <Link to={link} className="link">
                    <FontAwesomeIcon className="faIcon" icon={icon}/>
                    <p>{label}</p>
                </Link>
            </StyledNavigationIcon> 

        }

        </>
    )
}
