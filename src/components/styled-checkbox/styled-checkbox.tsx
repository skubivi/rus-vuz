import { Box, useMediaQuery } from "@mui/material"
import { FC } from "react"

import CheckedIcon from '../../assets/common/checkbox/checked.svg?react'
import UncheckedIcon from '../../assets/common/checkbox/unchecked.svg?react'

import CheckedMobileIcon from '../../assets/common/checkbox/checked-mobile.svg?react'
import UncheckedMobileIcon from '../../assets/common/checkbox/unchecked-mobile.svg?react'

interface IStyledCheckbox {
    checked: boolean,
    onClick: () => void
}

const StyledCheckbox: FC<IStyledCheckbox> = ({
    checked,
    onClick
}) => {
    const isMobile = useMediaQuery('(max-width: 1450px)')
    if (isMobile)
        return (
            <Box
                sx={{
                    cursor: 'pointer',
                    width: 9,
                    height: 9,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={onClick}
            >
                {checked ? <CheckedMobileIcon /> : <UncheckedMobileIcon />}
            </Box>
        )
    return (
        <Box
            sx={{
                cursor: 'pointer',
                width: 18,
                height: 18
            }}
            onClick={onClick}
        >
            {checked ? <CheckedIcon /> : <UncheckedIcon />}
        </Box>
    )
}

export default StyledCheckbox