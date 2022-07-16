import React, {Component} from 'react';
import './app.css';

class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {
			days : 0,
			hours : 0,
			minutes : 0,
			seconds : 0
		}
	}

	//react life cycle hooks
	componentWillMount(){
		this.timeUntil(this.props.deadline);
	}

	componentDidMount(){
		setInterval(()=>{this.timeUntil(this.props.deadline)}, 1000);
	}

	timeUntil(deadline){
		const time = Date.parse(deadline) - Date.parse(new Date());
		this.setState({
			seconds : Math.floor((time/1000)%60),
			minutes : Math.floor((time/(1000*60))%60),
			hours : Math.floor((time/(1000*60*60))%24),
			days : Math.floor((time/(1000*60*60*24)))
		})

	}

	render(){
		return(
			<div>
				<div className='clock-days'>{this.state.days} days</div>
				<div className='clock-hours'>{this.state.hours} hours</div>
				<div className='clock-minutes'>{this.state.minutes} minutes</div>
				<div className='clock-seconds'>{this.state.seconds} Seconds</div>
			</div>
		)
	}
}

export default Clock;