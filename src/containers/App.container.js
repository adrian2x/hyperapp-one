import { h } from 'hyperapp';

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default (state, actions) => (
  <main>
    <div class="input">
      <label for="schedule">Tax Schedule</label>
      <select id="schedule" name="schedule" onchange={actions.lifeChange}>
        <option value="single" selected={state.is_single}>Single</option>
        <option value="married" selected={state.is_married}>Married joint</option>
        <option value="separated" selected={state.is_separated}>Married separate</option>
        <option value="head" selected={state.is_head}>Head of Household</option>
      </select>
    </div>

    <section>
      <h5>Income</h5>

      <div class="input">
        <label for="salary">Base Salary</label>
        <input id="salary" name="salary" type="number" onchange="change_salary"/>
      </div>

      <div class="flex">
        <div class="input">
          <label for="bonus">Bonus Target</label>
          <input id="bonus" name="bonus" type="number"/>
        </div>

        <div class="input">
          <label for="bonus_amount">Bonus Amount</label>
          <input id="bonus_amount" name="bonus_amount" type="number"/>
        </div>
      </div>

      <div class="input">
        <label for="equity">Equity value</label>
        <input id="equity" name="equity" type="number"/>
      </div>

      <div class="input">
        <label for="period">Vesting period</label>
        <select id="period" name="period">
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4" selected>4 years</option>
          <option value="5">5 years</option>
        </select>
      </div>

      <div class="input">
        <label for="refresh">Refresh grant</label>
        <input id="refresh" name="refresh" type="number"/>
      </div>
    </section>

    <section class="panel">
      <h5>Tax Rate <span id="tax_rate"></span></h5>
      <h5>Taxable amount <span id="tax_amount"></span></h5>
      <h5>Tax Due <span id="tax_due"></span></h5>
      <h5>Net paycheck <span id="take_home"></span></h5>
      <div class="input">
        <label for="paycheck_freq">Paycheck frequency</label>
        <select id="paycheck_freq" name="paycheck_freq">
          <option value="12" selected>Monthly</option>
          <option value="24">Bi-weekly</option>
          <option value="52">Weekly</option>
          <option value="365">Day</option>
        </select>
      </div>
    </section>

    <section>
      <h2>Savings Planner</h2>
      <div class="flex">
        <div class="input">
          <label for="savings401k">401k contrib</label>
          <input id="savings401k" name="savings401k" type="number"
            placeholder="Yearly $ contribution"/>
        </div>

        <div class="input">
          <label for="savinfs401k_match">401k match</label>
          <input id="savinfs401k_match" name="savinfs401k_match" type="number"
            placeholder="Yearly employer match"/>
        </div>
      </div>

      <div class="input">
        <label for="savings">Deposits</label>
        <input id="savings" name="savings" type="number"/>
      </div>

      <div class="input">
        <label for="timeframe">Time</label>
        <input id="timeframe" name="timeframe" type="number"/>
      </div>
    </section>

    <section class="panel">
      <h5>Savings <span id="savings_amount"></span></h5>
      <h5>Personal Net <span id="net_worth"></span></h5>
    </section>
  </main>
);
