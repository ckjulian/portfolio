window.onload = function() {
    document.getElementById('overlay').style.display = 'block';
    };
    document.body.addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'none';
    });