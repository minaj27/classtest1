import React from "react";
import { Grid,Card,CardContent,Button,Rating } from "@mui/material";


export  const ProductItem=({item})=>{
    return(
        <Grid item xs={3}>
          <Card>
            <CardContent>
                <img width={200} height={200} src={item.image} alt="" />
                <h6>{item.title.slice(0,25)}...</h6>
                <h2>${item.price} <del style={{fontSize:"small"}}>${item.price}</del></h2>
                <Rating value={item.rating.rate} />
                <h6>{item.description.slice(0,100)}...</h6>
                <Button variant="contained" fullWidth color="primary">ADD TO CART</Button>
                <br/>
                <br/>
                <Button variant="contained" fullWidth color="warning">BUY</Button>

            </CardContent>
          </Card>

        </Grid>
    )
}