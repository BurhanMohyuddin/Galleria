import React from 'react';
import Products from './Components/Products';
import data from './data.json';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }
  render() {

    return (
      <div className="grid-container">
        <header>
          <a href="/">Galleria</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}/>
            </div>
            <div className="sidebar">Cart Items</div>

          </div>
        </main>
        <footer>
          All rights are reserved
        </footer>
      </div>
    );
  }
}

export default App;
