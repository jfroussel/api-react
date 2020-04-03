import React, { forwardRef } from "react"
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import MaterialTable from "material-table"
import {
  AddBox,
  ArrowUpward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Print,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from "@material-ui/icons"
import { COLOR_WHITE, COLOR_PRIMARY } from "../services/theme"

import styles from "../pages/Customers/styles"

const localization = {
  pagination: {
    labelDisplayedRows: "{from}-{to} sur {count}",
    labelRowsSelect: "lignes"
  },
  toolbar: {
    nRowsSelected: "{0} lignes affichées",
    searchTooltip: "Rechercher",
    searchPlaceholder: "Rechercher"
  },
  header: {
    actions: "Actions"
  },
  body: {
    emptyDataSourceMessage: "Aucune donnée à afficher",
    filterRow: {
      filterTooltip: "Filtrer"
    }
  }
}

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  Print: forwardRef((props, ref) => <Print {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
}

const CustomTable = ({
  data,
  columns,
  options,
  title,
  detailPanel,
  onRowClick
}) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        contrastText: COLOR_WHITE,
        main: COLOR_PRIMARY
      },
      secondary: {
        main: COLOR_WHITE
      }
    },
    MuiTextField: {
      fullWidth: false
    },
    props: {
      MuiButton: {
        color: "primary",
        variant: "contained",
        style: {
          borderRadius: "20px",
          fontFamily: "ProximaNova-Bold",
          height: "40px",
          minWidth: "125px"
        }
      }
    }
  })
  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        title={title}
        columns={columns}
        localization={localization}
        data={data}
        options={options}
        icons={tableIcons}
        detailPanel={detailPanel}
        onRowClick={onRowClick}
      />
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(CustomTable)
