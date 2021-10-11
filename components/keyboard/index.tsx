import { Box } from '@mui/material'
import { KeyRow, Key } from './key'
import { Board } from './board'
import { getThemeProps } from '@mui/system'
import { useEffect, useState } from 'react'

const Keyboard = ({ containerWidth }: { containerWidth: number }) => {
	const firstSet: string = '1234567890-=\\`'
	const secondSet: string = 'qwertyuiop[]'
	const thirdSet: string = "asdfghjkl;'"
	const fourthSet: string = '=zxcvbnm,./'

	// LxWxH 12 ½ x 4 ⅜ x .575 in.
	const [boardWidth, setBoardWidth] = useState<number>(0)
	const [boardHeight, setBoardHeight] = useState<number>(0)
	const [boardDepth, setBoardDepth] = useState<number>(0)

	useEffect(() => {
		const maxContainerWidth: number = 1000
		const calculated: number =
			containerWidth < maxContainerWidth ? containerWidth : maxContainerWidth
		setBoardWidth(calculated * (5 / 18))
		setBoardHeight(boardWidth * (4.375 / 12.5))
		setBoardDepth(boardWidth * (0.575 / 12.5))
	})

	const defaultKeys = (count, charSet) => {
		const charArr = charSet.split('')
		const rowKeys: JSX.Element[] = []
		for (let i = 0; i < count; i++) {
			rowKeys.push(
				<Key char={charArr[i]} size={1} variant="main" width={boardWidth} />,
			)
		}
		return rowKeys
	}

	return (
		<Box
			className="keyboard-container"
			component="div"
			sx={{
				m: '0 auto',
				display: 'flex',
				height: `${boardHeight}px`,
				width: `${boardWidth}px`,
				//flex
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Board width={boardWidth} height={boardHeight} depth={boardDepth}>
				{/* row 1 */}
				<KeyRow width={boardWidth}>
					<Key char="Esc" size={1} variant="special" width={boardWidth} />
					{defaultKeys(14, firstSet)}
					<Key char="Ó" size={1} variant="accent" width={boardWidth} />
				</KeyRow>
				{/* row 2 */}
				<KeyRow width={boardWidth}>
					<Key char="⭾ Tab" size={1.5} variant="accent" width={boardWidth} />
					{defaultKeys(12, secondSet)}
					<Key char="←" size={1.5} variant="accent" width={boardWidth} />
					<Key char="Delete" size={1} variant="accent" width={boardWidth} />
				</KeyRow>
				{/* row 3 */}
				<KeyRow width={boardWidth}>
					<Key char="Caps Lock" size={2} variant="accent" width={boardWidth} />
					{defaultKeys(11, thirdSet)}
					<Key char="↵" size={2} variant="accent" width={boardWidth} />
					<Key char="PgUp" size={1} variant="accent" width={boardWidth} />
				</KeyRow>
				{/* row 4 */}
				<KeyRow width={boardWidth}>
					<Key char="⇧ Shift" size={2.5} variant="accent" width={boardWidth} />
					{defaultKeys(10, fourthSet)}
					<Key char="⇧ Shift" size={1.5} variant="accent" width={boardWidth} />
					<Key char="↑" size={1} variant="special" width={boardWidth} />
					<Key char="PgDn" size={1} variant="accent" width={boardWidth} />
				</KeyRow>
				{/* row 5 */}
				<KeyRow width={boardWidth}>
					<Key char="Control" size={1.3} variant="accent" width={boardWidth} />
					<Key char="❖" size={1.3} variant="accent" width={boardWidth} />
					<Key char="Alt" size={1.3} variant="accent" width={boardWidth} />
					<Key char="" size={6.5} width={boardWidth} />
					<Key char="Fn" size={1.3} variant="accent" width={boardWidth} />
					<Key char="Control" size={1.3} variant="accent" width={boardWidth} />
					<Key char="←" size={0.3} blank={true} width={boardWidth} />
					<Key char="←" size={1} variant="special" width={boardWidth} />
					<Key char="↓" size={1} variant="special" width={boardWidth} />
					<Key char="→" size={1} variant="special" width={boardWidth} />
				</KeyRow>
			</Board>
		</Box>
	)
}

export default Keyboard
