import React from "react"
import "./SelectDif.css"
import { Link } from "react-router-dom";

function SelectDif () {
  return (
    <div className="selectDif-class" >
      <h1 className='head-1 slide-top ' >TicTacToe Game</h1>
    <h3 className='head-2 slide-top' >Made with React.js</h3>
    <div className="menu-diffpage">
        <div className="diffpage-option1 zoom-in">
            <Link to="/computer/easy" >
                <div class="card" id="easy" >
                    <div class="card2"> <p className="font-card">EASY</p>
                    </div>
                </div>
            </Link>
        </div>
        <div className="diffpage-option2 zoom-in ">
            <Link to="/computer/medium" >
            <div class="card" id="medium">
                    <div class="card2"  > <p className="font-card">MEDIUM</p>
                    </div>
                </div>
            </Link>
        </div>
        <div className="diffpage-option3 zoom-in ">
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
