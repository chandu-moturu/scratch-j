import React,{useState} from "react";
import Paper from '@material-ui/core/Paper';
import { setWait } from "../../reducers/events/eventActions";
import { connect } from "react-redux";
//** 
const Wait = ({events,comp_id,set_wait}) => {
    const [wait,setStateWait]=useState(0);

    const handleChange=(e)=>{
        setStateWait(e);
        let current = events.wait;
        current[comp_id]=e;
        set_wait(current);
    }
  return (
    <Paper elevation={3}>
        <div className="text-center rounded bg-red-400 p-2 my-3">
            <div className="grid grid-cols-2 my-2">
                <div className="text-white">Wait</div>
                <input type="number" className="mx-2 p-1 py-0 text-center" value={wait} onChange={(e)=>handleChange(parseInt(e.target.value))} />
            </div>
            <div id={comp_id} className="text-center bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                Wait {wait} seconds
            </div>
        </div>
    </Paper>
  )
}

const mapStateToProps=(state)=>{
    return {
        events: state.event,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        set_wait: (value) => dispatch(setWait(value))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Wait)