//4ad9e48137d64530b6f9e2bab28cea65

const wBlock = document.querySelector('#weather')

async function load(){
	wBlock.innerHTML = `
	<div class='weather__loading'>
		loading...
	</div>`

	const server  = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Minsk&appid=4ad9e48137d64530b6f9e2bab28cea65'
	const resp 	  = await fetch(server)
	const respRes = await resp.json()

	if (resp.ok) {
		getWeather(respRes)
	} 
}

function getWeather(data){
	const loc = data.name
	const temp = Math.round(data.main.temp)
	const fL = Math.round(data.main.feels_like)
	const wStat = data.weather[0].main
	const wIcon = data.weather[0].icon;
	
	const template = `
		<div class="weather" id="weather">
			<div class="weather__header">
				<div>
					<div class="weather__city">${loc}</div>
					<div class="weather__status">${wStat}</div>
				</div>
				<div class="weather__icon">
					<img src="https://openweathermap.org/img/w/${wIcon}.png">
				</div>
			</div>
			<div class="weather__temp">${temp}</div>
			<div class="weather__feels-like">Ощущается как ${fL}</div>
		</div>
	`
	wBlock.innerHTML = template
}

load();
