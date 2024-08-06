import { Box } from "@mui/material"
import { FC } from "react"
import Search from "../../../../components/search/search"
import UsersTable from "./components/users-table/users-table"

enum UserTypes {
    Student = 'Ученик',
    Teacher = 'Учитель'
}

enum Roles {
    Coord = 'Координатор',
    NoRole = 'Без роли',
    Admin = 'Администратор'
}

const temp = [
    {
        id: 0,
        firstName: 'Татьяна',
        lastName: 'Ларина',
        email: 'larti@mail.ru',
        type: UserTypes.Student,
        role: Roles.Admin,
        number: '72467579812'
    },
    {
        id: 1,
        firstName: 'Александр',
        lastName: 'Бубнов',
        email: 'bubenar@mail.ru',
        type: UserTypes.Student,
        role: Roles.Coord,
        number: '72467579812'
    },
    {
        id: 2,
        firstName: 'Алексей',
        lastName: 'Невгородов',
        email: 'novnova@mail.ru',
        type: UserTypes.Teacher,
        role: Roles.NoRole,
        number: '72467579812'
    },
    {
        id: 3,
        firstName: 'Елизавета',
        lastName: 'Яркина',
        email: 'yarko@mail.ru',
        type: UserTypes.Teacher,
        role: Roles.NoRole,
        number: '72467579812'
    },
    {
        id: 4,
        firstName: 'Евгений',
        lastName: 'Попов',
        email: 'popovek@mail.ru',
        type: UserTypes.Teacher,
        role: Roles.NoRole,
        number: '72467579812'
    },
    {
        id: 5,
        firstName: 'Евгений',
        lastName: 'Попов',
        email: 'popovek@mail.ru',
        type: UserTypes.Teacher,
        role: Roles.NoRole,
        number: '72467579812'
    },
]

const UsersEdit: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8
            }}
        >
            <Search />
            <UsersTable users={temp}/>
        </Box>
    )
}

export default UsersEdit