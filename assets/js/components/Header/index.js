import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles, AppBar, Toolbar, IconButton , Button, Typography, Menu, MenuItem } from '@material-ui/core'
import  MenuIcon from '@material-ui/icons/Menu'
import styles from './styles'

const Header = (props) => {
    const { classes } = props
    return ( 
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <MenuItem component={Link} to="/" variant="h6" className={classes.title}>Reactland</MenuItem>
                <MenuItem component={Link} to="/customers" >Clients</MenuItem>
                <MenuItem component={Link} to="/invoices">Factures</MenuItem>
                <Button variant="outlined" color="secondary">Connexion</Button>
            </Toolbar>
            </AppBar>
        </div>
     );
}
 
export default withStyles(styles)(Header);