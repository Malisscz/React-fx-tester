import React from 'react'
import {Chart} from "../chart/Chart";
import {Trade} from "../trade/Trade";

export class Trader extends React.Component {

    state = {
        trades: [
            {
                id: 1,
                openPrice: 1.24141,
                closePrice: null,
                type: 'SELL',
                time: new Date()
            },
            {
                id: 2,
                openPrice: 5.24141,
                closePrice: null,
                type: 'BUY',
                time: new Date()
            }
        ]
    };


    render() {
        return (
            <div className="app container">
                <div className="row">
                    <h1>Fx tester</h1>
                </div>
                <div className="row">
                    <div className="col-8 chart__cont">
                        <Chart />
                    </div>
                    <div className="col-4">
                        <div className="container">
                            <div className="row">
                                Aktuální cena: 1.4544
                            </div>
                            <div className="row">
                                <button className="controls__button">Buy</button>
                                <button className="controls__button">Sell</button>
                            </div>
                            <div className="row">
                                <h2>Obchody</h2>
                            </div>
                            {this.state.trades.map((trade) => {
                                    return <Trade trade={trade} />
                                })}

                            <div className="row result">
                                Zisk/ztráta: 34.244 €
                            </div>
                        </div>
                    </div>
                    <a href="https://www.freeforexapi.com">
                        <img
                            alt="Free Forex API"
                            src="https://www.freeforexapi.com/Images/link.png"
                            height="20"
                        />
                    </a>
                </div>
            </div>
        )
    }
}
