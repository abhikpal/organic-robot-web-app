$(document).ready(function() {
    namespace = '/controller';

    socket = io.connect('http://' + document.domain + ':' + location.port + namespace);
    
    socket.on('data', function(msg) {
        $('#sensor-range').text(msg.range);
        $('#sensor-angle').text(msg.angle);
    });

    $('#move-f').on('click', function() {
        current_direction = 'f';
        send_controls(current_direction, $('#num-steps').val())
        $('#direction-indicator').html(get_glyphcon(current_direction));
        return false;
    });
    $('#move-b').on('click', function() {
        current_direction = 'b';
        send_controls(current_direction, $('#num-steps').val())
        $('#direction-indicator').html(get_glyphcon(current_direction));
        return false;
    });
    $('#move-l').on('click', function() {
        current_direction = 'l';
        send_controls(current_direction, $('#num-steps').val())
        $('#direction-indicator').html(get_glyphcon(current_direction));
        return false;
    });
    $('#move-r').on('click', function() {
        current_direction = 'r';
        send_controls(current_direction, $('#num-steps').val())
        $('#direction-indicator').html(get_glyphcon(current_direction));
        return false;
    });

    $('#num-steps').on('change', function() {
        send_controls(current_direction, $('#num-steps').val())
        return false;
    });

});

current_direction = 'n';
