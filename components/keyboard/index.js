import { Box } from '@mui/material'
import { KeyRow, Key } from './key'
import { Board } from './board'

const Keyboard = (props) => {
	const firstSet = '1234567890-=\\`'
	const secondSet = 'qwertyuiop[]'
	const thirdSet = "asdfghjkl;'"
	const fourthSet = '=zxcvbnm,./'

	const mbWidth = 1000 / 3
	const defaultKeys = (count, charSet) => {
		const charArr = charSet.split('')
		const rowKeys = []
		for (let i = 0; i < count; i++) {
			rowKeys.push(
				<Key char={charArr[i]} size={1} variant="main" mbWidth={mbWidth} />,
			)
		}
		return rowKeys
	}

	return (
		<Box
			className="main"
			component="div"
			sx={{
				display: 'flex',
				height: '100%',
				width: '100%',
				maxWidth: '1280px',
				//flex
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Board mbWidth={mbWidth}>
				{/* row 1 */}
				<KeyRow mbWidth={mbWidth}>
					<Key char="Esc" size={1} variant="special" mbWidth={mbWidth} />
					{defaultKeys(14, firstSet)}
					<Key char="Ó" size={1} variant="accent" mbWidth={mbWidth} />
				</KeyRow>
				{/* row 2 */}
				<KeyRow mbWidth={mbWidth}>
					<Key char="⭾ Tab" size={1.5} variant="accent" mbWidth={mbWidth} />
					{defaultKeys(12, secondSet)}
					<Key char="←" size={1.5} variant="accent" mbWidth={mbWidth} />
					<Key char="Delete" size={1} variant="accent" mbWidth={mbWidth} />
				</KeyRow>
				{/* row 3 */}
				<KeyRow mbWidth={mbWidth}>
					<Key char="Caps Lock" size={2} variant="accent" mbWidth={mbWidth} />
					{defaultKeys(11, thirdSet)}
					<Key char="↵" size={2} variant="accent" mbWidth={mbWidth} />
					<Key char="PgUp" size={1} variant="accent" mbWidth={mbWidth} />
				</KeyRow>
				{/* row 4 */}
				<KeyRow mbWidth={mbWidth}>
					<Key char="⇧ Shift" size={2.5} variant="accent" mbWidth={mbWidth} />
					{defaultKeys(10, fourthSet)}
					<Key char="⇧ Shift" size={1.5} variant="accent" mbWidth={mbWidth} />
					<Key char="↑" size={1} variant="special" mbWidth={mbWidth} />
					<Key char="PgDn" size={1} variant="accent" mbWidth={mbWidth} />
				</KeyRow>
				{/* row 5 */}
				<KeyRow mbWidth={mbWidth}>
					<Key char="Control" size={1.3} variant="accent" mbWidth={mbWidth} />
					<Key char="❖" size={1.3} variant="accent" mbWidth={mbWidth} />
					<Key char="Alt" size={1.3} variant="accent" mbWidth={mbWidth} />
					<Key char="" size={6.5} mbWidth={mbWidth} />
					<Key char="Fn" size={1.3} variant="accent" mbWidth={mbWidth} />
					<Key char="Control" size={1.3} variant="accent" mbWidth={mbWidth} />
					<Key char="←" size={.3} blank={true} mbWidth={mbWidth} />
					<Key char="←" size={1} variant="special" mbWidth={mbWidth} />
					<Key char="↓" size={1} variant="special" mbWidth={mbWidth} />
					<Key char="→" size={1} variant="special" mbWidth={mbWidth} />
				</KeyRow>
			</Board>
		</Box>
	)
}

export default Keyboard
