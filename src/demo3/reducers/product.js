
const initState = [
	{
		id: 1,
		name: '代码大全',
		price: 30,
	},
	{
		id: 2,
		name: '程序员修炼之道',
		price: 20,
	},
	{
		id: 3,
		name: '计算机程序的构造和解释',
		price: 40,
	},
	{
		id: 4,
		name: 'C程序设计语言',
		price: 15,
	},
	{
		id: 5,
		name: '算法导论',
		price: 100,
	},
	{
		id: 6,
		name: 'windows核心编程',
		price: 40,
	},
	{
		id: 7,
		name: '浪潮之巅',
		price: 50,
	},
]

export default function (state = initState, action){
	switch(action.type) {
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