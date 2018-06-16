# wechat-imitation
微信PC端的简单模拟版

前端UI+数据流方面，主要用 react + redux 实现，目前把原型的交互基本做出来了。

数据交互方面，用 nodejs 搭后台，以便可以交互，聊天信息用 websocket 进行交互。

### 在线例子

点击 http://viezhong.top/communication 进行试玩（未做兼容性测试，请在Chrome或Firefox上打开）。

测试账号1：vie，密码：123456 （昵称：旧日憾事）

测试账号2：xiaofu，密码：123456 （昵称：小夫）

两个测试账号在不同浏览器间进行实时通信。

### 安装并运行
建议nodeJS版本在8.2.1及以上

`
npm install
`
运行时，需要把src/unit/constant.js中的hostname修改成localhost，并需要后台配合进行交互。

本人github写了一个后台的例子，可供参考：https://github.com/VieZhong/back_end_koajs
`
npm run dev
`
