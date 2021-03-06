$(document).ready(function() {
    namespace = '/dashboard';

    socket = io.connect('http://' + document.domain + ':' + location.port + namespace);
    
    socket.on('data', function(msg) {
        $('#sensor-range').text(msg.range);
        $('#sensor-angle').text(msg.angle);
    })

    socket.on('move', function(msg) {
        console.log(msg);
        $('#direction-indicator').html(get_glyphcon(msg.direction));
        $('#num-steps').html(msg.steps);
    });
});
