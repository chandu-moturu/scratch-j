import React,{useState} from 'react'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux';

//** 
const Move = ({character,comp_id}) => {
    const [steps,setSteps] = useState(0);

    const handleClick=()=>{
        const e1=document.getElementById(`${character.active}-div`);

        var left = e1.offsetLeft;
        e1.style.position="relative";
        e1.style.left=left+steps+"px";

    }
  return (
    <Paper>
        <div id={comp_id} className="text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto" onClick={()=>handleClick()}>
            Move X{" "}
            <input type="number" value={steps} className="text-black text-center w-16 mx-2" onChange={(e)=>setSteps(parseInt(e.target.value))}/>{" "}steps
        </div>
    </Paper>
  )
}

const mapStateToProps=(state)=>{
  return{
    character: state.character
  }
}

export default connect(mapStateToProps) (Move)