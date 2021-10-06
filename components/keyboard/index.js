import { Box } from '@mui/material'

const KeyFaceX = ({ w, h, r, tz, bgcolor, ...rest }) => {
	return (
		<Box
			component="div"
			sx={{
				position: 'absolute',
				width: `${w}px`,
				height: `${h}px`,
				transform: `rotateX(${r}deg) translateZ(${tz}px)`,
				bgcolor: `${bgcolor}`,
				...rest,
			}}
		/>
	)
}
const KeyFaceY = ({ w, h, r, tz, bgcolor, ...rest }) => {
	return (
		<Box
			component="div"
			sx={{
				position: 'absolute',
				width: `${w}px`,
				height: `${h}px`,
				transform: `rotateY(${r}deg) translateZ(${tz}px)`,
				bgcolor: `${bgcolor}`,
				...rest,
			}}
		/>
	)
}

const Key = ({ size = 1 }) => {
	return (
		<Box
			className="key"
			component="div"
			sx={{
				//key
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				//flex
				width: `calc(30px * ${size})`,
				height: '27px',
				transition: '0.05s ease',
			}}
		>
			<KeyFaceX
				className="key-front"
				w={30 * size}
				h={15}
				r={-90}
				tz={13.5}
				bgcolor="#A38C5F"
			/>
			<KeyFaceX
				className="key-back"
				w={30 * size}
				h={15}
				r={90}
				tz={13.5}
				bgcolor="#EDE4C7"
			/>
			<KeyFaceY
				className="key-right"
				w={15}
				h={27}
				r={90}
				tz={15 * size}
				bgcolor="#A38C5F"
			/>
			<KeyFaceY
				className="key-left"
				w={15}
				h={27}
				r={90}
				tz={-15 * size}
				bgcolor="#b8b8b8"
			/>
			<KeyFaceY
				className="key-top"
				w={30 * size}
				h={27}
				r={0}
				tz={7.5}
				bgcolor="#EDE4C7"
				backgroundImage="linear-gradient(to bottom, #f4fbff, #EDE4C7)"
			/>
			<KeyFaceY
				className="key-bottom"
				w={30 * size}
				h={27}
				r={180}
				tz={7.5}
				bgcolor="#A38C5F"
			/>
		</Box>
	)
}

