import Component from './Component.js';

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  // Adds a single string passed in as parameter to array stored in "this.props.menu".
  addMenuItem(input) {

    // TODO: 3. Add a new menu item to the correct variable associated with this class. This involves adding a parameter and changing a class instance variable (props).
    this.props.menu.push(input)
    return;
  }

  render() {

    let responseHTML = '';
    this.props.menu.forEach((item) => {
      // TODO: 1. Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li> tags.
      responseHTML = responseHTML + `<li>${item}</li>`
    });
    return responseHTML;
  }

  // Adds a single string passed in as parameter to array stored in "this.props.menu".

  search(term) {

    // TODO: 5. Return the menu items that contain the search term "term" in them in the same fashion as render(). 
    let filteredMenu = this.props.menu.filter(item => item.includes(term))
    return '<ul>' + filteredMenu.map(input => `<li>${input}</li>`).join("") +'</ul>'
  }

}

export default Sidebar;
