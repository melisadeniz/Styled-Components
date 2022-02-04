import React, { useContext } from 'react'
import { ChangeThemeContext } from '../context/ChangeThemeContext'
import { Button } from '../StyledComponents/ButtonStyled'


function ChangeThemeButton(props) {

const {themeName, setThemeName} = useContext(ChangeThemeContext)

    return (

        <Button
        onClick={() => {
            setThemeName(prev => prev === "light" ? "dark" : "light")
            console.log(themeName)
            }}>
             Change Theme
        </Button>
        
      
        
    )
}
export default ChangeThemeButton