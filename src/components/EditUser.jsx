import {useState} from "react";
import {Box, Button, Modal, TextField} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function EditUser({setOpenEditModal, openEditModal, editUser, selectedItem, searchList, setSelectedItem}) {
  const [newUser, setNewUser] = useState(selectedItem);
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const editUserData = () => {
    editUser(selectedItem.id, newUser)
    setSelectedItem(null)
  }


  const handleClose = () => setOpenEditModal(false);
  return (
    <Modal
      open={openEditModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h4>Редактировать пользователя</h4>
        <TextField
          label="Имя"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={() => editUserData()}>
          Сохранить изменение
        </Button>
      </Box>
    </Modal>
  )
}

export default EditUser;