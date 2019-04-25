import React from 'react'
import {Chart} from "../chart/Chart";

export class Trader extends React.Component {
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
                            <div className='row'>
                                <div className="col">BUY</div>
                                <div className="col">1.4544</div>
                                <div className="col">
                                    1.4544
                                    <button>Zavřít</button>
                                </div>
                            </div>
                            <div className='row trade--closed'>
                                <div className="col">SELL</div>
                                <div className="col">1.4511</div>
                                <div className="col">
                                    1.4544
                                </div>
                            </div>
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
