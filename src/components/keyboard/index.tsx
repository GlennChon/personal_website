import { Box, Tooltip } from '@mui/material'
import { KeyRow, Key } from './key'
import { Board } from './board'
import { useEffect, useState } from 'react'
import useKeyPress from 'utils/useKeyPress'
import useEventListener from 'utils/useEventListener'

const Keyboard = ({ containerWidth }: { containerWidth: number }) => {
	const firstSet: string = '1234567890-=\\`'
	const secondSet: string = 'QWERTYUIOP[]'
	const thirdSet: string = "ASDFGHJKL;'"
	const fourthSet: string = '=ZXCVBNM,./'

	// LxWxH 12 ½ x 4 ⅜ x .575 in.
	const [boardWidth, setBoardWidth] = useState<number>(0)
	const [boardHeight, setBoardHeight] = useState<number>(0)
	const [boardDepth, setBoardDepth] = useState<number>(0)
	const [pressedKeys, setPressedKeys] = useState<string[]>([])

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
				<Key
					char={charArr[i]}
					key={i}
					pressed={isKeyPressed(charArr[i].toLowerCase())}
					size={1}
					variant="main"
					width={boardWidth}
				/>,
			)
		}
		return rowKeys
	}

	const autoKeyUp = (key) => {
		setTimeout(() => {
			setPressedKeys((prev) => prev.filter((i) => i !== `${key.toLowerCase()}`))
		}, 50)
	}
	const codeKeys: string[] = ['Shift', 'Control', 'Tab']
	const onKeyUp = (e: KeyboardEvent) => {
		let selected = (codeKeys.includes(e.key) ? e.code : e.key).toLowerCase()

		setPressedKeys((prev) => prev.filter((i) => i !== `${selected}`))
	}
	const onKeyDown = (e: KeyboardEvent) => {
		let selected = (codeKeys.includes(e.key) ? e.code : e.key).toLowerCase()
		if (!pressedKeys.includes(selected)) {
			setPressedKeys((prev) => [...prev, `${selected}`])
		}
		if (e.key === 'Tab') autoKeyUp('tab')
	}

	const isKeyPressed = (key: string): boolean => {
		return pressedKeys.includes(key.toLowerCase())
	}

	useEventListener('keydown', onKeyDown)
	useEventListener('keyup', onKeyUp)

	return (
		<Tooltip
			placement="top"
			arrow
			title={
				<div style={{ whiteSpace: 'pre-line' }}>{`Keyboard: WhiteFox\n
			Switches: Cherry MX Clear\n
			Keycaps: Jessica GMK Plum`}</div>
			}
		>
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
						<Key
							char="Esc"
							pressed={isKeyPressed('escape')}
							size={1}
							variant="special"
							width={boardWidth}
						/>
						{defaultKeys(14, firstSet)}
						<Key char="Ó" size={1} variant="accent" width={boardWidth} />
					</KeyRow>
					{/* row 2 */}
					<KeyRow width={boardWidth}>
						<Key
							char="⭾ Tab"
							pressed={isKeyPressed('tab')}
							size={1.5}
							variant="accent"
							width={boardWidth}
						/>
						{defaultKeys(12, secondSet)}
						<Key
							char="←"
							pressed={isKeyPressed('backspace')}
							size={1.5}
							variant="accent"
							width={boardWidth}
						/>
						<Key
							char="Delete"
							pressed={isKeyPressed('delete')}
							size={1}
							variant="accent"
							width={boardWidth}
						/>
					</KeyRow>
					{/* row 3 */}
					<KeyRow width={boardWidth}>
						<Key
							char="Caps Lock"
							pressed={isKeyPressed('capslock')}
							size={2}
							variant="accent"
							width={boardWidth}
						/>
						{defaultKeys(11, thirdSet)}
						<Key
							char="↵"
							pressed={isKeyPressed('enter')}
							size={2}
							variant="accent"
							width={boardWidth}
						/>
						<Key
							char="PgUp"
							pressed={isKeyPressed('pageup')}
							size={1}
							variant="accent"
							width={boardWidth}
						/>
					</KeyRow>
					{/* row 4 */}
					<KeyRow width={boardWidth}>
						<Key
							char="⇧ Shift"
							pressed={isKeyPressed('shiftleft')}
							size={2.5}
							variant="accent"
							width={boardWidth}
						/>
						{defaultKeys(10, fourthSet)}
						<Key
							char="⇧ Shift"
							pressed={isKeyPressed('shiftright')}
							size={1.5}
							variant="accent"
							width={boardWidth}
						/>
						<Key
							char="↑"
							pressed={isKeyPressed('arrowup')}
							size={1}
							variant="special"
							width={boardWidth}
						/>
						<Key
							char="PgDn"
							pressed={isKeyPressed('pagedown')}
							size={1}
							variant="accent"
							width={boardWidth}
						/>
					</KeyRow>
					{/* row 5 */}
					<KeyRow width={boardWidth}>
						<Key
							char="Control"
							pressed={isKeyPressed('controlleft')}
							size={1.3}
							variant="accent"
							width={boardWidth}
						/>
						<Key
							char="❖"
							pressed={isKeyPressed('os')}
							size={1.3}
							variant="accent"
							width={boardWidth}
						/>
						<Key
							char="Alt"
							pressed={isKeyPressed('alt')}
							size={1.3}
							variant="accent"
							width={boardWidth}
						/>
						<Key
							char=" "
							pressed={isKeyPressed(' ')}
							data-key="space"
							size={6.5}
							width={boardWidth}
						/>
						<Key char="Fn" size={1.3} variant="accent" width={boardWidth} />
						<Key
							char="Control"
							pressed={isKeyPressed('controlright')}
							size={1.3}
							variant="accent"
							width={boardWidth}
						/>
						<Key char="" size={0.3} blank={true} width={boardWidth} />
						<Key
							char="←"
							pressed={isKeyPressed('arrowleft')}
							size={1}
							variant="special"
							width={boardWidth}
						/>
						<Key
							char="↓"
							pressed={isKeyPressed('arrowdown')}
							size={1}
							variant="special"
							width={boardWidth}
						/>
						<Key
							char="→"
							pressed={isKeyPressed('arrowright')}
							size={1}
							variant="special"
							width={boardWidth}
						/>
					</KeyRow>
				</Board>
			</Box>
		</Tooltip>
	)
}

export default Keyboard
