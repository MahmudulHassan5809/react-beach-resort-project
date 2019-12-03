import {
	GET_ROOMS,
	FEATURED_ROOMS,
	SET_LOADING,
	SET_SINGLE_ROOM,
	FILTER_ROOMS,
	SET_FILTERS
} from '../actions/types';

const initialState = {
	rooms: [],
	sortedRooms:[],
	featuredRooms:[],
	singleRoom: {},
	loading: false,
	error: null,
	type: 'all',
	capacity: 1,
	price:0,
	minPrice:0,
	maxPrice:0,
	minSize:0,
	maxSize:0,
	breakFast: false,
	pets: false
};


export default(state = initialState,action) => {
	switch (action.type) {
		case GET_ROOMS:

			return {
				...state,
				rooms: action.payload.rooms,
				sortedRooms: action.payload.rooms,
				price: action.payload.price,
				maxPrice: action.payload.maxPrice,
				maxSize: action.payload.maxSize,
				loading: false
			};
		case FEATURED_ROOMS:
			return {
				...state,
				featuredRooms: action.payload,
				loading: false
			};
		case SET_SINGLE_ROOM:
			return {
				...state,
				singleRoom: state.rooms.find(room => room.slug === action.payload),
				loading: false
			};
		case SET_FILTERS:
			return {
				...state,
				type: action.payload.name === 'type' ? action.payload.value : state.type,
				capacity: action.payload.name === 'capacity' ? action.payload.value : state.capacity,
				price: action.payload.name === 'price' ? action.payload.value : state.price,
				minSize: action.payload.name === 'minSize' ? action.payload.value : state.minSize,
				maxSize: action.payload.name === 'maxSize' ? action.payload.value : state.maxSize,
				loading: false
			};
		case FILTER_ROOMS:
			return {
				...state,
				sortedRooms : state.type === 'all' && Number(state.capacity) === 1 && Number(state.price) === Number(state.maxPrice) && Number(state.minSize) === 0 && Number(state.maxSize) === 1000 && state.breakFast !== true  && state.pets !== true ? state.rooms : state.type === 'all' || Number(state.capacity) !== 1 ? state.rooms.filter(room => room.capacity >= Number(state.capacity) && room.price <= state.price && room.size >= state.minSize && room.size <= state.maxSize): state.rooms.filter(room => room.capacity >= Number(state.capacity) && room.type === state.type && room.price <= state.price && room.size >= state.minSize && room.size <= state.maxSize),
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
