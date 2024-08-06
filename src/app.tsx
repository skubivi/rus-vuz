import { Box, useMediaQuery } from '@mui/material'
import Header from './components/header/header'
import { Outlet, useLocation } from 'react-router-dom'

import backgroundImage from './assets/pages/welcome-page/background.jpg'

function App() {
  const location = useLocation()
  const isBackground = location.pathname === '/'
  const isMobile = useMediaQuery('(max-width: 1450px)')
  if (isMobile)
    return (
      <>
        {isBackground &&
          <Box
            component='img'
            src={backgroundImage}
            sx={{
              position: 'absolute',
              width: 1,
              height: 1,
              objectFit: 'cover'
            }}
          >
            
          </Box>
        }
        <Box
          sx={{
            width: '100dvw - 30px',
            paddingX: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 5
            }}
          >
            <Header />
            <Outlet />
          </Box>
        </Box>
      </>
    )
  return (
    <>
      {isBackground &&
        <Box
          component='img'
          src={backgroundImage}
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            objectFit: 'cover'
          }}
        >
          
        </Box>
      }
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            width: 1512,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 1409,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 12.5
            }}
          >
            <Header />
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
