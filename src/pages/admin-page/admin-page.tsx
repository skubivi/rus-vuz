import { Box, Tab, Tabs, Typography } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import Actions from "../../components/actions/actions"
import TeacherProfile from "../teacher-page/components/teacher-profile/teacher-profile"
import TeacherEdit from "../teacher-page/components/teacher-edit/teacher-edit"
import Coord from "./components/coord/coord"
import UsersEdit from "./components/users-edit/users-edit"

const AdminPage = () => {
    const [tabValue, setTabValue] = useState<'profile' | 'edit' | 'actions' | 'coord' | 'users'>('profile')
    const handleTabChange = (_evt: SyntheticEvent, newValue: 'profile' | 'edit' | 'actions' | 'coord' | 'users') => {
        setTabValue(newValue);
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 26.75,
                width: tabValue === 'users' ? 1409 : 1174,
                paddingBottom: 57.25,
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    width: 1174
                }}
            >
                <Typography
                    variant="h2"
                >
                    Кабинет администратора
                </Typography>
            </Box>
            <Box
                sx={{
                    marginTop: 7.75,
                    width: 1174
                }}
            >
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    sx={{
                        width: 1174,
                        '& .MuiTabs-flexContainer': {
                            justifyContent: 'space-between'
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#5871EF !important'
                        }
                    }}
                >
                    <Tab 
                        label='Анкета' 
                        value='profile'
                        sx={{
                            fontSize: 24,
                            fontWeight: 500
                        }}
                    />
                    <Tab 
                        label='Редактирование' 
                        value='edit'
                        sx={{
                            fontSize: 24,
                            fontWeight: 500
                        }}
                    />
                    <Tab 
                        label='Журнал действий' 
                        value='actions'
                        sx={{
                            fontSize: 24,
                            fontWeight: 500
                        }}
                    />
                    <Tab 
                        label='Координация' 
                        value='coord'
                        sx={{
                            fontSize: 24,
                            fontWeight: 500
                        }}
                    />
                    <Tab 
                        label='Пользователи' 
                        value='users'
                        sx={{
                            fontSize: 24,
                            fontWeight: 500
                        }}
                    />
                </Tabs>
            </Box>
            <Box
                sx={{
                    marginTop: 7.5
                }}
            >
                {
                    tabValue === 'profile' ? <TeacherProfile admin/> 
                    : tabValue === 'edit' ? <TeacherEdit admin/>
                    : tabValue === 'actions' ? <Actions />
                    : tabValue === 'coord' ? <Coord />
                    : tabValue === 'users' ? <UsersEdit />
                    : null
                }
            </Box>
        </Box>
    )
}

export default AdminPage