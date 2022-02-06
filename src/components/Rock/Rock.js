import React from 'react';
import './Rock.sass';
import rockIcon from "../../images/icon-rock.svg"

class Rock extends React.Component{
    constructor(){
        super();
    }
    
    updateUserChoice = (choice) =>{
        this.props.updateUserChoice(choice);
      }


    render(){
        return(
            <div class="Rock">
                <button onClick={() => {this.updateUserChoice("rock")}} class="p-2">
                    <div class="imgContainer">
                        <img src={rockIcon} alt="Rock Icon" />
                    </div>
                </button>
            </div>
        );
    }
}

export default Rock;