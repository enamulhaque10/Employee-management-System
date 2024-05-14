import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import ApiReducer from './apiSlice';
import ToastAlertReducer from './toastAlertSlice';
import DeleteModalReducer from './deleteModalSlice';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
	...getDefaultMiddleware(),
	sagaMiddleware
];

export default configureStore({
	reducer: {
		api: ApiReducer,
		toastAlert: ToastAlertReducer,
		deleteModal: DeleteModalReducer
	},
	middleware
});

sagaMiddleware.run(sagas);
