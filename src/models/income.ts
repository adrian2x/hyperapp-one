// import { ActionsType } from "hyperapp";
// import { Actions, State } from "./types";
export enum Frequency {
  Monthly = 12,
  BiWeekly = 24,
  Weekly = 52,
  Hourly = 2080 // 40h/week * 52w/yr
}

export namespace Store {
  export const state = {
    is_single: false,
    is_married: false,
    is_separated: false,
    is_head: false,
    base_salary: 0.0,
    bonus_target: 0.0,
    bonus_amount: 0.0,
    vesting_period: 4, // years vesting
    gross_income: 0.0,
    savings401k: 0.0,
    savings401kmatch: 0.0,
    tax_rate: 0.0,
    tax_income: 0.0,
    tax_due: 0.0,
    net_income: 0.0,
    paycheck_freq: Frequency.Monthly
  };

  export const actions = {
    dummy: params => (state, actions) => ({ ...state }),
    lifeChange: (e: Event) => state => toggleSchedule(state, e.target.value)
  };
}

function toggleSchedule(oldState, newValue) {
  let is_single = newValue == "single";
  let is_married = newValue == "married";
  let is_separated = newValue == "separated";
  let is_head = newValue == "head";
  return { is_single, is_married, is_separated, is_head };
}
