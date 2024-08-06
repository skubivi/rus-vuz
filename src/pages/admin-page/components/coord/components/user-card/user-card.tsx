import { Box, Typography } from "@mui/material"
import { FC } from "react"

import tempImage from '../../../../../../assets/temp/Rectangle 4737.png'

interface IUserCard {
    firstName: string,
    lastName: string,
    email: string,
    location: string
}

const UserCard: FC<IUserCard> = ({
    firstName,
    lastName,
    email,
    location
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 3.25,
                alignItems: 'center'
            }}
        >
            <Box 
                component={'img'}
                src={tempImage}
                sx={{
                    borderRadius: 3,
                    width: 68, 
                    height: 68
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
                        fontSize: 16,
                        fontWeight: 500
                    }}
                >
                    {lastName + ' ' + firstName}
                </Typography>
                <Typography
                    sx={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#7F8080'
                    }}
                >
                    {email}
                </Typography>
                <Typography
                    sx={{
                        fontSize: 12,
                        fontWeight: 500
                    }}
                >
                    {location}
                </Typography>
            </Box>
        </Box>
    )
}

export default UserCard