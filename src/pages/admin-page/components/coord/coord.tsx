import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material"
import EmailAutocomplete from "./components/email-autocomplete/email-autocomplete"
import UserCard from "./components/user-card/user-card"
import Search from "../../../../components/search/search"

enum UserTypes {
    Student = 'Ученик',
    Teacher = 'Преподаватель'
}

const temp = [
    {
        id: 0,
        firstName: 'Татьяна',
        lastName: 'Ларина',
        email: 'larti@mail.ru',
        type: UserTypes.Student,
        location: 'г. Москва'
    },
    {
        id: 1,
        firstName: 'Александр',
        lastName: 'Бубнов',
        email: 'bubenar@mail.ru',
        type: UserTypes.Student,
        location: 'г. Москва'
    },
    {
        id: 2,
        firstName: 'Алексей',
        lastName: 'Невгородов',
        email: 'novnova@mail.ru',
        type: UserTypes.Teacher,
        location: 'г. Москва'
    },
    {
        id: 3,
        firstName: 'Елизавета',
        lastName: 'Яркина',
        email: 'yarko@mail.ru',
        type: UserTypes.Teacher,
        location: 'г. Москва'
    },
    {
        id: 4,
        firstName: 'Евгений',
        lastName: 'Попов',
        email: 'popovek@mail.ru',
        type: UserTypes.Teacher,
        location: 'г. Москва'
    },
]

