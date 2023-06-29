import React from 'react'
import Paper from "@material-ui/core/Paper";
import { connect } from 'react-redux';
//** 
const HideMessage = ({character,comp_id}) => {

  const displayMessage =()=>{
    window.clearTimeout();
    const e1=document.getElementById(`${character.active}-message-box`)
    const e2=document.getElementById(`${character.active}-message-box1`)

    e1.style.display = "none";
    e2.style.display = "none"
  }
  return (
    <Paper elevation={3}>
        <div id={comp_id} onClick={()=>displayMessage()} className='rounded bg-purple-700 text-center text-white max-w-content p-1 my-3'>
            Hide Message
        </div>
    </Paper>
  )
}

const mapStateToProps = (state) =>{
  return {
    character: state.character,
  }
}
export default connect(mapStateToProps)(HideMessage)