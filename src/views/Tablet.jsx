import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link, Outlet, useLocation} from "react-router-dom";
import {compose} from "../utils";
import {withStoreService} from "../components/hoc";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sidebarMenuList} from "../services/data";
import {Avatar, Container, useMediaQuery} from "@mui/material";
import profileImage from '../utils/images/profileImage.png';
import ActionProgressCircular from "../components/custom/ActionProgressCircular";
import {useEffect, useState} from "react";

const AppBar = styled(MuiAppBar, {})
(({theme, open}) => ({}));

const ProfileWrapper = styled(Box)`
  padding: 8px 16px;
`
const Profile = styled(Box)`
  display: flex;
  align-items: center;
`

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
  }),
);

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Tablet({usersList}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const [selectedItemText, setSelectedItemText] = useState('');
  const handleListItemClick = (text) => {
    setSelectedItemText(text); // Устанавливаем текст выбранного элемента
  };

  useEffect(() => {
    setSelectedItemText(findRoute(location.pathname))
  }, [])

  function findRoute(path) {
    return sidebarMenuList.find(item => item.path === path).title
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const isTablet = useMediaQuery("(max-width: 768px)", false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex'}}>
      {usersList.loading && <ActionProgressCircular open={usersList.loading}/>}
      <CssBaseline/>
      <AppBar position="fixed" open={open} sx={{background: '#ffffff', color: "#000000"}} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && {display: 'none'}),
            }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{fontWeight: 700}}>
            {selectedItemText}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        onClick={() => setOpen(false)}
        anchor="left" open={open}>
        <DrawerHeader>
          {open && (<IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>)}
        </DrawerHeader>

        <ProfileWrapper>
          <Profile>
            <Avatar alt="profile-image" src={profileImage} sx={{width: 55, height: 55, marginRight: '13px'}}/>
            <Box>
              <Typography sx={{fontWeight: 500}}>Артем Иванов</Typography>
              <Typography sx={{fontSize: '14px', fontWeight: 400}}>Собственник</Typography>
            </Box>
          </Profile>
        </ProfileWrapper>

        <List>
          {sidebarMenuList.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{display: 'block'}}
                      button onClick={() => handleListItemClick(item.title)}
                      component={Link} to={item.path}
                      selected={item.path === location.pathname}>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon/>
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader/>
        <Container
          maxWidth={'sm'}
          sx={{padding: '0 !important'}}
        >

          {usersList.success && <Outlet/>}
        </Container>
      </Main>
    </Box>
  );
}

const mapStateToProps = ({usersList}) => {
  return {
    usersList,
  };
};

const mapDispatchToProps = (dispatch, {storeService}) => {
  return bindActionCreators(
    {},
    dispatch
  );
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Tablet);
