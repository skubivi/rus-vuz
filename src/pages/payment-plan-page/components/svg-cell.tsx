import React from 'react';

import { Box } from '@mui/material';

interface SvgCellProps {
  children: JSX.Element;
}

const SvgCell: React.FC<SvgCellProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px #F6F7F9 solid'
      }}>
      <Box
        sx={{
          width: '100%',
          height: 24,
          textAlign: 'center',
        }}>
        {children}
      </Box>
    </Box>
  );
};

export default SvgCell;
