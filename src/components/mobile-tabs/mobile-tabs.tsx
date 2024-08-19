import { Box, Typography } from "@mui/material"
import { FC } from "react"

interface IMobileTabs {
    chosen: string
    changeTab: (s: string) => void
    options: {
        label: string,
        value: string
    }[]
}

const MobileTabs: FC<IMobileTabs> = ({
    chosen,
    changeTab,
    options
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 3,
                width: 1,
                overflow: "hidden",
                overflowX: 'auto',
                '::-webkit-scrollbar': {
                    display: 'none'
                }
            }}
        >
            {options.map(element => (
                <Box
                    sx={{
                        borderRadius: 6,
                        background: element.value === chosen ? '#192863' : '#C9D4FF',
                        padding: 2
                    }}
                    onClick={() => changeTab(element.value)}
                    key={element.value}
                >
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: element.value === chosen ? '#FFF' : '#191E34',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {element.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default MobileTabs