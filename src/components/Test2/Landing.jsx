import React from "react";
import { Card,CardContent } from "@mui/material";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./Home";
import { NavList } from "./NavList";
import { Counter } from "./Counter";
import { Product } from "./Product";
import { Service } from "./Service";
import { Contact } from "./Contact";



 export const Landing=()=>{
    return(
   <BrowserRouter>
   <Card>
    <CardContent>
   <NavList />
  </CardContent>
   </Card>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route  path="/counter" element={<Counter />}/>
    <Route  path="/product" element={<Product />}/>
    <Route  path="/service" element={<Service />}/>
    <Route path="/contact" element={<Contact />} />
   </Routes>
   </BrowserRouter>
    )
}