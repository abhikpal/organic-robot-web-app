
function send_data() {
    socket.emit('data', { range:$('#sensor-range').val(), angle:$('#sensor-angle').val() });
    return false;
}

function send_controls(dir, stp) {
    socket.emit('move', {direction:dir, steps:stp});
    return false;
}

function get_glyphcon(choice) {
    if (choice === 'f') {
        return '<span class="glyphicon glyphicon-massive glyphicon-circle-arrow-up" aria-hidden="true"></span>';
    }

    if (choice === 'b') {
        return '<span class="glyphicon glyphicon-massive glyphicon-circle-arrow-down" aria-hidden="true"></span>';
    }

    if (choice === 'l') {
        return '<span class="glyphicon glyphicon-massive glyphicon-circle-arrow-left" aria-hidden="true"></span>';
    }

    if (choice === 'r') {
        return '<span class="glyphicon glyphicon-massive glyphicon-circle-arrow-right" aria-hidden="true"></span>';
    }
    return '<span class="glyphicon glyphicon-massive glyphicon-asterisk" aria-hidden="true"></span>'
}
