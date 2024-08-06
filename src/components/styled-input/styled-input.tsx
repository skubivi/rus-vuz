import { TextField, useMediaQuery } from "@mui/material"
import { FC } from "react"

const StyledInput: FC<{title: string}> = ({title}) => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile) 
        return (
            <TextField 
                label={title}
                fullWidth
                sx={{
                    fontSize: 12,
                    fontWeight: 400,
                    '& .MuiFormLabel-root': {
                        fontSize: 12,
                        transform: 'translate(6px, 6px) scale(1)'
                    },
                    '& .MuiInputLabel-shrink': {
                        transform: 'translate(14px, -9px) scale(0.75) !important',
                    },
                    '& .MuiInputBase-root': {
                        borderRadius: '7px !important'
                    },
                    '& .MuiInputBase-input': {
                        padding: 2.5,
                        height: '18px !important'
                    }
                }}
            />
        )
    return (
        <TextField 
            label={title}
            fullWidth
            sx={{
                fontSize: 18,
                fontWeight: 400,
                '& .MuiInputBase-input': {
                    height: '31px !important'
                }
            }}
        />
    )
}

export default StyledInput