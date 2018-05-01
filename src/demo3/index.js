import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers';
import {
	getRandom	
} from '../utils';

import * as actions from './actions';

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
			<div className="book-price">
				{book.price} { book.amount ? ' x ' + book.amount : null } RMB
			</div>
			<div className="book-action" onClick={ props.onActionClick }>
				{
					props.actionText	
				}
			</div>
		</div>
	);	
}

function handleBuy(){
		
}

function BookList_(props){
	console.log('render booklist')
	return (
		<div className="books">
			{
				props.data.map( book => <BookItem key={book.id} book={book} actionText="购买" onActionClick={() => {
					props.handleAddCart(book.id, book);
				}} /> )	
			}
		</div>
	);	
}

function CartList_(props){
	console.log('render cartlist')
	return (
		<div className="books-borrow">
			{
				props.data.map( book => <BookItem key={book.id} book={book} actionText="删除" onActionClick={() => {
					props.handleRemoveCart(book.id);
				}} /> )	
			}
		</div>
	);	
}

function mapStateToProps(state, ownProps){
	return {
		data: state.product		
	};	
}

const BookList = connect(mapStateToProps, actions)(BookList_);
const CartList = connect((state, ownProps) => ({
					data: state.cart,
				}), actions)(CartList_);

class _AddProductTools extends React.Component {
	
	state = {
		visible: false,
		pName: '',
		pPrice: 0,
	}
	
	handleSubmit = () => {
		const { pName, pPrice } = this.state; 
		this.setState({
			visible: false,
			pName: '',
			pPrice: 0,	
		}, () => {
			const { handleAddProduct } = this.props;
			
			const data = {
				name: pName,
				price: pPrice,
				id: getRandom()
			};
			
			handleAddProduct( data );
			
		});
	}
	
	handleCancel = () => {
		this.setState({
			visible: false,
			pName: '',
			pPrice: 0,	
		});
	}
	
	renderProductForm(){
		const { pName, pPrice } = this.state;
		
		return (
			<div className="product-form">
				<h3>
				新增产品
				</h3>
				<div>
				<label>
					名称： <input value={pName} onChange={ e => this.setState({ pName: e.target.value }) } />
				</label>
				</div>
				<div>
					<label>
						价格： <input value={pPrice} onChange={ e => this.setState({ pPrice: e.target.value }) } />
					</label>
				</div>
				<div className="tools">
					<button onClick={ this.handleSubmit }>确定</button>
					<button onClick={ this.handleCancel }>取消</button>
				</div>
			</div>
		);	
	}
	
	render(){
		const { visible } = this.state;
		
		return (
			<div className="product-tools">
				<button onClick={() => this.setState({ visible: true }) }>新增</button>
				{
					visible ? this.renderProductForm() : null
				}
			</div>
		);	
	}	
}

const AddProductTools = connect(null, actions)(_AddProductTools);

//计算总价
function CartMoney_(props){
	const data = props.data;
	return <div style={ { textAlign: 'right' } }>
		总计: 
		{
			data.reduce( ( total, item) => total + item.amount * item.price , 0 )	
		}
	</div>	
}
const CartMoney = connect((state, ownProps) => ({
					data: state.cart,
				}), actions)(CartMoney_);

export default class Demo1 extends React.Component{
	
	static description = 'react-redux 使用 - 购物车'
	
	render(){
		return (
			<Provider store={store}>
				<Fragment>
					<AddProductTools />
					<div className="book-shops">
						<BookList />
						<CartList />
					</div>
					<CartMoney />
				</Fragment>
			</Provider>
		);
	}
}