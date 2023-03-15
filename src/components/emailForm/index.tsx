import SendIcon from '@mui/icons-material/Send'
import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Button, Fade, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs, { init } from '@emailjs/browser'
import env from '@beam-australia/react-env'

const contactSchema = Yup.object().shape({
	fullName: Yup.string().trim().required('Name required'),
	email: Yup.string().trim().email().required('Email required'),
	message: Yup.string().trim().required('Message required'),
})

const EmailForm = ({ }) => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [formError, setFormError] = useState('')
	useEffect(() => {
		init(env('EMAIL_USER_ID'))
	}, [])
	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			message: '',
		},
		validationSchema: contactSchema,
		onSubmit: async (values) =>
			await doSubmit({
				fullName: values.fullName.trim(),
				email: values.email.trim(),
				message: values.message.trim(),
			}),
	})

	const doSubmit = async (data) => {
		try {
			//LOGIN
			await emailjs
				.send(env('EMAIL_SERVICE_ID'), env('EMAIL_TEMPLATE_ID'), {
					to_name: 'Glenn',
					from_name: data.fullName,
					reply_to: data.email,
					message: data.message,
				})
				.then(
					function () {
						setIsSubmitted(true)
						setTimeout(function () {
							setIsSubmitted(false)
						}, 2000)
					},
					function (err) {
						setIsSubmitted(false)
						setFormError(err.message)
						console.log('FAILED...', err)
					},
				)
		} catch (err) {
			return setFormError(err.message)
		}
	}

	return (
		<form onSubmit={formik.handleSubmit}>
			<Grid container direction="column" spacing={2}>
				<Grid item xs={12}>
					<Box
						sx={{ minWidth: '100%' }}
						component={TextField}
						id="fullName"
						name="fullName"
						label="Full Name"
						type="textinput"
						variant="outlined"
						autoComplete="fullName"
						placeholder={'FullName'}
						value={formik.values.fullName}
						onChange={formik.handleChange}
						error={formik.touched.fullName && Boolean(formik.errors.fullName)}
						helperText={formik.touched.fullName && formik.errors.fullName}
					/>
				</Grid>
				<Grid item xs={12}>
					<Box
						sx={{ minWidth: '100%' }}
						component={TextField}
						id="email"
						name="email"
						label="Email"
						type="textinput"
						variant="outlined"
						autoComplete="email"
						placeholder={'Email'}
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
				</Grid>
				<Grid item xs={12}>
					<Box
						sx={{ minWidth: '100%' }}
						component={TextField}
						id="message"
						name="message"
						label="Message"
						type="textinput"
						multiline={true}
						rows={5}
						variant="outlined"
						autoComplete="message"
						placeholder={'Message'}
						value={formik.values.message}
						onChange={formik.handleChange}
						error={formik.touched.message && Boolean(formik.errors.message)}
						helperText={formik.touched.message && formik.errors.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<Fade in={isSubmitted} timeout={700}>
						<Box
							component={Grid}
							container
							item
							direction="row"
							justifyContent="center"
							sx={{ color: 'green' }}
						>
							<Typography color="error">{formError}</Typography>
							<>
								<Box component={Grid} item>
									<CheckCircleOutline />
								</Box>
								<Box component={Grid} item>
									<Typography color="inherit">Sent</Typography>
								</Box>
							</>
						</Box>
					</Fade>
					<Button variant="contained" type="submit" endIcon={<SendIcon />}>
						Send
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}
export default EmailForm
