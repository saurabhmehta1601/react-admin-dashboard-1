import { Box, Button, Paper, TextField, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { Formik } from "formik"
import * as yup from "yup"
import { tokens } from '../../theme'



const Form = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const addNewUser = () => {
    // TODO: add logic to add new user 
  }

  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading='CREATE USER' subHeading='Create a new user profile' />
      </Box>

      <Formik
        initialValues={initialValues}
        onSubmit={addNewUser}
        validationSchema={userFormSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Paper sx={{
              minHeight: "50vh", px: 4, py: 8,
              bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white
            }} >
              <Box display={"flex"} flexDirection={"column"} rowGap={2}>
                <Box display={"flex"} width={"100%"} columnGap={8}>
                  <TextField
                    name='firstName'
                    value={values.firstName}
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="First Name"
                    sx={{ flex: 1 }}
                  />
                  <TextField
                    name='lastName'
                    value={values.lastName}
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Last Name"
                    sx={{ flex: 1 }}
                  />
                </Box>

                <Box display={"flex"} width={"100%"} columnGap={8}>
                  <TextField
                    name='contact'
                    value={values.contact}
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Contact No"
                    sx={{ flex: 1 }}
                  />
                  <TextField
                    name='email'
                    value={values.email}
                    label="Email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{ flex: 1 }}
                  />
                </Box>

                <TextField
                  name='address1'
                  value={values.address1}
                  label="Address 1"
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <TextField
                  name='address2'
                  value={values.address2}
                  label="Address 2"
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <Button
                  type='submit'
                  variant='contained'
                  sx={{ bgcolor: colors.blueAccent[600], mt: 2 }}
                >
                  Add User
                </Button>
              </Box>
            </Paper>
          </form>
        )}
      </Formik>
    </Box >
  )
}

export default Form

const initialValues = {
  firstName: "", lastName: "", email: "", contact: "", address1: "", address2: ""
}

const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

const userFormSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email address").required("required"),
  contact: yup.string().matches(phoneRegex, "phone number is not valid").required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
})