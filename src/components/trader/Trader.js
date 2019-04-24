import React from 'react'
import { Chart } from '../chart/Chart'
import { Trade } from '../trade/Trade'

export class Trader extends React.Component {
	static _tradeIdIterator = 0

	state = {
		actualPrice: null,
		trades: []
	}

	componentDidMount() {
		this.updateActualPrice()
		this.intervalId = setInterval(() => {
			this.updateActualPrice()
		}, 5000)
	}

	updateActualPrice = async () => {
		const actualPrice = await this.getActualRate()
		this.setState({
			actualPrice
		})
	}

	addBuyTrade = () => {
		const newTrade = {
			id: Trader._tradeIdIterator++,
			openPrice: this.state.actualPrice,
			closePrice: null,
			type: 'BUY',
			time: new Date()
		}
		this.setState((state) => ({
			trades: [newTrade, ...state.trades]
		}))
	}

	addSellTrade = () => {
		const newTrade = {
			id: Trader._tradeIdIterator++,
			openPrice: this.state.actualPrice,
			closePrice: null,
			type: 'SELL',
			time: new Date()
		}
		this.setState((state) => ({
			trades: [newTrade, ...state.trades]
		}))
	}

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
	}

	render() {
		return (
			<div className="app container">
				<div className="row">
					<h1>Fx tester</h1>
				</div>
				<div className="row">
					<div className="col-8 chart__cont">
						<Chart/>
					</div>
					<div className="col-4">
						<div className="container">
							<div className="row">
								Aktuální cena: {this.state.actualPrice && this.state.actualPrice.toFixed(4)}
							</div>
							<div className="row">
								<button onClick={this.addBuyTrade} className="controls__button">Buy</button>
								<button onClick={this.addSellTrade} className="controls__button">Sell</button>
							</div>
							<div className="row">
								<h2>Obchody</h2>
							</div>
							{this.state.trades.map((trade) => {
								return <Trade trade={trade} key={trade.time} onClose={() => {}}/>
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

	componentWillUnmount() {
		clearInterval(this.intervalId)
	}
}
