import { useState, useEffect } from "react";

let globalState = {};
let listeners: any[] = [];
let actions: any = {};

export const useStore = (shouldListen: boolean = true) => {
  const setState = useState(globalState)[1];
  
  const dispatch = (actionId: string, payload: any) => {
    const newState = actions[actionId](globalState, payload);
    globalState = {...globalState, ...newState};
    for (const listener of listeners) {
      listener(globalState);
    }
  }

  useEffect(() => {
    // execute on mount
    if (shouldListen){
      listeners.push(setState);
    }
    // execute on unmount
    return () => {
      if (shouldListen){
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];

};

export const initStore = (userActions: any, initialState: any) => {
  if (initialState) {
    globalState = {...globalState, ...initialState};
  }
  actions = {...actions, ...userActions};
}
