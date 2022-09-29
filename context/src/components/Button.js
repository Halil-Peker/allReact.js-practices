import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
    const data = useContext(ThemeContext)

    console.log(data)
    return (
    <div>Active Theme: {data.themee}
    <button onClick={()=>data.setThemee(data.themee === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
    
  )
}

export default Button