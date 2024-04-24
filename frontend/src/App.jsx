import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from './components/Home/Home'
import JobDetails from "./components/Job/jobDetails";
import Jobs from "./components/Job/Jobs";
import MyJobs from "./components/Job/MyJobs";
import PostJob from "./components/Job/PostJob";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import NotFound from "./components/NotFound/NotFound";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { BrowserRouter,  Route, Routes } from "react-router-dom";

const App = () => {


  const {isAuthorised, setIsAuthorised, setUser} = useContext(Context)

  useEffect(() =>{
    const fetchUser = async() =>{
      try{
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getuser",
          { withCredentials: true }
        );
        setUser(response.data.user);
        setIsAuthorised(true);
      }
      catch(error){
        setIsAuthorised(false)
      }
    }
    fetchUser()

  }, [isAuthorised])





  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/job/getall" element={<Jobs />}></Route>
          <Route path="/job/:id" element={<JobDetails />}></Route>
          <Route path="/job/post" element={<PostJob />}></Route>
          <Route path="/job/me" element={<MyJobs />}></Route>

          <Route path="/application/:id" element={<Application />}></Route>
          <Route path="/application/me" element={<MyApplications />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
        <Toaster/>
      </BrowserRouter>
    </>
  );
};

export default App;
