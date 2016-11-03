$(document).ready(function() {
    namespace = '/robot';

    socket = io.connect('http://' + document.domain + ':' + location.port + namespace);
    
    $('#sensor-range').on('change', function() {
        socket.emit('data', {range:$('#sensor-range').val(), });
        return false;
    });

    $('#sensor-range').on('change', send_data);
    $('#sensor-angle').on('change', send_data);


    socket.on('move', function(msg) {
        console.log(msg);
        $('#direction-indicator').html(get_glyphcon(msg.direction));
        $('#num-steps').html(msg.steps);
    });
});
