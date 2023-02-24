const socket = new WebSocket('ws://localhost:3000');


function login() {
    const username = $("#uuid").val();
    const password = $("#password").val();
    socket.send(JSON.stringify({ type: 'login', username, password }));
}

socket.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    if (data.type === 'login') {
        if (data.success) {
            window.location.href = '/panel';
        } else {
            alert("Login failed");
        }
    }
});  