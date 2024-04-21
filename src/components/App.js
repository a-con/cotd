import React from "react";
import Header from "./Header";
import Order from "./Inventory";
import Inventory from "./Order";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        console.log("Adding a fish!")
    }; 
    render() {
        return (  
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Inventory addFish={this.addFish} />
                <Order />
            </div>
        )
    }
}

export default App;
