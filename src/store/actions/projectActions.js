export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore}) => {
		// make async call to db
		const firestore = getFirestore();
		// this will add a new document to our firestore
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		firestore.collection('projects').add({
			// this whole document will be added to our collection
			...project,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId,
			createdAt: new Date()
		}).then(() => {
			// when the document is added, dispatch this method
			dispatch({
				type: 'CREATE_PROJECT',
				project,
				//when this action is called, it will add to the db
			})}).catch((err) => {
				dispatch({
					type: 'CREATE_PROJECT_ERROR',
					err
				})
				console.log(err)
			})
		}
	}
