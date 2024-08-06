import { Box, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";

import tempAvatar from '../../../../../../assets/temp/temp-avatar.png'
import profileHeaderImageTemp from '../../../../../../assets/temp/temp-image.png'

const TeacherProfileHeader: FC = () => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    width: 1,
                    overflow: 'hidden',
                    borderRadius: 2.25
                }}
            >
                <Box
                    sx={{
                        zIndex: 1,
                        borderRadius: '30px 30px 0 0',
                        overflow: 'hidden',
                        width: '100%',
                        height: 103
                    }}
                >
                    <img src={profileHeaderImageTemp} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        gap: 3,
                        width: '100%',
                        background: 'var(--ffffff, #FFF)',
                        marginTop: -5,
                        padding: 2,
                    }}
                >
                    <Box
                        sx={{
                            height: 68,
                            width: 68,
                            borderRadius: 3,
                            border: '2px solid var(--ffffff, #FFF)',
                            backgroundImage: `url(${tempAvatar})`,
                            backgroundPosition: '50%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'lightgray',
                            zIndex: 2
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '0.25rem',
                            zIndex: 2,
                            marginBottom: 6
                        }}
                    >
                        <Typography 
                            sx={{
                                color: 'var(--141515, #141515)',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '140%',
                                letterSpacing: '-0.4px'
                            }}
                        >
                            Марейчева
                        </Typography>
                        <Typography 
                            sx={{
                                color: 'var(--141515, #141515)',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '140%',
                                letterSpacing: '-0.4px'
                            }}
                        >
                            Марина
                        </Typography>
                        <Typography 
                            sx={{
                                color: 'var(--141515, #141515)',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '140%',
                                letterSpacing: '-0.4px'
                            }}
                        >
                            Васильевна
                        </Typography>
                    </Box>
                </Box>
            </Box>
        )
    return (
        <Box>
            <Box
                sx={{
                    zIndex: 1,
                    position: 'absolute',
                    borderRadius: '30px 30px 0 0',
                    overflow: 'hidden'
                }}
            >
                <img src={profileHeaderImageTemp} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    gap: 6,
                    width: 1094,
                    borderRadius: 7.5,
                    background: 'var(--ffffff, #FFF)',
                    marginTop: 56.5,
                    padding: 10,
                }}
            >
                <Box
                    sx={{
                        height: 136,
                        width: 136,
                        borderRadius: 3,
                        border: '2px solid var(--ffffff, #FFF)',
                        backgroundImage: `url(${tempAvatar})`,
                        backgroundPosition: '50%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: 'lightgray',
                        zIndex: 2
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '0.25rem'
                    }}
                >
                    <Typography 
                        sx={{
                            color: 'var(--141515, #141515)',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '140%',
                            letterSpacing: '-0.4px'
                        }}
                    >
                        Марейчева
                    </Typography>
                    <Typography 
                        sx={{
                            color: 'var(--141515, #141515)',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '140%',
                            letterSpacing: '-0.4px'
                        }}
                    >
                        Марина
                    </Typography>
                    <Typography 
                        sx={{
                            color: 'var(--141515, #141515)',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '140%',
                            letterSpacing: '-0.4px'
                        }}
                    >
                        Васильевна
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TeacherProfileHeader