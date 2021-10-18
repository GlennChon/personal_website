import { Close } from '@mui/icons-material'
import {
	Box,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
} from '@mui/material'

const Window = ({ title, open, handleClose, children, sx = {} }) => {
	return (
		<Box
			open={open}
			component={Dialog}
			hideBackdrop={true}
			fullWidth={true}
			sx={{
				top: -100,
				...sx,
			}}
		>
			<Box
				component={DialogContent}
				sx={{
					width: '100%',
					p: 0,
					bgcolor: 'white',
					alignItems: 'center',
				}}
			>
				<Box
					component={DialogTitle}
					sx={{
						m: 'auto',
						width: '100%',
						textAlign: 'center',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end',
						borderBottom: '1px solid grey',
					}}
				>
					<Box component="div" sx={{ width: '90%', textAlign: 'center' }}>
						{title}
					</Box>
					<Box
						component="div"
						sx={{
							height: '100%',
							width: '5%',
						}}
					>
						<Box
							component={IconButton}
							aria-label="close window"
							onClick={handleClose}
							sx={{
								height: '100%',
								width: '100%',
								p: 0,
								borderRadius: 0,
								m: 0,
								fontSize: { sm: '.5rem', md: '1rem' },
							}}
						>
							<Close />
						</Box>
					</Box>
				</Box>
				<Box sx={{ flexGrow: 1, width: '100%', p: 1, bgcolor: 'white' }}>
					{children}
				</Box>
			</Box>
		</Box>
	)
}
export default Window
