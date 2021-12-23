import { Component } from 'react'
import { fall } from '../../../../../styles/animations'
import { Box } from '@mui/material'

const Snowflake = (props) => {
	return (
		<Box
			component="p"
			className="Snowflake"
			id={`item${props.id}`}
			sx={props.style}
		>
			*
		</Box>
	)
}

class Snow extends Component {
	snow = () => {
		let arr = Array.from(
			'Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!',
		)
		// @ts-ignore
		return arr.map((el, i) => {
			let animationDelay = `${(Math.random() * 16).toFixed(2)}s`
			let fontSize = `${Math.floor(Math.random() * 10) + 10}px`

			const style = {
				display: 'inline-block',
				width: '0.1%',
				color: '#FFFAFA',
				opacity: '0',
				fontSize: fontSize,
				m: 0.4,
				p: 0,
				animation: `${fall} 16s linear infinite`,
				animationDelay: animationDelay,
			}
			return <Snowflake key={i} id={i} style={style} />
		})
	}

	render() {
		return <>{this.snow()}</>
	}
}

export default Snow
