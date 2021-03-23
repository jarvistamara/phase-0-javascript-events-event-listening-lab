const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}

const input2 = document.getElementById('input2');
input2.addEventListener('click', function() {
  alert('I was clicked!');
}); 