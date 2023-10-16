import {Backdrop} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const ActionProgressCircular = ({open}) => {
  return (
    <Backdrop
      sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
      open={open}
    >
      <CircularProgress color="inherit"/>
    </Backdrop>
  );
};

export default ActionProgressCircular;
