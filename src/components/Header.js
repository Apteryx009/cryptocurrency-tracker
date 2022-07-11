import { AppBar, Container, Toolbar, Typography, MenuIcon, Select, MenuItem, useScrollTrigger, makeStyles } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))



const Header = () => {

    const classes = useStyles();

    const history = useHistory()

    return (
<AppBar color='transparent' position='static'>
<Container>
        <Toolbar>
            <Typography onClick={() => history.push("/")} className={classes.title}>
                Crypto Hunter
            </Typography>

        <Select 
        variant='outlined'
        style={{
            width:100, 
            height: 40,
            marginLeft: 15,
        }}
        
        >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
        </Select>

        </Toolbar>

</Container>

</AppBar>

    )
}

export default Header