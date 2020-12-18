const initState = {
	authError: null,
}

const authReducer = (state = initState, action) => {
	switch(action.type) {
		case 'LOGIN_ERROR':
			console.log('LOGIN ERROR')
			return {
				...state,
				authError: 'login failed'
			}
		case 'LOGIN_SUCCESS':
			console.log('LOGIN SUCCESS')
			return {
				...state,
				authError: null
			}
		case 'SIGNOUT_SUCCESS':
			console.log('SIGNED OUT')
			return state;
			default:
				return state;
	}
}

export default authReducer