import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'
import theme from "./services/theme"
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Customers from './pages/Customers'
import Invoices from './pages/Invoices'


const App = () => {
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <Container maxWidth="xl" disableGutters>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/customers" component={Customers} />
                        <Route exact path="/invoices" component={Invoices} />
                    </Switch>
                </Container>
            </ThemeProvider>
        </HashRouter>
    )
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement)