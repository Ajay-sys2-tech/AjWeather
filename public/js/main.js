const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal ===""){
        city_name.innerText = `Please enter the city name before you search`;
        datahide.classList.add("data_hide");
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f73299fbe586286955e733cd41b2329b`;
            const response = await fetch(url);
            const data = await response.json();

            const arrData = [data];

            const kelvin = arrData[0].main.temp;
            const celsius = kelvin -273.15;
            temp.innerText = celsius.toFixed(2);
            temp_status.innerText = arrData[0].weather[0].main;

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
             
            const tempStatus = arrData[0].weather[0].main;
            if (tempStatus == "Sunny") {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
              } else if (tempStatus == "Rainy") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } else {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
              }
        
            datahide.classList.remove("data_hide");
            console.log(arrData[0].main.temp);
        }
        catch{
            city_name.innerText = `Please enter the correct city name `;
            datahide.classList.add("data_hide");
        }

    }
}

submitBtn.addEventListener('click', getInfo);