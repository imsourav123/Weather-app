import React, { useState } from 'react'
import "./App.css"

const App = () => {
  let api = {
    key: "788cd5f6e6b495ac41a590cd035f05aa",
    base: "https://api.openweathermap.org/data/2.5/weather"
  }
  let [search, setSearch] = useState('')

  let [weather, setWeather] = useState({})

  function locsearch() {
    fetch(`${api.base}?q=${search}&appid=${api.key}`)
      .then(res => res.json()
        .then(data => {
          console.log(data);
          setWeather(data)
        }))

  }

  return (
    
    <div>
      <input type="text" placeholder="search location" onChange={(e) => setSearch(e.target.value)} />
      <br />
      <button onClick={locsearch}>Search</button>
      <section>
        {
          (weather.main !== undefined) ? (
            <div>
              <strong>Weather in {weather.name}</strong>
              <p>{weather.main.temp}</p>
              <p>{weather.main.feels_like}</p>

            </div>
          ) : ('data not found')
        }
      </section>
    </div>

  )
}

export default App




