import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';
//syncs firestore data with our state, knows about our db online
import {firestoreReducer} from 'redux-firestore';
//this is for user auth
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	//automatically syncs firestore to our state 
	// this is the first step
	firestore: firestoreReducer,
	//adding user auth
	firebase: firebaseReducer
})

 export default rootReducer;