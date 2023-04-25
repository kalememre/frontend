import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const CountryCardContent = props => {
    return (
        <div>   
            <Grid container spacing={2}  >
                <Grid item xs={8}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" >
                        Capital
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        {props.country.capital}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" >
                        Population
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        {props.country.population}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" >
                        Area
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        {props.country.area}
                    </Typography>
                </Grid>
                <Grid item xs={4}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Paper elevation={5}>
                        <img src={props.country.flags.png} alt={props.country.flags.alt} style={{ width: "100%", height: "100%" }} />
                    </Paper> 
                </Grid>
            </Grid>
        </div>
    )
}
