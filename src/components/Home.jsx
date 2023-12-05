import React,{useState} from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { Xs } from "./data";

export const Home=()=>{
    const [data,setData]=useState(Xs);


    return(
     <Grid container spacing={2}>
         {
            data.map((item)=>
            <Grid item xs={item.xs}>
            <Card sx={{bgcolor:item.clr,height:"60px"}}>
                <CardContent>
                
                </CardContent>
            </Card>
            </Grid>
            )
         }
     
     </Grid>
    )
}