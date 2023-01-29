import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import Searchinput from '../Components/Searchinput';
import Scroll from '../Components/Scroll';
import Errorboundary from '../Components/Errorboundary'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then((resp) => {
            return resp.json();
        }).then(user => this.setState({ robots: user }))
    }

    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return robots.length === 0 ?
            <div>
                <Searchinput onsearchchange={this.onsearchchange} />
                <h1 className="tc">Loading......</h1>
            </div> 
                   :(<div className="tc">
                    <Searchinput onsearchchange={this.onsearchchange} />
                    <Scroll>
                        <Errorboundary>
                        <Cardlist robots={filteredRobots} />
                        </Errorboundary>
                    </Scroll>
                </div>
            )
    }
}



export default App;