
// export const hostname = 'localhost:8081';
export const hostname = 'viezhong.top';

export const ws = new WebSocket(`ws://${hostname}/api/communication/chat`);

ws.onopen = function () {
    ws.send(JSON.stringify({
        type: 'connection',
        by: JSON.parse(window.sessionStorage.getItem('userInfo')).id
    }));
}