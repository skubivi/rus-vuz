import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"

import YoutubeLogoSvg from '../../assets/pages/about-page/youtube-logo.svg?react'
import TelegramLogoSvg from '../../assets/pages/about-page/telegram-logo.svg?react'
import WhatsappLogoSvg from '../../assets/pages/about-page/whatsapp-logo.svg?react'
import PhoneSvg from '../../assets/pages/about-page/phone.svg?react'
import EmailSvg from '../../assets/pages/about-page/email.svg?react'
import LocationSvg from '../../assets/pages/about-page/location.svg?react'

import youtubeLogoImg from '../../assets/pages/about-page/youtube-logo.svg'
import telegramLogoImg from '../../assets/pages/about-page/telegram-logo.svg'
import whatsappLogoImg from '../../assets/pages/about-page/whatsapp-logo.svg'
import phoneImg from '../../assets/pages/about-page/phone.svg'
import emailImg from '../../assets/pages/about-page/email.svg'
import locationImg from '../../assets/pages/about-page/location.svg'

import { useState } from "react"
import BecomeMemberForm from "../../components/become-member-form/become-member-form"
import StyledInput from "../../components/styled-input/styled-input"

const AboutPage = () => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState<'Стать учеником' | 'Стать преподавателем'>('Стать учеником')
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <>
                <Box
                    sx={{
                        width: 1,
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: 24,
                            fontWeight: 600
                        }}
                    >
                        О проекте
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: 8,
                            gap: 6
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: 'calc(100% - 44px)',
                                    paddingLeft: 5,
                                    paddingRight: 6,
                                    paddingTop: 5.5,
                                    paddingBottom: 7.5,
                                    backgroundColor: '#192863',
                                    borderRadius: 3.75
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 800
                                    }}
                                >
                                    Русвуз.рф
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color={theme.palette.primary.main}
                                    sx={{
                                        marginTop: 1.5,
                                        fontSize: 12,
                                        fontWeight: 500
                                    }}
                                >
                                    Уникальный проект по поиску материалов и преподавателей для всех возрастных категорий.Здесь Вы сможете найти материалы для успешной подготовки к экзамену. <br /> А также подобрать преподавателей, имеющих опыт работы именно для сдачи Вашего экзамена по любым предметам.
                                </Typography>
                                <Box
                                    sx={{
                                        width: 1,
                                        height: '1px',
                                        background: '#EBEEF4',
                                        marginTop: 2
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 2
                                    }}
                                >
                                    Мы в соцсетях
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginTop: 3,
                                        gap: 2
                                    }}
                                >
                                    <Box 
                                        component='img'
                                        src={whatsappLogoImg}
                                        sx={{
                                            width: 18,
                                            height: 18
                                        }}
                                    />
                                    <Box 
                                        component='img'
                                        src={telegramLogoImg}
                                        sx={{
                                            width: 18,
                                            height: 18
                                        }}
                                    />
                                    <Box 
                                        component='img'
                                        src={youtubeLogoImg}
                                        sx={{
                                            width: 18,
                                            height: 18
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 3.75,
                                    backgroundColor: '#fff',
                                    paddingY: 5,
                                    paddingLeft: 5.5,
                                    gap: 3
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.dark}
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: 14
                                    }}
                                >
                                    Способы связаться с нами
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '3px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: 2,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Box 
                                            component='img'
                                            src={phoneImg}
                                            sx={{
                                                width: 18,
                                                height: 18
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color={theme.palette.primary.dark}
                                            sx={{
                                                fontSize: 12,
                                                fontWeight: 500
                                            }}
                                        >
                                            +7 (915) 528-73-22
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: 2,
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Box 
                                            component='img'
                                            src={emailImg}
                                            sx={{
                                                width: 18,
                                                height: 18
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color={theme.palette.primary.dark}
                                            sx={{
                                                fontSize: 12,
                                                fontWeight: 500
                                            }}
                                        >
                                            agoramas.net@gmail.com
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: 2,
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Box 
                                            component='img'
                                            src={locationImg}
                                            sx={{
                                                width: 18,
                                                height: 18
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color={theme.palette.primary.dark}
                                            sx={{
                                                fontSize: 12,
                                                fontWeight: 500
                                            }}
                                        >
                                            Москва
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 6
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 1.25
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="buttonPrimary"
                                    sx={{
                                        width: 158,
                                        height: 30,
                                        borderRadius: 1,
                                        padding: 0,
                                    }}
                                    onClick={() => {
                                        setTitle('Стать учеником')
                                        setOpen(true)
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        color={theme.palette.buttonPrimary.contrastText}
                                        sx={{
                                            whiteSpace: 'nowrap',
                                            fontSize: 12,
                                            fontWeight: 600
                                        }}
                                    >
                                        Стать учеником
                                    </Typography>
                                </Button>
                                <Button
                                    variant="contained"
                                    color="buttonPrimary"
                                    sx={{
                                        width: 158,
                                        height: 30,
                                        borderRadius: 1,
                                        padding: 0,
                                    }}
                                    onClick={() => {
                                        setTitle('Стать преподавателем')
                                        setOpen(true)
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        color={theme.palette.buttonPrimary.contrastText}
                                        sx={{
                                            whiteSpace: 'nowrap',
                                            fontSize: 12,
                                            fontWeight: 600
                                        }}
                                    >
                                        Стать преподавателем
                                    </Typography>
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: '#fff',
                                    alignItems: 'center',
                                    paddingY: 7.5,
                                    borderRadius: 4.5,
                                    paddingX: 6,
                                    width: 'calc(100% - 48px)',
                                    marginBottom: 10
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 700
                                    }}
                                >
                                    Задать вопрос
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: 1,
                                        marginTop: 5,
                                        gap: 2.5
                                    }}
                                >
                                    <StyledInput title="Имя"/>
                                    <StyledInput title="Номер телефона"/>
                                    <TextField 
                                        multiline
                                        rows={1}
                                        fullWidth
                                        label='Сообщение'
                                        placeholder="Введите сообщение"
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
                                        }}
                                    />
                                </Box>
                                <Box sx={{width: 213, marginTop: 5.5}}>
                                    <Button
                                        variant="contained"
                                        color="buttonPrimary"
                                        fullWidth
                                        sx={{
                                            height: 48
                                        }}
                                    >
                                        <Typography
                                            color='#fff'
                                            sx={{
                                                fontSize: 14,
                                                fontWeight: 600
                                            }}
                                        >
                                            Отправить
                                        </Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <BecomeMemberForm title={title} open={open} onClose={() => setOpen(false)} right/>
            </>
        )
    return (
        <>
            <Box
                sx={{
                    width: 1174,
                    marginTop: 14,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography
                    variant="h2"
                >
                    О проекте
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 9
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: 521,
                                paddingLeft: 9.5,
                                paddingRight: 22.25,
                                paddingTop: 12,
                                paddingBottom: 14,
                                backgroundColor: '#192863',
                                borderRadius: 7.5
                            }}
                        >
                            <Typography
                                variant="h5"
                                color={theme.palette.primary.main}
                                sx={{
                                    fontWeight: 800
                                }}
                            >
                                Русвуз.рф
                            </Typography>
                            <Typography
                                variant="body2"
                                color={theme.palette.primary.main}
                                sx={{
                                    marginTop: '14.4px'
                                }}
                            >
                                Уникальный проект по поиску материалов и преподавателей для всех возрастных категорий.Здесь Вы сможете найти материалы для успешной подготовки к экзамену. А также подобрать преподавателей, имеющих опыт работы именно для сдачи Вашего экзамена по любым предметам.
                            </Typography>
                            <Box
                                sx={{
                                    width: 401,
                                    height: '1px',
                                    background: '#EBEEF4',
                                    marginTop: '29.6px'
                                }}
                            />
                            <Typography
                                variant="h5"
                                color={theme.palette.primary.main}
                                sx={{
                                    fontWeight: 700,
                                    marginTop: 7.5
                                }}
                            >
                                Мы в соцсетях
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginTop: 5.5,
                                    gap: 3.75
                                }}
                            >
                                <WhatsappLogoSvg />
                                <TelegramLogoSvg />
                                <YoutubeLogoSvg />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: 3.25,
                                borderRadius: 7.5,
                                backgroundColor: '#fff'
                            }}
                        >
                            <Typography
                                sx={{
                                    marginTop: 8,
                                    fontWeight: 700,
                                    marginLeft: 9.5
                                }}
                                variant="h5"
                                color={theme.palette.primary.dark}
                            >
                                Способы связаться с нами
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginTop: 9.5,
                                    marginLeft: 4.5,
                                    marginBottom: 7.75
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 4,
                                        alignItems: 'center'
                                    }}
                                >
                                    <PhoneSvg />
                                    <Typography
                                        variant="body2"
                                        color={theme.palette.primary.dark}
                                    >
                                        +7 (915) 528-73-22
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 4,
                                        alignItems: 'center',
                                        marginLeft: 9
                                    }}
                                >
                                    <EmailSvg />
                                    <Typography
                                        variant="body2"
                                        color={theme.palette.primary.dark}
                                    >
                                        agoramas.net@gmail.com
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 4,
                                        alignItems: 'center',
                                        marginLeft: 16
                                    }}
                                >
                                    <LocationSvg />
                                    <Typography
                                        variant="body2"
                                        color={theme.palette.primary.dark}
                                    >
                                        Москва
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: 469,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 3.75
                        }}
                    >
                        <Button
                            variant="contained"
                            color="buttonPrimary"
                            sx={{
                                width: 316,
                                height: 70,
                                borderRadius: 4.25
                            }}
                            onClick={() => {
                                setTitle('Стать учеником')
                                setOpen(true)
                            }}
                        >
                            <Typography
                                variant="h5"
                                color={theme.palette.buttonPrimary.contrastText}
                                sx={{
                                    fontWeight: 500
                                }}
                            >
                                Стать учеником
                            </Typography>
                        </Button>
                        <Button
                            variant="contained"
                            color="buttonPrimary"
                            sx={{
                                width: 316,
                                height: 70,
                                borderRadius: 4.25
                            }}
                            onClick={() => {
                                setTitle('Стать преподавателем')
                                setOpen(true)
                            }}
                        >
                            <Typography
                                variant="h5"
                                color={theme.palette.buttonPrimary.contrastText}
                                sx={{
                                    fontWeight: 500
                                }}
                            >
                                Стать преподавателем
                            </Typography>
                        </Button>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                paddingTop: 9,
                                height: 416,
                                borderRadius: 4.5,
                                width: 1
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: 26
                                }}
                            >
                                Задать вопрос
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: 340,
                                    marginTop: 7.5,
                                    gap: 5
                                }}
                            >
                                <TextField 
                                    label='Имя'
                                    fullWidth
                                />
                                <TextField 
                                    label='Номер телефона'
                                    fullWidth
                                />
                                <TextField 
                                    multiline
                                    rows={2}
                                    fullWidth
                                    label='Сообщение'
                                    placeholder="Введите сообщение"
                                />
                            </Box>
                            <Box sx={{width: 213, marginTop: 5.5}}>
                                <Button
                                    variant="contained"
                                    color="buttonPrimary"
                                    fullWidth
                                    sx={{
                                        height: 48
                                    }}
                                >
                                    <Typography
                                        color='#fff'
                                        sx={{
                                            fontSize: 14,
                                            fontWeight: 600
                                        }}
                                    >
                                        Отправить
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <BecomeMemberForm title={title} open={open} onClose={() => setOpen(false)} right/>
        </>
    )
}

export default AboutPage