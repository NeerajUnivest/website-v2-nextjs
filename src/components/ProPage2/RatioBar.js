
function RatioBar({ percent }) {
    return (
        <div className="overall">
            <div className="green" style={{ width: `${percent}%` }}></div>
            <div className="red" style={{ width: `${100 - percent}%` }}></div>

            <style>
                {`
                .overall {
                    width: 100%;
                    height: 12px;
                    display: flex;
                    direction: row;
                }

                .red {
                    height: 12px;
                    background-color: #EB4E2C;
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }

                .green {
                    height: 12px;
                    background-color: #26A649;
                    border-top-left-radius: 6px;
                    border-bottom-left-radius: 6px;
                    margin-right: 2px;
                }
                `}
            </style>
        </div>
    )
}

export default RatioBar