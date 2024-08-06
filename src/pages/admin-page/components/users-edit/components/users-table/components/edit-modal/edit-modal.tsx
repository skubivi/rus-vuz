import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

import tempAvatar from '../../../../../../../../assets/temp/Rectangle 4467.png'
import EditSvg from '../../../../../../../../assets/pages/admin-page/edit.svg?react'
import EditInput from "../../../../../../../../components/edit-input/edit-input";
import EditSelect from "../../../../../../../../components/edit-select/edit-select";
import SaveSvg from '../../../../../../../../assets/pages/admin-page/save.svg?react'

interface IEditModal {
    open: boolean
    onClose: () => void
    firstName: string
    lastName: string
    email: string
    role: string
    type: string
    number: string
}

const EditModal: FC<IEditModal> = ({
    onClose,
    open,
    firstName,
    lastName,
    email,
    type,
    role,
    number
}) => {
    const [editState, setEditState] = useState<'' | 'lastName' | 'firstName' | 'role' | 'email' | 'number' | 'type'>('')
    useEffect(() => {
        setEditState('')
    }, [open])
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingX: 10,
                    paddingTop: 8,
                    paddingBottom: 14.75,
                    borderRadius: 7.5,
                    background: '#fff',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 514
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    Редактировать контакт
                </Typography>
                <Typography
                    sx={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: '#363738',
                        marginTop: 8
                    }}
                >
                    Контактные данные
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 7,
                    }}
                >
                    <Box
                        component={'img'}
                        src={tempAvatar}
                        sx={{
                            width: 70,
                            height: 70,
                            borderRadius: 3,
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 6,
                            marginLeft: 11.5
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 15,
                                    fontWeight: 400,
                                    width: 118
                                }}
                            >
                                Фамилия
                            </Typography>
                            {editState === 'lastName' 
                                ? 
                                <EditInput defaultValue={lastName} update={() => setEditState('')}/>
                                :
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                    }}
                                >
                                    {lastName}
                                </Typography>
                            }
                            {editState !== 'lastName' &&
                                <IconButton
                                    sx={{
                                        marginLeft: 2
                                    }}
                                    onClick={() => setEditState('lastName')}
                                >
                                    <EditSvg />
                                </IconButton>
                            }
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 15,
                                    fontWeight: 400,
                                    width: 118
                                }}
                            >
                                Имя
                            </Typography>
                            {editState === 'firstName' 
                                ? 
                                <EditInput defaultValue={firstName} update={() => setEditState('')}/>
                                :
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                    }}
                                >
                                    {firstName}
                                </Typography>
                            }
                            {editState !== 'firstName' &&
                                <IconButton
                                    sx={{
                                        marginLeft: 2
                                    }}
                                    onClick={() => setEditState('firstName')}
                                >
                                    <EditSvg />
                                </IconButton>
                            }
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 15,
                                    fontWeight: 400,
                                    width: 118
                                }}
                            >
                                Тип
                            </Typography>
                            {editState === 'type'
                                ?
                                <EditSelect defaultValue={type} options={['Ученик', 'Учитель']}/>
                                :
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                    }}
                                >
                                    {type}
                                </Typography>
                            }
                            {
                                editState === 'type'
                                    ?
                                    <IconButton
                                        sx={{
                                            marginLeft: 3
                                        }}
                                        onClick={() => setEditState('')}
                                    >
                                        <SaveSvg />
                                    </IconButton>
                                    :
                                    <IconButton
                                        sx={{
                                            marginLeft: 2
                                        }}
                                        onClick={() => setEditState('type')}
                                    >
                                        <EditSvg />
                                    </IconButton>
                            }
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 15,
                                    fontWeight: 400,
                                    width: 118
                                }}
                            >
                                Роль
                            </Typography>
                            {editState === 'role'
                                ?
                                <EditSelect defaultValue={role} options={['Без роли', 'Координатор', 'Администратор']}/>
                                :
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                    }}
                                >
                                    {role}
                                </Typography>
                            }
                            {
                                editState === 'role'
                                    ?
                                    <IconButton
                                        sx={{
                                            marginLeft: 3
                                        }}
                                        onClick={() => setEditState('')}
                                    >
                                        <SaveSvg />
                                    </IconButton>
                                    :
                                    <IconButton
                                        sx={{
                                            marginLeft: 2
                                        }}
                                        onClick={() => setEditState('role')}
                                    >
                                        <EditSvg />
                                    </IconButton>
                            }
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 15,
                                    fontWeight: 400,
                                    width: 118
                                }}
                            >
                                Телефон
                            </Typography>
                            {editState === 'number' 
                                ? 
                                <EditInput defaultValue={number} update={() => setEditState('')}/>
                                :
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                    }}
                                >
                                    {`+${number[0]} (${number.slice(1, 4)}) ${number.slice(4, 7)}-${number.slice(7, 9)}-${number.slice(9)}`}
                                </Typography>
                            }
                            {editState !== 'number' &&
                                <IconButton
                                    sx={{
                                        marginLeft: 2
                                    }}
                                    onClick={() => setEditState('number')}
                                >
                                    <EditSvg />
                                </IconButton>
                            }
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 15,
                                    fontWeight: 400,
                                    width: 118
                                }}
                            >
                                E-mail
                            </Typography>
                            {editState === 'email' 
                                ? 
                                <EditInput defaultValue={email} update={() => setEditState('')}/>
                                :
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                    }}
                                >
                                    {email}
                                </Typography>
                            }
                            {editState !== 'email' &&
                                <IconButton
                                    sx={{
                                        marginLeft: 2
                                    }}
                                    onClick={() => setEditState('email')}
                                >
                                    <EditSvg />
                                </IconButton>
                            }
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2.5,
                        alignSelf: 'flex-end',
                        marginTop: 10
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
                            Готово
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default EditModal