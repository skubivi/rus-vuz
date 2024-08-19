import { Box, Button, Modal, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";

import tempAvatar from '../../../../../../../../assets/temp/Rectangle 4468.png'

interface IDeleteModal {
    open: boolean
    onClose: () => void
    firstName: string
    lastName: string
    email: string
}

const DeleteModal: FC<IDeleteModal> = ({
    onClose,
    open,
    firstName,
    lastName,
    email
}) => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Modal
                open={open}
                onClose={onClose}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 5.5,
                        borderRadius: 7.5,
                        background: '#fff',
                        position: 'absolute',
                        width: 'calc(95% - 44px)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: 16,
                            fontWeight: 600
                        }}
                    >
                        Удалить пользователя
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: '#191E34',
                            marginTop: 5
                        }}
                    >
                        Вы уверены что хотите удалить <b>{lastName} {firstName}</b> из пользователей?
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 5,
                            gap: 2.5,
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            component={'img'}
                            src={tempAvatar}
                            sx={{
                                width: 50,
                                height: 50,
                                borderRadius: 3
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '3px'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#141515',
                                    fontSize: 14,
                                    fontWeight: 400
                                }}
                            >
                                {lastName} {firstName}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#7F8080',
                                    fontSize: 11,
                                    fontWeight: 500
                                }}
                            >
                                {email}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 2.5,
                            marginTop: 10,
                            alignSelf: 'center'
                        }}
                    >
                        <Button
                            variant="contained"
                            color="buttonSecondary"
                            sx={{
                                width: 124,
                                height: 46,
                            }}
                            onClick={onClose}
                        >
                            <Typography
                                sx={{
                                    color: '#192863',
                                    fontSize: 14,
                                    fontWeight: 600
                                }}
                            >
                                Отменить
                            </Typography>
                        </Button>
                        <Button
                            variant="contained"
                            color="buttonPrimary"
                            sx={{
                                width: 124,
                                height: 46
                            }}
                            onClick={onClose}
                        >
                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: 14,
                                    fontWeight: 600
                                }}
                            >
                                Удалить
                            </Typography>
                        </Button>
                    </Box>
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
                    display: 'flex',
                    flexDirection: 'column',
                    paddingX: 8,
                    paddingY: 10.5,
                    borderRadius: 7.5,
                    background: '#fff',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    Удалить пользователя
                </Typography>
                <Typography
                    sx={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: '#191E34',
                        marginTop: 4
                    }}
                >
                    Вы уверены что хотите удалить <b>{lastName} {firstName}</b> из пользователей?
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 6.25,
                        gap: 4,
                        alignItems: 'center'
                    }}
                >
                    <Box
                        component={'img'}
                        src={tempAvatar}
                        sx={{
                            width: 50,
                            height: 50,
                            borderRadius: 3
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#141515',
                                fontSize: 16,
                                fontWeight: 400
                            }}
                        >
                            {lastName} {firstName}
                        </Typography>
                        <Typography
                            sx={{
                                color: '#7F8080',
                                fontSize: 11,
                                fontWeight: 500
                            }}
                        >
                            {email}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2.5,
                        alignSelf: 'flex-end'
                    }}
                >
                    <Button
                        variant="contained"
                        color="buttonSecondary"
                        sx={{
                            width: 124,
                            height: 46,
                        }}
                        onClick={onClose}
                    >
                        <Typography
                            sx={{
                                color: '#192863',
                                fontSize: 14,
                                fontWeight: 600
                            }}
                        >
                            Отменить
                        </Typography>
                    </Button>
                    <Button
                        variant="contained"
                        color="buttonPrimary"
                        sx={{
                            width: 124,
                            height: 46
                        }}
                        onClick={onClose}
                    >
                        <Typography
                            sx={{
                                color: '#FFFFFF',
                                fontSize: 14,
                                fontWeight: 600
                            }}
                        >
                            Удалить
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default DeleteModal