import { Box, Button, TextField, Typography } from "@mui/material"
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