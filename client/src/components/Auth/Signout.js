import React, {useContext} from "react";
import {GoogleLogout } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Context from '../../context'

const Signout = ({ classes }) => {
  
  const {dispatch} =  useContext(Context);

  const onSignout = () => {
    dispatch({type: "SIGNOUT_USER"})
    console.log("signed out user");
  }
  

  return (
    <GoogleLogout
      buttonText="Signout"
      onLogoutSuccess={onSignout}
      render={({onClick}) => (
        <span className={classes.root} onClick={onClick}>
          <Typography
            variant="body1"
            className={classes.buttonText}
          >
            Signout
          </Typography>
          <ExitToAppIcon className={classes.buttonIcon}/>
        </span>
      )}
    />
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "black"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "black"
  }
};

export default withStyles(styles)(Signout);
