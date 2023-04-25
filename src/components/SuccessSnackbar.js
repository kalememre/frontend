import { Alert, Slide, Snackbar } from '@mui/material';
import React, { useState } from 'react'

const SuccessSnackbar = ({ isOpen, setIsOpen }) => {
    const [Transition] = useState(() => TransitionRight);
    function TransitionRight(props) {
        return <Slide {...props} direction="left" />;
    }
    return (
        <>
            <Snackbar
                open={isOpen}
                autoHideDuration={2000}
                onClose={() => setIsOpen(false)}
                TransitionComponent={Transition}
                key={Transition ? Transition.name : ''}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                style={{ marginTop: '50px' }}
            >
                <Alert variant="filled" severity="success" sx={{ width: '100%' }}>
                    Country Found Successfully!
                </Alert>
            </Snackbar>
        </>
    )
}

export default SuccessSnackbar