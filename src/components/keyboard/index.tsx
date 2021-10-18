import { Box, Tooltip } from '@mui/material'
import { useCallback, useState } from 'react'
import useEventListener from 'utils/useEventListener'
import { Board } from './board'
import { Key, KeyRow } from './key'

const Keyboard = ({
	xyz,
}: {
	xyz: { height: number; width: number; depth: number }
}) => {
	const firstSet: string = '1234567890-=\\`'
	const secondSet: string = 'QWERTYUIOP[]'
	const thirdSet: string = "ASDFGHJKL;'"
	const fourthSet: string = '=ZXCVBNM,./'

	// LxWxH 12 ½ x 4 ⅜ x .575 in.

	const [pressedKeys, setPressedKeys] = useState<string[]>([])

	// useEffect(() => {
	// 	const maxContainerWidth: number = 1000
	// 	const calculated: number =
	// 		containerWidth < maxContainerWidth ? containerWidth : maxContainerWidth
	// })

	const { height, width } = xyz
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
					width={width}
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
	const onKeyUp = useCallback((e: KeyboardEvent) => {
		if (e.key || e.code) {
			let selected = (codeKeys.includes(e.key) ? e.code : e.key).toLowerCase()
			setPressedKeys((prev) => prev.filter((i) => i !== `${selected}`))
		}
	}, [])
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key || e.code) {
			let selected = (codeKeys.includes(e.key) ? e.code : e.key).toLowerCase()
			if (!pressedKeys.includes(selected)) {
				setPressedKeys((prev) => [...prev, `${selected}`])
			}
			if (e.key === 'Tab') autoKeyUp('tab')
		}
	}, [])

	const isKeyPressed = (key: string): boolean => {
		return pressedKeys.includes(key.toLowerCase())
	}

	useEventListener('keydown', onKeyDown)
	useEventListener('keyup', onKeyUp)

	return (
		<Tooltip
			placement="top"
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
					height: `${height}px`,
					width: `${width}px`,
					//flex
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
				}}
			>
				<Board xyz={xyz}>
					{/* row 1 */}
					<KeyRow width={width}>
						<Key
							char="Esc"
							pressed={isKeyPressed('escape')}
							size={1}
							variant="special"
							width={width}
						/>
						{defaultKeys(14, firstSet)}
						<Key char="Ó" size={1} variant="accent" width={width} />
					</KeyRow>
					{/* row 2 */}
					<KeyRow width={width}>
						<Key
							char="⭾ Tab"
							pressed={isKeyPressed('tab')}
							size={1.5}
							variant="accent"
							width={width}
						/>
						{defaultKeys(12, secondSet)}
						<Key
							char="←"
							pressed={isKeyPressed('backspace')}
							size={1.5}
							variant="accent"
							width={width}
						/>
						<Key
							char="Del"
							pressed={isKeyPressed('delete')}
							size={1}
							variant="accent"
							width={width}
						/>
					</KeyRow>
					{/* row 3 */}
					<KeyRow width={width}>
						<Key
							char="Caps"
							pressed={isKeyPressed('capslock')}
							size={2}
							variant="accent"
							width={width}
						/>
						{defaultKeys(11, thirdSet)}
						<Key
							char="↵"
							pressed={isKeyPressed('enter')}
							size={2}
							variant="accent"
							width={width}
						/>
						<Key
							char="PgUp"
							pressed={isKeyPressed('pageup')}
							size={1}
							variant="accent"
							width={width}
						/>
					</KeyRow>
					{/* row 4 */}
					<KeyRow width={width}>
						<Key
							char="⇧ Shift"
							pressed={isKeyPressed('shiftleft')}
							size={2.5}
							variant="accent"
							width={width}
						/>
						{defaultKeys(10, fourthSet)}
						<Key
							char="⇧ Shift"
							pressed={isKeyPressed('shiftright')}
							size={1.5}
							variant="accent"
							width={width}
						/>
						<Key
							char="↑"
							pressed={isKeyPressed('arrowup')}
							size={1}
							variant="special"
							width={width}
						/>
						<Key
							char="PgDn"
							pressed={isKeyPressed('pagedown')}
							size={1}
							variant="accent"
							width={width}
						/>
					</KeyRow>
					{/* row 5 */}
					<KeyRow width={width}>
						<Key
							char="Ctrl"
							pressed={isKeyPressed('controlleft')}
							size={1.3}
							variant="accent"
							width={width}
						/>
						<Key
							char="❖"
							pressed={isKeyPressed('os')}
							size={1.3}
							variant="accent"
							width={width}
						/>
						<Key
							char="Alt"
							pressed={isKeyPressed('alt')}
							size={1.3}
							variant="accent"
							width={width}
						/>
						<Key
							char=" "
							pressed={isKeyPressed(' ')}
							data-key="space"
							size={6.5}
							width={width}
						/>
						<Key char="Fn" size={1.3} variant="accent" width={width} />
						<Key
							char="Control"
							pressed={isKeyPressed('controlright')}
							size={1.3}
							variant="accent"
							width={width}
						/>
						<Key char="" size={0.3} blank={true} width={width} />
						<Key
							char="←"
							pressed={isKeyPressed('arrowleft')}
							size={1}
							variant="special"
							width={width}
						/>
						<Key
							char="↓"
							pressed={isKeyPressed('arrowdown')}
							size={1}
							variant="special"
							width={width}
						/>
						<Key
							char="→"
							pressed={isKeyPressed('arrowright')}
							size={1}
							variant="special"
							width={width}
						/>
					</KeyRow>
				</Board>
			</Box>
		</Tooltip>
	)
}

export default Keyboard
