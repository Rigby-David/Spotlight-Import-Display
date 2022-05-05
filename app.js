// import functions and grab DOM elements
import { discs, goblins, tools } from './discs.js';
import { renderDisc, renderGoblin, renderTool } from './utils.js';
// let state
const discListEl = document.getElementById('discs');
for (let disc of discs) {
    const discDiv = renderDisc(disc);
    discListEl.append(discDiv);
}

const goblinListEl = document.getElementById('goblins');
for (let goblin of goblins) {
    const goblinDiv = renderGoblin(goblin);
    goblinListEl.append(goblinDiv);
}

const toolListEl = document.getElementById('tools');
for (let tool of tools) {
    const toolDiv = renderTool(tool);
    toolListEl.append(toolDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
