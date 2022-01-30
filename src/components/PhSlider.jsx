import { Slider, Switch } from 'antd';

function PhSlider({ ph, setPh, phChecked, setPhChecked }) {

    const handleValueChange = (newPh) => {
        setPh(newPh)
    }

    const handleCheckedChange = (checked) => {
        setPhChecked(checked)
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <Switch checked={phChecked} onChange={handleCheckedChange} />
                    </div>
                    <div>
                        <h5>PH</h5>
                    </div>
                    <div>
                        <Slider range disabled={!phChecked} defaultValue={ph} onChange={handleValueChange} step={0.1} min={0} max={7} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhSlider