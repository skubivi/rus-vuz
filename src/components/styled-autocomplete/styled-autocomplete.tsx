import { Autocomplete, Box, TextField, useMediaQuery } from "@mui/material"
import { FC } from "react"

import ExpandSvg from '../../assets/components/autocomplete/expand.svg?react'
import ExpandMobileSvg from '../../assets/components/autocomplete/expand-mobile.svg?react'

interface IStyledAutoComplete {
    options: {id: number, label: string}[]
    label: string
}

const StyledAutocomplete: FC<IStyledAutoComplete> = ({
    options,
    label
}) => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Autocomplete
                sx={{
                    "& .MuiAutocomplete-endAdornment": {
                        maxHeight: "23px",
                        padding: 0,
                        position: "unset",
                        display: "flex",
                        alignItems: "center",
                        marginTop: 2.5,
                        marginBottom: -2.5
                    },
                    "& .MuiInputLabel-root": {
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#191E34',
                        letterSpacing: '-0.3px',
                        transform: `translate(4px, 4px) scale(1)`
                    },
                    "& .MuiInputLabel-shrink": {
                        right: 0,
                        transform: `translate(14px, -8px) scale(0.75)`,
                    },
                    "& .MuiAutocomplete-input": {
                        fontSize: 12,
                        fontWeight: 500
                    },
                    "& .MuiInputBase-root": {
                        padding: '7px !important',
                        borderRadius: '7px !important'
                    }
                }}
                popupIcon={<ExpandMobileSvg />}
                clearIcon={false}
                options={options}
                fullWidth
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={label}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <Box
                                    sx={{
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    alignItems: "center",
                                    gap: 4,
                                    "& .MuiInputBase-root": {
                                        padding: "0px !important",
                                    },
                                    }}
                                >
                                    {params.InputProps.endAdornment}
                                </Box>
                            ),
                        }}
                    />
                )}
            />
        )
    return (
        <Autocomplete
            sx={{
                "& .MuiAutocomplete-endAdornment": {
                    maxHeight: "23px",
                    padding: 0,
                    position: "unset",
                    display: "flex",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: -3
                },
                "& .MuiFormControl-root .MuiOutlinedInput-root": {
                    paddingRight: "20px !important",
                },
                "&:dir(rtl) .MuiInputLabel-root": {
                    right: 10,
                },
                "&:dir(rtl) .MuiInputLabel-shrink": {
                    right: 0,
                    transform: `translateY(-9px) scale(0.75)`,
                },
                "&:dir(rtl) .MuiOutlinedInput-notchedOutline": {
                    textAlign: "right",
                },
                "& .MuiInputLabel-root": {
                    fontWeight: 500,
                    color: '#191E34',
                    letterSpacing: '-0.3px',
                },
            }}
            popupIcon={<ExpandSvg />}
            clearIcon={false}
            options={options}
            fullWidth
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <Box
                                sx={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                alignItems: "center",
                                gap: 4,
                                "& .MuiInputBase-root": {
                                    padding: "0px !important",
                                },
                                }}
                            >
                                {params.InputProps.endAdornment}
                            </Box>
                        ),
                    }}
                />
            )}
        />
    )
}

export default StyledAutocomplete