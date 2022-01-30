import { Slider, Switch } from 'antd';

function SrmSlider({ srm, setSrm, srmChecked, setSrmChecked }) {

    const handleValueChange = (newSrm) => {
        setSrm(newSrm)
    };

    const handleCheckedChange = (checked) => {
        setSrmChecked(checked)
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <Switch checked={srmChecked} onChange={handleCheckedChange} />
                    </div>
                    <div>
                        <h5>SRM</h5>
                    </div>
                    <div>
                        <Slider disabled={!srmChecked} defaultValue={srm} onChange={handleValueChange} step={0.5} min={0} max={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SrmSlider