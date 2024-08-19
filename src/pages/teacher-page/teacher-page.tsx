import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import TeacherProfile from "./components/teacher-profile/teacher-profile"
import TeacherEdit from "./components/teacher-edit/teacher-edit"
import Actions from "../../components/actions/actions"
import MobileTabs from "../../components/mobile-tabs/mobile-tabs"

const TeacherPage = () => {
    const [tabValue, setTabValue] = useState<'profile' | 'edit' | 'actions'>('profile')
    const handleTabChange = (_evt: SyntheticEvent, newValue: 'profile' | 'edit' | 'actions') => {
        setTabValue(newValue);
    }
    const isMobile = useMediaQuery('(max-width: 1450px)')
    
    if (isMobile) 
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 9,
                    width: 1,
                    paddingBottom: 25
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: 24,
                        fontWeight: 600
                    }}
                >
                    Кабинет преподавателя
                </Typography>
                <Box
                    sx={{
                        marginTop: 3
                    }}
                >
                    <MobileTabs 
                        options={[
                            {
                                value: 'profile',
                                label: 'Анкета'
                            },
                            {
                                value: 'edit',
                                label: 'Редактирование'
                            },
                            {
                                value: 'actions',
                                label: 'Журнал действий'
                            },
                        ]}
                        chosen={tabValue}
                        changeTab={(s) => setTabValue(s as 'profile' | 'edit' | 'actions')}
                    />
                </Box>
                <Box
                    sx={{
                        marginTop: 3
                    }}
                >
                    {
                        tabValue === 'profile' ? <TeacherProfile /> 
                        : tabValue === 'edit' ? <TeacherEdit />
                        : tabValue === 'actions' ? <Actions />
                        : null
                    }
                </Box>
            </Box>
        )
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 26.75,
                width: 1174,
                paddingBottom: 57.25
            }}
        >
            <Typography
                variant="h2"
            >
                Кабинет преподавателя
            </Typography>
            <Box
                sx={{
                    marginTop: 7.75
                }}
            >
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#5871EF !important'
                        }
                    }}
                >
                    <Tab label='Анкета' value='profile'/>
                    <Tab label='Редактирование' value='edit'/>
                    <Tab label='Журнал действий' value='actions'/>
                </Tabs>
            </Box>
            <Box
                sx={{
                    marginTop: 7.5
                }}
            >
                {
                    tabValue === 'profile' ? <TeacherProfile /> 
                    : tabValue === 'edit' ? <TeacherEdit />
                    : tabValue === 'actions' ? <Actions />
                    : null
                }
            </Box>
        </Box>
    )
}

export default TeacherPage