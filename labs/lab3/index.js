import Sidebar from './components/Sidebar.js';

const s = new Sidebar({
  menu: [
    'Albert Eggstein',
    'Attila the Hen',
    'Dixie Chick',
    'Gregory Peck',
    'Mary Poopins'
  ]
});

/* 
  TODO: 2. Use the render() method of Sidebar to show HTML-formatted text on console. Results should be wrapped in <ul></ul>
  
  The first call to render should result in the following:
  <ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li></ul>
*/

console.log(`<ul>${s.render()}</ul>`); // modify this line

/* 
  TODO: 4. Call the new method, addMenuItem, to add a string to the menu item array.
  Use the string "Oggy Omelette".

  The second call of render in the console.log() should result in the following:

  <ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li><li>Oggy Omelette</li></ul>
  */
s.addMenuItem("Oggy Omelette");

console.log(`<ul>${s.render()}</ul>`)

/*
TODO: 6. Call the new method, search to return the items containing the value in "To Match" as an unordered list. To test, Use the string "gg".

The call of search in the console.log() should result in the following:

<ul><li>Albert Eggstein</li><li>Oggy Omelette</li></ul>
*/
console.log(s.search("gg")) // Modify this line
