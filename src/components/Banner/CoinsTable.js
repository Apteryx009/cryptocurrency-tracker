import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CoinList } from '../../config/api'
// Here we are implmenting the Coinlist API

import { CryptoState } from "../../CryptoContext";
import {TextField, Container, createTheme, ThemeProvider, Typography, TableContainer} from '@material-ui/core';

const CoinsTable = () => {
   const [coins, setCoins] = useState([])
   const [loading, setLoading] = useState(false)
   const [search, setSearch] = useState()
    
//    Destructing currency from CryptoSTate
    const {currency} =  CryptoState()


    const fetchCoins = async () => {
        setLoading(true)

        const {data} = await axios.get(CoinList(currency))

        setCoins(data)
        setLoading(false)
    };

    console.log(coins)

    // Every time currency changes we are gonna call this use state
    useEffect(() => {
        fetchCoins()
    }, [currency])
 

    const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });
    

 
   return (
   <ThemeProvider theme={darkTheme}>
        <Container style ={{textAlign: "center"}}>

        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>

        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableContainer>
            {/* {
                loading?(

                ) 
            } */}
        
        </TableContainer>
           
        </Container>

   </ThemeProvider>
  );

};

export default CoinsTable
