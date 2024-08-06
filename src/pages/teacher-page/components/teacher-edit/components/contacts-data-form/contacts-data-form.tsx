import { Box, TextField, Typography } from "@mui/material"
import InputMask from "react-input-mask"

const ContactsDataForm = () => {
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