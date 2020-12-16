export const createProject = (project) => {
	return (dispatch, getState) => {
		// make async call to db
		dispatch({
			type: 'CREATE_PROJECT',
			project,
			//when this action is called, it will add to the db
		})
	}
}