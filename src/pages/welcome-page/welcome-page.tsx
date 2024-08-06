import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material"
import BecomeMemberForm from "../../components/become-member-form/become-member-form"
import { useState } from "react"

const WelcomePage = () => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState<'Стать учеником' | 'Стать преподавателем'>('Стать учеником')
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 10,
                    width: 1,
                    zIndex: 1,
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: 24,
                        fontWeight: 800
                    }}
                >
                    Поиск преподавателей<br />по вождению
                </Typography>
                <Button
                    variant="contained"
                    color="buttonPrimary"
                    sx={{
                        width: 126,
                        marginTop: 5,
                        padding: 0,
                        height: 28,
                        borderRadius: 1
                    }}
                    onClick={() => {
                        setTitle('Стать учеником')
                        setOpen(true)
                    }}
                >
                    <Typography
                        variant="h4"
                        color={theme.palette.buttonPrimary.contrastText}
                        sx={{
                            whiteSpace: 'nowrap',
                            fontSize: 10,
                            fontWeight: 600
                        }}
                    >
                        Стать учеником
                    </Typography>
                </Button>
                <Button
                    variant="contained"
                    color="buttonPrimary"
                    sx={{
                        width: 126,
                        marginTop: 2,
                        padding: 0,
                        height: 28,
                        borderRadius: 1
                    }}
                    onClick={() => {
                        setTitle('Стать преподавателем')
                        setOpen(true)
                    }}
                >
                    <Typography
                        variant="h4"
                        color={theme.palette.buttonPrimary.contrastText}
                        sx={{
                            whiteSpace: 'nowrap',
                            fontSize: 10,
                            fontWeight: 600
                        }}
                    >
                        Стать преподавателем
                    </Typography>
                </Button>
                <BecomeMemberForm title={title} open={open} onClose={() => setOpen(false)}/>
            </Box>
        )
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10,
                width: 1,
                zIndex: 1,
            }}
        >
            <Typography
                variant="h1"
            >
                Поиск преподавателей<br />по вождению
            </Typography>
            <Button
                variant="contained"
                color="buttonPrimary"
                sx={{
                    width: 316,
                    marginTop: 15,
                    height: 72
                }}
                onClick={() => {
                    setTitle('Стать учеником')
                    setOpen(true)
                }}
            >
                <Typography
                    variant="h4"
                    color={theme.palette.buttonPrimary.contrastText}
                >
                    Стать учеником
                </Typography>
            </Button>
            <Button
                variant="contained"
                color="buttonPrimary"
                sx={{
                    width: 316,
                    marginTop: 7.5,
                    height: 72
                }}
                onClick={() => {
                    setTitle('Стать преподавателем')
                    setOpen(true)
                }}
            >
                <Typography
                    variant="h4"
                    color={theme.palette.buttonPrimary.contrastText}
                    sx={{
                        whiteSpace: 'nowrap'
                    }}
                >
                    Стать преподавателем
                </Typography>
            </Button>
            <BecomeMemberForm title={title} open={open} onClose={() => setOpen(false)}/>
        </Box>
    )
}

export default WelcomePage