
async function getData(){
    let cityName=document.getElementById('name').value;
   
    let url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1801d39372c536d4a4f266105a47e49c`);
   
    let data=await url.json();
    
    console.log(data);
    
    document.querySelector(".container1").style.display = "block";
    document.getElementById("cityname").innerHTML=data.name;
    document.getElementById("temp").innerHTML=data.main.temp;
    document.getElementById("pressure").innerHTML=data.main.pressure;
    document.getElementById("humidity").innerHTML=data.main.humidity;
    let weather=data.weather[0].main.toLowerCase();
    switch (weather) {
        case "clouds":
            document.body.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/05/13/26/73/360_F_513267391_QEmNGeOFLLqrILTnoq21dReUPp5UsoNr.jpg')";
            break;
        case "clear":
            document.body.style.backgroundImage = "url('https://as1.ftcdn.net/jpg/01/77/28/86/1000_F_177288615_lAQyv5Im46fmPD7GWa9R5i1kmxXVM6ey.jpg')";
            break;
        case "rain":
            document.body.style.backgroundImage = "url('https://i.pinimg.com/1200x/7f/53/0f/7f530f6e2583aa24c733232140dbbd55.jpg')";
            break;
        case "sunny":
            document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfav-S7nmyC_r-QMdnPLDgduVatlBDpSXxKQ&s')";
            break;
        case "thunderstorm":
            document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/517643357/photo/thunderstorm-lightning-with-dark-cloudy-sky.jpg?s=612x612&w=0&k=20&c=x3G3UijRPVGFMFExnlYGbnQtnlH6-oUoMU48BTkc0Os=')";
            break;
        default:
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/01/11/08/53/sky-5907605_1280.jpg')";
    }
    let iconCode = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    let iconImg = document.getElementById("weather-icon");
        iconImg.src = iconUrl;
        iconImg.alt = data.weather[0].description;

}
