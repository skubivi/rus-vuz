import { Box, Typography } from "@mui/material"
import StyledAutocomplete from "../../../../../../components/styled-autocomplete/styled-autocomplete"

const AddressDataForm = () => {
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