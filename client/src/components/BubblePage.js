import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../axiosWithAuth";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get("/colors")
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} props={props} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