const Coord = () => {
    const getUserById = (id: number) => temp.find(element => element.id === id)
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}
            >
                <Search />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.25,
                        background: '#fff',
                        borderRadius: 2.25,
                        padding: 4
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 5
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: 0.5,
                                gap: 1.25
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Выбор ученика
                            </Typography>
                            <Box
                                sx={{
                                    width: 1
                                }}
                            >
                                <EmailAutocomplete 
                                    options={temp.filter(element => element.type === UserTypes.Student).map(element => ({id: element.id, label: element.email}))}
                                    getUserById={getUserById}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1.25,
                                width: 0.5
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Выбор преподавателя
                            </Typography>
                            <Box
                                sx={{
                                    width: 1
                                }}
                            >
                                <EmailAutocomplete 
                                    options={temp.filter(element => element.type === UserTypes.Teacher).map(element => ({id: element.id, label: element.email}))}
                                    getUserById={getUserById}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.25,
                            marginTop: 2.5
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 500
                            }}
                        >
                            Координация
                        </Typography>
                        <TextField 
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
                    <Button
                        variant="contained"
                        color="buttonPrimary"
                        sx={{
                            width: 86,
                            height: 28,
                            minHeight: 28,
                            alignSelf: 'flex-end',
                            padding: 3.5,
                            borderRadius: 1.75
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#fff'
                            }}
                        >
                            Отправить
                        </Typography>
                    </Button>
                </Box>
                <Typography
                    sx={{
                        fontSize: 14,
                        fontWeight: 500
                    }}
                >
                    История
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: 4,
                        borderRadius: 2.5,
                        background: '#fff'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 6.5
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                                width: 0.5
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 500
                                }}
                            >
                                Ученик
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                    paddingLeft: 1.5
                                }}
                            >
                                <UserCard {...temp[0]}/>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                                width: 0.5
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 500
                                }}
                            >
                                Преподаватель
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                    paddingLeft: 1.5
                                }}
                            >
                                <UserCard {...temp[1]}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.25
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 500
                            }}
                        >
                            Координация
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 8,
                                        fontWeight: 500,
                                        color: '#828489'
                                    }}
                                >
                                    Отправлено сообщение (Олег)
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 8,
                                        fontWeight: 500,
                                        color: '#828489'
                                    }}
                                >
                                    25.06.2024 18:00
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: 10,
                                    fontWeight: 500
                                }}
                            >
                                Первый урок будет 02.07.2024 в 15:00, встреча у ученика по адресу Ленина 51. Преподаватель будет на белой Kia Rio.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: 4,
                        borderRadius: 2.5,
                        background: '#fff'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 6.5
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                                width: 0.5
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 500
                                }}
                            >
                                Ученик
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                    paddingLeft: 1.5
                                }}
                            >
                                <UserCard {...temp[3]}/>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                                width: 0.5
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 500
                                }}
                            >
                                Преподаватель
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                    paddingLeft: 1.5
                                }}
                            >
                                <UserCard {...temp[4]}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.25
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 500
                            }}
                        >
                            Координация
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 8,
                                        fontWeight: 500,
                                        color: '#828489'
                                    }}
                                >
                                    Отправлено сообщение (Олег)
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 8,
                                        fontWeight: 500,
                                        color: '#828489'
                                    }}
                                >
                                    25.06.2024 18:00
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: 10,
                                    fontWeight: 500
                                }}
                            >
                                Первый урок будет 02.07.2024 в 15:00, встреча у ученика по адресу Ленина 51. Преподаватель будет на белой Kia Rio.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8
            }}
        >
            <Search />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                    background: '#fff',
                    borderRadius: 7.5,
                    padding: 10
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 13.25
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 24,
                                fontWeight: 500
                            }}
                        >
                            Выбор ученика
                        </Typography>
                        <Box
                            sx={{
                                width: 268
                            }}
                        >
                            <EmailAutocomplete 
                                options={temp.filter(element => element.type === UserTypes.Student).map(element => ({id: element.id, label: element.email}))}
                                getUserById={getUserById}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 24,
                                fontWeight: 500
                            }}
                        >
                            Выбор преподавателя
                        </Typography>
                        <Box
                            sx={{
                                width: 268
                            }}
                        >
                            <EmailAutocomplete 
                                options={temp.filter(element => element.type === UserTypes.Teacher).map(element => ({id: element.id, label: element.email}))}
                                getUserById={getUserById}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                            flexGrow: 1
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 24,
                                fontWeight: 500
                            }}
                        >
                            Координация
                        </Typography>
                        <TextField 
                            multiline
                            rows={3}
                            fullWidth
                            sx={{
                                fontSize: 16,
                                fontWeight: 500,
                                lineHeight: '140%'
                            }}
                        />
                    </Box>
                </Box>
                <Button
                    variant="contained"
                    color="buttonPrimary"
                    sx={{
                        width: 144,
                        height: 43,
                        minHeight: 43,
                        alignSelf: 'flex-end'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 600,
                            color: '#fff'
                        }}
                    >
                        Отправить
                    </Typography>
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                    background: '#fff',
                    borderRadius: 7.5,
                    padding: 10
                }}
            >
                <Typography
                    sx={{
                        fontSize: 24,
                        fontWeight: 500
                    }}
                >
                    История
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 6.75
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 15,
                            width: 321
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: 20
                            }}
                        >
                            Ученик
                        </Typography>
                        <Box
                            sx={{
                                height: 80
                            }}
                        >
                            <UserCard {...temp[0]}/>
                        </Box>
                        <Box
                            sx={{
                                height: 80
                            }}
                        >
                            <UserCard {...temp[1]}/>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 15,
                            width: 321
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: 20
                            }}
                        >
                            Преподаватель
                        </Typography>
                        <Box
                            sx={{
                                height: 80
                            }}
                        >
                            <UserCard {...temp[3]}/>
                        </Box>
                        <Box
                            sx={{
                                height: 80
                            }}
                        >
                            <UserCard {...temp[4]}/>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 15,
                            width: 408
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: 20
                            }}
                        >
                            Координация
                        </Typography>
                        <Box
                            sx={{
                                height: 80,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                width: 1
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
                                <Typography
                                    sx={{
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: '#828489'
                                    }}
                                >
                                    Отправлено сообщение (Олег)
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: '#828489'
                                    }}
                                >
                                    25.06.2024 18:00
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    width: 377,
                                    fontSize: 16,
                                    fontWeight: 500
                                }}
                            >
                                Первый урок будет 02.07.2024 в 15:00, встреча у ученика по адресу Ленина 51. Преподаватель будет на белой Kia Rio.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                height: 80,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                width: 1
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
                                <Typography
                                    sx={{
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: '#828489'
                                    }}
                                >
                                    Отправлено сообщение (Олег)
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: '#828489'
                                    }}
                                >
                                    25.06.2024 18:00
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    width: 377,
                                    fontSize: 16,
                                    fontWeight: 500
                                }}
                            >
                                Первый урок будет 02.07.2024 в 15:00, встреча у ученика по адресу Ленина 51. Преподаватель будет на белой Kia Rio.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Coord