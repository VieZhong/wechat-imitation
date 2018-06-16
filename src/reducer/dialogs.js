import * as reducerType from '../unit/reducerType';

const defaultValue = [];

const dialogs = (state = defaultValue, action) => {
	switch (action.type) {
		case reducerType.GET_DIALOGS:
			return action.payload;
		case reducerType.UPDATE_DIALOGS:
			const result = [];
			state.forEach(({id, name, data}) => {
				if(id == action.payload.id) {
					data.push([action.payload.word, 0, action.payload.time]);
					result.unshift({id, name, data});
				} else {
					result.push({id, name, data});	
				}
			});
			return result;
		case reducerType.RECEIVE_MESSAGE:
			const res = [];
			state.forEach(({id, name, data}) => {
				if(id == action.payload.by) {
					data.push([action.payload.word, 1, action.payload.time]);
					res.unshift({id, name, data});
				} else {
					res.push({id, name, data});	
				}
			});
			return res;
		default: return state;
	}
}

export default dialogs;