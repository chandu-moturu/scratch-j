import {
  SET_ACTIVE_CHARACTER,
  ADD_CHARACTER,
  SET_ANGLE,
} from "./characterTypes";

//**
const initialState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHARACTER:
      return {
        ...state,
        active: action.id,
      };
    case ADD_CHARACTER:
      let characterArray = state.characters;
      characterArray.push({
        id: `sprite${state.characters.length}`,
        angle: 0,
      });
      return {
        ...state,
        characters: characterArray,
      };

    case SET_ANGLE:
     
      let character_Array = state.characters;
    
      let curr_character = character_Array.find(
        (character) => character.id === state.active
      );

      const curr_character_index = character_Array.findIndex(
        (character) => character.id === state.active
      );

      if (curr_character_index >=0) {
        curr_character.angle = action.angle;
        character_Array[curr_character_index] = curr_character;
      }

      return {
        ...state,
        characters: character_Array,
      };

    default:
      return state;
  }
};
