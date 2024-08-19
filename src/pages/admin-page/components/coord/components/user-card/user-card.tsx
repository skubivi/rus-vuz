import { Box, Typography, useMediaQuery } from "@mui/material"
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
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    width: 'calc(100% - 6px)',
                    paddingLeft: 1.5
                }}
            >
                <Box 
                    component={'img'}
                    src={tempImage}
                    sx={{
                        borderRadius: 1.75,
                        width: 48, 
                        height: 48
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
                            fontSize: 11,
                            fontWeight: 500,
                            lineHeight: '90%'
                        }}
                    >
                        {lastName + ' ' + firstName}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 10,
                            fontWeight: 500,
                            color: '#7F8080',
                            lineHeight: '90%'
                        }}
                    >
                        {email}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 10,
                            fontWeight: 500,
                            lineHeight: '90%'
                        }}
                    >
                        {location}
                    </Typography>
                </Box>
            </Box>
        )
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