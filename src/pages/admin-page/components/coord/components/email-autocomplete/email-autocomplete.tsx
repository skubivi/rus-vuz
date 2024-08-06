import { Autocomplete, Box, IconButton, TextField, Typography } from "@mui/material"
import { FC, useState } from "react"

import tempImage from '../../../../../../assets/temp/Rectangle 4737.png'

interface IEmailAutoComplete {
    options: {id: number, label: string}[]
    getUserById: (id: number) => ({
        firstName: string,
        lastName: string,
        email: string
    } | undefined)
}

const EmailAutocomplete: FC<IEmailAutoComplete> = ({
    options,
    getUserById
}) => {
    const [selectedUser, setSelectedUser] = useState<number>(-1)
    const userInfo = getUserById(selectedUser)
    if (selectedUser === -1)
        return (
            <Autocomplete
                sx={{
                    "& .MuiAutocomplete-endAdornment": {
                        display: 'none'
                    },
                    "& .MuiFormControl-root .MuiOutlinedInput-root": {
                        paddingRight: "20px !important",
                    },
                    "&:dir(rtl) .MuiInputLabel-root": {
                        right: 10,
                    },
                    "&:dir(rtl) .MuiInputLabel-shrink": {
                        right: 0,
                        transform: `translateY(-9px) scale(0.75)`,
                    },
                    "&:dir(rtl) .MuiOutlinedInput-notchedOutline": {
                        textAlign: "right",
                    },
                    "& .MuiInputLabel-root": {
                        fontWeight: 500,
                        color: '#191E34',
                        letterSpacing: '-0.3px',
                    },
                }}
                clearIcon={false}
                options={options}
                fullWidth
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder='Введите email'
                        InputProps={{
                            ...params.InputProps
                        }}
                    />
                )}
                onChange={(_evt, data) => setSelectedUser((data as { id: number }).id)}
            />
        )
    if (userInfo)
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 3.5,
                    width: 240,
                    height: 66,
                    background: '#F6F7F9',
                    borderRadius: 2.5
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 3.25
                    }}
                >
                    <Box 
                        component={'img'}
                        src={tempImage}
                        sx={{
                            borderRadius: 3,
                            width: 68, 
                            height: 68
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontWeight: 500
                            }}
                        >
                            {userInfo.lastName + ' ' + userInfo.firstName}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 500,
                                color: '#7F8080'
                            }}
                        >
                            {userInfo.email}
                        </Typography>
                    </Box>
                </Box>
                <IconButton
                    sx={{
                        height: 24,
                        width: 24
                    }}
                    onClick={() => setSelectedUser(-1)}
                >
                    <Typography
                        color='#7F8080'
                        sx={{
                            transform: 'rotate(45deg)',
                            fontSize: 24
                        }}
                    >
                        +
                    </Typography>
                </IconButton>
            </Box>
        )
}

export default EmailAutocomplete