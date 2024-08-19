import { Box, TextField, Typography, useMediaQuery } from "@mui/material"
import InputMask from "react-input-mask"
import StyledInput from "../../../../../../components/styled-input/styled-input"

const ContactsDataForm = () => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    padding: 5,
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
                        fontWeight: 600,
                        fontSize: 14
                    }}
                >
                    Контактные данные
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3
                    }}
                >
                    <Box
                        sx={{width: 0.5}}
                    >
                        <InputMask
                            mask="+7(999) 999-99-99"
                            disabled={false}
                            maskChar=" "
                        >
                            <TextField
                                placeholder='Телефон'
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
                    <Box
                        sx={{width: 0.5}}
                    >
                        <StyledInput 
                            placeholder="Email"
                        />
                    </Box>
                </Box>
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
                Контактные данные
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{width: 498}}
                >
                    <InputMask
                        mask="+7(999) 999-99-99"
                        disabled={false}
                        maskChar=" "
                    >
                        <TextField
                            placeholder='Телефон'
                            fullWidth
                        />
                    </InputMask>
                </Box>
                <Box
                    sx={{width: 498}}
                >
                    <TextField
                        placeholder='Email'
                        fullWidth
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default ContactsDataForm