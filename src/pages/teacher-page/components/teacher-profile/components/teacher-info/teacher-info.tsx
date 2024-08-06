import { Box, Typography, useMediaQuery } from "@mui/material"

import LocationSvg from '../../../../../../assets/pages/teacher-page/location.svg?react'
import EmailSvg from '../../../../../../assets/pages/teacher-page/email.svg?react'
import PhoneSvg from '../../../../../../assets/pages/teacher-page/phone.svg?react'

import locationImg from '../../../../../../assets/pages/teacher-page/location.svg'
import emailImg from '../../../../../../assets/pages/teacher-page/email.svg'
import phoneImg from '../../../../../../assets/pages/teacher-page/phone.svg'

import { FC } from "react"

interface ITeacherInfo {
    student?: boolean
    admin?: boolean
}

const TeacherInfo: FC<ITeacherInfo> = ({
    student,
    admin
}) => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile) 
        return (
            <Box
                sx={{
                    paddingLeft: 5,
                    paddingY: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    background: '#fff',
                    borderRadius: 2.25,
                    width: 'calc(100% - 20px)'
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: 14,
                        fontWeight: 600
                    }}
                >
                    {student ? 'Информация об ученике' : admin ? 'Информация об администраторе' : 'Информация о преподавателе'}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                        marginTop: 2.75,
                        alignItems: 'center'
                    }}
                >
                    <Box 
                        component='img'
                        src={locationImg}
                        sx={{
                            height: 17,
                            width: 17
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 600,
                            fontSize: 12,
                        }}
                    >
                        Россия, г. Москва
                    </Typography>
                </Box>
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
                        src={emailImg}
                        sx={{
                            height: 17,
                            width: 17
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 600,
                            fontSize: 12,
                        }}
                    >
                        glorkd@mail.ru
                    </Typography>
                </Box>
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
                            height: 17,
                            width: 17
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 600,
                            fontSize: 12,
                        }}
                    >
                        +7(999) 999-99-99
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: 1.5,
                    }}
                >
                    <Typography
                        color='#828489'
                        variant="body1"
                        sx={{
                            fontWeight: 600,
                            fontSize: 14
                        }}
                    >
                        О себе
                    </Typography>
                    <Typography
                        color='#828489'
                        variant="body1"
                        sx={{
                            fontWeight: 600,
                            fontSize: 12
                        }}
                    >
                        Информация отсутствует
                    </Typography>
                </Box>
            </Box>
        )
    return (
        <Box
            sx={{
                paddingLeft: 8,
                paddingY: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 6.5,
                background: '#fff',
                borderRadius: 7.5,
                width: 1134
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600
                }}
            >
                {student ? 'Информация об ученике' : admin ? 'Информация об администраторе' : 'Информация о преподавателе'}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    marginTop: 2.75,
                    alignItems: 'center'
                }}
            >
                <LocationSvg />
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    Россия, г. Москва
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center'
                }}
            >
                <EmailSvg />
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    glorkd@mail.ru
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center'
                }}
            >
                <PhoneSvg />
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    +7(999) 999-99-99
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5
                }}
            >
                <Typography
                    color='#828489'
                    variant="body1"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    О себе
                </Typography>
                <Typography
                    color='#828489'
                    variant="body1"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    Информация отсутствует
                </Typography>
            </Box>
        </Box>
    )
}

export default TeacherInfo