import { ExpandMore, Circle } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

export const CountryCardAccordion = (props) => {
    return (
        <>
            <Accordion square={false} >
                <AccordionSummary
                    expandIcon={<ExpandMore style={{ color: "black" }} />}
                    style={{ backgroundColor: "#d6d3d3", color: "black", marginTop: "10px" }}
                >
                    <Typography>{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordionDetails' >
                    {
                        props.title === "Currencies" ?
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Symbol</TableCell>
                                            <TableCell align="center">Name</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            Object.keys(props.country.currencies).map((key) => {
                                                return (
                                                    <TableRow key={key}>
                                                        <TableCell align="center">{props.country.currencies[key].symbol}</TableCell>
                                                        <TableCell align="center">{props.country.currencies[key].name}</TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            : props.title === "Timezones" ?
                                <List>
                                    {
                                        props.country.timezones.map((timezone) => {
                                            return (
                                                <ListItem key={timezone}>
                                                    <ListItemIcon>
                                                        <Circle fontSize="xsmall" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={timezone} />
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                                :
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Name</TableCell>
                                                <TableCell align="center">Native Name</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                Object.keys(props.country.languages).map((key) => {
                                                    return (
                                                        <TableRow key={key}>
                                                            <TableCell align="center">{key}</TableCell>
                                                            <TableCell align="center">{props.country.languages[key]}</TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                    }
                </AccordionDetails>
            </Accordion>
        </>
    )
}
