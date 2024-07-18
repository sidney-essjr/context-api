import { PersonType } from "../../../types/person-type";

export const initialState: PersonType[] | null = null;

type Add = {
  type: "ADD";
  payload: PersonType;
};

type Remove = {
  type: "REMOVE";
  payload: PersonType;
};

export type Action = Add | Remove;

export function peopleReducer(
  state: PersonType[],
  action: Action
): PersonType[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((person) => person.id !== action.payload.id);
    default:
      return state;
  }
}
