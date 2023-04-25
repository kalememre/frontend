import { Avatar, CardHeader, Typography } from '@mui/material'
import React from 'react'

export const CountryCardHeader = props => {
    return (
        <div>
            <CardHeader
                avatar={
                    <Avatar className='avatarBox'>
                        {props.country.flag}
                    </Avatar>
                }
                title={<Typography variant="h4" component="div" align='center' gutterBottom>{props.country.name}</Typography>}
                style={{backgroundColor:"#1976d2", color:"white"}}
            />
        </div>
    )
}
