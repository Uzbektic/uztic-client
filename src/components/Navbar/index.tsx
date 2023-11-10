import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { CustomColors } from '../../theme';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

interface NavbarProps {
  bgPrimary?: boolean;
}

const Navbar = ({ bgPrimary = false }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElCities, setAnchorElCities] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenCitiesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCities(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElCities(null);
  };

  const handlePageChange = (link: string) => () => {
    navigate(link);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: {
          xs: CustomColors.primary,
          md: bgPrimary ? CustomColors.primary : 'transparent',
        },
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handlePageChange(ROUTES.HOME)}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.HOME
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'Home'}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handlePageChange(ROUTES.ABOUT_US)}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.ABOUT_US
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'About Us'}
                </Typography>
              </MenuItem>

              <MenuItem onClick={handlePageChange(ROUTES.ABOUT_UZBEKISTAN)}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.ABOUT_UZBEKISTAN
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'About Uzbekistan'}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handlePageChange(ROUTES.FOOD)}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.FOOD
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'Food'}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenCitiesMenu}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.BUKHARA ||
                      currentPath === ROUTES.KHIVA ||
                      currentPath === ROUTES.SAMARKAND ||
                      currentPath === ROUTES.TASHKENT
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'Cities'}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handlePageChange(ROUTES.NEWS_LETTERS)}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.NEWS_LETTERS
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'News Letters'}
                </Typography>
                <MenuItem onClick={handlePageChange(ROUTES.CONTACT_US)}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color:
                        currentPath === ROUTES.CONTACT_US
                          ? CustomColors.primary
                          : 'inherit',
                    }}
                  >
                    {'Contact Us'}
                  </Typography>
                </MenuItem>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handlePageChange(ROUTES.HOME)}
              sx={{
                my: 2,
                background:
                  currentPath === ROUTES.HOME
                    ? CustomColors.primary
                    : 'inherit',
                display: 'block',
                color: 'white',
              }}
            >
              {'Home'}
            </Button>
            <Button
              onClick={handlePageChange(ROUTES.ABOUT_US)}
              sx={{
                my: 2,
                background:
                  currentPath === ROUTES.ABOUT_US
                    ? CustomColors.primary
                    : 'inherit',
                display: 'block',
                color: 'white',
              }}
            >
              {'About Us'}
            </Button>

            <Button
              onClick={handlePageChange(ROUTES.ABOUT_UZBEKISTAN)}
              sx={{
                my: 2,
                background:
                  currentPath === ROUTES.ABOUT_UZBEKISTAN
                    ? CustomColors.primary
                    : 'inherit',
                display: 'block',
                color: 'white',
              }}
            >
              {'About Uzbekistan'}
            </Button>
            <Button
              onClick={handlePageChange(ROUTES.FOOD)}
              sx={{
                my: 2,
                background:
                  currentPath === ROUTES.FOOD
                    ? CustomColors.primary
                    : 'inherit',
                display: 'block',
                color: 'white',
              }}
            >
              {'Food'}
            </Button>
            <Button
              onClick={handleOpenCitiesMenu}
              sx={{
                my: 2,
                background:
                  currentPath === ROUTES.BUKHARA ||
                  currentPath === ROUTES.KHIVA ||
                  currentPath === ROUTES.SAMARKAND ||
                  currentPath === ROUTES.TASHKENT
                    ? CustomColors.primary
                    : 'inherit',
                display: 'block',
                color: 'white',
              }}
            >
              {'Cities'}
            </Button>
            <Button
              onClick={handlePageChange(ROUTES.NEWS_LETTERS)}
              sx={{
                my: 2,
                background:
                  currentPath === ROUTES.NEWS_LETTERS
                    ? CustomColors.primary
                    : 'inherit',
                display: 'block',
                color: 'white',
              }}
            >
              {'News Letters'}
            </Button>
            <Button
              onClick={handlePageChange(ROUTES.CONTACT_US)}
              sx={{
                my: 2,
                background:
                  currentPath === ROUTES.CONTACT_US
                    ? CustomColors.primary
                    : 'inherit',
                display: 'block',
                color: 'white',
              }}
            >
              {'Contact Us'}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElCities}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElCities)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handlePageChange(ROUTES.TASHKENT)}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.TASHKENT
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'Tashkent'}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handlePageChange(ROUTES.SAMARKAND)}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.SAMARKAND
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'Samarkand'}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handlePageChange(ROUTES.BUKHARA)}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.BUKHARA
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'Bukhara'}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handlePageChange(ROUTES.KHIVA)}>
                <Typography
                  textAlign="center"
                  sx={{
                    color:
                      currentPath === ROUTES.KHIVA
                        ? CustomColors.primary
                        : 'inherit',
                  }}
                >
                  {'Khiva'}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
