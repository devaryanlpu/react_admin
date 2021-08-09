import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  Grid,
  Button,
  IconButton
} from "@material-ui/core/";


import { useStyles } from "./styles";
import NavBar from "./NavBar";
import Navigations from "../Routes/Navigations";
import Footer from "./Footer";

export default function MiniDrawer() {
  const classes = useStyles();
  const [menustate, setmenuState] = useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Header Bar ...........  */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}>
        <Toolbar>
          <Grid item lg={6} xs={3} style={{display: "flex"}}>
            <Grid item component={Link} to="/" style={{textDecoration: "none", color: "unset"}}>
              <Typography
                variant="h5"
                className="company_name"
                style={{ margin: "0 10px" }}>
                Scheduling Production Planner
              </Typography>
            </Grid>
            <Grid item component={Link} to="/">
              <img className={classes.image} src={"/images/logo.svg"} alt="logo" />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
              <Button 
                variant="contained" 
                color="primary" 
                endIcon={<ScheduleOutlinedIcon/>}
                component={Link} 
                to="/scheduling/overview"
                style={{ textTransform: "none" }}
                size="small"
                className="on-large-screen"
                >
                Production Scheduling
              </Button>
              <IconButton aria-label="production" color="primary" className="on-small-screen">
                <ScheduleOutlinedIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Button 
                variant="contained" 
                color="primary" 
                endIcon={<TuneOutlinedIcon/>}
                component={Link} 
                to="/configuration"
                style={{ textTransform: "none" }}
                size="small"
                className="on-large-screen"
                >
                Configuration
                
              </Button>
              <IconButton aria-label="configuration" color="primary" className="on-small-screen">
                <TuneOutlinedIcon />
              </IconButton>
            </Grid>
            <Divider className={classes.divider} className="on-small-screen" orientation="vertical" />
            <Grid item>
              <Button 
                variant="contained" 
                color="secondary" 
                endIcon={<KeyboardArrowRightOutlinedIcon/>}
                style={{ textTransform: "none" }}
                size="small"
                className="on-large-screen"
                >
                Logout
              </Button>
              <IconButton aria-label="configuration" color="primary" className="on-small-screen">
                <ExitToAppIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Left Drawer & Nav Bar ..............  */}

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawermenustate]: menustate,
          [classes.drawerClose]: !menustate,
        })}
        classes={{
          paper: clsx({
            [classes.drawermenustate]: menustate,
            [classes.drawerClose]: !menustate,
          }),
        }}>
        <div style={{ marginTop: "90px" }}>
        <img 
          className={clsx(classes.collapseImg,{
            [classes.collapse]: !menustate
          })}
          src={"/images/collapse.png"} 
          alt="collapse" 
          onClick={() => setmenuState(!menustate)} />
        <NavBar onSelectItem={() => setmenuState(false)} menustate={menustate}/>
        </div>
      </Drawer>

      {/* pages ............ */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Navigations />
        <div className={classes.toolbar} />
      </main>

      {/* Footer */}
      <div style={{ bottom: 0, position: "fixed", width: "100%", background: "#fff" }}>
        <Divider />
        <Footer />
      </div>

    </div>
  );
}
