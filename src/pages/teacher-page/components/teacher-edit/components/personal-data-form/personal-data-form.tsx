import { Box, TextField, Typography, useMediaQuery } from "@mui/material"
import InputMask from "react-input-mask"
import StyledInput from "../../../../../../components/styled-input/styled-input"

const PersonalDataForm = () => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    padding: 5,
                    paddingBottom: 8.5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.25,
                    background: '#fff',
                    borderRadius: 2.25
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: 14,
                        fontWeight: 600
                    }}
                >
                    Личные данные
                </Typography>
                <Box
                    sx={{
                        width: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2.75
                    }}
                >
                    <Box
                        sx={{
                            width: 0.5
                        }}
                    >
                        <StyledInput placeholder="Фамилия"/>
                    </Box>
                    <Box
                        sx={{
                            width: 0.5
                        }}
                    >
                        <StyledInput placeholder="Имя"/>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2.75
                    }}
                >
                    <Box
                        sx={{
                            width: 0.5
                        }}
                    >
                        <StyledInput placeholder="Отчество"/>
                    </Box>
                    <Box
                        sx={{
                            width: 0.5
                        }}
                    >
                        <InputMask
                            mask="99.99.9999"
                            disabled={false}
                            maskChar=" "
                        >
                            <TextField 
                                placeholder='Дата рождения'
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
                                        padding: '7px !important',
                                        height: '18px !important',
                                        fontSize: 12
                                    }
                                }}
                            />
                        </InputMask>
                    </Box>
                </Box>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        fontSize: 14,
                        marginTop: 2.5
                    }}
                >
                    О себе
                </Typography>
                <TextField 
                    placeholder='Напишите текст'
                    multiline
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
                            padding: '7px !important',
                            fontSize: 12
                        }
                    }}
                />
            </Box>
        )
    return (
        <Box
            sx={{
                padding: 12.5,
                width: 1074,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                background: '#fff',
                borderRadius: 7.5
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600
                }}
            >
                Личные данные
            </Typography>
            <Box
                sx={{
                    width: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4.5
                }}
            >
                <Box
                    sx={{
                        width: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            width: 498
                        }}
                    >
                        <TextField
                            placeholder='Фамилия'
                            fullWidth
                        />
                    </Box>
                    <Box
                        sx={{
                            width: 498
                        }}
                    >
                        <TextField
                            placeholder='Имя'
                            fullWidth
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            width: 498
                        }}
                    >
                        <TextField
                            placeholder='Отчество'
                            fullWidth
                        />
                    </Box>
                    <Box
                        sx={{
                            width: 498
                        }}
                    >
                        <InputMask
                            mask="99.99.9999"
                            disabled={false}
                            maskChar=" "
                        >
                            <TextField
                                placeholder='Дата рождения'
                                fullWidth
                            />
                        </InputMask>
                    </Box>
                </Box>
            </Box>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600
                }}
            >
                О себе
            </Typography>
            <TextField
                placeholder="Напишите текст"
                fullWidth
                multiline
                rows={2}
            />
        </Box>
    )
}

export default PersonalDataForm