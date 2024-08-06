import { Box, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import StyledSelect from "../../../../../../components/styled-select/styled-select";

interface ILessonfInfoDataForm {
    student?: boolean
}

const LessonInfoDataForm: FC<ILessonfInfoDataForm> = ({
    student,
}) => {
    const [workExperience, setWorkExperience] = useState<0 | 1 | 2 | null>(null)
    const [locations, setLocations] = useState<number[]>([])
    const [machineTypes, setMachineTypes] = useState<number[]>([])
    const [sex, setSex] = useState<0 | 1 | 2 | null>(null)

    return (
        <Box
            sx={{
                padding: 12.5,
                width: 1074,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                background: '#fff',
                borderRadius: 7.5
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600
                }}
            >
                Информация о проведении урока
            </Typography>
            {
                student ?
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4.5
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box
                            sx={{
                                width: 498,
                                height: 71
                            }}
                        >
                            <StyledSelect 
                                options={[
                                    {label: 'МКПП', id: 0},
                                    {label: 'АКПП', id: 1},
                                    {label: 'Роботизированная коробка передач', id: 2},
                                    {label: 'Вариаторные трансмиссии', id: 3}
                                ]}
                                chosen={machineTypes}
                                onChange={(n: number) => {
                                    setMachineTypes(prev => {
                                        const nIndex = prev.findIndex(element => element === n)
                                        if (nIndex === -1) return [...prev, n]
                                        return prev.filter((element) => element !== n)
                                    })
                                }}
                                label="Тип КПП"
                                choseAll={() => setMachineTypes([0, 1, 2, 3])}
                                deselectAll={() => setMachineTypes([])}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: 498,
                                height: 71
                            }}
                        >
                            <StyledSelect 
                                options={[
                                    {label: 'У ученика', id: 0},
                                    {label: 'У преподавателя', id: 1},
                                    {label: 'В конкретной точке', id: 2}
                                ]}
                                chosen={locations}
                                onChange={(n: number) => {
                                    setLocations(prev => {
                                        const nIndex = prev.findIndex(element => element === n)
                                        if (nIndex === -1) return [...prev, n]
                                        return prev.filter((element) => element !== n)
                                    })
                                }}
                                label="Место сбора"
                                choseAll={() => setLocations([0, 1, 2])}
                                deselectAll={() => setLocations([])}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: 498,
                            height: 71
                        }}
                    >
                        <StyledSelect 
                            options={[
                                {label: 'Любой', id: 0},
                                {label: 'Женщина', id: 1},
                                {label: 'Мужчина', id: 2}
                            ]}
                            one
                            chosen={sex !== null ? [sex] : []}
                            onChange={(n: number) => {
                                setSex(prev => {
                                    if (prev === n) return null
                                    return n as 0 | 1 | 2
                                })
                            }}
                            label="Пол преподавателя"
                        />
                    </Box>
                </Box>
                :
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4.5
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box
                            sx={{
                                width: 498,
                                height: 71
                            }}
                        >
                            <StyledSelect 
                                options={[
                                    {label: 'До трех лет', id: 0},
                                    {label: 'От трех до десяти лет', id: 1},
                                    {label: 'От десяти лет', id: 2}
                                ]}
                                one
                                chosen={workExperience !== null ? [workExperience] : []}
                                onChange={(n: number) => {
                                    setWorkExperience(prev => {
                                        if (prev === n) return null
                                        return n as 0 | 1 | 2
                                    })
                                }}
                                label="Стаж работы"
                            />
                        </Box>
                        <Box
                            sx={{
                                width: 498,
                                height: 71
                            }}
                        >
                            <StyledSelect 
                                options={[
                                    {label: 'У ученика', id: 0},
                                    {label: 'У преподавателя', id: 1},
                                    {label: 'В конкретной точке', id: 2}
                                ]}
                                chosen={locations}
                                onChange={(n: number) => {
                                    setLocations(prev => {
                                        const nIndex = prev.findIndex(element => element === n)
                                        if (nIndex === -1) return [...prev, n]
                                        return prev.filter((element) => element !== n)
                                    })
                                }}
                                label="Место сбора"
                                choseAll={() => setLocations([0, 1, 2])}
                                deselectAll={() => setLocations([])}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box
                            sx={{
                                width: 498,
                                height: 71
                            }}
                        >
                            <StyledSelect 
                                options={[
                                    {label: 'МКПП', id: 0},
                                    {label: 'АКПП', id: 1},
                                    {label: 'Роботизированная коробка передач', id: 2},
                                    {label: 'Вариаторные трансмиссии', id: 3}
                                ]}
                                chosen={machineTypes}
                                onChange={(n: number) => {
                                    setMachineTypes(prev => {
                                        const nIndex = prev.findIndex(element => element === n)
                                        if (nIndex === -1) return [...prev, n]
                                        return prev.filter((element) => element !== n)
                                    })
                                }}
                                label="Тип КПП"
                                choseAll={() => setMachineTypes([0, 1, 2, 3])}
                                deselectAll={() => setMachineTypes([])}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: 498,
                                height: 71
                            }}
                        >
                            <TextField
                                placeholder="Машина"
                                fullWidth
                                sx={{
                                    fontSize: 18,
                                    fontWeight: 400,
                                    '& .MuiInputBase-input': {
                                        height: '31px !important',
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            }
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600
                }}
            >
                {student ? 'Как предпочтительнее проводить урок?' : 'Как проводится урок?'}
            </Typography>
            <TextField
                placeholder="Напишите текст"
                fullWidth
                multiline
                rows={2}
            />
        </Box>
    )
}

export default LessonInfoDataForm