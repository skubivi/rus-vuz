import { useState } from 'react'
import SearchSvg from '../../assets/components/search/search.svg?react'
import { Box, InputAdornment, TextField } from '@mui/material'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 1,
                height: 195,
                borderRadius: 7.5,
                background: '#fff'
            }}
        >
            <Box
                sx={{
                    width: 'calc(100% - 114px)',
                    height: 83,
                }}
            >
                <TextField 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Поиск"
                    fullWidth
                    sx={{
                        fontSize: 25,
                        fontWeight: 400,
                        lineHeight: '150%',
                        '& .MuiInputBase-input': {
                            height: '38px !important'
                        },
                        '& .MuiInputAdornment-root': {
                            marginLeft: 8
                        }
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchSvg/></InputAdornment>
                    }}
                />
            </Box>
        </Box>
    )
}

export default Search