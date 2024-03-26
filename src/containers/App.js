import React from 'react';
import CardList from '../Components/CardList.js';
import Search from '../Components/search';
import Scroll from '../Components/Scroll';
import './App.css';


 class App extends React.Component {
 	constructor(){
 		super()
 		this.state = {
 			robots: [],
 			searchfield: ''
 		}
 	}
 	componentDidMount(){
 		fetch('https://jsonplaceholder.typicode.com/users').then(response =>  response.json())
 		.then(users => this.setState({robots: users}));
 	}
 	onSearchChange = (event) => {
 		this.setState({searchfield: event.target.value});
 	}
 	render(){
 		const {robots , searchfield} = this.state;
 		const filtereRobots = robots.filter(robot => {
 			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
 		})
 		if (!robots.length){
 			return <h1>loading</h1>
 		}else{
		return (
			<div className = "tc">
				<h1 className ='f1' >RoboFrieands</h1>
				<Search searchChange = {this.onSearchChange}/>
				<hr/>
				<Scroll>	
				 <CardList robots = {filtereRobots}/>
				</Scroll> 
			</div>
		);
	    }
	}
}

export default App;