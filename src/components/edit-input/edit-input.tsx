import { Box, TextField, useMediaQuery } from "@mui/material"
import { FC } from "react"

interface IEditInput {
    defaultValue: string
    update: () => void
}

const EditInput: FC<IEditInput> = ({
    defaultValue,
    update
}) => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    width: 150
                }}
            >
                <TextField 
                    defaultValue={defaultValue}
                    onKeyDown={(e) => {if (e.key === 'Enter') update()}}
                    inputRef={input => input && input.focus()}
                    onBlur={update}
                    sx={{
                        '& .MuiInputBase-root': {
                            borderRadius: '0 !important',
                        },
                        '& .MuiInputBase-input': {
                            padding: '2px !important'
                        }
                    }}
                />
            </Box>
        )
    return (
        <TextField 
            defaultValue={defaultValue}
            onKeyDown={(e) => {if (e.key === 'Enter') update()}}
            inputRef={input => input && input.focus()}
            onBlur={update}
            sx={{
                '& .MuiInputBase-root': {
                    borderRadius: '0 !important',
                },
                '& .MuiInputBase-input': {
                    padding: '6px !important'
                }
            }}
        />
    )
}

export default EditInput