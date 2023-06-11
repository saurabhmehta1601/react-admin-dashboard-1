import { Box } from "@mui/material";
import Header from "../../components/Header"
import { DataGrid } from '@mui/x-data-grid';
import { mockDataContacts } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <div>
      <Box mt={5} mb={3}>
        <Header heading="Contacts" subHeading="See the list of your contacts" />
      </Box>
      <Box
        height={"500px"}
        mb={2}
        pb={2}
        sx={{
          "MuiDataGrid-columnHeaders": {
            bgcolor: "red !important"
          }
        }}
      >
        <DataGrid
          scrollbarSize={0}
          disableRowSelectionOnClick
          checkboxSelection
          rows={mockDataContacts}
          columns={
            [
              { field: 'id', headerName: 'ID', width: 70 },
              { field: 'name', headerName: 'Name', flex: 1 },
              { field: 'age', headerName: 'Age', width: 70 },
              { field: 'phone', headerName: "Phone", flex: 1 },
              { field: 'email', headerName: 'Email', flex: 1 },
              { field: 'address', headerName: 'Address', flex: 1 },
              { field: 'city', headerName: 'City', flex: 1 },
              { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
            ]
          }
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
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