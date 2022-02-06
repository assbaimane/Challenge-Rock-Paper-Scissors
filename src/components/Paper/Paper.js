import React from 'react';
import './Paper.sass';
import paperIcon from "../../images/icon-paper.svg"

class Paper extends React.Component{
    constructor() {
        super();  
  }

  updateUserChoice = (choice) =>{
    this.props.updateUserChoice(choice);
  }

  render(){
    return(
      <div class="Paper">
        <button onClick={() => {this.updateUserChoice("paper")}} class="p-2">
          <div class="imgContainer">
            <img src={paperIcon} alt="Paper Icon"/>
          </div>
        </button>
      </div>
    );
  }
}

export default Paper;