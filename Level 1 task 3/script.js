function convertTemperature() {
  var temperature = document.getElementById('temperature').value;
  var scale = document.getElementById('scale').value;
  var result = document.getElementById('result');
  
  if (scale === 'celsius') {
      var fahrenheit = (temperature * 9/5) + 32;
      var kelvin = parseFloat(temperature) + 273.15;
      result.innerHTML = temperature + " &#8451; = " + fahrenheit + " &#8457; = " + kelvin + " K";
  } else if (scale === 'fahrenheit') {
      var celsius = (temperature - 32) * 5/9;
      var kelvin = (temperature - 32) * 5/9 + 273.15;
      result.innerHTML = temperature + " &#8457; = " + celsius + " &#8451; = " + kelvin + " K";
  } else if (scale === 'kelvin') {
      var celsius = temperature - 273.15;
      var fahrenheit = (temperature - 273.15) * 9/5 + 32;
      result.innerHTML = temperature + " K = " + celsius + " &#8451; = " + fahrenheit + " &#8457;";
  }
}