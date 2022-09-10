import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "../Redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return <div>Home</div>;
};

export default Home;
