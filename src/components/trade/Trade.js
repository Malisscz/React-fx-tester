import React from "react";

export class Trade extends React.Component{
    render() {
       return (
        <div className='row'>
            <div className="col">BUY</div>
            <div className="col">1.4544</div>
            <div className="col">
                1.4544
                <button>Zavřít</button>
            </div>
        </div>
       )
    }
}