const cityInput = document.querySelector(".cityName")
const button = document.querySelector(".button")
const image = document.querySelector(".weatherimg")
const temp = document.querySelector(".temp")
const cityName = document.querySelector(".city")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const errorImg = document.querySelector(".errorImg")
const result = document.querySelector(".result")


//console.log(errorImg)
//console.log(result)

async function weatherCall(city) {
    try {
        const apiKey = `2b1dd3752efd93b18ed6b7ae497cd59b`
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        if (!response.ok) {
            throw new Error("unable to weathe data")
        }
        const data = await response.json()
        console.log(data?.cod)
        //fill the temprater
        if (data.cod == 404) {
            errorImg.style.display = "flex"
            result.style.display = "none"
            console.log("vikas")
            return;
        } else {

            errorImg.style.display = "none"
            result.style.display = "flex"
            temp.innerHTML = `${Math.floor(data?.main?.temp - 273)}<sup>°C</sup>`
            wind.textContent = `${data?.wind?.speed}Km/H`
            humidity.textContent = `${data?.main?.humidity}%`
            cityName.innerHTML = `${data?.name}`

            switch (data?.weather[0]?.main) {
                case "Clouds":
                    image.src = "./image/cloud.png"
                    break;
                case "Rain":
                    image.src = "./image/rain.png"
                    break;
                case "Drizzle":
                    image.src = "./image/rain.png"
                    break;
                case "Snow":
                    image.src = "./image/snow.png"
                    break;
                case 'Haze':
                    image.src = './image/sun.png'
                    break;
                case 'Mist':
                    image.src = './image/suncloud.png'
                    break;

                default:
                    break;
            }
        }
        return;
    } catch (error) {
        console.error('your api not work ' + error.message)
        // console.log("error 404")
    }

}

button.addEventListener('click', () => {
    weatherCall(cityInput.value)
}
)

