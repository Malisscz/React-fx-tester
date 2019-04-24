import React from 'react'
import './App.css'

function App() {
	return (
		<div className="app container">
			<div className="row">
				<h1>Fx tester</h1>
			</div>
			<div className="row">
				<div className="col-8 chart__cont">
					<iframe
						id="tradingview_bde47"
						title="Fx chart"
						src="https://s.tradingview.com/dailyfx/widgetembed/?frameElementId=tradingview_bde47&amp;symbol=FX_IDC%3AEURUSD&amp;interval=D&amp;hidesidetoolbar=0&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f4f7f9&amp;studies=%5B%5D&amp;hideideas=1&amp;theme=White&amp;timezone=exchange&amp;showpopupbutton=1&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;showpopupbutton=1&amp;locale=en&amp;utm_source=www.dailyfx.com&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=FX_IDC%3AEURUSD"
						className="chart__iframe"
						frameBorder="0"
						allowTransparency="true"
						scrolling="no"
						allowFullScreen="">
					</iframe>
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
								<button >Zavřít</button>
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

export default App
