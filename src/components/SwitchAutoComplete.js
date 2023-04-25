import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'

export const SwitchAutoComplete = ({ setAutoComplete }) => {
    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            defaultChecked
                            onChange={(e) => {
                                setAutoComplete(e.target.checked)
                            }}
                        />
                    }
                    label="AutoComplete"
                    labelPlacement='top'
                />
            </FormGroup>
        </>
    )
}
