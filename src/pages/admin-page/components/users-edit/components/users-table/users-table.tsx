import { Box, IconButton, Typography, useMediaQuery } from "@mui/material"
import { FC, useState } from "react"
import TableHeader from "./components/table-header/table-header"
import TableRow from "./components/table-row/table-row"

import ArrowLeft from '../../../../../../assets/pages/admin-page/arrow-left.svg?react'
import ArrowRight from '../../../../../../assets/pages/admin-page/arrow-right.svg?react'
import DeleteModal from "./components/delete-modal/delete-modal"
import EditModal from "./components/edit-modal/edit-modal"

interface IUserTable {
    users: {
        id: number,
        firstName: string,
        lastName: string,
        type: string,
        role: string,
        number: string,
        email: string
    }[]
}

const UsersTable: FC<IUserTable> = ({
    users
}) => {
    const [countOnPage, setCountOnPage] = useState<5 | 10 | 20 | 50>(5)
    const [page, setPage] = useState(1)

    const handleNextPage = () => {
        if (page * countOnPage < users.length) setPage(prev => prev + 1)
    }
    const handlePrevPage = () => {
        if (page > 1) setPage(prev => prev - 1)
    }

    const [openEditModal, setOpenEditModal] = useState(false)
    const [editId, setEditId] = useState(-1)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState(-1)

    const handleOpenEditModal = (id: number) => {
        setEditId(id)
        setOpenEditModal(true)
    }
    const handleCloseEditModal = () => {
        setOpenEditModal(false)
        setEditId(-1)
    }

    const handleOpenDeleteModal = (id: number) => {
        setOpenDeleteModal(true)
        setDeleteId(id)
    }
    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false)
        setDeleteId(-1)
    }

    const getDeleteInfo = (id: number) => {
        const result = {
            firstName: '',
            lastName: '',
            email: ''
        }
        const userInArray = users.find((user) => user.id === id)
        if (userInArray) {
            result.firstName = userInArray.firstName
            result.lastName = userInArray.lastName
            result.email = userInArray.email
        }
        return result
    }
    const getEditInfo = (id: number) => {
        const result = {
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            role: '',
            type: ''
        }
        const userInArray = users.find((user) => user.id === id)
        if (userInArray) {
            result.firstName = userInArray.firstName
            result.lastName = userInArray.lastName
            result.email = userInArray.email
            result.number = userInArray.number
            result.role = userInArray.role
            result.type = userInArray.type
        }
        return result
    }
    
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 2.5,
                        background: '#fff',
                        paddingY: 1.5,
                    }}
                >
                    {
                        users.map((user, index) => 
                            <>
                                <TableRow 
                                    {...user} 
                                    key={user.id}
                                    openEditModal={handleOpenEditModal}
                                    openDeleteModal={handleOpenDeleteModal}
                                />
                                {index !== users.length - 1 &&
                                    <Box
                                        key={'divider ' + user.id}
                                        sx={{
                                            width: 1,
                                            height: '1px',
                                            background: '#F6F7F9'
                                        }}
                                    />
                                }
                            </>
                        )
                    }
                </Box>
                <DeleteModal 
                    open={openDeleteModal}
                    onClose={handleCloseDeleteModal}
                    {...getDeleteInfo(deleteId)}
                />
                <EditModal
                    open={openEditModal}
                    onClose={handleCloseEditModal}
                    {...getEditInfo(editId)}
                />
            </>
        )

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 1409,
                    borderRadius: 7.5,
                    background: '#fff',
                    paddingTop: 26.75,
                    paddingBottom: 11.25,
                }}
            >
                <TableHeader />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 7.75,
                        marginTop: 12
                    }}
                >
                    {
                        users.slice((page - 1) * countOnPage, Math.min(page * countOnPage, users.length)).map((user) => 
                            <TableRow 
                                {...user} 
                                key={user.id}
                                openEditModal={handleOpenEditModal}
                                openDeleteModal={handleOpenDeleteModal}
                            />
                        )
                    }
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 8,
                        paddingLeft: 8.5,
                        paddingRight: 21.5,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 3,
                            paddingY: 1,
                            paddingX: 2,
                            border: '1px solid #E3E3E8',
                            borderRadius: 1.5
                        }}
                    >
                        <Box
                            sx={{
                                width: 60,
                                height: 26,
                                background: countOnPage === 5 ? '#BED2D2' : '#fff',
                                borderRadius: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: "pointer"
                            }}
                            onClick={() => setCountOnPage(5)}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 12,
                                    fontWeight: 500
                                }}
                            >
                                5
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 60,
                                height: 26,
                                background: countOnPage === 10 ? '#BED2D2' : '#fff',
                                borderRadius: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: "pointer"
                            }}
                            onClick={() => setCountOnPage(10)}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 12,
                                    fontWeight: 500
                                }}
                            >
                                10
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 60,
                                height: 26,
                                background: countOnPage === 20 ? '#BED2D2' : '#fff',
                                borderRadius: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: "pointer"
                            }}
                            onClick={() => setCountOnPage(20)}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 12,
                                    fontWeight: 500
                                }}
                            >
                                20
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 60,
                                height: 26,
                                background: countOnPage === 50 ? '#BED2D2' : '#fff',
                                borderRadius: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: "pointer"
                            }}
                            onClick={() => setCountOnPage(50)}
                        >
                            <Typography
                                sx={{
                                    color: '#828489',
                                    fontSize: 12,
                                    fontWeight: 500
                                }}
                            >
                                50
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 4,
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            onClick={handlePrevPage}
                            sx={{
                                opacity: page > 1 ? 1 : 0,
                                cursor: page > 1 ? 'pointer' : 'unset'
                            }}
                        >
                            <ArrowLeft />
                        </IconButton>
                        <Typography
                            sx={{
                                color: '#828489',
                                fontSize: 15,
                                fontWeight: 500
                            }}
                        >
                            {`${(page - 1) * countOnPage + 1}-${Math.min(page * countOnPage, users.length)} из ${users.length}`}
                        </Typography>
                        <IconButton
                            onClick={handleNextPage}
                            sx={{
                                opacity: page * countOnPage < users.length ? 1 : 0,
                                cursor: page * countOnPage < users.length ? 'pointer' : 'unset'
                            }}
                        >
                            <ArrowRight />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <DeleteModal 
                open={openDeleteModal}
                onClose={handleCloseDeleteModal}
                {...getDeleteInfo(deleteId)}
            />
            <EditModal
                open={openEditModal}
                onClose={handleCloseEditModal}
                {...getEditInfo(editId)}
            />
        </>
    )
}

export default UsersTable