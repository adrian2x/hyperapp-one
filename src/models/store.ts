// import { ActionsType } from "hyperapp";

export namespace Store {
  export const state = {
    num: 0,
  };

  export const actions = {
    add: (e: Event) => (state, actions) => ({ num: state.num + 1 }),
    sub: (e: Event) => (state, actions) => ({ num: state.num - 1 }),
  };
}
