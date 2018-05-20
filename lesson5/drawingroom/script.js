function setup()
{
    createCanvas(500,500);
    background("#acacac");
}
function mouseDragged() {
    socket.emit('nkarel',[mouseX,mouseY]);
}
function main() {
    socket = io.connect('http://localhost:3000');
    socket.on('nkare',drawEllipse);
    function drawEllipse(d)
    {
        ellipse(d[0],d[1],20,20);
    }
}
window.onload = main;
