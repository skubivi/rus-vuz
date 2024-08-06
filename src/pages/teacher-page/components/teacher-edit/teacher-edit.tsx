import { Box } from "@mui/material"
import { FC } from "react"
import TeacherProfileHeader from "../teacher-profile/components/teacher-profile-header/teacher-profile-header"
import PersonalDataForm from "./components/personal-data-form/personal-data-form"
import AddressDataForm from "./components/address-data-form/address-data-form"
import ContactsDataForm from "./components/contacts-data-form/contacts-data-form"
import LessonInfoDataForm from "./components/lesson-info-data-form/lesson-info-data-form"

interface ITeacherEdit {
    student?: boolean
    admin?: boolean
}

const TeacherEdit: FC<ITeacherEdit> = ({
    student,
    admin
}) => {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8
            }}
        >
            <TeacherProfileHeader />
            <PersonalDataForm />
            <AddressDataForm />
            <ContactsDataForm />
            {
                !admin &&
                <LessonInfoDataForm student={student}/>
            }
        </Box>
    )
}

export default TeacherEdit