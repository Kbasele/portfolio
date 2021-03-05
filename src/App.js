import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Homepage from './Pages/HomePage';
import { StyledContainer } from './Style/StyledContainer';
import Navigation from './Components/Navigation';
import { UserContext } from './contexts/UserContext';
import AboutPage from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';



function App() {

  const [isEven, setIsEven] = useState(true)
  function changeColor (){
    setIsEven(!isEven)
    console.log(isEven)
  }

  return (
    <UserContext.Provider value={{isEven, setIsEven, changeColor}}>
      <StyledContainer isEven={isEven}>
        <div className="content">
          <div className="main-content">
            <Switch>
              <Route path="/omMig">
                <AboutPage/>
              </Route>
              <Route path="/projekt">
                <ProjectPage/>
              </Route>
              <Route path="/kontakt">
                <ContactPage/>
              </Route>
              <Route path="/">
                <Homepage/>
              </Route>
            </Switch>
          </div>
          <Navigation/>
        </div>
      </StyledContainer>
    </UserContext.Provider>
  );
}

export default App;
