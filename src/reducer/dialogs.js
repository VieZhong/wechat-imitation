const defaultValue = [];

for (let i = 0; i < 30; i++) {
	defaultValue.push({
		id: i + 1,
		name: '张三',
		data: [
			['你好，我是张三，很高兴认识你！', 1, 1528906851746],
			['你好，我是小夫。', 0, 1528906871746]
		]
	});
}

const dialogs = (state = defaultValue, action) => {
	switch (action.type) {
		default: return state;
	}
}

export default dialogs;