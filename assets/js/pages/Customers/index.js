import React, {useEffect, useState} from 'react'
import { withStyles, Container, Button } from '@material-ui/core'
import axios from 'axios'
import CustomTable from '../../components/MaterialCustomTable'
import { ExportToCsv } from "export-to-csv"
import styles from './styles'

const Customers = props => {
    const { classes } = props
    const [customers, setCustomers] = useState([])

    const  columns = [
        { title: 'ID', field: 'id' },
        { title: 'PRENOM', field: 'firstName' },
        { title: 'NOM', field: 'lastName' },
        { title: 'EMAIL', field: 'email' },
        { title: 'SOCIETE', field: 'company' },
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
        filename: "Liste des clients ",
        showTitle: true,
        title: "Liste des clients",
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true
      }
      const csvExporter = new ExportToCsv(csvOptions)
      const generateExport = () => {
        const exportData = customers.map(obj => ({
          "ID": obj.id,
          "Prénom": obj.firstName,
          "Nom": obj.lastName,
          "Email": obj.email,
          "Société": obj.company
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
        axios.get("/api/customers")
        .then(response => response.data['hydra:member'])
        .catch(error => console.log(error.response))
        .then(data => setCustomers(data))
    }, [])

    return ( 
    <Container className={classes.container}>
        <CustomTable 
            data={customers} 
            columns={columns}
            title="Liste des clients"
            options={options}
        />
    </Container>
    
    
    )
    
}
 
export default withStyles(styles) (Customers);