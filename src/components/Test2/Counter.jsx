import React,{useState} from "react";
import {Card,CardContent,Grid,Button,Typography} from "@mui/material"

export const Counter=()=>{
    const [number,setNumber]=useState(5);

    return(
        <Card>
                <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={4}>
                    <Button disabled={number===40} onClick={()=>setNumber(number+5)} variant="contained" fullWidth color="primary">INCREMENT</Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                    <Typography variant="h2">
                        COUNT:{number}
                    </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Button disabled={number===5} onClick={()=>setNumber(number-5)} variant="contained" fullWidth color="primary"> DECREMENT</Button>
                    </Grid>
                    <Grid item xs={8}></Grid>
        </Grid>
                </CardContent>
            </Card>




        
    )
}