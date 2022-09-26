import React from "react";
import { Button } from "@windmill/react-ui";
import { AiFillHeart } from "react-icons/ai";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-gray-700">Kawaris</h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-8">
          Web penghitung harta warisan
        </h2>
        <Button size="large" tag={Link} to="/form">
          Hitung warisan
        </Button>

        <footer className="fixed  bottom-0 w-screen h-20 flex items-center justify-center">
          <p className="text-gray-700 flex justify-center items-center gap-1">
            made with <AiFillHeart className="text-purple-500" /> from
            paguyubanlembang
          </p>
        </footer>
      </div>
    </>
  );
};

export default Welcome;
