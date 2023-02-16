let input_city = document.getElementById('cityinput');
let input_btn = document.getElementById('btn');
let output_city = document.getElementById('City');
let output_temp = document.getElementById('Temperature');
let output_desc = document.getElementById('Description');
let od_key = "641d8a6132c2f05d70e36e04bdf9f063";

input_btn.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +input_city.value + '&appid='+od_key )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            output_city.innerHTML = 'City : ' + data.name;
            output_temp.innerHTML = 'Temperature : ' + data.main.temp;
            output_desc.innerHTML = 'Description : ' + data.weather[0].description
        })
})