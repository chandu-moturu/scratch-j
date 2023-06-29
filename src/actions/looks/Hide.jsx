import React from 'react'
import Paper from "@material-ui/core/Paper";
import { connect } from 'react-redux';
//** 
const Hide = ({character,comp_id}) => {
  
  const handleDisplay=()=>{
    const e1=document.getElementById(`${character.active}-div`);
    e1.style.display="none";
  }
    
  

  return (
    <Paper elevation={3}>
        <div id={comp_id} className='text-center rounded bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto' onClick={()=>handleDisplay()}>
            Hide
        </div>
    </Paper>
  )
}

const mapStateToProps= (state)=>{
  return{
    character: state.character
  }
}

export default connect(mapStateToProps)(Hide)