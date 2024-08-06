import { Box, useMediaQuery } from "@mui/material"


import TeacherProfileHeader from "./components/teacher-profile-header/teacher-profile-header"
import TeacherInfo from "./components/teacher-info/teacher-info"
import LessonInfo from "./components/lesson-info/lesson-info"
import { FC } from "react"

interface ITeacherProfile {
    student?: boolean
    admin?: boolean
}

const TeacherProfile: FC<ITeacherProfile> = ({
    student,
    admin
}) => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? 4 : 8
            }}
        >
            <TeacherProfileHeader />
            <TeacherInfo student={student}/>
            {admin ? null : <LessonInfo student={student}/>}
        </Box>
    )
}

export default TeacherProfile