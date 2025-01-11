document.addEventListener('DOMContentLoaded', function () {
    fetch('content/prices.md')
        .then(response => response.text())
        .then(data => {
            const html = marked.parse(data);
            document.getElementById('prices').innerHTML += html;
        });

    fetch('content/gallery.md')
        .then(response => response.text())
        .then(data => {
            const html = marked.parse(data);
            document.getElementById('gallery').innerHTML += html;
        });
});
