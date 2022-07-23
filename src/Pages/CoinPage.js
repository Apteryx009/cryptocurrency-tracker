import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import CoinInfo from "../components/CoinInfo";
import axios from "axios";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles(() => ({}));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>{/*sidebar*/}</div>
      {/*chart*/}
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
