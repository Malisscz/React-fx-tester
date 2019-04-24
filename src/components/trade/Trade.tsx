import React from 'react'
import './Trade.css'
import { connectTranslate } from '../../utils/translate'
import {ITrade} from '../trader/Trader';

interface TradeProps {
  onClose: (id: number) => void;
  trade: ITrade
  t: (term: string) => string;
}

class TradeInternal extends React.Component<TradeProps> {

	closeTrade = () => {
		this.props.onClose(this.props.trade.id)
	};

	render() {
		const {trade, t} = this.props;
		return (
			<div className={`row ${trade.closePrice && 'trade--closed'}`}>
				<div className="col">{trade.type}</div>
				<div className="col">{trade.openPrice && trade.openPrice.toFixed(4)}</div>
				<div className="col">
					{trade.closePrice && `-> ${trade.closePrice.toFixed(4)}`}
					{!trade.closePrice && <button onClick={this.closeTrade}>{t('Zavřít')}</button>}
				</div>
			</div>
		)
	}
}

export const Trade = connectTranslate(TradeInternal);
