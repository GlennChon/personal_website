import { Box } from '@mui/material'
import { KeyRow, Key } from './key'
import { Board } from './board'

const Keyboard = (props) => {
	const firstChars = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
		'-',
		'=',
		'\\',
		'`',
	]
	const secondChars = [
		'Q',
		'W',
		'E',
		'R',
		'T',
		'Y',
		'U',
		'I',
		'O',
		'P',
		'[',
		']',
	]
	const thirdChars = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"]
	const fourthChars = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']
	const defaultKeys = (count, charArr) => {
		const rowKeys = []
		for (let i = 0; i < count; i++) {
			rowKeys.push(<Key char={charArr[i]} size={1} variant="main" />)
		}
		return rowKeys
	}

	return (
		<Box
			className="main"
			component="div"
			sx={{
				'*, *::after, *::before': {
					m: 0,
					p: 0,
					'box-sizing': 'border-box',
					'transform-style': 'preserve-3d',
				},
				display: { xs: 'none', sm: 'flex' },
				height: '100%',
				width: '100%',
				maxWidth: '1280px',
				//flex
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Board>
				{/* row 1 */}
				<KeyRow>
					<Key char="Esc" size={1} variant="special" />
					{defaultKeys(14, firstChars)}
					<Key char="Ó" size={1} variant="accent" />
				</KeyRow>
				{/* row 2 */}
				<KeyRow>
					<Key char="⭾ Tab" size={1.5} variant="accent" />
					{defaultKeys(12, secondChars)}
					<Key char="←" size={1.5} variant="accent" />
					<Key char="Delete" size={1} variant="accent" />
				</KeyRow>
				{/* row 3 */}
				<KeyRow>
					<Key char="Caps Lock" size={2} variant="accent" />
					{defaultKeys(11, thirdChars)}
					<Key char="↵" size={2} variant="accent" />
					<Key char="PgUp" size={1} variant="accent" />
				</KeyRow>
				{/* row 4 */}
				<KeyRow>
					<Key char="⇧ Shift" size={2.5} variant="accent" />
					{defaultKeys(10, fourthChars)}
					<Key char="⇧ Shift" size={1.5} variant="accent" />
					<Key char="↑" size={1} variant="special" />
					<Key char="PgDn" size={1} variant="accent" />
				</KeyRow>
				{/* row 5 */}
				<KeyRow>
					<Key char="Control" size={1.3} variant="accent" />
					<Key char="❖" size={1.3} variant="accent" />
					<Key char="Alt" size={1.3} variant="accent" />
					<Key char="" size={6.25} />
					<Key char="Fn" size={1.3} variant="accent" />
					<Key char="Control" size={1.3} variant="accent" />
					<Key char="←" size={0.25} blank={true} />
					<Key char="←" size={1} variant="special" />
					<Key char="↓" size={1} variant="special" />
					<Key char="→" size={1} variant="special" />
				</KeyRow>
			</Board>
		</Box>
	)
}

export default Keyboard
