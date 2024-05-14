import React, {useEffect} from 'react'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";
import {selectToastAlert, setToastAlert} from "../../reducers/toastAlertSlice";
import {selectDeleteModal, setDeleteModal} from "../../reducers/deleteModalSlice";
import {useDispatch, useSelector} from "react-redux";
import {DeleteModal, ToastAlert} from "../../components/notification";

import './Default.scss';

const Default = () => {

	const dispatch = useDispatch();

	const {type} = useSelector(selectToastAlert);
	const {deleteApi} = useSelector(selectDeleteModal);

	useEffect(() => {

		dispatch(setToastAlert({
			type: '',
			message: ''
		}));

		dispatch(setDeleteModal({
			title: '',
			message: ''
		}));

	}, [type, deleteApi]);

	return (
		<>
			<Sidebar/>
			<main className="content">
				<Navbar/>
				<Content/>
				{/*<Footer />*/}
			</main>
			<ToastAlert/>
			<DeleteModal/>
		</>
	);

};

export default Default;