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
				bgcolor="#838383"
			/>
			<KeyFaceX
				className="key-back"
				w={30 * size}
				h={15}
				r={90}
				tz={13.5}
				bgcolor="#fffffb"
			/>
			<KeyFaceY
				className="key-right"
				w={15}
				h={27}
				r={90}
				tz={15 * size}
				bgcolor="#838383"
			/>
			<KeyFaceY
				className="key-left"
				w={15}
				h={27}
				r={90}
				tz={-15 * size}
				bgcolor="#b8b8b"
			/>
			<KeyFaceY
				className="key-top"
				w={30 * size}
				h={27}
				r={0}
				tz={7.5}
				bgcolor="#fffffb"
				backgroundImage="linear-gradient(to bottom, #f4fbff, #fffffb)"
			/>
			<KeyFaceY
				className="key-bottom"
				w={30 * size}
				h={27}
				r={180}
				tz={7.5}
				bgcolor="#838383"
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
				bgcolor={altColor ? '#8e3e43' : '#426585'}
			/>
			<KeyFaceX
				className="key-back"
				w={30 * size}
				h={15}
				r={90}
				tz={13.5}
				bgcolor={altColor ? '#ffa28e' : '#a9dffd'}
			/>
			<KeyFaceY
				className="key-right"
				w={15}
				h={27}
				r={90}
				tz={15 * size}
				bgcolor={altColor ? '#ffa28e' : '#a9dffd'}
			/>
			<KeyFaceY
				className="key-left"
				w={15}
				h={27}
				r={90}
				tz={-15 * size}
				bgcolor={altColor ? '#8e3e43' : '#426585'}
				bgcolor="#b8b8b"
				backgroundImage={
					altColor
						? 'linear-gradient(to bottom, #bc7377, #b46266)'
						: 'linear-gradient(to bottom, #a7dcfa, #8fd2f8)'
				}
			/>
			<KeyFaceY
				className="key-top"
				w={30 * size}
				h={27}
				r={0}
				tz={7.5}
				bgcolor={altColor ? '#ffa28e' : '#a9dffd'}
			/>
			<KeyFaceY
				className="key-bottom"
				w={30 * size}
				h={27}
				r={180}
				tz={7.5}
				bgcolor={altColor ? '#8e3e43' : '#426585'}
				bgcolor="#838383"
				backgroundImage={
					altColor
						? 'linear-gradient(to bottom, #bc7377, #b46266)'
						: 'linear-gradient(to bottom, #a7dcfa, #8fd2f8)'
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
			sx={{
				position: 'absolute',
				scale: `${props.scale}`,
				display: { xs: 'none', md: 'flex' },
				top: {
					md: 'calc(100vw * .34)',
					lg: 'calc(100vw * .33)',
					xl: 'calc(100vw * .32)',
				},
				left: -120,
				right: 0,
				width: 'auto',
			}}
		>
			<Box
				component="div"
				className="main"
				sx={{
					m: '0 auto',
					width: '550px',
					height: '200px',
					position: 'relative',
					//flex
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					'*, *::after, *::before': {
						m: 0,
						p: 0,
						'box-sizing': 'border-box',
						'transform-style': 'preserve-3d',
					},
				}}
			>
				<Box
					component="div"
					className="keyboard"
					sx={{
						width: '500px',
						height: '160px',
						// change perspective
						transform:
							'perspective(10000px) rotateX(75deg) rotateY(-5.7deg) rotateZ(20deg)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						component="div"
						className="keyboard-front"
						sx={{
							width: '500px',
							height: '25px',
							transform: 'rotateX(-90deg) translateZ(80px)',
							bgcolor: '#9c9c9c',
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
							bgcolor: '#fffffb',
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
							bgcolor: '#fffffb',
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
							bgcolor: '#eae7e5',
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
							<Key2 size={1} />
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
							'box-shadow':
								'-20px 40px 0 #0d0c0c, 0px 40px 0 #0d0c0c, 5px 0px 0 #0d0c0c, 5px 40px 0 #0d0c0c',
						}}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default Keyboard
