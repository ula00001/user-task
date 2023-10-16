import {bindActionCreators} from "redux";
import {compose} from "../utils";
import {withStoreService} from "./hoc";
import {connect} from "react-redux";
import UserCard from "./UserCard";
import {Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";

function Team({usersList}) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(usersList.data);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const editUser = (userId, updatedUser) => {
    const updatedUsers = searchResults.map((user) => {
      if (user.id === userId) {
        return {...user, ...updatedUser};
      }
      return user;
    });
    setSearchResults(updatedUsers);
    setOpenEditModal(false);
  }

  const handleAddUser = (newUser) => {
    const updatedUsers = [...searchResults, newUser];
    setSearchResults(updatedUsers);
    setOpenModal(false);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchText(query);

    const results = usersList.data.filter((user) =>
      user.email.toLowerCase().includes(query)
    );

    setSearchResults(results);
  };

  const handleDeleteUser = (userId) => {
    const results = searchResults.filter((user) => user.id !== userId);
    setSearchResults(results);
  };

  return (
    <>{usersList.success && (
      <>
        <div style={{
          width: '100%',
          maxWidth: '450px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto'
        }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Поиск по email"
            value={searchText}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <SearchIcon style={{color: '#C1C1CB'}}/>
              ),
              style: {
                borderRadius: '10px',
                border: '1px solid #C1C1CB',
                height: '36px',
              },
            }}
          />
          <Button
            variant="contained"
            style={{
              height: '30px',
              borderRadius: '10px',
              background: '#32C076',
              width: '100%',
              margin: '7px 0 11.5px 0',
            }}
            onClick={() => setOpenModal(true)}
          >
            Добавить пользователя
          </Button>
        </div>
        <UserCard searchList={searchResults} onDeleteUser={handleDeleteUser} modal={openModal}
                  setOpenModal={setOpenModal} handleAddUser={handleAddUser} editUser={editUser}
                  openEditModal={openEditModal} setOpenEditModal={setOpenEditModal}/>
      </>
    )}</>
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
)(Team);