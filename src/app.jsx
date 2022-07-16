import React, {Component} from 'react';
import Clock from './clock';
import './app.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			deadline : "24 April 2023",
			newDeadline : "None"
		}
	}

	changeDate(){
		this.setState({deadline:this.state.newDeadline});
	}

	render(){
		return (
			<div className="App">
				<div className="App-title">
					CountDown {this.state.deadline}
				</div>
				<Clock
				 deadline={this.state.deadline}
				/>
				<div>
					<input type="text" placeholder="New Date"
					onChange={event=>{this.setState({newDeadline:event.target.value})}}
					/>
					<button onClick={()=> {this.changeDate()}}>Submit</button>
				</div>
			</div>
		)
	}
}

export default App;