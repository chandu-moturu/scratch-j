import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { purple } from "@material-ui/core/colors";
import { Paper } from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core";
import {getComponent} from '../../../actions/getItems'
import { connect } from "react-redux";
import { addList } from "../../../reducers/midarea/listActions";


//** 

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: 0,
    },
  })
);

const RunButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    fontSize: "13px",
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const MiddleBar = ({ area_list, add_list, event_values }) => {
  const classes = useStyles();
  
  const eventFire = (el, etype) => {
    if (el && el.fireEvent) {
      el.fireEvent("on" + etype);
      return;
    }
    else if(el){
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
    }
  };

  const handleClick = (arr, id) => {
    if (arr.length === 0) return;
    let i = 0;
    let repeat = 1;
    let str1 = `comp${arr[i]}-${id}-${i}`;

    if (arr[i] === "WAIT") {
      let str2 = `comp${arr[i]}-${id}-${i}`;
      let last_time = new Date().getTime();
      let curr_time = new Date().getTime();

      while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
        curr_time = new Date().getTime();
      }
    } else if (arr[i] !== "REPEAT") {
      const element=document.getElementById(str1)
      if(element){
      eventFire(element, "click");

      }
    } else {
      repeat = event_values.repeat[str1] + 1;
    }
    i++;

    var cnt = setInterval(() => {
      if (i === arr.length) {
        clearInterval(cnt);
      }



      if (arr[i] === "WAIT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        let last_time = new Date().getTime();
        let curr_time = new Date().getTime();

        while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
          curr_time = new Date().getTime();
        }
        i++;
      } else if (arr[i] === "REPEAT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        repeat = repeat * (event_values.repeat[str2] + 1);
        i++;
      }
      else if(arr[i-1]==="REPEAT" && repeat>2){
        let str2=`comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2),"click");
        repeat--;
      }
      else{
        let str2=`comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2),"click");
        i++;
      }
    }, 2000);
  };

  return (
    <div className="flex-1 h-full overflow-auto p-3">
      <Paper elevation={2} className="h-screen ">
      <div className="flex justify-between p-5">
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={() => add_list()}
          >
            Add List{" "}
          </Button>
        </div>
      </div>
      <div className="grid grid-flow-col">
        {area_list.midAreaLists.map((l) => {

          return (
            <div className="w-60" key={l.id}>
              <Paper className="p-4 ml-4" elevation={3}>
                <div className="w-52 p-2">

                  <Droppable droppableId={l.id} type="COMPONENTS">
                    {(provided) => {
                      return (
                        <ul
                          className={`${l.id} w-48 h-full`}
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <div className="text-center mx-auto my-2 mb-4">
                            <RunButton
                              variant="contained"
                              className={classes.button}
                              startIcon={<PlayArrowIcon />}
                              onClick={() => handleClick(l.comps, l.id)}
                            >
                              Run{""}
                            </RunButton>{" "}
                          </div>
                          {l.comps && l.comps.map((x,i)=>{
                            let str=`${x}`;
                            console.log(l.comps)
                            let component_id=`comp${str}-${l.id}-${i}`;
                            
                            return(

                              <Draggable key={`${str}-${l.id}-${i}`}
                              draggableId={`${str}-${l.id}-${i}`}
                              index={i}>
                                
                                {(provided)=>(
                                  <li ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                 
                                  >
                                    {getComponent(str,component_id)}
                                    {provided.placeholder}
                                  </li>
                                )}
                              </Draggable>
                              
                            )
                          })}
                          {provided.placeholder}
                        </ul>
                      );
                    }}
                  </Droppable>
                </div>
              </Paper>
            </div>
          );
        })}
      </div>
      </Paper>
      
    </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    area_list:state.list,
    event_values:state.event
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    add_list: ()=>dispatch(addList())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MiddleBar)
