import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material"
import BaseColumn from "./components/base-column"
import TextColumn from "./components/text-column"
import GreyColumn from "./components/grey-column"
import GoldColumn from "./components/gold-column"
import { FC } from "react"

import CheckedMobile from '../../assets/pages/payment-plan-page/mobile-check.svg?react'

const MobileField: FC<{title: string, isVip?: boolean}> = ({title, isVip}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: isVip !== undefined ? 50 : 35,
                width: 0.7,
                paddingLeft: 3,
                border: '1px solid #F7F7F7'
            }}
        >
            <Typography
                sx={{
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 600
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

const MobileCheck: FC<{isVip?: boolean}> = ({isVip}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: isVip !== undefined ? 50 : 35,
                width: 0.3,
                border: '1px solid #F7F7F7'
            }}
        >
            <CheckedMobile />
        </Box>
    )
}

const PaymentPlanPage = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile) 
        return (
            <Box
                sx={{
                    width: 1,
                    marginTop: 9,
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: 25,
                    gap: 9
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: 24,
                        fontWeight: 600
                    }}
                >
                    Абонементы
                </Typography>
                <Box
                    sx={{
                        width: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: 1,
                            borderRadius: 2.5,
                            background: '#BED2D2'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: 0.6,
                                border: '1px solid #F7F7F7'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Регистрация Анкеты"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Отсутствие обязательств"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Смена тарифа"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Телефонная поддержка"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Статистика"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Отображение телефона"/>
                                <MobileCheck />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: 0.4,
                                borderTop: '2px solid #F7F7F7',
                                borderBottom: '2px solid #F7F7F7',
                                borderLeft: '1px solid #F7F7F7',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: '#fff'
                                }}
                            >
                                Свободный
                            </Typography>
                            <Typography
                                sx={{
                                    marginTop: '3px',
                                    fontSize: 10,
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    color: '#fff'
                                }}
                            >
                                Подходит новичкам и студентам
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    marginTop: 4,
                                    width: 81,
                                    height: 25,
                                    padding: 0,
                                    borderRadius: 1.5
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: '#fff'
                                    }}
                                >
                                    Выбрать
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: 1,
                            borderRadius: 2.5,
                            background: 'linear-gradient(92deg, #CFCFCF, #9C9C9C)'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: 0.6,
                                border: '1px solid #F7F7F7'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Бонусные начисления баллов"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Увеличенный рекламный бюджет"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Цифровая визитка"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Личный менеджер"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Позиция в поиске"/>
                                <MobileCheck />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Реклама на курсе теории"/>
                                <MobileCheck />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: 0.4,
                                borderTop: '2px solid #F7F7F7',
                                borderBottom: '2px solid #F7F7F7',
                                borderLeft: '1px solid #F7F7F7',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: '#fff'
                                }}
                            >
                                Премиум
                            </Typography>
                            <Typography
                                sx={{
                                    marginTop: '3px',
                                    fontSize: 10,
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    color: '#fff'
                                }}
                            >
                                Подходит для профессиональных преподавателей
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    marginTop: 4,
                                    width: 81,
                                    height: 25,
                                    padding: 0,
                                    background: 'linear-gradient(92deg, #CFCFCF, #9C9C9C)'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: '#fff'
                                    }}
                                >
                                    Выбрать
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: 1,
                            borderRadius: 2.5,
                            background: 'linear-gradient(92deg, #AE8625, #D2AC47, #EDC976)'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: 0.6,
                                border: '1px solid #F7F7F7'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Пробные уроки" isVip/>
                                <MobileCheck isVip/>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Количество отзывов" isVip/>
                                <MobileCheck isVip/>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <MobileField title="Реклама в социальных сетях" isVip/>
                                <MobileCheck isVip/>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: 0.4,
                                borderTop: '2px solid #F7F7F7',
                                borderBottom: '2px solid #F7F7F7',
                                borderLeft: '1px solid #F7F7F7',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: '#fff'
                                }}
                            >
                                Вип
                            </Typography>
                            <Typography
                                sx={{
                                    marginTop: '3px',
                                    fontSize: 10,
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    color: '#fff'
                                }}
                            >
                                Подходит тем, у кого преподавание основная работа
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    width: 81,
                                    height: 25,
                                    padding: 0,
                                    marginTop: 4,
                                    background: 'linear-gradient(92deg, #AE8625, #D2AC47, #EDC976)'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: '#fff',
                                        borderRadius: '6px !important',
                                    }}
                                >
                                    Выбрать
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    return (
        <Box
            sx={{
                width: 1174,
                marginTop: 14,
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: 25
            }}
        >
            <Typography
                variant="h2"
            >
                Абонементы
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: 28,
                    gap: 12.5
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 2.5,
                        background: '#fff',
                        width: 247,
                        marginTop: 75
                    }}
                >
                    <TextColumn />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 2.5,
                        background: '#fff',
                        width: 227,
                        overflow: "hidden",
                        border: '1px solid #BED2D2'
                    }}
                >
                    <Box
                        sx={{
                            width: 1,
                            height: 138,
                            background: '#BED2D2',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                                marginTop: 7
                            }}
                        >
                            Свободный
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 600,
                                color: theme.palette.primary.main,
                                fontSize: 11,
                                width: 163,
                                textAlign: 'center'
                            }}
                        >
                            Подходит новичкам и студентам
                        </Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#BED2D2',
                            fontWeight: 700,
                            fontSize: 18,
                            marginTop: 9
                        }}
                    >
                        Бесплатно
                    </Typography>
                    <Button
                        variant="contained"
                        color="buttonPrimary"
                        sx={{
                            background: '#BED2D2',
                            width: 200,
                            height: 46,
                            marginTop: 8,
                            marginBottom: 5
                        }}
                    >
                        Выбрать
                    </Button>
                    <BaseColumn />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 2.5,
                        background: '#fff',
                        width: 227,
                        overflow: "hidden",
                        border: '1px solid #CFCFCF'
                    }}
                >
                    <Box
                        sx={{
                            width: 1,
                            height: 138,
                            background: 'linear-gradient(93deg, #E5E4E2 -11.48%, #616060 103.97%)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                                marginTop: 7
                            }}
                        >
                            Премиум
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 600,
                                color: theme.palette.primary.main,
                                fontSize: 11,
                                width: 220,
                                textAlign: 'center'
                            }}
                        >
                            Подходит для профессиональных преподавателей
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            gap: '0.25rem'
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.input.light,
                                fontWeight: 700,
                                fontSize: 22,
                                marginTop: 9
                            }}
                        >
                            от 250 ₽ 
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.input.light,
                                fontWeight: 700,
                                fontSize: 11,
                                marginTop: 9
                            }}
                        >
                            / месяц
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        color="buttonPrimary"
                        sx={{
                            background: 'linear-gradient(93deg, #E5E4E2 -11.48%, #616060 103.97%)',
                            width: 200,
                            height: 46,
                            marginTop: 8,
                            marginBottom: 5
                        }}
                    >
                        Выбрать
                    </Button>
                    <GreyColumn />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 2.5,
                        background: '#fff',
                        width: 227,
                        overflow: "hidden",
                        border: '1px solid #AE8625'
                    }}
                >
                    <Box
                        sx={{
                            width: 1,
                            height: 138,
                            background: 'linear-gradient(92deg, #AE8625 -5.9%, #D2AC47 50.18%, #EDC976 106.59%)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                                marginTop: 7
                            }}
                        >
                            Вип
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 600,
                                color: theme.palette.primary.main,
                                fontSize: 11,
                                width: 203,
                                textAlign: 'center'
                            }}
                        >
                            Подходит тем, у кого преподавание основная работа
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            gap: '0.25rem'
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#AE8625',
                                fontWeight: 700,
                                fontSize: 22,
                                marginTop: 9
                            }}
                        >
                            от 500 ₽ 
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#AE8625',
                                fontWeight: 700,
                                fontSize: 11,
                                marginTop: 9
                            }}
                        >
                            / месяц
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        color="buttonPrimary"
                        sx={{
                            background: 'linear-gradient(92deg, #AE8625 -5.9%, #D2AC47 50.18%, #EDC976 106.59%)',
                            width: 200,
                            height: 46,
                            marginTop: 8,
                            marginBottom: 5
                        }}
                    >
                        Выбрать
                    </Button>
                    <GoldColumn />
                </Box>
            </Box>
        </Box>
    )
}

export default PaymentPlanPage