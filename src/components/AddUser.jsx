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

function AddUser({modal, setOpenModal, handleAddUser}) {
  const [newUser, setNewUser] = useState({id: Math.random(), name: '', email: '', permissions: ['per1', 'per2']});
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const addUser = (user) => {
    handleAddUser(user)
    setNewUser({id: Math.random(), name: '', email: '', permissions: []})
  }
  const handleClose = () => setOpenModal(false);
  return (
    <Modal
      open={modal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h4>Добавить нового пользователя</h4>
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
        <Button variant="contained" onClick={() => addUser(newUser)}>
          Добавить
        </Button>
      </Box>
    </Modal>
  )
}

export default AddUser;