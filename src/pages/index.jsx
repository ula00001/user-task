import Tablet from "../views/Tablet";
import Desktop from "../views/Desktop";
import {useEffect} from "react";
import {bindActionCreators} from "redux";
import {compose} from "../utils";
import {withStoreService} from "../components/hoc";
import {connect} from "react-redux";
import {fetchUsers} from "../store/actions";
import ActionProgressCircular from "../components/custom/ActionProgressCircular";

function Dashboard({onFetchUsersList, usersList, isTablet}) {
  useEffect(() => {
    onFetchUsersList();
  }, [])

  return (
    <>
      {usersList.loading && <ActionProgressCircular open={usersList.loading}/>}
      {usersList.success ? (isTablet ? <Tablet/> : <Desktop/>) : null}
    </>
  )
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
)(Dashboard);
