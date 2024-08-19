import { useState } from 'react'
import SearchSvg from '../../assets/components/search/search.svg?react'
import SearchMobileSvg from '../../assets/components/search/search-mobile.svg?react'
import { Box, InputAdornment, TextField, useMediaQuery } from '@mui/material'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 1,
                    height: 67,
                    borderRadius: 2.25,
                    background: '#fff'
                }}
            >
                <Box
                    sx={{
                        width: 'calc(100% - 46px)',
                        height: 29,
                    }}
                >
                    <TextField 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Поиск"
                        fullWidth
                        sx={{
                            fontWeight: 400,
                            lineHeight: '150%',
                            '& .MuiInputAdornment-root': {
                                marginLeft: 2
                            },
                            fontSize: 12,
                            '& .MuiInputBase-root': {
                                borderRadius: '7px !important'
                            },
                            '& .MuiInputBase-input': {
                                padding: '7px !important',
                                height: '18px !important',
                                fontSize: 12
                            }
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchMobileSvg /></InputAdornment>
                        }}
                    />
                </Box>
            </Box>
        )
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