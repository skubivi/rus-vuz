import { Box, Typography, useMediaQuery } from "@mui/material"

import FormatSvg from '../../../../../../assets/pages/teacher-page/format.svg?react'

import FormatImg from '../../../../../../assets/pages/teacher-page/format.svg'

import { FC } from "react"

interface ILessonInfo {
    student?: boolean
}

const LessonInfo: FC<ILessonInfo> = ({
    student
}) => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    paddingLeft: 5,
                    paddingTop: 4,
                    paddingBottom: 7.5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
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
                    Информация об уроке
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                        marginTop: -1,
                        alignItems: 'center'
                    }}
                >
                    <Box 
                        component='img'
                        src={FormatImg}
                        sx={{
                            height: 17,
                            width: 17
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 600,
                            fontSize: 12
                        }}
                    >
                        Не указано
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
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
                        Обучение
                    </Typography>
                    <Typography
                        color='#828489'
                        variant="body1"
                        sx={{
                            fontWeight: 600,
                            fontSize: 12
                        }}
                    >
                        Не указано
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
                            fontWeight: 600,
                            fontSize: 14
                        }}
                    >
                        {student ? 'Как предпочтительнее проводить урок?' : 'Как проводится урок?'}
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
                Информация об уроке
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    marginTop: -2.5,
                    alignItems: 'center'
                }}
            >
                <FormatSvg />
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    Не указано
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
                    Обучение
                </Typography>
                <Typography
                    color='#828489'
                    variant="body1"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    Не указано
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
                    {student ? 'Как предпочтительнее проводить урок?' : 'Как проводится урок?'}
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

export default LessonInfo