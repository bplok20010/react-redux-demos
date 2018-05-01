
export function handleAddProduct(data){
	
	return {
		type: 'ADD_PRODUCT',
		data	
	}	
}

export function handleAddCart(id, data){
	return {
		type: 'ADD_CART',
		id,
		data	
	}	
}

export function handleRemoveCart(id){
	return {
		type: 'REMOVE_CART',
		id	
	}	
}