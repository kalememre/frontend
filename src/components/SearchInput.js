import { OutlinedInput } from '@mui/material'
import React from 'react'
import './Components.css'

export const SearchInput = ({ loading, handleSearch, setSearchCountry }) => {
    return (
        <>
            <OutlinedInput
                className='w3-animate-right'
                style={{ width: "100%" }}
                placeholder="Please enter country name"
                type='Search'
                disabled={loading}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch()
                    }
                }}
                onChange={(e) => { setSearchCountry(e.target.value) }}
            />
        </>
    )
}
