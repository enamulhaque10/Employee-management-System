import * as React from 'react';
import {useSelector} from "react-redux";
import {selectToastAlert} from "../../../reducers/toastAlertSlice";
import {toast, ToastContainer} from "react-toastify/dist/index";
import 'react-toastify/dist/ReactToastify.css';

const ToastAlert = (props) => {

	const {type, message} = useSelector(selectToastAlert);

	if (type !== undefined && type !== '') {
		switch (type) {
			case 'info':
				toast.info(message);
				break;
			case 'success':
				toast.success(message);
				break;
			case 'warning':
				toast.warning(message);
				break;
			case 'warn':
				toast.warn(message);
				break;
			case 'error':
				toast.error(message);
				break;
			case 'dark':
				toast.dark(message);
				break;
			case 'basic':
				toast(message);
				break;
			default:
		}
	}

	return (
		<ToastContainer/>
	)

};

export default ToastAlert;