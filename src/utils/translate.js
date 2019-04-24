import React from 'react'

export function connectTranslate(Component) {
	const translate = (term) => {
		const lib = {
			'Zavřít': 'Close'
		};
		return lib[term];
	}

	return function(props) {
		return <Component t={translate} {...props} />
	}
}
