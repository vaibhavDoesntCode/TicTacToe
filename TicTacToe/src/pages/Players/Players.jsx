import { useEffect, useState } from 'react'
import './Players.css'
import Dabba from '../../components/Dabba'
import TorusScene from '../../components/TorusScene';
import NavBar from '../../components/NavBar/NavBar';



function Players() {
  

  const [bodyClass, setBodyClass] = useState();
  const [count, setCount] = useState(0);
  const [matrix, setMatrix] = useState([[0,0,0],[0,0,0],[0,0,0]])
  const [complete, setComplete] = useState(false)
  const [text, setText] = useState('idk')

  useEffect(()=>{
    console.log(matrix, 'matrix');
    console.log(checkWin(matrix));
    if(checkWin(matrix) != -1){
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
    

    if(count%2 == 0 && checkWin(matrix)[0] == -1 &&count<9){
      setText(`It's Player 1's turn`)
      setBodyClass('player-1')

      
    }
    if(count%2 == 1 && checkWin(matrix)[0] == -1 &&count<9){
      setText(`It's Player 2's turn`)
      setBodyClass('player-2')
    }
    if(checkWin(matrix)[0] == 1){
      setText(`Player 1 won`)
      setCount(count-1)
      setBodyClass('player-1')
      
      return;
    }
    if(checkWin(matrix)[0] == 2){
      setText(`Player 2 won`)
      setCount(count-1)
      setBodyClass('player-2')
      return;
    }
    if(count == 9){
      setText('Its a draw');
      setBodyClass('draw')
      return
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
    <div className='App'>
      {/* <TorusScene /> */}

     
    <div className={bodyClass}>
      <NavBar where="player" ></NavBar>

    <h1 className='head-1' >TicTacToe Game</h1>

  
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
    
    </div>
  )
}

export default Players;
