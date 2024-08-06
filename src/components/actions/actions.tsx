import { Box, Button, Typography } from "@mui/material"

import AvatarSvg from '../../assets/components/actions/avatar.svg?react'

const Actions = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingX: 12.5,
                width: 1074,
                height: 1776,
                background: '#fff',
                borderRadius: 7.5,
                justifyContent: 'flex-end',
                gap: 24.5,
                paddingBottom: 19
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 9,
                    alignItems: 'flex-start'
                }}
            >
                <AvatarSvg />
                <Box
                    sx={{
                        padding: 10,
                        width: 714,
                        height: 128,
                        background: '#86909D',
                        borderRadius: 7.5
                    }}
                >
                    <Typography
                        sx={{
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: 700,
                            letterSpacing: '-0.48px'
                        }}
                    >
                        Приветствуем вас на РусВУЗ.вождение!
                    </Typography>
                    <Typography
                        sx={{
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: 500,
                            letterSpacing: '-0.48px'
                        }}
                    >
                        Сообщаем, что регистрация прошла успешно. Здесь вы можете найти множество материалов для подготовки к экзамену.
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 3.5,
                    alignSelf: 'flex-end'
                }}
            >
                <Button
                    variant="contained"
                    color="buttonPrimary"
                >
                    <Typography
                        sx={{
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: 400
                        }}
                    >
                        Как искать преподавателей?
                    </Typography>
                </Button>
                <Button
                    variant="contained"
                    color="buttonPrimary"
                >
                    <Typography
                        sx={{
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: 400
                        }}
                    >
                        Как связаться с администратором?
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default Actions