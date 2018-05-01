
const initState = [
	{
		id: 1,
		name: '代码大全',
		amount: 3,
	},
	{
		id: 2,
		name: '程序员修炼之道',
		amount: 2,
	},
	{
		id: 3,
		name: '计算机程序的构造和解释',
		amount: 4,
	},
	{
		id: 4,
		name: 'C程序设计语言',
		amount: 15,
	},
	{
		id: 5,
		name: '算法导论',
		amount: 1,
	},
	{
		id: 6,
		name: 'windows核心编程',
		amount: 4,
	},
	{
		id: 7,
		name: '浪潮之巅',
		amount: 0,
	},
]

export default function (state = initState, action){
	switch(action.type) {
		case 'BORROW_BOOK':
			{
			const idx = state.map( item => item.id ).indexOf( action.id );
			const book = state[idx];
			
			if( book.amount > 0 ) book.amount--;
			
			return [...state];
			}
		case 'GIVE_BACK':
			{
			const idx = state.map( item => item.id ).indexOf( action.id );
			const book = state[idx];
			
			book.amount++;
			
			return [...state];
			}
		case 'ADD_PRODUCT':
			return state.concat( action.data )
		case 'REMOVE_PRODUCT': 
			{
			const idx = state.map( item => item.cart_id ).indexOf( action.cart_id );
			state.splice(idx, 1);
			return [...state];
			}
		default:
			return state;	
	}
}