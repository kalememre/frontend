import { Autocomplete, Box, TextField } from '@mui/material'
import React from 'react'

export const SearchAutoComplete = ({ countries, loading, handleSearch, setSearchCountry }) => {
    return (
        <>
            <Autocomplete
                className='w3-animate-left'
                style={{ width: "100%" }}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.name}
                freeSolo
                disabled={loading}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        {option.flag} {option.name}
                    </Box>
                )}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch()
                    }
                }}
                onChange={(e) => { setSearchCountry(e.target.value) }}
                onSelect={(e) => { setSearchCountry(e.target.value) }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={loading ? "Loading..." : "Please enter country name"}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                    />
                )}
            />
        </>
    )
}
