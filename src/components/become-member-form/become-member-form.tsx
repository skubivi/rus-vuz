import { Box, Button, Modal, TextField, Typography, useMediaQuery } from "@mui/material";
import { FC, useState } from "react";
import StyledCheckbox from "../styled-checkbox/styled-checkbox";
import StyledInput from "../styled-input/styled-input";

interface IBecomeMemberForm {
    open: boolean
    onClose: () => void
    title: string
    right?: boolean
}

const BecomeMemberForm: FC<IBecomeMemberForm> = ({
    open,
    onClose,
    title,
    right
}) => {
    const [theory, setTheory] = useState(false)
    const [practice, setPractice] = useState(false)
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Modal
                open={open}
                onClose={onClose}
            >
                <Box
                    sx={{
                        position: 'fixed',
                        top: '50dvh',
                        left: '50dvw',
                        transform: 'translate(-50%, -50%)',
                        width: 325,
                        display: 'flex',
                        flexDirection: 'column',
                        background: '#fff',
                        borderRadius: 7.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        paddingY: 8,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2.5,
                            width: 236
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 2.5,
                                marginTop: 4
                            }}
                        >
                            <Box sx={{width: 116}}>
                                <StyledInput title="Имя"/>
                            </Box>
                            <Box
                                sx={{
                                    width: 111,
                                    height: 40,
                                    borderRadius: 3,
                                    background: '#F6F7F9',
                                    paddingLeft: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 2,
                                        alignItems: 'center'
                                    }}
                                >
                                    <StyledCheckbox 
                                        checked={theory}
                                        onClick={() => setTheory(prev => !prev)}
                                    />
                                    <Typography
                                        sx={{
                                            color: '#828489',
                                            fontSize: 12,
                                            fontWeight: 400
                                        }}
                                    >
                                        Теория
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
                                    <StyledCheckbox 
                                        checked={practice}
                                        onClick={() => setPractice(prev => !prev)}
                                    />
                                    <Typography
                                        sx={{
                                            color: '#828489',
                                            fontSize: 12,
                                            fontWeight: 400
                                        }}
                                    >
                                        Практика
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <StyledInput title="Город"/>
                        <StyledInput title="Номер телефона"/>
                        <StyledInput title="Email*"/>
                        <TextField 
                            multiline
                            rows={1}
                            fullWidth
                            label='Сообщение'
                            placeholder="Введите сообщение"
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
                            }}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        color="buttonPrimary"
                        sx={{
                            width: 148,
                            height: 31,

                        }}
                    >
                        <Typography
                            color='#fff'
                            sx={{
                                fontSize: 10,
                                fontWeight: 600
                            }}
                        >
                            Отправить
                        </Typography>
                    </Button>
                </Box>
            </Modal>
        )
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{
                    width: 651,
                    marginLeft: right ? 'calc(100dvw - 52px - 651px)' : 13,
                    marginTop: 13,
                    marginBottom: 13,
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#fff',
                    borderRadius: 7.5,
                    height: 'calc(100dvh - 104px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 7.5
                }}
            >
                <Typography
                    variant="h6"
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4.5,
                        marginTop: 4
                    }}
                >
                    <Box sx={{width: 232}}>
                        <StyledInput title="Имя"/>
                    </Box>
                    <Box
                        sx={{
                            width: 203,
                            height: 71,
                            borderRadius: 3,
                            background: '#F6F7F9',
                            paddingLeft: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 3,
                                alignItems: 'center'
                            }}
                        >
                            <StyledCheckbox 
                                checked={theory}
                                onClick={() => setTheory(prev => !prev)}
                            />
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 15,
                                    fontWeight: 400
                                }}
                            >
                                Теория
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 3,
                                alignItems: 'center'
                            }}
                        >
                            <StyledCheckbox 
                                checked={practice}
                                onClick={() => setPractice(prev => !prev)}
                            />
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 15,
                                    fontWeight: 400
                                }}
                            >
                                Практика
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{width: 473}}
                >
                    <StyledInput title="Город"/>
                </Box>
                <Box
                    sx={{width: 473}}
                >
                    <StyledInput title="Номер телефона"/>
                </Box>
                <Box
                    sx={{width: 473}}
                >
                    <StyledInput title="Email*"/>
                </Box>
                <Box
                    sx={{width: 473}}
                >
                    <TextField 
                        multiline
                        rows={3}
                        fullWidth
                        label='Сообщение'
                        placeholder="Введите сообщение"
                    />
                </Box>
                <Box sx={{width: 296}}>
                    <Button
                        variant="contained"
                        color="buttonPrimary"
                        fullWidth
                    >
                        <Typography
                            color='#fff'
                            sx={{
                                fontSize: 20,
                                fontWeight: 600
                            }}
                        >
                            Отправить
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default BecomeMemberForm