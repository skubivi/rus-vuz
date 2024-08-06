import { TextField } from "@mui/material"
import { FC } from "react"

interface IEditInput {
    defaultValue: string
    update: () => void
}

const EditInput: FC<IEditInput> = ({
    defaultValue,
    update
}) => {
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