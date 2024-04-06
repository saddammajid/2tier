window.onload = function() {
    fetch('https://cqypt032g9.execute-api.us-east-1.amazonaws.com/prod')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitorCount').innerText = 'Visitor Count: ' + data.count;
        })
        .catch(error => console.error('Error:', error));
};
