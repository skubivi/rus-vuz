import { Box, Menu, Typography } from "@mui/material"
import { FC, useState } from "react"

import ExpandSvg from '../../assets/components/edit-select/expand.svg?react'

interface IEditSelect {
    defaultValue: string
    options: string[]
}

const EditSelect: FC<IEditSelect> = ({
    defaultValue,
    options
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [chosen, setChosen] = useState(defaultValue)
    return (
        <>
            <Box
                sx={{
                    width: 136,
                    height: 24,
                    padding: '9px 11px 8px 19px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 3,
                    background: '#F3F3F5'
                }}
                onClick={handleClick}
            >
                <Typography
                    sx={{
                        fontSize: 14,
                        fontWeight: 600
                    }}
                >
                    {chosen}
                </Typography>
                <ExpandSvg />
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    padding: 0,
                    '& .MuiList-root': {
                        padding: '0 !important'
                    }
                }}
            >
                <Box
                    sx={{
                        padding: 1,
                        borderRadius: 3,
                        background: '#F3F3F5',
                        border: '1px solid #C9D4FF',
                        boxShadow: '4px 4px 16px 0px rgba(0, 0, 0, 0.08)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {options.map((option, index) => (
                        <Box
                            sx={{
                                width: 150,
                                height: 34,
                                borderRadius: 2,
                                '&:hover': {
                                    background: '#C8D3FE'
                                },
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: 2.5
                            }}
                            key={index}
                            onClick={() => {
                                setChosen(option)
                                handleClose()
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#141515',
                                    fontSize: 12,
                                    fontWeight: 400
                                }}
                            >
                                {option}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Menu>
        </>
    )
}

export default EditSelect