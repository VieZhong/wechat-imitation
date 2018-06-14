const defaultValue = [];

for (let i = 0; i < 30; i++) {
	defaultValue.push({
		id: i + 1,
		name: '张三',
		data: [
			['你好，我是张三，很高兴认识你！', 1, new Date().valueOf() - 7200000 * (i + 1)],
			['你好，我是小夫。有事找我吗？', 0, new Date().valueOf() - 7200000 * (i + 1) * 3]
		]
	});
}

const dialogs = (state = defaultValue, action) => {
	switch (action.type) {
		default: return state;
	}
}

export default dialogs;