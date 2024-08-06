import { Box, TextField, Typography } from "@mui/material"
import InputMask from "react-input-mask"

const PersonalDataForm = () => {
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