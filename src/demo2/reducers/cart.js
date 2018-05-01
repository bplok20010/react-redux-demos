
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
		case 'BORROW_BOOK':
			{
			const idx = state.map( item => item.id ).indexOf( action.id );
			let book;
			if( idx == -1 ) {
				book = {
					id: action.data.id,
					name: action.data.name,
					amount: 0	
				}
				state.push( book );
			} else {
				book = state[idx];
			}
			
			book.amount++;
			
			return [...state];
			}
		case 'GIVE_BACK':
			{
			const idx = state.map( item => item.id ).indexOf( action.id );
			const book = state[idx];
			
			book.amount--;
			
			if( book.amount <= 0 ) {
				state.splice(idx,1);	
			}
			
			return [...state];
			}
		default:
			return state;	
	}
}