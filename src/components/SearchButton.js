import { Search } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton'
import React from 'react'

export const SearchButton = (props) => {
    return (
        <>
            <LoadingButton
                onClick={props.onClick}
                endIcon={<Search />}
                loading={props.loading}
                loadingPosition="end"
                variant="contained"
            >
                <span>Search</span>
            </LoadingButton>
        </>
    )
}
