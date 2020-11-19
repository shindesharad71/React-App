import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData,
	};
};

export const purchaseBurgerFail = (error) => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAILED,
		error,
	};
};

export const purchaseBurgerStart = () => {
	return { type: actionTypes.PURCHASE_BURGER_START };
};

export const purchaseBurger = (orderData) => {
	return (dispatch) => {
		dispatch(purchaseBurgerStart());
		axios
			.post('/orders.json', orderData)
			.then((res) => {
				dispatch(purchaseBurgerSuccess(res.data.name, orderData));
			})
			.catch((err) => {
				dispatch(purchaseBurgerFail(err));
			});
	};
};

export const purchaseInit = () => {
	return { type: actionTypes.PURCHASE_INIT };
};

export const fetchOrdersSuccess = (orders) => {
	return { type: actionTypes.FETCH_ORDERS_SUCCESS, orders };
};

export const fetchOrdersFail = (error) => {
	return { type: actionTypes.FETCH_ORDERS_FAIL, error };
};

export const fetchOrdersStart = () => {
	return { type: actionTypes.FETCH_ORDERS_START};
};