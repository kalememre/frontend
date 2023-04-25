import { Card, CardContent, Divider } from '@mui/material'
import React from 'react'
import { CountryCardHeader } from './CountryCardHeader'
import { CountryCardContent } from './CountryCardContent'
import { CountryCardAccordion } from './CountryCardAccordion'

export const CountryCard = props => {
    return (
        <Card sx={{ flexGrow: 0.5 }} style={{ margin: "10px", borderRadius: "20px",  border: "1px solid #1976d2" }}>
            <CountryCardHeader country={props.country} />
            <Divider />
            <CardContent>
                <CountryCardContent country={props.country} />
                <Divider style={{ marginTop: "10px" }} />
                <CountryCardAccordion title="Currencies" country={props.country} />
                <CountryCardAccordion title="Timezones" country={props.country} />
                <CountryCardAccordion title="Languages" country={props.country} />
            </CardContent> 
        </Card>
    )

}