import React from "react"
import "./SelectDif.css"
import { Link } from "react-router-dom";

function SelectDif () {
  return (
    <div className="selectDif-class" >
      <h1 className='head-1' >TicTacToe Game</h1>
    <h3 className='head-2' >Made with React.js</h3>
    <div className="menu-diffpage">
        <div className="diffpage-option1">
            <Link to="/computer/easy" >
                <div class="card" id="easy" >
                    <div class="card2"> <p className="font-card">EASY</p>
                    </div>
                </div>
            </Link>
        </div>
        <div className="diffpage-option2">
            <Link to="/computer/medium" >
            <div class="card" id="medium">
                    <div class="card2"  > <p className="font-card">MEDIUM</p>
                    </div>
                </div>
            </Link>
        </div>
        <div className="diffpage-option3">
            <Link to="/computer/hard" >
            <div class="card" id="hard" >
                    <div class="card2"> <p className="font-card">HARD</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
    </div>
  )
};

export default SelectDif;
