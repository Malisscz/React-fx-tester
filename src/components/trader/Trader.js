import React from 'react'
import {Chart} from "../chart/Chart";
import {Trade} from "../trade/Trade";

export class Trader extends React.Component {

    state = {
        actualPrice: null,
        trades: [
           /* {
                id: 1,
                openPrice: 1.24141,
                closePrice: null,
                type: 'SELL',
                time: new Date()
            },
            {
                id: 2,
                openPrice: 5.24141,
                closePrice: 3.251,
                type: 'BUY',
                time: new Date()
            }*/
        ]
    };

    static _tradeIdCounter = 0;

    componentDidMount() {
        this.updateActualPrice();
        setInterval(() =>{
            this.updateActualPrice()
        }, 3000)

    }


    get profit() {
        const profit = this.state.trades.reduce((curVal, trade) => {
            if (trade.closePrice === null) {
                return curVal
            }
            if (trade.type === 'BUY') {
                return curVal + trade.closePrice - trade.openPrice
            } else {
                return curVal + trade.openPrice - trade.closePrice
            }
        }, 0)
        return profit * 1000
    }



    updateActualPrice = async () => {
        //await ceka na premisu
        const actualPrice = await this.getActualRate();

        this.setState({
            actualPrice: actualPrice
        })

    };

    getActualRate = async () => {
        return new Promise(resolve => {
            fetch('https://cors.io/?https://www.freeforexapi.com/api/live?pairs=EURUSD')
                .then(function (response) {
                    return response.json()
                })
                .then((res) => {
                    const rate = res.rates.EURUSD.rate
                    // const makeItFunny = 0
                    const makeItFunny = (Math.random() - 0.5) / 100
                    resolve(rate + makeItFunny)
                })
                .catch(() => {
                    resolve(null)
                })
        })
    };

    addBuyTrade = () => {
        const newTrade = {
            id: Trader._tradeIdCounter++,
            openPrice: this.state.actualPrice,
            closePrice: null,
            type: 'BUY',
            time: new Date()
        };

        /*rozsireni state o newTrade, ktery pridam na zacatek listu*/
        this.setState((state) =>{
                return{
                    trades: [newTrade, ...state.trades]
                }
            }
        )
    };

    closeTrade = (tradeId) => {
        this.setState((state) => {
            const trades = state.trades.map(trade => {
                if (trade.id === tradeId) {
                    return {...trade, closePrice: this.state.actualPrice}
                }
                return trade
            })
            return {
                trades: trades
            }
        })
    }


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
                                {/*test komentare :) vykresleni hodnoty pokud je ruzna od null, na komponent Did Mount se naplni*/}
                                Aktuální cena: {this.state.actualPrice && this.state.actualPrice.toFixed(4)}
                            </div>
                            <div className="row">
                                <button className="controls__button" onClick={this.addBuyTrade}>Buy</button>
                                <button className="controls__button">Sell</button>
                            </div>
                            <div className="row">
                                <h2>Obchody</h2>
                            </div>
                            {this.state.trades.map((trade) => {
                                    return <Trade trade={trade} key={trade.id + '_' + trade.time} onClose={this.closeTrade}/>
                                })}

                            <div className="row result">
                                Zisk/ztráta: {this.profit.toFixed(3)} €
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
