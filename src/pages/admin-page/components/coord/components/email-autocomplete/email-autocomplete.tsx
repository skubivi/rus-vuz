import { Autocomplete, Box, IconButton, TextField, Typography, useMediaQuery } from "@mui/material"
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
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile) {
        if (selectedUser === -1)
            return (
                <Autocomplete
                    sx={{
                        "& .MuiInputLabel-root": {
                            fontSize: 12,
                            fontWeight: 500,
                            color: '#191E34',
                            letterSpacing: '-0.3px',
                            transform: `translate(4px, 4px) scale(1)`
                        },
                        "& .MuiInputBase-root": {
                            padding: '7px !important',
                            borderRadius: '7px !important',
                            height: 30
                        },
                        "& .MuiAutocomplete-endAdornment": {
                            display: 'none'
                        }
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
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontSize: 12,
                                    fontWeight: 500
                                }
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
                        padding: 1.5,
                        width: 'calc(100% - 12px)',
                        height: 49,
                        background: '#F6F7F9',
                        borderRadius: 2.5,
                        position: 'relative',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 2
                        }}
                    >
                        <Box 
                            component={'img'}
                            src={tempImage}
                            sx={{
                                borderRadius: 1.75,
                                width: 48, 
                                height: 48
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
                                    fontSize: 11,
                                    fontWeight: 500,
                                    lineHeight: '90%'
                                }}
                            >
                                {userInfo.lastName + ' ' + userInfo.firstName}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 10,
                                    fontWeight: 500,
                                    color: '#7F8080',
                                    whiteSpace: 'nowrap',
                                    lineHeight: '90%'
                                }}
                            >
                                {userInfo.email}
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton
                        sx={{
                            height: 16,
                            width: 16,
                            position: 'absolute',
                            top: 4,
                            right: 4
                        }}
                        onClick={() => setSelectedUser(-1)}
                    >
                        <Typography
                            color='#7F8080'
                            sx={{
                                transform: 'rotate(45deg)',
                                fontSize: 16
                            }}
                        >
                            +
                        </Typography>
                    </IconButton>
                </Box>
            )
    }
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