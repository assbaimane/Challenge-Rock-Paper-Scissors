import React from 'react';
import './Scissor.sass';
import scissorIcon from "../../images/icon-scissors.svg"

class Scissor extends React.Component{
  constructor(){
    super();
  }

  updateUserChoice = (choice) =>{
    this.props.updateUserChoice(choice);
  }
  
  render(){
    return(
      <div class="Scissor">
        <button onClick={() => {this.updateUserChoice("scissors")}} class="p-2">
          <div class="imgContainer">
            <img src={scissorIcon} alt="Scissor Icon" />
          </div>
        </button>
      </div>
    );
  }
}

export default Scissor;