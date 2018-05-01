
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


export default function (state = { dataset: [] }, action){
	switch(action.type) {
		
		case 'ADD_ITEM':
			const newUsers = state.dataset.concat( action.data );
			
			return {
				...state,
				dataset: newUsers,
				...filterItems(newUsers, undef(action.searchNick , state.searchNick))
			}
		case 'REMOVE_ITEM': 
			const idx = state.dataset.map( item => item.nick ).indexOf( action.nick );
			state.dataset.splice(idx, 1);
			return {
				...state,
				//users: newUsers,//or [...newUsers]
				...filterItems(state.dataset, undef(action.searchNick , state.searchNick))
			}
		default:
			return {
				...state,
				searchNick: action.searchNick,
				...filterItems(state.dataset, undef(action.searchNick , state.searchNick))
			};	
	}
}