import { Slider } from 'antd';
import { useEffect, useState } from "react";
import BASE_URL from '../BASE_URL';

function VolumeSlider({ setBaseUrl, resetButton, setResetButton }) {

    useEffect(() => {
        if (resetButton) {
            setNoneButton(true)
            setGtButton(false)
            setLtButton(false)
            setResetButton(false)
        }

    }, [resetButton])

    const [volume, setVolume] = useState('30')

    const [noneButton, setNoneButton] = useState(true)
    const [gtButton, setGtButton] = useState(false)
    const [ltButton, setLtButton] = useState(false)

    if (noneButton) {
        setBaseUrl(`${BASE_URL}`)
    } else if (gtButton) {
        setBaseUrl(`${BASE_URL}&abv_gt=${volume}`)
    } else {
        setBaseUrl(`${BASE_URL}&abv_lt=${volume}`)
    }

    const noneHandler = () => {
        setNoneButton(true)
        setGtButton(false)
        setLtButton(false)
    }

    const greaterHandler = () => {
        setNoneButton(false)
        setGtButton(true)
        setLtButton(false)
    }

    const lowerHandler = () => {
        setNoneButton(false)
        setGtButton(false)
        setLtButton(true)
    }

    function handleValueChange(newVolume) {
        setVolume(newVolume)
    }

    return (
        <>
 
                    <div>
                        <h5>Alcohol by Volume</h5>
                    </div>
                    <div>
                        <button type="button" className={`${noneButton ? "btn-primary" : "btn-outline-primary"} btn ms-4`} onClick={noneHandler}>None</button>
                        <button type="button" className={`${gtButton ? "btn-primary" : "btn-outline-primary"} btn ms-2`} onClick={greaterHandler}>Greater Than</button>
                        <button type="button" className={`${ltButton ? "btn-primary" : "btn-outline-primary"} btn ms-2`} onClick={lowerHandler}>Lower Than</button>
                    </div>
                    <div>
                        <Slider defaultValue={30} min={0} max={100} disabled={noneHandler} step={0.1} onChange={handleValueChange} />
                    </div>
        </>
    )
}

export default VolumeSlider