// # 服务端代码
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 8080});

// 连接池
var clients = [];
console.log('启动服务')
wss.on('connection', function(ws) {
    // 将该连接加入连接池
    clients.push(ws);
    console.log('加入')
    ws.on('message', function(message) {
        // 广播消息
        clients.forEach(function(ws1){
            if(ws1 == ws) {
                ws1.send(message);
            }
        })
    });

    ws.on('close', function(message) {
        // 连接关闭时，将其移出连接池
        console.log('退出',message)

        clients = clients.filter(function(ws1){
            return ws1 !== ws
        })
    });
});
