import React,{useState} from 'react'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux';

//** 
const MoveY = ({character,comp_id}) => {
    const [steps,setSteps] = useState(0);

    const handleClick=()=>{
        const e1=document.getElementById(`${character.active}-div`);

        var top = e1.offsetTop;
        e1.style.position="relative";
        e1.style.top=top+steps+"px";

    }
  return (
    <Paper>
        <div id ={comp_id} className="text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto" onClick={()=>handleClick()}>
            Move Y{" "}
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

export default  connect(mapStateToProps)(MoveY)