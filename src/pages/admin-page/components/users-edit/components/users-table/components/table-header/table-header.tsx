import { Box, Typography } from "@mui/material"

const TableHeader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                paddingLeft: 27.5,
                paddingRight: 36,
                width: 1
            }}
        >
            <Typography
                sx={{
                    color: '#828489',
                    fontSize: 16,
                    fontWeight: 400,
                    width: 84,
                    textAlign: 'center'
                }}
            >
                Фамилия
            </Typography>
            <Typography
                sx={{
                    color: '#828489',
                    fontSize: 16,
                    fontWeight: 400,
                    width: 83,
                    textAlign: 'center',
                    marginLeft: 18.5
                }}
            >
                Имя
            </Typography>
            <Typography
                sx={{
                    color: '#828489',
                    fontSize: 16,
                    fontWeight: 400,
                    width: 62,
                    textAlign: 'center',
                    marginLeft: 22
                }}
            >
                Тип
            </Typography>
            <Typography
                sx={{
                    color: '#828489',
                    fontSize: 16,
                    fontWeight: 400,
                    width: 123,
                    textAlign: 'center',
                    marginLeft: 17.25
                }}
            >
                Роль
            </Typography>
            <Typography
                sx={{
                    color: '#828489',
                    fontSize: 16,
                    fontWeight: 400,
                    width: 135,
                    textAlign: 'center',
                    marginLeft: 15.75

                }}
            >
                Телефон
            </Typography>
            <Typography
                sx={{
                    color: '#828489',
                    fontSize: 16,
                    fontWeight: 400,
                    width: 134,
                    textAlign: 'center',
                    marginLeft: 18.5
                }}
            >
                E-mail
            </Typography>
            <Typography
                sx={{
                    color: '#828489',
                    fontSize: 16,
                    fontWeight: 400,
                    width: 72,
                    textAlign: 'center',
                    marginLeft: 23.5
                }}
            >
                Действия
            </Typography>
        </Box>
    )
}

export default TableHeader