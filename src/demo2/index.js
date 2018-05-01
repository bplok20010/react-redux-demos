import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducers from './reducers';
import {
	getRandom	
} from '../utils';

const store = createStore( reducers );

function BookItem(props){
	
	const book = props.book;
	
	const cls = ['book-item'];
	
	if( book.amount <= 0 ) {
		cls.push('book-item-disabled');	
	}
	
	return (
		<div className={ cls.join(' ') }>
			<div className="book-name">
				{book.name}
			</div>
			<div className="book-amount">
				{book.amount}
			</div>
			<div className="book-action" onClick={ props.onActionClick }>
				{
					props.actionText	
				}
			</div>
		</div>
	);	
}

export default class Demo1 extends React.Component{
	
	static description = 'combineReducers 使用 - 图书借阅'
	
	componentDidMount(){
		store.subscribe( (...a) => {
			this.forceUpdate();	
		} );		
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
	
	handleBorrow(book){
		
		if( book.amount <= 0 ) {
			return;	
		}
		
		store.dispatch({
			type: 'BORROW_BOOK',
			id: book.id,
			data: book,
		});	
	}
	
	handleGiveBack(book){
		console.log( book )
		
		store.dispatch({
			type: 'GIVE_BACK',
			id: book.id,
			data: book,
		});		
	}
	
	render(){
		const state = store.getState();
		console.log( state );
		return (
			<div className="book-shops">
				<div className="books">
					{
						state.product.map( book => <BookItem key={book.id} book={book} actionText="借书" onActionClick={this.handleBorrow.bind(this, book)} /> )	
					}
				</div>
				<div className="books-borrow">
					{
						state.cart.map( book => <BookItem key={book.id} book={book} actionText="还书" onActionClick={this.handleGiveBack.bind(this, book)} /> )	
					}
				</div>
			</div>
		);
	}
}