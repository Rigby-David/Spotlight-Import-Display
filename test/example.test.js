// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { discs, goblins, tools } from '../discs.js';
import { renderDisc, renderGoblin, renderTool } from '../utils.js';

const test = QUnit.test;

test('test disc render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="disc"><h1>Wraith</h1><img src="./assets/wraith.jpg"><p>The Wraith has a speed of 11 and glide of 5</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDisc(discs[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test goblin render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="goblin"><img src="./assets/goblin.jpg"><h1>McStabby</h1><p>McStabby has 2 HP</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin(goblins[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test tool render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="tool"><img src="./assets/shovel.jpg"><h1>Spade</h1><p>The Spade has a digging factor of 7 and a durability factor of 9</p><h2>Perks</h2><ul><li>Easy to use</li><li>Versatile</li><li>Decent at killing zombies</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTool(tools[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});