import { useCallback, useEffect, useState } from 'react'
import useEventListener from './useEventListener'

const useElementSize = (elementRef) => {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	})
	// Prevent too many rendering using useCallback
	const updateSize = useCallback(() => {
		const node = elementRef?.current
		if (node) {
			setSize({
				width: node.offsetWidth || 0,
				height: node.offsetHeight || 0,
			})
		}
	}, [elementRef])

	// Initial size on mount
	useEffect(() => {
		updateSize()
	}, [])

	useEventListener('resize', updateSize)

	return size
}

export default useElementSize
