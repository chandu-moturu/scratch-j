import React ,{useState} from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { setRepeat } from '../../reducers/events/eventActions';
//** 
const Repeat = ({comp_id,events,set_repeat}) => {
    const [repeat,setStateRepeat]=useState(0);

    const handleChange=(e)=>{
        setStateRepeat(e);
        let current=events.repeat;
        current[comp_id]=e;
        set_repeat(current);
        
    }

  return (
    <Paper elevation={3}>
        <div className="rounded text-center bg-red-400 p-2 my-3">
            <div classsName="grid grid-cols-2 my-2">
                <div className='text-white'>Repeat</div>
                <input type="number" className='mx-2 p-1 py-0 text-center' value={repeat} onChange={(e)=>{handleChange(parseInt(e.target.value))}}/>
            </div>
            <div id={comp_id} className='text-center bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer'>
                Repeat By {repeat}
            </div>
        </div>
    </Paper>
  )
}
const mapStateToProps =(state)=>{
    return {
        events: state.event,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        set_repeat:(value)=>dispatch(setRepeat(value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Repeat)