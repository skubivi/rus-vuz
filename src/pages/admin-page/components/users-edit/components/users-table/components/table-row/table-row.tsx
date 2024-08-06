import { Box, IconButton, Typography } from "@mui/material"
import { FC } from "react"

import EditIcon from '../../../../../../../../assets/pages/admin-page/edit.svg?react'
import DeleteIcon from '../../../../../../../../assets/pages/admin-page/delete.svg?react'

interface ITableRow {
    id: number,
    firstName: string,
    lastName: string,
    type: string,
    role: string,
    number: string,
    email: string,
    openEditModal: (id: number) => void,
    openDeleteModal: (id: number) => void
}

const TableRow: FC<ITableRow> = ({
    id,
    firstName,
    lastName,
    type,
    role,
    number,
    email,
    openEditModal,
    openDeleteModal
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                paddingLeft: 27.5,
                paddingRight: 36,
                width: 1,
                alignItems: 'center'
            }}
        >
            <Typography
                sx={{
                    color: '#141515',
                    fontSize: 16,
                    fontWeight: 600,
                    width: 84,
                    textAlign: 'center',
                    overflow: 'hidden'
                }}
            >
                {lastName}
            </Typography>
            <Typography
                sx={{
                    color: '#141515',
                    fontSize: 16,
                    fontWeight: 600,
                    width: 83,
                    textAlign: 'center',
                    marginLeft: 18.5,
                    overflow: 'hidden'
                }}
            >
                {firstName}
            </Typography>
            <Typography
                sx={{
                    color: '#141515',
                    fontSize: 16,
                    fontWeight: 500,
                    width: 62,
                    textAlign: 'center',
                    marginLeft: 22,
                    overflow: 'hidden'
                }}
            >
                {type}
            </Typography>
            <Typography
                sx={{
                    color: '#141515',
                    fontSize: 16,
                    fontWeight: 500,
                    width: 123,
                    textAlign: 'center',
                    marginLeft: 17.25,
                    overflow: 'hidden'
                }}
            >
                {role}
            </Typography>
            <Typography
                sx={{
                    color: '#141515',
                    fontSize: 16,
                    fontWeight: 500,
                    width: 135,
                    textAlign: 'center',
                    marginLeft: 15.75,
                    overflow: 'hidden'

                }}
            >
                {`+${number[0]} (${number.slice(1, 4)}) ${number.slice(4, 7)}-${number.slice(7, 9)}-${number.slice(9)}`}
            </Typography>
            <Typography
                sx={{
                    color: '#141515',
                    fontSize: 16,
                    fontWeight: 500,
                    width: 134,
                    textAlign: 'center',
                    marginLeft: 18.5,
                    overflow: 'hidden'
                }}
            >
                {email}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '2,5',
                    alignItems: 'center',
                    marginLeft: 23.5,
                    width: 72
                }}
            >
                <IconButton
                    onClick={() => openEditModal(id)}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    onClick={() => openDeleteModal(id)}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TableRow