import {bindActionCreators} from "redux";
import {compose} from "../utils";
import {withStoreService} from "./hoc";
import {connect} from "react-redux";
import styled from "@emotion/styled";
import {Avatar, Box, Checkbox, Menu, MenuItem} from "@mui/material";
import cardImage from "../utils/images/cardImage.png";
import * as React from "react";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

const CardWrapper = styled(Box)``
const Card = styled(Box)``
const Tags = styled(Box)``
const CardInfoWrapper = styled(Box)``
const CardInfo = styled(Box)``


function UserCard({
                    usersList,
                    onDeleteUser,
                    searchList,
                    modal,
                    setOpenModal,
                    handleAddUser,
                    editUser,
                    openEditModal,
                    setOpenEditModal
                  }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedEdit, setSelectedEdit] = useState('');
  const CheckboxGroup = () => {
    const [selectedPermissions, setSelectedPermissions] = useState(selectedItem.permissions);

    const handleCheckboxChange = (userIndex, permission) => {
      setSelectedPermissions(prevPermissions => {
        let newUserPermissions = [...prevPermissions];
        if (newUserPermissions.includes(permission)) {
          newUserPermissions = newUserPermissions.filter(item => item !== permission);
        } else {
          newUserPermissions.push(permission);
        }
        return newUserPermissions;
      });
    };

    return (
      <div>
        {selectedItem !== null && selectedItem.permissions.map((permission, permissionIndex) => (
          <Box key={permissionIndex} p={1}>
            <label>
              <Checkbox
                checked={(selectedPermissions || []).includes(permission)}
                onChange={() => handleCheckboxChange(permissionIndex, permission)}
              />
              {permission}
            </label>
          </Box>
        ))}
      </div>
    );
  };
  const permissions = function getPermissions(permissions) {
    return (
      <>{permissions.map((item, index) => (
        <Box
          sx={{
            padding: '5px 6px',
            margin: '4px 3px',
            border: '1px solid #9494A0',
            borderRadius: '5px',
          }}
          key={index}><Typography sx={{
          color: '#9494A0',
          fontSize: '12px',
        }}>{item}</Typography></Box>
      ))}</>
    )
  }


  const handleMenuItemClick = (item, variant) => {
    if (variant === 'changePermission') {
      setSelectedEdit('Изменить права доступа');
    } else {
      setAnchorEl(null);
    }
  };

  const open = Boolean(anchorEl);
  const handleOpenMenu = (event, item) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
    setSelectedEdit('');
  };
  const handleCloseMenu = () => {
    setSelectedItem(null);
    setAnchorEl(null);
  };

  const handleDeleteUser = (userId) => {
    onDeleteUser(userId);
    handleCloseMenu();
  };

  const openEditUserModal = () => {
    setOpenEditModal(true)
  }

  return (
    <> {
      searchList.map(item => (
        <CardWrapper sx={{padding: '12.5px 8px'}} key={item.name}>
          <Card sx={{display: 'flex'}}>
            <Avatar alt="profile-image" src={cardImage} sx={{width: 55, height: 55, marginRight: '13px'}}/>
            <CardInfoWrapper sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
              <CardInfo sx={{width: '100%', display: 'flex', marginLeft: '4px'}}>
                <Box sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                  <Box sx={{display: 'flex', justifyContent: "space-between"}}>
                    <Typography sx={{fontWeight: 700}}>{item.name}</Typography>
                    <Typography>
                      <IconButton
                        onClick={(event) => handleOpenMenu(event, item)}
                        size="small">
                        <MoreHorizIcon/>
                      </IconButton>
                      {selectedItem && selectedEdit !== 'Изменить права доступа' ?
                        (<Menu
                          id="account-menu"
                          aria-labelledby="demo-positioned-button"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleCloseMenu}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.15))',
                              mt: 1.5,
                            }
                          }}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        >
                          <MenuItem
                            onClick={() => handleMenuItemClick(selectedItem, 'changePermission')}>Изменить
                            права
                            доступа</MenuItem>
                          <MenuItem onClick={handleCloseMenu}>Отправить код повторно</MenuItem>
                          <MenuItem onClick={() => openEditUserModal(selectedItem.id)}>Редактировать</MenuItem>
                          <MenuItem onClick={() => handleDeleteUser(selectedItem.id)}>Удалить</MenuItem>
                        </Menu>) : (
                          selectedItem && (<Menu
                            id="account-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleCloseMenu}
                            PaperProps={{
                              elevation: 0,
                              sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.15))',
                                mt: 1.5,
                              }
                            }}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                          >
                            <CheckboxGroup/>
                          </Menu>)
                        )
                      }
                    </Typography>
                  </Box>
                  <Typography sx={{
                    color: '#9494A0',
                    fontSize: '14px',
                    fontWeight: 400
                  }}>{item.email}</Typography>
                </Box>
              </CardInfo>
              <Tags sx={{display: 'flex', flexWrap: 'wrap'}}>
                {permissions(item.permissions)}
              </Tags>
            </CardInfoWrapper>
          </Card>
        </CardWrapper>
      ))
    } {searchList.length === 0 && <div>Пусто</div>}
      <AddUser modal={modal} setOpenModal={setOpenModal} handleAddUser={handleAddUser}/>
      {selectedItem &&
        <EditUser setOpenEditModal={setOpenEditModal} openEditModal={openEditModal} searchList={searchList}
                  editUser={editUser} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>}
    </>
  )
}

const mapStateToProps = ({usersList}) => {
  return {
    usersList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {},
    dispatch
  );
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(UserCard);