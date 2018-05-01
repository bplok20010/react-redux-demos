import './scss/index.scss';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';


class App extends React.Component{
	
	state = {
		component: Demo1	
	}
	
	onDemoChange(demo){
		let component = null;
		
		switch( demo ) {
			case 'demo2':
				component = Demo2;
				break;
			case 'demo3':
				component = Demo3;
				break;
			default:
				component = Demo1;
		}
		
		this.setState({
			component	
		});	
	}
	
	render(){
		
		const {component: Node} = this.state
		
		return (
			<div className="redux-demo">
				<header>
					<button onClick={this.onDemoChange.bind(this, 'demo1')}>Redux1(Demo1)</button>
					<button onClick={this.onDemoChange.bind(this, 'demo2')}>Redux2(Demo2)</button>
					<button onClick={this.onDemoChange.bind(this, 'demo3')}>Redux2(Demo3)</button>
				</header>
				<div style={{
					padding:　10,
					marginBottom: 10,
					background: '#fafbc1'	
				}}>
					{Node.description}
				</div>
				<hbody>
					<Node />
				</hbody>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('site_container'))

