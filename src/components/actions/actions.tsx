import { Box, Button, Typography, useMediaQuery } from "@mui/material"

import AvatarSvg from '../../assets/components/actions/avatar.svg?react'
import AvatarMobileSvg from '../../assets/components/actions/avatar-mobile.svg?react'

const Actions = () => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#fff',
                    borderRadius: 2.25,
                    gap: 4.5,
                    paddingX: 3,
                    paddingY: 8,
                    overflow: 'hidden',
                    overflowY: 'auto'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3,
                        alignItems: 'flex-start'
                    }}
                >
                    <Box
                        sx={{
                            width: 28,
                            height: 28
                        }}
                    >
                        <AvatarMobileSvg />
                    </Box>
                    <Box
                        sx={{
                            paddingX: 4.5,
                            paddingY: 3,
                            flexGrow: 1,
                            background: '#F9F9F9',
                            borderRadius: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
                            }}
                        >
                            Приветствуем вас на РусВУЗ.вождение!
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 500,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
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
                        gap: 3,
                        alignItems: 'flex-start'
                    }}
                >
                    <Box
                        sx={{
                            width: 28,
                            height: 28
                        }}
                    >
                        <AvatarMobileSvg />
                    </Box>
                    <Box
                        sx={{
                            paddingX: 4.5,
                            paddingY: 3,
                            flexGrow: 1,
                            background: '#F9F9F9',
                            borderRadius: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
                            }}
                        >
                            Проведена координация!
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 500,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
                            }}
                        >
                            Вы скоординировали преподавателя Бабушкина Сергея Александровича с учеником Ломой Еленой Алексеевной. Встреча произойдет у ученика по адресу г. Москва, ул. Ленина 51.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3,
                        alignItems: 'flex-start'
                    }}
                >
                    <Box
                        sx={{
                            width: 28,
                            height: 28
                        }}
                    >
                        <AvatarMobileSvg />
                    </Box>
                    <Box
                        sx={{
                            paddingX: 4.5,
                            paddingY: 3,
                            flexGrow: 1,
                            background: '#F9F9F9',
                            borderRadius: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
                            }}
                        >
                            Проведена координация!
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 500,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
                            }}
                        >
                            Вы скоординировали преподавателя Бабушкина Сергея Александровича с учеником Ломой Еленой Алексеевной. Встреча произойдет у ученика по адресу г. Москва, ул. Ленина 51.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3,
                        alignItems: 'flex-start'
                    }}
                >
                    <Box
                        sx={{
                            width: 28,
                            height: 28
                        }}
                    >
                        <AvatarMobileSvg />
                    </Box>
                    <Box
                        sx={{
                            paddingX: 4.5,
                            paddingY: 3,
                            flexGrow: 1,
                            background: '#F9F9F9',
                            borderRadius: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
                            }}
                        >
                            Проведена координация!
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 500,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
                            }}
                        >
                            Вы скоординировали преподавателя Бабушкина Сергея Александровича с учеником Ломой Еленой Алексеевной. Встреча произойдет у ученика по адресу г. Москва, ул. Ленина 51.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3,
                        alignItems: 'flex-start'
                    }}
                >
                    <Box
                        sx={{
                            width: 28,
                            height: 28
                        }}
                    >
                        <AvatarMobileSvg />
                    </Box>
                    <Box
                        sx={{
                            paddingX: 4.5,
                            paddingY: 3,
                            flexGrow: 1,
                            background: '#F9F9F9',
                            borderRadius: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
                            }}
                        >
                            Проведена координация!
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 500,
                                letterSpacing: '-0.48px',
                                color: '#191E34'
                            }}
                        >
                            Вы скоординировали преподавателя Бабушкина Сергея Александровича с учеником Ломой Еленой Алексеевной. Встреча произойдет у ученика по адресу г. Москва, ул. Ленина 51.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        )
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