import React from "react";

export class Trade extends React.Component{
    render() {
       console.log(this.props.trade);
       const trade = this.props.trade;
       return (
        <div className='row'>
            <div className="col">{trade.id}</div>
            <div className="col">{trade.type}</div>
            <div className="col">
                {trade.closePrice && 'Val: ' + trade.closePrice.toFixed(4)}
                {!trade.closePrice && <button className="btn btn-primary">Zavřít</button>}
            </div>
        </div>
       )
    }
}