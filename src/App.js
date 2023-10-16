import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import {useEffect} from "react";
import {SnackbarProvider} from "notistack";
import Error_404 from "./components/404/Error_404";
import Tablet from "./views/Tablet";
import {bindActionCreators} from "redux";
import {compose} from "./utils";
import {withStoreService} from "./components/hoc";
import {connect} from "react-redux";
import {fetchUsers} from "./store/actions";
import Desktop from "./views/Desktop";

import Team from "./components/Team";
import Analytic from "./components/Analytic";
import Profile from "./components/Profile";
import Moderation from "./components/Moderation";
import Chat from "./components/Chat";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Exchange from "./components/Exchange";

function App({usersList, onFetchUsersList}) {
  // const isTablet = useMediaQuery("(max-width: 768px)", false);
  useEffect(() => {
    onFetchUsersList();
  }, [])

  return (
    <BrowserRouter>
      <SnackbarProvider
        anchorOrigin={{vertical: "top", horizontal: "right"}}
        autoHideDuration={3000}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/team" replace/>}/>
          <Route path="/" element={<Tablet/>}>
            <Route path="team" element={<Team/>}/>
            <Route path="analytic" element={<Analytic/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="moderation" element={<Moderation/>}/>
            <Route path="chat" element={<Chat/>}/>
            <Route path="banner" element={<Banner/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="exchange" element={<Exchange/>}/>
          </Route>

          <Route path="*" element={<Error_404/>}/>
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

const mapStateToProps = ({usersList}) => {
  return {
    usersList,
  };
};

const mapDispatchToProps = (dispatch, {storeService}) => {
  return bindActionCreators(
    {
      onFetchUsersList: fetchUsers(
        storeService,
        "",
        "getUsers"
      ),
    },
    dispatch
  );
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(App);