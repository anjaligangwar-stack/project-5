function convertTemperature(){
  const input = document.getElementById("temperature").value;
  const scale = document.getElementById("scale").value;

  if(input === ""){
    alert("please enter a temperature.");
    return;
  }

  let celsius, fahrenheit, kelvin;
  const temp = parseFloat(input);

  switch(scale){
    case "celsius":
      celsius = temp;
      fahrenheit = (temp * 9/5) + 32;
      kelvin = temp + 273.15;
      break;

    case "fahrenheit":
      celsius = (temp - 32) * 5/9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
      break;

    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = celsius * 9/5 + 32;
      kelvin = temp;
      break;
  }

  document.getElementById("celsius").innerText = celsius.toFixed(2) + " °C";
  document.getElementById("fahrenheit").innerText = fahrenheit.toFixed(2) + " °F";
  document.getElementById("kelvin").innerText = kelvin.toFixed(2) + " K";
}

function resetConverter(){
    document.getElementById("temperature").value = "";
    document.getElementById("scale").selectedIndex = 0 ;
    document.getElementById("celsius").innerHTML = " 0.00 ℃";
    document.getElementById("fahrenheit").innerHTML = "32.00 ℉";
    document.getElementById("kelvin").innerHTML = " 273.15 k";
}
