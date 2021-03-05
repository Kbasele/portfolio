import React from 'react'
import { StyledProjectDetaailCard } from '../Style/StyledProjectDetailCard'

export default function ProjectDetailPage({label, img, url}) {
    function onClickHandler(){
        window.open(url, '_blank');
        console.log("hej")
    }
     if(label === "Quiz"){
        return (
            <StyledProjectDetaailCard 
                onClick={onClickHandler}>
                <h1>{label}</h1>
                <img src={img}/>
                <p> Ett skolprojekt där jag skapat ett quiz-spel. 
                    Man kan själv välja att svara på mellan 5-10 frågor. 
                    Frågorna hämtas via ett rest Api. 
                </p>

            </StyledProjectDetaailCard>
        )

    }
     if(label === "Portfolio 1.0"){
        return (
            <StyledProjectDetaailCard
            onClick={onClickHandler}
            >
                <h1>{label}</h1>
                <img src={img}/>
                <p> 
                    Första portfoliot byggt i vanilla javascript
                </p>

            </StyledProjectDetaailCard>
        )

    }
     if(label === "Acme Event"){
         return (
             <StyledProjectDetaailCard>
                 <h1>{label}</h1>
                 <img src={img}/>
                 <p> En gruppgift där vi skapat ett system för att hantera evenemang.
                      Som besökare på hemsidan kan man sortera evenemangen på datum och
                       filtrera ut evenemang som har en viss kategori. Vi har använt oss
                        av local storage för att lagra de olika evenemangen.
                        Som administratör kan man CRUD:a olika entiteter. 
                        <br></br>
                        <br></br>
                        uppgifterna till adminsidan.<br></br>
                        Användarnamn: 123<br></br>
                        Lösenord: 456 
                 </p>
 
             </StyledProjectDetaailCard>
         )
 
     }
     if(label === "Squash-Me"){
         return (
             <StyledProjectDetaailCard>
                 <h1>{label}</h1>
                 <img src={img}/>
                 <p> Ett spel jag skapat under fritiden

                 </p>
              </StyledProjectDetaailCard>
         )
 
     }
     if(label === "Stock Market"){
         return (
             <StyledProjectDetaailCard>
                 <h1>{label}</h1>
                 <img src={img}/>
                 <p> Ett grupparbete där vi listar olika marknader och detaljsidor på tex olika aktier. <br></br>Byggt i react. 
                 </p>
              </StyledProjectDetaailCard>
         )
 
     }
     if(label === "Company CMR"){
         return (
             <StyledProjectDetaailCard>
                 <h1>{label}</h1>
                 <img src={img}/>
                 <p> Ett projekt jag byggt där ett fiktivt företag kan logga in för att skapa, ändra och ta bort från sitt kundregister. 
                     <p>Användarnamn: kevin.basele@yh.nackademin.se </p>
                     <p>Lösenord: javascriptoramverk</p>
                      <br></br>Byggt i react. 
                 </p>
              </StyledProjectDetaailCard>
         )
 
     }
         else
        return(<StyledProjectDetaailCard><h1>Projekt</h1></StyledProjectDetaailCard>)
}
