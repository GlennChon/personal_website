import {
    createContext,
    FC,
    ReactNode,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from 'react'
import { Box } from '@mui/material'
// import usePosition from '../../utils/usePosition'

//snow
import Snow from 'components/weather/snow'

interface IWeatherContext {
    display: ReactNode
}
export const WeatherCtx = createContext<IWeatherContext>({
    display: undefined
})

// enum EUseWeatherType {
//     seasons = 'seasons',
//     weather = 'weather',
// }

// type TWeatherProps = {
//     weatherType: EUseWeatherType
// }



const WeatherProvider: FC<ReactNode> = ({ children }) => {
    const [display, setDisplay] = useState<ReactElement>(<></>)
    // const [position, error] = usePosition(false)
    const today = new Date();
    const monthNumber = today.getMonth()
    useEffect(() => {
        console.log(monthNumber)
        setDisplay(<Box
            sx={{
                border: '1px solid orange', mt: 15,
                width: '100%',
                height: '450px',
                zIndex: '-3',
                position: 'absolute'
            }}
        >
            <Snow />
        </Box>)
    }, [])

    // const seasonsHandler = () => {
    //     switch (monthNumber) {
    //         // spring
    //         case 2:
    //         case 3:
    //         case 4:
    //             setDisplay(<>Spring</>)
    //             break
    //         // summer
    //         case 5:
    //         case 6:
    //         case 7:
    //             setDisplay(<>Summer</>)
    //         // fall
    //         case 8:
    //         case 9:
    //         case 10:
    //             setDisplay(<>Fall</>)
    //         // winter
    //         case 11:
    //         case 0:
    //         case 1:
    //             setDisplay(
    //                 <Box
    //                     sx={{
    //                         border: '1px solid orange', mt: 15,
    //                         width: '100%',
    //                         height: '450px',
    //                         zIndex: '-3',
    //                         position: 'absolute'
    //                     }}
    //                 >
    //                     <Snow />
    //                 </Box>
    //             )
    //     }

    return (
        <WeatherCtx.Provider value={{ display: display }}>
            {children}
        </WeatherCtx.Provider>
    )

}
// 3march:spring 6june:summer 9sept:fall 12dec:winter

// const getWeather = async (lat = '39.9526', lon = '75.1652') => {
//     return
//     await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
//         .then(async (res) => {
//             const data = await res.json()
//             console.log(data)
//             setWeather({main: data.weather.id, icon: data.weather.icon, temp: data.main.temp })

//         })
// }

// return (<Box
//     sx={{
//         border: '1px solid orange', mt: 15,
//         width: '100%',
//         height: '450px',
//         zIndex: '-3',
//         position: 'absolute'
//     }}
// >
//     <Snow />
// </Box>
// )
/*
const {REACT_APP_WEATHER_API_KEY} = process.env
const [weather, setWeather] = useState({})
const [ position ] = usePosition()
 
const getWeather = async(lat='39.9526', lon='75.1652') => {
     return 
     await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER_API_KEY}`)
        .then(async(res) => {
           const data = await res.json()
           console.log(data)
           setWeather({ main: data.weather.id, icon: data.weather.icon, temp: data.main.temp })
           
        })
}
 getWeather(position.latitude, position.longitude)
/*
    types:
        Thunderstorm: 2
        Drizzle: 3
        Rain:5 
        Snow:6
        Atmosphere:7
        Clear: 8
        Clouds: 801
 
*/
// }
export default WeatherProvider

export const useWeather = () => {
    const display = useContext(WeatherCtx)
    return display
}