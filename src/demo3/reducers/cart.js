
function filterItems( users, st ){
	let searchUsers = users;
	if( st ) {
		searchUsers = users.filter( item => item.nick.indexOf( st ) > -1 );	
	}

	return {
		users: searchUsers,
		total: searchUsers.length
	}
}

function undef(v, d){
	return v === undefined ? d : v;	
}

export default function (state = [], action){
	switch(action.type) {
		case 'REMOVE_CART':
			{
			const idx = state.map( item => item.id ).indexOf( action.id );
			if( idx == -1 ) return state;
			
			state.splice(idx, 1);
			
			return [...state];
			}
		case 'ADD_CART':
			{
			const idx = state.map( item => item.id ).indexOf( action.id );
			let book;
			if( idx == -1 ) {
				book = {
					id: action.data.id,
					name: action.data.name,
					price: action.data.price,
					amount: 0	
				}
				state.push( book );
			} else {
				book = state[idx];
			}
			
			book.amount++;
			
			return [...state];
			}
		default:
			return state;	
	}
}