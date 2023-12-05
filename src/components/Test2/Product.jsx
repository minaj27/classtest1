import React,{useState,useEffect} from "react";
import { Grid,TextField } from "@mui/material";
import { ProductItem } from "./ProductItem";
import axios from "axios";


 

export const Product=()=>{
  const [data,setData]=useState([]);

  const getdata =async ()=>{
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data)
  }
  useEffect(()=>{
    getdata();
  },[])


    return(
        <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <TextField variant="outlined" fullWidth placeholder="Search" />

            </Grid>

            {
                data.map((item)=>
                <ProductItem  item={item}/>
                
                )
            }

        </Grid>
    )
}