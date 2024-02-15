let submitBtnEl = document.getElementById('submitBtn');
let searchBarEl = document.getElementById('searchBar');

let cityDetailsContainerEl = document.getElementById('cityDetailsContainer');

cityDetailsContainerEl.style.display = 'none';

let cityNameEl = document.getElementById('cityName')
let cityConditionEl = document.getElementById('cityCondition');
let cityTempEl = document.getElementById('cityTemp');
let cityWindSpeedEl = document.getElementById('cityWindSpeed');

let apiKey = 'c965927c0f19842ae76ebe882fce0792'

submitBtnEl.addEventListener('click', () => {
    let searchBarElValue = searchBarEl.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBarElValue}&appid=${apiKey}`

    if (searchBarElValue !== ''){
        const getWheather = async () => {
            const response = await fetch(url);
            const data = await response.json()
            
            if (response.ok){
                console.log(data)
                const cityNameText = data.name
                const descriptionText = data.weather[0].description
                const temperatureText = data.main.temp
                const windSpeedText = data.wind.speed

                const convertedTemp = (temperatureText - 273).toFixed(2)
                
                cityDetailsContainerEl.style.display = 'flex'

                cityNameEl.textContent = cityNameText;
                cityConditionEl.textContent = descriptionText;
                cityTempEl.textContent = convertedTemp;
                cityWindSpeedEl.textContent = windSpeedText;

            }
            
            else{
                alert('You"ve Entered Wrong City name ')
            }
        }
    
        getWheather()
    }else{
        alert('Enter the City Name')
    }
    
})

