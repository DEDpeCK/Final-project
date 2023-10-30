import { useState } from 'react'
import styles from './styled.module.css'
import axios from 'axios'
import BG from '../api/BG.mp4'
import BG2 from '../api/BG2.jpg'


const Api = () => {

    

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=84e7e25a03c9b1295c8517055a002a3e`
      
    const searchLocation = (e) => {
        if (e.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data);
            })
            setLocation('')
        }
    }

    
    
    return(
        <div>
            <div className={styles.General}>
            
            <div className={styles.search}>
                <input 
                value={location}
                onChange={e => setLocation(e.target.value)}
                onKeyUp={searchLocation}
                placeholder='Введите название города'
                type="text" 
                className={styles.input}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.location}>
                        <p className={styles.textStyle}>{data.name}</p>
                    </div>
                    <div className={styles.temp}>
                        {data.main ? <h1 className={styles.textStyle}>{data.main.temp}°C</h1> : null}
                    </div>
                    <div className={styles.discription}>
                        {data.weather ? <p className={styles.textStyle}>{data.weather[0].main}</p> : 0}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.feels}>
                        {data.main ? <p className={styles.textStyle}>{data.main.feels_like}°C</p> : null}
                        <p className={styles.textStyle}>:Feels Like</p>
                    </div>
                    <div className={styles.humidity}>
                        {data.main ? <p className={styles.textStyle}>{data.main.humidity}</p> : null}
                        <p className={styles.textStyle}>:Humidity</p>
                    </div>
                    <div className={styles.wind}>
                        {data.wind ? <p className={styles.textStyle}>{data.wind.speed}</p> : null}
                        <p className={styles.textStyle}>:Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Api