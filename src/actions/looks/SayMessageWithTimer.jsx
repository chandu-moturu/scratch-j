import React,{useState} from 'react';
import Paper from "@material-ui/core/Paper"
import { connect } from 'react-redux';
//** 
const SayMessageWithTimer = ({character,comp_id}) => {

    const [state,setState] = useState({show_msg: false,timer_message:"",timer_for_msg:0});

    const displayMessage=()=>{
        const e1=document.getElementById(`${character.active}-message-box`);
        const e2=document.getElementById(`${character.active}-message-box1`);
        e2.style.display = "none";
        if(state.show_msg){
            setState({...state,show_msg:false});
            e1.style.display="none"
            return
        }
        setState({...state,show_msg:true});

        e1.style.display = "block";
        e1.style.position = "relative";

        e1.innerHTML = state.timer_message;
        window.setTimeout(()=>{
            setState({...state,show_msg:false});
            e1.style.display="none";

        },state.timer_for_msg*1000)
    }
    
  return (
    <Paper elevation={3}>
        <div className='rounded text-center bg-purple-500 p-2 my-3'>
            <div className='grid grid-cols-2 my-2'>
                <div className='text-white'>Message With Time</div>
                <input type="text" className='mx-2 p-1 py-0 text-center' value={state.timer_message} onChange={(e)=>{e.target.value.length>0 && setState({...state,timer_message:e.target.value})}} />
            </div>
            <div id={comp_id} className='flex flex-row flex-wrap text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer' onClick={()=>displayMessage()}>
                {`Say ${state.timer_message}`}
            </div>
        </div>
    </Paper>
  )
}

const mapStateToProps=(state)=>{
    return{
        character: state.character
    }
}
export default connect(mapStateToProps) (SayMessageWithTimer)