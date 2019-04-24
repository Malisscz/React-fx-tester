import React from 'react'
import PropTypes from 'prop-types'
import './Trade.css'
import { connectTranslate } from '../../utils/translate'

class TradeInternal extends React.Component {

	closeTrade = () => {
		this.props.onClose(this.props.trade.id)
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return false;
	}

	render() {
		console.log('rendering trade');
		const {trade, t} = this.props;
		return (
			<div className={`row ${trade.closePrice && 'trade--closed'}`}>
				<div className="col">{trade.type}</div>
				<div className="col">{trade.openPrice.toFixed(4)}</div>
				<div className="col">
					{trade.closePrice && `-> ${trade.closePrice.toFixed(4)}`}
					{!trade.closePrice && <button onClick={this.closeTrade}>{t('Zavřít')}</button>}
				</div>
			</div>
		)
	}
}

TradeInternal.propTypes = {
	trade: PropTypes.shape({
		id: PropTypes.number,
		openPrice: PropTypes.number,
		closePrice:  PropTypes.number,
		type: PropTypes.oneOf(['BUY', 'SELL']),
		time: PropTypes.instanceOf(Date)
	}),
};

export const Trade = connectTranslate(TradeInternal);
