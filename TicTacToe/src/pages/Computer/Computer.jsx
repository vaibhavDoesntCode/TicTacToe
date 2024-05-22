import { useEffect, useState } from 'react'
import './Computer.css'
import Dabba from '../../components/Dabba'
import NavBar from '../../components/NavBar/NavBar';
import { useParams } from 'react-router-dom';

function Computer() {

  const {diff} = useParams();
  
  const [bodyClass, setBodyClass] = useState();
  const [count, setCount] = useState(0);
  const [matrix, setMatrix] = useState([[0,0,0],[0,0,0],[0,0,0]])
  const [complete, setComplete] = useState(false)
  const [text, setText] = useState('idk')

  useEffect(()=>{
    // console.log(matrix, 'matrix');
    // console.log(checkWin(matrix));
    console.log(checkWin(matrix))
    if(checkWin(matrix)[0] != -1){
      setComplete(true)
      let m =checkWin(matrix)
      changeBg( m[1],m[2],m[3],m[4],m[5],m[6])
    }
    settingText();
  },[matrix])

  function changeBg(x1,y1,x2,y2,x3,y3){
    document.getElementsByClassName('dabba'+x1+y1)[0].style.backgroundColor = "white"
    document.getElementsByClassName('dabba'+x2+y2)[0].style.backgroundColor = "white"
    document.getElementsByClassName('dabba'+x3+y3)[0].style.backgroundColor = "white"
  }

  function settingText(){
    
    if(count%2 == 0 && checkWin(matrix)[0] == -1){
      setText(`It's your turn`)
      setBodyClass('player-1')
    }
    if(count%2 == 1 && checkWin(matrix)[0] == -1 && count <9  ){

      setText(`It's Computers's turn`)
      setBodyClass('player-2')
      if(diff == "easy"){
        document.getElementById(randomID(matrix)).click();
        
      }
      else if(diff == "medium"){
        document.getElementById(mediumDif(matrix)).click();
      }
      else if(diff == "hard"){
        document.getElementById(toughDif(matrix)).click();
      }
      
    }
    if(checkWin(matrix)[0] == 1){
      setText(`You won`)
      setCount(count-1)
      return;
    }
    if(checkWin(matrix)[0] == 2){
      setText(`Computer won`)
      setCount(count-1)
      return;
    }
    if(count == 9){
        setText('Its a draw');
        setBodyClass('draw')
        return
      }
  }

  function randomID(mat){
    let array = [];
    for(let i=0; i<3; i+=1){
        for(let j=0; j<3; j+=1 ){
            if(mat[i][j]==0){
                array.push('dabba'+String(i)+String(j));
                
            }
        }
    }
    let n = Math.floor(Math.random()* (array.length));
    return(array[n]);
  }

  function mediumDif(mat){
    let copy = JSON.parse(JSON.stringify(mat));
    let array = [];
    for(let i=0; i<3; i+=1){
        
        for(let j=0; j<3; j+=1 ){
            if(mat[i][j]==0){
                array.push('dabba'+String(i)+String(j));
                copy[i][j] = 2;
                if( checkWin(copy)[0] == 2){
                    return 'dabba'+String(i)+String(j);
                }
                copy = JSON.parse(JSON.stringify(mat));
            }
        }
    }
    for(let i=0; i<3; i+=1){
        for(let j=0; j<3; j+=1 ){
          if(mat[i][j]==0){
            copy[i][j] = 1;
            if( checkWin(copy)[0] == 1){
                return 'dabba'+String(i)+String(j);
            }
            copy = JSON.parse(JSON.stringify(mat));
          }
      }}
    let n = Math.floor(Math.random()* (array.length));
    return(array[n]);
    
  }

  function toughDif(mat){
    let copy = JSON.parse(JSON.stringify(mat));
    for(let i=0; i<3; i+=1){
        for(let j=0; j<3; j+=1 ){
            if(mat[i][j]==0){
                copy[i][j] = 2;
                if( checkWin(copy)[0] == 2){
                    return 'dabba'+String(i)+String(j);
                }
                copy = JSON.parse(JSON.stringify(mat));
            }
        }
    }
    for(let i=0; i<3; i+=1){
        for(let j=0; j<3; j+=1 ){
          if(mat[i][j]==0){
            copy[i][j] = 1;
            if( checkWin(copy)[0] == 1){
                return 'dabba'+String(i)+String(j);
            }
            copy = JSON.parse(JSON.stringify(mat));
          }
      }
    }
    if(mat[1][1] == 0){
      return "dabba11";
    }
    if( !danger(mat)){
      let corners = []
      if(mat[0][0]==0){
        corners.push("dabba00")
      }
      if(mat[2][0]==0){
        corners.push("dabba20")
      }
      if(mat[0][2]==0){
        corners.push("dabba02")
      }
      if(mat[2][2]==0){
        corners.push("dabba22")
      }
      if(corners.length!=0){
        let n = Math.floor(Math.random()* (corners.length));
        return corners[n];
      }
    }
    
    let edge = []
    if(mat[1][0]==0){
      edge.push("dabba10")
    }
    if(mat[2][1]==0){
      edge.push("dabba21")
    }
    if(mat[1][2]==0){
      edge.push("dabba12")
    }
    if(mat[0][1]==0){
      edge.push("dabba01")
    }
    let n = Math.floor(Math.random()* (edge.length));
    return edge[n];
    
    

  }

  function danger(mat){
    let arr = [].concat(...mat);
    if(JSON.stringify(arr)==JSON.stringify([1,0,0,0,2,0,0,0,1])){
      return 1;
    }
    if(JSON.stringify(arr)==JSON.stringify([0,0,1,0,2,0,1,0,0])){
      return 1;
    }
  }
  
  function checkWin(mat){
    if (winAt(mat, 0,0,0,1,0,2) != -1){
      console.log(winAt(mat, 0,0,0,1,0,2))
      return [mat[0][0],0,0,0,1,0,2]
    }
    if (winAt(mat, 1,0,1,1,1,2) != -1){
      return [mat[1][0],1,0,1,1,1,2]
    }
    if (winAt(mat, 2,0,2,1,2,2) != -1){
      return [mat[2][0],2,0,2,1,2,2]
    }
    if (winAt(mat, 0,0,1,0,2,0) != -1){
      return [mat[0][0],0,0,1,0,2,0]
    }
    if (winAt(mat, 0,1,1,1,2,1) != -1){
      return [mat[0][1],0,1,1,1,2,1]
    }
    if (winAt(mat, 0,2,1,2,2,2) != -1){
      return [mat[0][2],0,2,1,2,2,2]
    }
    if (winAt(mat, 0,0,1,1,2,2) != -1){
      return [mat[0][0],0,0,1,1,2,2]
    }
    if (winAt(mat, 0,2,1,1,2,0) != -1){
      return [mat[0][2],0,2,1,1,2,0]
    }
    return [-1];
}

function winAt(mat,x1,y1,x2,y2,x3,y3){
    if(mat[x1][y1] == 0 || mat[x2][y2] == 0 || mat[x3][y3] == 0){
      return -1;
    }
    if(mat[x1][y1] == mat[x2][y2] && mat[x1][y1] == mat[x3][y3]){
      console.log(mat[x1][y1], mat[x2][y2],  mat[x3][y3])
      return mat[x1][y1];
    }
    return -1;
}



  return(
    <>
    <div className={bodyClass}>
    <NavBar where="computer" ></NavBar>
    <h1 className='head-1' style={{fontFamily: "Exo2"}} >TicTacToe Game</h1>
    
    <h2 className='head-3' >{text}</h2><br />
    <div className='main'>
      
      <div className='left'>
      <Dabba count={count} setCount={setCount} matrix={matrix} setMatrix={setMatrix} row={0} column={0} complete={complete} id={"dabba00"} />
      <Dabba count={count} setCount={setCount} matrix={matrix} setMatrix={setMatrix} row={1} column={0} complete={complete} id={"dabba10"} />
      <Dabba count={count} setCount={setCount} matrix={matrix} setMatrix={setMatrix} row={2} column={0} complete={complete} id={"dabba20"} />
      </div>
      <div className='middle'>
      <Dabba count={count} setCount={setCount} matrix={matrix} setMatrix={setMatrix} row={0} column={1} complete={complete} id={"dabba01"}/>
      <Dabba count={count} setCount={setCount} matrix={matrix} setMatrix={setMatrix} row={1} column={1} complete={complete} id={"dabba11"} />
      <Dabba count={count} setCount={setCount} matrix={matrix} setMatrix={setMatrix} row={2} column={1} complete={complete} id={"dabba21"} />
      </div>
      <div className='right'>
      <Dabba count={count} setCount={setCount} matrix={matrix} setMatrix={setMatrix} row={0} column={2} complete={complete} id={"dabba02"} />
      <Dabba count={count} setCount={setCount} matrix={matrix} setMatrix={setMatrix} row={1} column={2} complete={complete} id={"dabba12"} />
      <Dabba count={count} setCount={setCount} matrix={matrix} setMatrix={setMatrix} row={2} column={2} complete={complete} id={"dabba22"} />
      </div>
    </div>
    </div>
    </>
  )
}

export default Computer;
