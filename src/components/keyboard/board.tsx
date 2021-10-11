import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useViewport } from '../../utils/ViewportProvider'
import React, { ReactNode } from 'react'

const Board = ({
	height,
	width,
	depth,
	children,
}: {
	height: number
	width: number
	depth: number
	children: ReactNode
}) => {
	return (
		<Box
			className="keyboard"
			component="div"
			sx={{
				height: `${height}px`,
				width: `${width}px`,
				// change perspective
				transform: `perspective(10000px) rotateX(0deg) rotateY(0deg) rotateZ(3deg) translateZ(calc(${depth}px / 2))`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				className="keyboard-front"
				component="div"
				sx={{
					width: `100%`,
					height: `${depth}px`,
					transform: `rotateX(-90deg) translateZ(calc(${height}px / 2)) `,
					bgcolor: '#BCBCBC',
					position: 'absolute',
				}}
			/>
			<Box
				className="keyboard-back"
				component="div"
				sx={{
					width: `100%`,
					height: `${depth}px`,
					transform: `rotateX(90deg) translateZ(calc(${height}px / 2))`,
					bgcolor: '#ADADAD',
					position: 'absolute',
				}}
			/>
			<Box
				className="keyboard-right"
				component="div"
				sx={{
					width: `${depth}px`,
					height: `100%`,
					transform: `rotateY(90deg) translateZ(calc(${width}px / 2))`,
					bgcolor: '#ADADAD',
					position: 'absolute',
				}}
			/>
			<Box
				className="keyboard-left"
				component="div"
				sx={{
					width: `${depth}px`,
					height: `100%`,
					transform: `rotateY(90deg) translateZ(calc(-${width}px / 2))`,
					bgcolor: '#BCBCBC',
					position: 'absolute',
				}}
			/>
			<Box
				className="keyboard-top"
				component="div"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					width: `100%`,
					height: `100%`,
					transform: `rotateY(0deg) translateZ(calc(${depth}px / 2))`,
					background: 'linear-gradient(to bottom, #dbf2fe, #343232)',
					position: 'absolute',
				}}
			>
				{children}
			</Box>
			<Box
				className="keyboard-bottom"
				component="div"
				sx={{
					width: `${width}px`,
					height: `${height}px`,
					transform: `rotateY(180deg) translateZ(calc(${depth}px / 2))`,
					bgcolor: '#eae7e5',
					position: 'absolute',
					boxShadow:
						'-10px 30px 5px rgb(28, 28, 28, .5), 0px 30px 5px rgb(28, 28, 28, .5), 0px 0px 5px rgb(28, 28, 28, .5), 0px 30px 5px rgb(28, 28, 28, .5)',
				}}
			/>
		</Box>
	)
}
export { Board }
