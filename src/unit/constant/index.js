
export const hostname = process.env.NODE_ENV == 'production' ? 'viezhong.top' : 'localhost:8081';
export const prototal = process.env.NODE_ENV == 'production' ? 'wss' : 'ws';

export const ws = new WebSocket(`${prototal}://${hostname}/api/communication/chat`);

ws.onopen = function () {
    const user = JSON.parse(window.sessionStorage.getItem('userInfo'));
    if(!user || !user.id) {
        return;
    }
    ws.send(JSON.stringify({
        type: 'connection',
        by: JSON.parse(window.sessionStorage.getItem('userInfo')).id
    }));
}