import { Box, Typography } from "@mui/material";
import Header from "../../components/Header"
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FaceIcon from '@mui/icons-material/Face';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

enum ROLE { ADMIN = "admin", USER = "user", MANAGER = "manager" }
const RoleComponent = ({ role }: { role: string }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      columnGap={"5px"}
      sx={{
        width: "60%", m: "15px auto", p: "5px", px: "10px",
        borderRadius: "5px", textAlign: "center",
        bgcolor: colors.greenAccent[600]
      }}>
      <Box flex={1} display={"flex"} >
        {role === ROLE.USER ? <FaceIcon /> : role === ROLE.ADMIN ? <AdminPanelSettingsIcon /> : <ManageAccountsIcon />}
      </Box>
      <Box flex={2} textAlign="left" >
        <Typography>
          {role}
        </Typography>
      </Box>
    </Box>
  )
}

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <div>
      <Box mt={5} mb={3}>
        <Header heading="Team" subHeading="Managing the Team Members" />
      </Box>
      <Box
        height={"500px"}
        mb={2}
        pb={2}
      >
        <DataGrid
          scrollbarSize={0}
          disableRowSelectionOnClick
          checkboxSelection
          rows={mockDataTeam}
          columns={
            [
              { field: 'id', headerName: 'ID', width: 70 },
              { field: 'name', headerName: 'Name', flex: 1 },
              { field: 'age', headerName: 'Age', width: 70 },
              { field: 'phone', headerName: "Phone", width: 140 },
              { field: 'email', headerName: 'Email', flex: 1 },
              {
                field: 'accessLevel',
                headerName: 'Role',
                flex: 1,
                headerAlign: "center",
                renderCell: ({ row: { access } }: { row: { access: string } }) => <RoleComponent role={access} />
              }
            ]
          }
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-row": {
              bgcolor: theme.palette.mode === "dark" ? colors.grey[800] : colors.white,
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        />
      </Box>
    </div>
  )
}

export default Team