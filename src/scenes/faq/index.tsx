import Header from '../../components/Header'
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'

const Faq = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading='FAQ' subHeading='Frequently Asked Questions Page' />
      </Box>
      {mockDataFaqs.map((faq, idx) => (
        <Accordion key={idx}
          sx={{
            bgcolor: colors.primary[400]
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h4' color={colors.blueAccent[200]}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {faq.answer}
          </AccordionDetails>
        </Accordion>))}

    </Box>
  )
}

export default Faq


const mockDataFaqs = [
  {
    question: "Why did you build this website?",
    answer: "Thats a simple question. I love building websites, also I want to show my skills to the world."
  },
  {
    question: "What is this website for?",
    answer: "This website demonstrates my skills of React, TypeScript, Material UI, and more. It is a template for future projects."
  },
  {
    question: "What are features of this website?",
    answer: "This website has awesome Dashboard and Grids built with Material UI Grid X . Also we have different Charts like Pie Chart, Line Chart, Bar Chart,etc implemented. We also have Calendar and Maps."
  },
  {
    question: "What technologies are used to build this website?",
    answer: "Well I have used React, Typescript, Material UI, Material UI Grid X, Nivo Charts ( which are built on top of D3 ), React Pro Sidebar, Formik and Yup for form validation, React Router Dom, React Full Calendar, React Custom Scrollbars and many more."
  },
  {
    question: "How can I contact you I want to get in touch with you?",
    answer: "Feel free 😄 to reach me via email at saurabhmehta1601@gmail.com"
  }
]