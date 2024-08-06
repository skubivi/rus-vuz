import { Box, Menu, Typography } from "@mui/material"
import { FC, useState } from "react"

import ExpandSvg from '../../assets/components/autocomplete/expand.svg?react'
import StyledCheckbox from "../styled-checkbox/styled-checkbox"

interface IStyledSelect {
    options: {id: number, label: string}[]
    one?: boolean
    chosen: number[]
    onChange: (n: number) => void
    choseAll?: () => void
    deselectAll?: () => void
    label: string
}

const StyledSelect: FC<IStyledSelect> = ({
    options,
    one,
    chosen,
    onChange,
    choseAll,
    deselectAll,
    label
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const getLabel = () => {
        if (chosen.length === 0) return label
        let labels = ''
        chosen.forEach((element) => {
            const temp = options.find((elementInOptions) => elementInOptions.id === element)
            if (temp)
                labels += temp.label + ', '
        })
        return labels.slice(0, -2)
    }
    return (
        <>
            <Box
                sx={{
                    width: 'calc(100% - 56px)',
                    height: 1,
                    paddingLeft: 5,
                    paddingRight: 9,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: '#F6F7F9',
                    borderRadius: 3.5
                }}
                onClick={handleClick}
            >
                <Typography
                    sx={{
                        fontSize: 18,
                        fontWeight: 400,
                        color: chosen.length > 0 ? '#191E34' : '#828489'
                    }}
                >
                    {getLabel()}
                </Typography>
                <ExpandSvg/>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4.5,
                        paddingLeft: one ? 6.5 : 4,
                        paddingY: 4,
                        paddingRight: 4,
                        border: '1px solid #EEEAEA',
                        borderRadius: 3,
                        background: '#fff'
                    }}
                >
                    {
                        (one === undefined || one === false) && choseAll && deselectAll &&
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                gap: 4
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 11,
                                    fontWeight: 500,
                                    color: '#5871EF',
                                    cursor: 'pointer'
                                }}
                                onClick={() => choseAll()}
                            >
                                Выбрать все
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 11,
                                    fontWeight: 500,
                                    color: '#7F8080',
                                    cursor: 'pointer',
                                    textDecorationLine: 'underline'
                                }}
                                onClick={() => deselectAll()}
                            >
                                Сбросить все
                            </Typography>
                        </Box>
                    }
                    {options.map((element) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 2.5,
                                alignItems: 'center',
                                marginLeft: one ? 0 : 2.5
                            }}
                            key={element.id}
                        >
                            <StyledCheckbox 
                                checked={chosen.findIndex((chosenElement) => chosenElement === element.id) !== -1}
                                onClick={() => onChange(element.id)}
                            />
                            <Typography
                                sx={{
                                    color: '#141515',
                                    fontSize: 14,
                                    fontWeight: 400
                                }}
                            >
                                {element.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Menu>
        </>
    )
}

export default StyledSelect