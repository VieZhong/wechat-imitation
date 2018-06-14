import * as reducerType from '../unit/reducerType';

const defaultValue = [];

for (let i = 0; i < 30; i++) {
	defaultValue.push({
		id: i + 1,
		name: '张三' + i * 3,
		data: [
			['你好，我是张三，很高兴认识你！', 1, new Date().valueOf() - 7200000 * (i + 1)],
			['你好，我是小夫。有事找我吗？', 0, new Date().valueOf() - 7200000 * (i + 1) * 3]
		]
	});
}

const dialogs = (state = defaultValue, action) => {
	switch (action.type) {
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
		default: return state;
	}
}

export default dialogs;