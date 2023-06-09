import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme"

interface IProps {
  heading: string
  subHeading: string
}

const Header = ({ heading, subHeading }: IProps) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box mt={5}>
      <Typography variant="h2" fontWeight={700}>{heading}</Typography>
      <Typography variant="h5" color={colors.greenAccent[400]} mt={1}>{subHeading}</Typography>
    </Box>
  )
}

export default Header