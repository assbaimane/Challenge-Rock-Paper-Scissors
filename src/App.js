import './App.sass';
import "../node_modules/bootstrap/scss/bootstrap.scss"
import React from "react";
import Paper from './components/Paper/Paper.js';
import Rock from './components/Rock/Rock.js';
import Scissor from './components/Scissor/Scissor.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userChoice: null,
      computerChoice: null,
      winner: null,
      score:"0",
      seeResult: false
    }
  }
  
  // --------------- FUNCTIONS -------------------------
  updateUserChoiceParent = (choice) =>{
    let newState = {... this.state}
    newState.userChoice = choice;
    this.setState(newState);
    console.log("le joueur a choisi : "+ choice)
  }

  launchComputerChoice = () =>{
    let choices = ["rock","paper","scissors"];
    var randomChoice = choices[Math.floor(Math.random()*(choices.length))]
    let newState = {... this.state}
    newState.computerChoice = randomChoice;
    this.setState(newState);
    const timeout = setTimeout(() => {
      console.log("le pc a mis ajour sa valeur à "+ this.state.computerChoice)  
      this.findWinner();
    }, 2000);
  }

  findWinner = () =>{
    if (
        (this.state.computerChoice === "paper" && this.state.userChoice ==="paper")
      || (this.state.computerChoice === "rock" && this.state.userChoice ==="rock")
      || (this.state.computerChoice === "scissors" && this.state.userChoice ==="scissors")
    ){
      console.log('EQUALITEEEEEEEEE');
      let newState = {... this.state}
      newState.winner = "nobody";
      this.setState(newState);
    } 
    else if (
         (this.state.computerChoice === "rock" && this.state.userChoice ==="paper")
      || (this.state.computerChoice === "scissors" && this.state.userChoice ==="rock")
      || (this.state.computerChoice === "paper" && this.state.userChoice ==="scissors")
    ){
      console.log("USER WIIIIIIN !")
      let newState = {... this.state}
      newState.score = Number(newState.score) + 0.5; //corriger le bug qui double pour pas avoir à faire ça
      newState.winner = "user";
      this.setState(newState);
    }
    else if (
         (this.state.computerChoice === "paper" && this.state.userChoice ==="rock")
      || (this.state.computerChoice === "rock" && this.state.userChoice ==="scissors")
      || (this.state.computerChoice === "scissors" && this.state.userChoice ==="paper")
    ){
      console.log("COMPUTER WIIIIIIN !")
      let newState = {... this.state}
      newState.score = Number(newState.score) - 0.5; //corriger le bug qui double pour pas avoir à faire ça
      newState.winner = "computer";
      this.setState(newState);
    }
    let newState = {... this.state}
    newState.seeResult = true; //Permet de launch la dernière page
    this.setState(newState);
  }

  restartGame = () =>{
    let newState = {... this.state}
    newState.userChoice = null; //Permet de relancer la première page
    newState.computerChoice = null; //Permet de relancer le choix de l'ordinateur
    newState.seeResult = false; //Permet de faire disparaitre la dernière page
    this.setState(newState);
  }

  //---------------------- PAGES ----------------------
  renderLaunchPage(){
    return(
      <div>
          <Paper
            updateUserChoice = {this.updateUserChoiceParent}
          />
          <Rock
            updateUserChoice = {this.updateUserChoiceParent}
          />
          <Scissor
            updateUserChoice = {this.updateUserChoiceParent}
          />
      </div>
    );
  }

  renderBattlePage(){
    return(
      <div>
          <div className="BattlePage row">
            {/* USER CHOICE DIV */}
            <div className="col-6">
                <p class="text-light">User's choice</p>
                {this.state.userChoice === "paper" &&
                  <div>
                    <Paper/>
                  </div>
                }
                {this.state.userChoice === "rock" &&
                  <div>
                    <Rock/>
                  </div>
                }
                {this.state.userChoice === "scissors" &&
                  <div>
                    <Scissor/>
                  </div>
                }
            </div>
            {/* COMPUTER CHOICE DIV */}
            <div className="col-6">
              <p class="text-light">Computer's choice</p>
                {this.state.computerChoice === "rock" &&
                  <div>
                    <Rock/>
                  </div>
                }
                {this.state.computerChoice === "paper" &&
                  <div>
                    <Paper/>
                  </div>
                }
                {this.state.computerChoice === "scissors" &&
                  <div>
                    <Scissor/>
                  </div>
                }
            </div>
          </div>
      </div>
    );
  }

  renderResultPage(){
    return(
      <div class="d-flex align-items-space-between">
        <h1 class="text-light">This time, {this.state.winner} win !</h1>
        <button onClick={()=> this.restartGame()}>Let's play again</button>
      </div>
    );
  }

  render(){
    return (
      <div className="App">
        <h1 class="text-light">SCORE : {this.state.score}</h1>
        {this.state.userChoice == null &&
          <div>
            {this.renderLaunchPage()}
          </div>
        }
        {this.state.userChoice !== null &&
        <div>
          {this.state.computerChoice == null && this.state.seeResult == false &&
            this.launchComputerChoice()
          }
          {this.state.computerChoice !== null && this.state.seeResult == false &&
            this.renderBattlePage()
          }
          {this.state.seeResult == true &&
            this.renderResultPage()
          }
        </div>
        }
      </div>
    );
  }
}

export default App;
