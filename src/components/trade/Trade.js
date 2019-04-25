import React from "react";

export class Trade extends React.Component{
    render() {
        console.log(this.props.trade)
       return (
        <div className='row'>
            <div className="col">{this.props.trade.id}</div>
            <div className="col">{this.props.trade.type}</div>
            <div className="col">
                1.4544
                <button className="btn btn-primary">Zavřít</button>
            </div>
        </div>
       )
    }
}