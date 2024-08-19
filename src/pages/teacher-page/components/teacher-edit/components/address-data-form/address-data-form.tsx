import { Box, Typography, useMediaQuery } from "@mui/material"
import StyledAutocomplete from "../../../../../../components/styled-autocomplete/styled-autocomplete"

const AddressDataForm = () => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    padding: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.25,
                    background: '#fff',
                    borderRadius: 2.25
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        fontSize: 14
                    }}
                >
                    Проживание
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3
                    }}
                >
                    <Box
                        sx={{width: 0.5}}
                    >
                        <StyledAutocomplete options={[{id: 1, label: 'Россия'}]} label="Страна"/>
                    </Box>
                    <Box
                        sx={{width: 0.5}}
                    >
                        <StyledAutocomplete options={[{id: 1, label: 'Москва'}]} label="Город"/>
                    </Box>
                </Box>
            </Box>
        )
    return (
        <Box
            sx={{
                padding: 12.5,
                width: 1074,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                background: '#fff',
                borderRadius: 7.5
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600
                }}
            >
                Проживание
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{width: 498}}
                >
                    <StyledAutocomplete options={[{id: 1, label: 'Россия'}]} label="Страна"/>
                </Box>
                <Box
                    sx={{width: 498}}
                >
                    <StyledAutocomplete options={[{id: 1, label: 'Москва'}]} label="Город"/>
                </Box>
            </Box>
        </Box>
    )
}

export default AddressDataForm