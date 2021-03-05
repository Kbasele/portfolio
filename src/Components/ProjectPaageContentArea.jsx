import React , {useContext, useState} from 'react'
import { StyledPageContentAreaa } from '../Style/StyledPageContentAreaa'
import {UserContext} from "../contexts/UserContext"
import ProjectCard from './ProjectCard'
import ProjectDetailPage from './ProjectDetailCard'

export default function ProjectPaageContentArea(left, right) {
    const {isEven} = useContext(UserContext)
    const [project, setProject] = useState()

    function onHover(e){
        setProject(e.target.textContent)
    }
    function onClickHandler1(){
        window.open("https://gifted-goodall-1f7416.netlify.app/index.html", '_blank');
        console.log("hej")
    }
    function onClickHandler2(){
        window.open("https://kbasele.github.io/quiz/", '_blank');
    }
    function onClickHandler3(){
        window.open("https://kbasele.github.io/Acmeevents/", '_blank');
        console.log("hej")
    }
    function onClickHandler4(){
        window.open("https://inspiring-babbage-3a36f2.netlify.app/", '_blank');
        console.log("hej")
    }
    function onClickHandler5(){
        window.open("https://youthful-chandrasekhar-e1862a.netlify.app/market/currencies", '_blank');
        console.log("hej")
    }
    function onClickHandler6(){
        window.open("https://nervous-noether-949eb6.netlify.app/login");
        console.log("hej")
    }

    return (
        <>
            {left && 
            <StyledPageContentAreaa left={left} isEven={isEven}>
                 <ProjectDetailPage label={project}/>
            </StyledPageContentAreaa>
            }
            {right && 
            <StyledPageContentAreaa right={right} isEven={isEven}>
                <div className="project-card">
                    <ProjectCard doThis={onHover} label={"Portfolio 1.0"} project={project} doThis2={onClickHandler1}/>
                    <ProjectCard doThis={onHover} label={"Quiz"} project={project} doThis2={onClickHandler2}/>
                    <ProjectCard doThis={onHover} label={"Acme Event"} project={project} doThis2={onClickHandler3}/>
                    <ProjectCard doThis={onHover} label={"Squash-Me"} project={project} doThis2={onClickHandler4}/>
                    <ProjectCard doThis={onHover} label={"Stock Market"} project={project} doThis2={onClickHandler5}/>
                    <ProjectCard doThis={onHover} label={"Company CMR"} project={project} doThis2={onClickHandler6}/>

                </div>
            </StyledPageContentAreaa>
            }

        </>
    )
}
