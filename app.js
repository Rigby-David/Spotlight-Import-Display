// import functions and grab DOM elements
import { discs } from './discs.js';
import { renderDisc } from './utils.js';
// let state
const discListEl = document.getElementById('discs');
for (let disc of discs) {
    const discDiv = renderDisc(disc);
    discListEl.append(discDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
