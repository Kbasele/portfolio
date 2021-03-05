import React , {useContext} from 'react'
import { StyledProjectCard } from '../Style/StyledProjectCard'
import {UserContext} from "../contexts/UserContext"


export default function ProjectCard({label, doThis, doThis2}) {
    const {isEven} = useContext(UserContext)

    return (
        <StyledProjectCard isEven={isEven} right={true} onMouseMove={doThis} onClick={doThis2} >
            <p>{label}</p>
        </StyledProjectCard>
    )
}
