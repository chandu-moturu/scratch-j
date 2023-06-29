import React,{useState} from 'react'
import Paper from "@material-ui/core/Paper";
import { connect } from 'react-redux';

//** 
const GotoXY = ({character,comp_id}) => {

    const [state,setState]=useState({goto_x:0,goto_y:0})
    
    const gotoXY=()=>{
        const e1=document.getElementById(`${character.active}-div`);
        e1.style.position="relative"
        e1.style.left=state.goto_x+"px";
        e1.style.top=state.goto_y+"px";
    }

  return (
    <Paper elevation={3}>
        <div className="text-center rounded bg-blue-500 p-2 my-3">
            <div className="grid grid-cols-2 my-2">
                <div className="text-white">X</div>
                <input type="number" className="mx-2 my-1 p-1 py-0 text-center" value={state.goto_x} onChange={(e)=>{parseInt(e.target.value) !==0 && setState({...state,goto_x:parseInt(e.target.value)})}} />
                <div className="text-white">Y</div>
                <input type="number" className="mx-2 p-1 py-0 text-center" value={state.goto_y} onChange={(e)=>{parseInt(e.target.value) !==0 && setState({...state,goto_y:parseInt(e.target.value)})}} />
            </div>
            <div id={comp_id} className="text-center bg-blue-700 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={()=>gotoXY()}>
                Go to X: {state.goto_x} Y: {state.goto_y}
            </div>
        </div>
    </Paper>
    
  )
}

const mapStateToProps=(state)=>{
    return {
        character: state.character
    }
}

export default connect(mapStateToProps) (GotoXY)