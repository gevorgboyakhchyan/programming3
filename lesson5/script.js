function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var but = document.getElementById('delete');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function keySubmit(evt) {
        if (evt.key == 13) {
            var val = input.value;
            if (val != "") {
                socket.emit("send message", val);
            }
        }
    }

    button.onclick = handleSubmit;
    but.onclick = deleteMesseges;
    window.onkeydown = keySubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
    function deleteMesseges() {
        socket.emit('jnjel');
    }
    socket.on('display message', handleMessage);
    socket.on('jnjeq tagery', deleteTags);
    function deleteTags() {
        var element = document.getElementsByTagName('p');
        for (var i in element) {
            element[0].remove();
            if (element.length == 0) {
                break;
            }
        }
    }
} // main closing bracket

window.onload = main;
