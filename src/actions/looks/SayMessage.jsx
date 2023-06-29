import React ,{useState} from 'react'
import Paper from "@material-ui/core/Paper"
import { connect } from 'react-redux'

//** 
const SayMessage = ({character,comp_id}) => {
    const [state,setState]=useState({show_msg:false,message:"",character_id:""})

    const displayMessage = () =>{
        const e1 = document.getElementById(`${character.active}-message-box`);
        const e2 = document.getElementById(`${character.active}-message-box1`);

        if (state.show_msg && state.character_id===character.active){
            setState({...state,show_msg:false});
            e1.style.display="none"
            return;
        }

        setState({...state,show_msg:true});
        e1.style.display = "block";
        e1.style.position="relative";
        e2.style.display="none"

        window.clearTimeout();
        e1.innerHTML=state.message;
    }


  return (
    <Paper elevation={3}>
        <div className='rounded text-center bg-purple-500 p-2 my-3'>
            <div className='grid grid-cols-2 my-2'>
                <div className='text-white'>Message</div>
                <input type="text" className='mx-2 p-1 py-0 text-center' value={state.message} onChange={(e)=>{e.target.value.length>0 && setState({...state,message:e.target.value})}} />
            </div>
            <div id={comp_id} className='flex text-center flex-row flkex-wrap bg-purple-700 text-white px-2 p-1 my-2 text-sm cursor-pointer' onClick={()=>displayMessage()}>
                {`Say ${state.message}`}
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

export default connect(mapStateToProps)(SayMessage)