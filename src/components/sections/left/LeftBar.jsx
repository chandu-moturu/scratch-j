import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { getComponent } from "../../../actions/getItems";
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "../../../actions/componentList";
import { Paper } from "@material-ui/core";
//**
const LeftBars = () => {
  return (
    <div className="w-80 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <>
      <Paper elevation={2} className="p-4 mb-5">
        <div className="font-bold bg-blue">{"Motion"}</div>
        <Droppable droppableId="sideArea-motion" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-motion my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {motionComponents.map((x, i) => {
                console.log(x);
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                        {console.log(getComponent(x))}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </Paper>
      <Paper elevation={2} className="p-4 mb-5">
        <div className="font-bold">{"Looks"}</div>
        <Droppable droppableId="sideArea-looks" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-looks my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {looksComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </Paper>

      <Paper elevation={2} className="p-4 mb-5">
        <div className="font-bold">{"Controls"}</div>
        <Droppable droppableId="sideArea-control" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-control my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {controlComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </Paper>

      <Paper>
        <div className="font-bold">{"Events"}</div>
        <Droppable droppableId="sideArea-events" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-events my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {eventsComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </Paper>
      
      </>
    </div>
  )
}

export default LeftBars;
