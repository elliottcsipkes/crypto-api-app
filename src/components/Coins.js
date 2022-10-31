import React from "react";
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import "./Coins.css";
import Coin from "../routes/Coin";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

const Coins = ({ page, coins, handleNextPage, handlePrevPage }) => {
  return (
    <div className="container">
      <div>
        <div
          className="page-btns"
          style={
            page === 1
              ? { justifyContent: "end" }
              : {
                  justifyContent: "space-between",
                }
          }
        >
          {page > 1 && (
            <button className="btn" onClick={handlePrevPage}>
              <IoMdArrowRoundBack /> Prev Page
            </button>
          )}
          <button className="btn" onClick={handleNextPage}>
            Next Page <IoMdArrowRoundForward />
          </button>
        </div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
      <div
        className="bot page-btns"
        style={
          page === 1
            ? { justifyContent: "end" }
            : {
                justifyContent: "space-between",
              }
        }
      >
        {page > 1 && (
          <button className="btn" onClick={handlePrevPage}>
            <IoMdArrowRoundBack /> Prev Page
          </button>
        )}
        <button className="btn" onClick={handleNextPage}>
          Next Page <IoMdArrowRoundForward />
        </button>
      </div>
      <div className="footer">
        <p>
          Coin Data from{" "}
          <a href="https://www.coingecko.com/en/api" target="_blank">
            CoinGecko
          </a>
        </p>
      </div>
    </div>
  );
};

export default Coins;
