import {call, put, takeEvery} from "redux-saga/effects";
import {failed, succeed,} from '../reducers/apiSlice';
import fetcher from '../lib/fetcher'
import {setToastAlert} from "../reducers/toastAlertSlice";
// import SwaggerClient from 'swagger-client';
// const scheme = process.env.REACT_APP_API_PROTOCOL || 'https';

export default function* sagas() {
	yield takeEvery(({
		                 payload: {
			                 operationId = null
		                 }
	                 }) => {
		return typeof operationId === 'string' && operationId.length > 0;
	}, performApiAction);
}

function* performApiAction(action) {

	const {
		payload: {
			output = 'output',
			operationId = '',
			parameters = {}
		}
	} = action;

	try {

		let response = yield call(() => fetcher(operationId, parameters));

		/*
		// FOR swaggerClient Support
		const client  = yield call(() => SwaggerClient(
			`${process.env.REACT_APP_T3_API}/${process.env.REACT_APP_T3_API_BASE_PATH}/swagger.json`
		));

		let response = {};
			const result = yield call(() => client.execute({
				scheme,
				operationId,
				parameters
			}));

			response = result.obj;
		*/

		if (response.message !== null) {
			yield put(setToastAlert({
				type: response.status,
				message: response.message
			}));
		}

		yield put(succeed({
			response,
			output
		}));

	} catch (error) {

		yield put(failed({
			error: error.response
				? error.response.obj.error : {
					message: 'Api call failed or check your internet connection'
				}
		}));

	}

}