const Key2 = ({ size, altColor = false }) => {
	return (
		<Box
			className="key"
			component="div"
			sx={{
				//key
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				//flex
				width: `calc(30px * ${size})`,
				height: '27px',
				transition: '0.05s ease',
			}}
		>
			<KeyFaceX
				className="key-front"
				w={30 * size}
				h={15}
				r={-90}
				tz={13.5}
				bgcolor={altColor ? '#5D2C26' : '#242328'}
			/>
			<KeyFaceX
				className="key-back"
				w={30 * size}
				h={15}
				r={90}
				tz={13.5}
				bgcolor={altColor ? '#946062' : '#7B7582'}
			/>
			<KeyFaceY
				className="key-right"
				w={15}
				h={27}
				r={90}
				tz={15 * size}
				bgcolor={altColor ? '#946062' : '#4A474E'}
			/>
			<KeyFaceY
				className="key-left"
				w={15}
				h={27}
				r={90}
				tz={-15 * size}
				bgcolor={altColor ? '#5D2C26' : '#242328'}
				bgcolor="#b8b8b8"
				backgroundImage={
					altColor
						? 'linear-gradient(to bottom, #bc7377, #b46266)'
						: 'linear-gradient(to bottom, ##9F97A8, #7B7582)'
				}
			/>
			<KeyFaceY
				className="key-top"
				w={30 * size}
				h={27}
				r={0}
				tz={7.5}
				bgcolor={altColor ? '#946062' : '#7B7582'}
			/>
			<KeyFaceY
				className="key-bottom"
				w={30 * size}
				h={27}
				r={180}
				tz={7.5}
				bgcolor={altColor ? '#5D2C26' : '#242328'}
				bgcolor="#A38C5F"
				backgroundImage={
					altColor
						? 'linear-gradient(to bottom, #bc7377, #b46266)'
						: 'linear-gradient(to bottom, #9F97A8, #7B7582)'
				}
			/>
		</Box>
	)
}
const KeyRow = (props) => {
	return (
		<Box
			component="div"
			className="key-row"
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				flexWrap: 'wrap',
				width: '100%',
				transform: 'translateZ(7.5px)',
			}}
		>
			{props.children}
		</Box>
	)
}
const Keyboard = (props) => {
	const defaultKeys = (number) => {
		const rowKeys = []
		for (let i = 0; i < number; i++) {
			rowKeys.push(<Key />)
		}
		return rowKeys
	}

	return (
		<Box
			component="div"
			className="main"
			sx={{
				'*, *::after, *::before': {
					m: 0,
					p: 0,
					'box-sizing': 'border-box',
					'transform-style': 'preserve-3d',
				},
				position: 'relative',
				scale: `${props.scale}`,
				display: { xs: 'none', md: 'flex' },
				m: 'auto',
				height: 'auto',
				width: 0,

				//flex
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				component="div"
				className="keyboard"
				sx={{
					border: '1px solid green',
					height: 'auto',
					width: 0,
					// change perspective
					transform:
						'perspective(2000px) rotateX(75deg) rotateY(0deg) rotateZ(12deg)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					left: -80,
					bottom: -230,
				}}
			>
				<Box
					component="div"
					className="keyboard-front"
					sx={{
						width: '500px',
						height: '25px',
						transform: 'rotateX(-90deg) translateZ(80px)',
						bgcolor: '#BCBCBC',
						position: 'absolute',
					}}
				/>
				<Box
					component="div"
					className="keyboard-back"
					sx={{
						width: '500px',
						height: '25px',
						transform: 'rotateX(90deg) translateZ(80px)',
						bgcolor: '#ADADAD',
						position: 'absolute',
					}}
				/>
				<Box
					component="div"
					className="keyboard-right"
					sx={{
						width: '25px',
						height: '160px',
						transform: 'rotateY(90deg) translateZ(250px)',
						bgcolor: '#ADADAD',
						position: 'absolute',
					}}
				/>
				<Box
					component="div"
					className="keyboard-left"
					sx={{
						width: '25px',
						height: '160px',
						transform: 'rotateY(90deg) translateZ(-250px)',
						bgcolor: '#BCBCBC',
						position: 'absolute',
					}}
				/>
				<Box
					component="div"
					className="keyboard-top"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						width: '500px',
						height: '160px',
						transform: 'rotateY(0deg) translateZ(12.5px)',
						backgroundImage: 'linear-gradient(to bottom, #dbf2fe, #343232)',
						//face
						position: 'absolute',
					}}
				>
					{/* row 1 */}
					<KeyRow>
						<Key2 size={1} altColor={true} />
						{defaultKeys(12)}
						<Key2 size={2} />
					</KeyRow>
					{/* row 2 */}
					<KeyRow>
						<Key2 size={2} />
						{defaultKeys(12)}
						<Key2 size={1} />
					</KeyRow>
					{/* row 3 */}
					<KeyRow>
						<Key2 size={2} />
						{defaultKeys(10)}
						<Key2 size={3} altColor={true} />
					</KeyRow>
					{/* row 4 */}
					<KeyRow>
						<Key2 size={3} />
						{defaultKeys(10)}
						<Key2 size={2} />
					</KeyRow>
					{/* row 5 */}
					<KeyRow>
						<Key2 size={1} />
						<Key2 size={1} altColor={true} />
						<Key2 size={1} />
						<Key size={7} />
						<Key2 size={2} />
						<Key2 size={1} />
						<Key2 size={1} />
						<Key2 size={1} />
					</KeyRow>
				</Box>
				<Box
					component="div"
					className="keyboard-bottom"
					sx={{
						width: '500px',
						height: '160px',
						transform: 'rotateY(180deg) translateZ(12.5px)',
						bgcolor: '#eae7e5',
						position: 'absolute',
						boxShadow:
							'-10px 30px 5px rgb(28, 28, 28, .5), 0px 30px 5px rgb(28, 28, 28, .5), 0px 0px 5px rgb(28, 28, 28, .5), 0px 30px 5px rgb(28, 28, 28, .5)',
					}}
				/>
			</Box>
		</Box>
	)
}

export default Keyboard
