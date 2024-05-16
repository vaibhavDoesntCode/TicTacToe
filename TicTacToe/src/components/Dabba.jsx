import { useEffect, useState } from "react"
import "./dabba.css"

export default function Dabba({count, setCount, matrix, setMatrix, row, column, complete, id }){

    const [clicked, click] = useState(false);
    const [minCount, setMinCount] = useState(999999)
    function onclick(){
        if(!clicked && !complete){
            click(true);
            setCount(prevCount => prevCount + 1);
            setMinCount(prevMinCount => Math.min(prevMinCount, count + 1));
            let updatedMatrix = [[9,9,9],[9,9,9],[9,9,9]]
            for(let r=0; r<3; r+=1){
                for(let col=0; col<3; col+=1 ){
                    updatedMatrix[r][col] = matrix[r][col]
                }
            }
            updatedMatrix[row][column] = (count%2==1) ? 2 : 1;
            setMatrix(updatedMatrix) 
            
        }
    }


    useEffect(()=>{
        // console.log(count)
        // console.log(minCount%2==1,minCount);
        
    },[count, minCount ]);


    useEffect(()=>{
        
    },[matrix])


    return(
        <div className={"zoom-in dabba "+ id} onClick={onclick}>
            <div id={id} className={(!clicked) ? 'blank' : (minCount%2==1) ? 'cross' : 'zero' }></div>
        </div>
    )
}