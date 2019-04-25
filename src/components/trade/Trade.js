import React from "react";

export class Trade extends React.Component{

    closeTradeInner = () => {
        this.props.onClose(this.props.trade.id)
    };

    render() {
       console.log(this.props.trade);
       const trade = this.props.trade;
       var rowClass = "row";
       if(trade.closePrice != null){
           rowClass += " trade--closed"
       }
       return (
        <div className={rowClass}>
            <div className="col">{trade.id}</div>
            <div className="col">{trade.type}</div>
            <div className="col">
                {trade.closePrice && 'Val: ' + trade.closePrice.toFixed(4)}
                {!trade.closePrice && <button onClick={this.closeTradeInner} className="btn btn-primary">Zavřít</button>}
            </div>
        </div>
       )
    }
}