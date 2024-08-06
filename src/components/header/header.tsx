import { Box, Typography, useMediaQuery } from "@mui/material"

import logo from '../../assets/components/header/logo.svg'
import profileImg from '../../assets/components/header/profile.svg'
import ProfileSvg from '../../assets/components/header/profile.svg?react'
import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isBackground = location.pathname === '/'
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile) 
        return (
            <Box
                sx={{
                    background: isBackground ? 'unset' : 'rgba(190, 210, 210, 0.70)',
                    borderRadius: 7.5,
                    width: '100%',
                    height: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        height: 1,
                        width: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1
                    }}
                >
                    <Box
                        component='img'
                        src={logo}
                        onClick={() => navigate('/')}
                        sx={{
                            cursor: 'pointer',
                            width: 50,
                            height: 20
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 1,
                        gap: 3,
                        marginLeft: 3,
                        zIndex: 2
                    }}
                >
                    <Typography
                        variant="h5"
                        onClick={() => navigate('/about')}
                        sx={{
                            color: isBackground ? '#BED2D2' : '#191E34',
                            cursor: 'pointer',
                            fontSize: 10
                        }}
                    >
                        О проекте
                    </Typography>
                    <Typography
                        variant="h5"
                        onClick={() => navigate('/payment-plan')}
                        sx={{
                            color: isBackground ? '#BED2D2' : '#191E34',
                            cursor: 'pointer',
                            fontSize: 10
                        }}
                    >
                        Абонемент
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 1,
                        gap: 3,
                        marginRight: 3,
                        zIndex: 2
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: isBackground ? '#BED2D2' : '#191E34',
                            cursor: 'pointer',
                            fontSize: 10
                        }}
                    >
                        Вход
                    </Typography>
                    <Box
                        component='img'
                        sx={{
                            cursor: 'pointer',
                            height: 16,
                            width: 20
                        }}
                        src={profileImg}
                    />
                </Box>
            </Box>
        )
    return (
        <Box
            sx={{
                borderRadius: 7.5,
                width: 1409,
                height: 75,
                background: 'rgba(190, 210, 210, 0.70)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    height: 1,
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1
                }}
            >
                <Box
                    component='img'
                    src={logo}
                    onClick={() => navigate('/')}
                    sx={{
                        cursor: 'pointer'
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 1,
                    gap: 11.25,
                    marginLeft: 12,
                    zIndex: 2
                }}
            >
                <Typography
                    variant="h5"
                    onClick={() => navigate('/about')}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    О проекте
                </Typography>
                <Typography
                    variant="h5"
                    onClick={() => navigate('/payment-plan')}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    Абонемент
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 1,
                    gap: 11.25,
                    marginRight: 12,
                    zIndex: 2
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    Вход
                </Typography>
                <Box
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    <ProfileSvg />
                </Box>
            </Box>
        </Box>
    )
}

export default Header