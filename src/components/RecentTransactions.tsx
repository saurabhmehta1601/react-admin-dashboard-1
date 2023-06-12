import { useTheme, Paper, Typography, Box } from "@mui/material"
import { tokens } from "../theme"
import { mockTransactions } from "../data/mockData"

interface IProps {
  id: string
  user: string
  date: string
  cost: string
}
const Transaction = ({ id, user, date, cost }: IProps) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
    <Box>
      <Box color={colors.greenAccent[500]}>{id}</Box>
      <Box>{user}</Box>
    </Box>
    <Box>{date}</Box>
    <Box
      p={"4px 8px"}
      width={"5vw"}
      textAlign={"center"}
      bgcolor={colors.greenAccent[600]} borderRadius={1}
      color={colors.primary[100]}
    >
      ${cost}
    </Box>
  </Box>
}


const RecentTransactions = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Paper
      sx={{
        p: 4,
        bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white,
        height: "100%",
        // bgcolor: "yellow"
        overflowY: "scroll"
      }}>
      <Typography variant="h5" mb={2}>Recent Transactions</Typography>
      <Box flex={1}>
        {mockTransactions.map(tr => (
          <Box key={tr.txId} my={1}>
            <Transaction id={tr.txId} date={tr.date} cost={tr.cost} user={tr.user} />
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default RecentTransactions