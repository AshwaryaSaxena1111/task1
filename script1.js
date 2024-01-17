/// Function to change the color of a specific div
function changeColor(divId, color) {
    document.getElementById(divId).style.backgroundColor = color;
  }

  // Event listeners for individual div buttons
  document.getElementById('btn1').addEventListener('click', function () {
    changeColor('box1', getRandomColor());
  });

  document.getElementById('btn2').addEventListener('click', function () {
    changeColor('box2', getRandomColor());
  });

  document.getElementById('btn3').addEventListener('click', function () {
    changeColor('box3', getRandomColor());
  });

  document.getElementById('btn4').addEventListener('click', function () {
    changeColor('box4', getRandomColor());
  });

  // Event listener for the common button to change all colors
  document.getElementById('btnAll').addEventListener('click', function () {
    changeColor('box1', getRandomColor());
    changeColor('box2', getRandomColor());
    changeColor('box3', getRandomColor());
    changeColor('box4', getRandomColor());
  });

  // Function to generate a random color
  function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  