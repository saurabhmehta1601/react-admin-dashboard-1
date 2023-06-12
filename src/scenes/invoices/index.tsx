import { Box, Typography } from "@mui/material";
import Header from "../../components/Header"
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Invoices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading="Invoices" subHeading="List of invoice balances" />
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
          rows={mockDataInvoices}
          columns={
            [
              { field: 'id', headerName: 'ID', width: 70 },
              { field: 'name', headerName: 'Name', flex: 1 },
              { field: 'phone', headerName: "Phone", width: 140 },
              { field: 'email', headerName: 'Email', flex: 1 },
              {
                field: 'cost',
                headerName: 'Cost',
                width: 70,
                renderCell: (params) => (<Typography color={colors.greenAccent[400]}>
                  $ {params.row.cost}
                </Typography>)
              },
              { field: 'date', headerName: 'Date', flex: 1 },
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
    </Box>
  )
}

export default Invoices