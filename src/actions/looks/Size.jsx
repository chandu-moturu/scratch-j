import React,{useState} from 'react'
import Paper from "@material-ui/core/Paper";
import { connect } from 'react-redux';

//** 
const Size = ({character,comp_id}) => {
    const [state,setState]=useState({scale:1})

    const changeSize = () =>{
        const e1 = document.getElementById(character.active);
        console.log(e1)
        e1.style.transform=`scale(${state.scale})`;
    }


  return (
    <Paper elevation={3}>
        <div className='text-center rounded bg-purple-500 p-2 my-3'>
            <div className="grid grid-cols-2 my-2">
                <div className="text-white">Size</div>
                <input type="number" className="mx-2 p-1 py-0 text-center" value={state.scale} onChange={(e)=>{setState({...state,scale: parseInt(e.target.value)})}}/>
            </div>
            <div className="text-center bg-purple-700 text-white px-2 py-1 my-2 test-sm cursor-pointer" id={comp_id} onClick={()=>changeSize()}>
                Size {state.scale}
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

export default connect(mapStateToProps) (Size)