import React from 'react';

import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Order from '../Orders/Orders';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <Inventory />
            <NewOrder />
            <Order />
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
