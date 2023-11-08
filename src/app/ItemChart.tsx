import { useState } from "react"

export interface IItemChart {
    leftText: string,
    rightText: string,
    leftPercent: number
}

const ItemChart: React.FC<IItemChart> = (iItemChart: IItemChart) => {
    const {
        leftPercent,
        leftText,
        rightText
    } = iItemChart;
    const [value, setValue] = useState<number>(leftPercent);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue)) {
            setValue(newValue);
        } else {
            setValue(0);
        }

    };


    const percentLeftStyle: React.CSSProperties = {
        width: `${value}%`
    }

    const percentRightStyle: React.CSSProperties = {
        width: `${formatNumber(100 - value)}%`
    }

    function formatNumber(number: number): string {
        if (Number.isInteger(number)) {
          return number.toString();
        } else {
          return number.toFixed(2);
        }
      }

    return (
        <>
            <div className="update">
                <input style={{
                    width: "60px",
                    height: "40px",
                    textAlign: 'center'
                }}
                    type="number"
                    value={value ?? ''}
                    onChange={handleInputChange}
                />
            </div>
            <div className="item">
                <div className="left" style={percentLeftStyle}>
                    <div className="content">
                        <div className="percent">{value}%</div>
                        <div style={{ marginLeft: 5, color: "#685d5d" }}>
                            <input type="text" defaultValue={leftText} />
                        </div>
                    </div>
                </div>
                <div className="right" style={percentRightStyle}>
                    <div className="content">
                        <div className="percent">{formatNumber(100 - value)}%</div>
                        <input type="text" defaultValue={rightText} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemChart;