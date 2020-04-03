import React, {useEffect, useState} from 'react'
import { withStyles, Container, Button } from '@material-ui/core'
import axios from 'axios'
import CustomTable from '../../components/MaterialCustomTable'
import { ExportToCsv } from "export-to-csv"
import styles from './styles'

const Invoices = props => {
    const { classes } = props
    const [invoices, setInvoices] = useState([])

    const  columns = [
        { title: 'N° CLIENT', field: 'customer.id' },
        { title: 'MONTANT', field: 'amount' },
        { title: 'ENVOYE LE', field: 'sentAt' },
        { title: 'STATUS', field: 'status' },
        { title: 'CHRONO', field: 'chrono' },
        {
            render: data => <Button  size="small"  color="primary" style={{fontFamily: "tahoma", fontSize:"10px"}} data={data}>Editer</Button>
        },
        {
            render: data => <Button  size="small"  color="secondary" style={{fontFamily: "tahoma", fontSize:"10px"}} data={data}>Suppr.</Button>
        }
      ]
    
      const csvOptions = {
        fieldSeparator: ",",
        quoteStrings: "",
        decimalSeparator: ".",
        showLabels: true,
        filename: "Liste des factures ",
        showTitle: true,
        title: "Liste des factures",
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true
      }
      const csvExporter = new ExportToCsv(csvOptions)
      const generateExport = () => {
        const exportData = customers.map(obj => ({
          "N° CLIENT": obj.customer.id,
          "MONTANT": obj.amount,
          "ENVOYE LE": obj.sentAt,
          "STATUT": obj.status,
          "CHRONO": obj.chrono
        }))
        return exportData
      }
      const options = {
        search: true,
        searchFieldAlignment: "right",
        searchFieldStyle: { width: "auto" },
        toolbar: true,
        showTitle: true,
        sorting: true,
        exportButton: true,
        exportCsv: () => csvExporter.generateCsv(generateExport(customers))
      }

    useEffect(() => {
        axios.get("/api/invoices")
        .then(response => response.data['hydra:member'])
        .catch(error => console.log(error.response))
        .then(data => setInvoices(data))
    }, [])

    return ( 
    <Container className={classes.container}>
        {console.log(invoices)}
        <CustomTable 
            data={invoices} 
            columns={columns}
            title="Liste des factures"
            options={options}
        />
    </Container>
    
    
    )
    
}
 
export default withStyles(styles) (Invoices);