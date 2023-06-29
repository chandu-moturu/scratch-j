import React, { useState } from "react";
import { InputLabel } from "@material-ui/core";
import { MenuItem, createStyles, makeStyles } from "@material-ui/core";
import Cat from "../../../assets/sprites/Cat";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import catsprite from "../../../assets/icons/catsprite.png";
import eyeon from "../../../assets/icons/eye-regular.svg";
import eyeoff from "../../../assets/icons/eye-slash-regular.svg";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  addCharacter,
  setActive,
} from "../../../reducers/character/characterActions";
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";

//&
const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
      margin: 0,
    },
  })
);

const RightBar = ({ character, add_character, set_active }) => {
  const classes = useStyles();
  const [active, setActive] = useState(character.active);
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  let elmnt = null;

  const dragMouseDown = (e, id) => {
    elmnt = document.getElementById(id);
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e) => {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  };

  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const handleChange = (e) => {
    setActive(e.target.value);
    set_active(e.target.value);
  };

  return (
    <div id="preview_area" className="w-full flex-none overflow-y-auto p-3">
      <Paper elevation={2} className="p-4 mb-3" style={{ height: "400px" }}>
        <div className="flex justify-between mb-10">
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Active
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={active}
                onChange={(e) => handleChange(e)}
                displayEmpty
                className={classes.selectEmpty}
              >
                {character.characters.map((x, i) => {
                  const first = x.id.charAt(0).toUpperCase();
                  const name = first + x.id.substr(1);

                  return (
                    <MenuItem key={i} value={x.id}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddCircleIcon />}
              onClick={() => add_character()}
            >
              Create{" "}
            </Button>
          </div>
        </div>
        <div className="flex justify-around h-full">
          {character.characters.map((x, i) => {
            return (
              <div
                id={`${x.id}-${i}`}
                key={i}
                className={`absolute`}
                onMouseDown={(e) => dragMouseDown(e, `${x.id}-${i}`)}
              >
                <div id={`${x.id}-div`} className="character">
                  <div
                    className="hidden border-2 p-2 ml-3 mb-2 w-auto whitespace-nowrap"
                    id={x.id + "-message-box"}
                  ></div>
                  <div
                    className="hidden rounded-full border-2 w-4 left-1/2 h-4 ml-3 mb-2 whitespace-nowrap"
                    id={x.id + "-message-box1"}
                  ></div>
                  <Cat charac_id={x.id} />
                </div>
              </div>
            );
          })}
        </div>
      </Paper>
      <div className="flex mr-0">
        <Paper
          elevation={3}
          className="p-4 mb-0"
          style={{ width: "370px", height: "300px" }}
        >
          <div className="border-b " style={{ height: "80px" }}>
            <div
              className="flex mb-2 text-sm"
              style={{ justifyContent: "space-between" }}
            >
              <span>Sprite</span>
              <span className="p-1 px-5 text-center border rounded">Cat</span>x
              <span className="p-1 px-5 text-center border rounded">0</span>y
              <span className="p-1 px-5 text-center border rounded">0</span>
            </div>
            <div
              className="flex text-sm"
              style={{ justifyContent: "space-between" }}
            >
              <span className="flex">
                <span className=" p-2 border rounded mr-1">
                  <img src={eyeon} alt="" style={{ width: "14px" }} />
                </span>
                <span className="p-2 border rounded ">
                  <img src={eyeoff} alt="" style={{ width: "14px" }} />
                </span>
              </span>
              Size<span className="p-1 px-2 text-center border rounded">0</span>
              Direction
              <span className="p-1 px-2 text-center border rounded">0</span>
            </div>
          </div>
          <div
            style={{ backgroundColor: "gray", height: "180px" }}
            className="mt-3 p-5 rounded"
          >
            <Paper elevation={2} className="mt-4 p-5" style={{ width: "70px" }}>
              <img src={catsprite} alt=""  />
            </Paper>
          </div>
        </Paper>
        <Paper elevation={3} className="ml-3 p-4 text-sm">
          <div className="text-center border-b">stage</div>
          <Paper className="p-5 mt-2 mb-3"></Paper>
          <p>backdrops</p>
          <span className="text-center border px-5 ml-3">1</span>
        </Paper>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_character: () => dispatch(addCharacter()),
    set_active: (ch_id) => dispatch(setActive(ch_id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RightBar);
