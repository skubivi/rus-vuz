import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

interface TextCellProps {
  text: string;
  color: string | null;
  align: boolean | null;
}

const TextCell: React.FC<TextCellProps> = ({ text, color = null, align }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        weight: '100%',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px #F6F7F9 solid'
      }}>
      <Box sx={{ width: '100%' }}>
        <Typography
          variant='body2'
          color={color ? color : theme.palette.primary.contrastText}
          sx={{
            fontSize: 15,
            fontWeight: 600,
            pl: align ? 0 : 6,
            pr: align ? 0 : 6,
            textAlign: align ? 'center' : 'left',
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default TextCell;