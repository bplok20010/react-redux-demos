import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducer from './reducer';
import {
	getRandom	
} from '../utils';

const defaults = {
	dataset: [
		{nick: getRandom(), age: 18}
	]
};

const store = createStore( reducer, defaults );
export default class Demo1 extends React.Component{
	
	static description = 'createStore 基础功能使用'
	
	componentDidMount(){
		store.subscribe( (...a) => {
			this.forceUpdate();	
		} );		
		
		this.idx = 1;
	/*
		setInterval( () => {
			store.dispatch({
				type: 'abc'	
			});	
		}, 1000 )*/
	}
	
	onAddHandler = () => {
		store.dispatch({
			type: 'ADD_ITEM',
			data: {
				nick: getRandom(),
				age: 10 + this.idx++	
			}	
		});	
	}
	
	onRemoveHandler(nick){
		store.dispatch({
			type: 'REMOVE_ITEM',
			nick,
		});		
	}
	
	onSearchHandler = (e) => {
		const value = e.target.value;	
		store.dispatch({
			type: 'SEARCH_ITEM',
			searchNick: value,
		});	
	}
	
	render(){
		const state = store.getState();
		const users = (state.searchResult || state.users).slice(-10);
		
		const list = users.map( (item, i) => <div className="user-item" key={i}>{item.nick}({item.age})<a href="javascript:;" className="del-btn" onClick={this.onRemoveHandler.bind(this, item.nick)}>删除</a></div> )
		
		return <Fragment>
			<div>
				<button onClick={this.onAddHandler}>
				+新增
				</button>
				总计: { 'searchTotal' in  state ? state.searchTotal :　state.total}
			</div>
			<div>
				<input type="text" placeholder="搜索..."  value={state.searchNick} onChange={this.onSearchHandler} />
			</div>
			{
				state.total > users.length ? <div>more...( { state.total - users.length } )</div> : null
			}
			{list}
		</Fragment>;
	}
}