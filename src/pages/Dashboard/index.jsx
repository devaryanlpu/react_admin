import React, { Fragment } from "react";
import { Grid, Typography, Paper, IconButton } from "@material-ui/core";
import { useStyles } from "./styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link } from "react-router-dom";
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import Overview from "../../components/Overview";
import ProductionPlanner from "../../components/ProductionPlanner";
import PoAnalyzer from "../../components/PoAnalyzer";
import GanttChart from "../../components/GanttChart";

export default function Dashboard() {
const classes = useStyles();
const allTabs = ['/scheduling/overview', 
  '/scheduling/production_planner', 
  '/scheduling/gantt_chart',
  '/scheduling/PO_analyzer'];
  return (
    <div>
      <Route
          path="/scheduling"
          render={({ location }) => (
            (allTabs.includes(location.pathname))?(<Fragment>
              <Paper square>
                <Grid container spacing={2}>
                  <Grid item lg={7} xs={12} style={{padding: "0 8px"}}>
                    <Tabs value={location.pathname} 
                      indicatorColor="primary"
                      textColor="primary">
                      <Tab 
                        label="Overview" 
                        value="/scheduling/overview"
                        component={Link} to={allTabs[0]}
                        className={classes.text_transform_none}
                      />
                      <Tab 
                        label="Production Planner" 
                        value="/scheduling/production_planner" 
                        component={Link} 
                        to={allTabs[1]} 
                        className={classes.text_transform_none}
                      />
                      <Tab
                        value="/scheduling/gantt_chart"
                        label="Gantt Chart"
                        component={Link}
                        to={allTabs[2]}
                        className={classes.text_transform_none}
                      />
                      <Tab
                        value="/scheduling/PO_analyzer"
                        label="PO Analyzer"
                        component={Link}
                        to={allTabs[3]}
                        className={classes.text_transform_none}
                      />
                    </Tabs>
                  </Grid>
                  <Grid item lg={5} xs={12} container justifyContent="flex-end" spacing={2} style={{padding: "0 8px",display:"flex", alignItems: "center"}}>
                      <Grid item style={{display:"flex", alignItems: "center"}}>
                        <ArrowUpwardOutlinedIcon className={classes.textSucess} />
                        <Typography paragraph className={classes.textSucess} style={{marginBottom: 0}}>0.5% (0 hours 1 min)</Typography>
                      </Grid>
                      <Grid item>
                        <IconButton aria-label="save">
                          <SaveOutlinedIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                      <IconButton aria-label="refresh">
                        <RefreshOutlinedIcon />
                      </IconButton>
                      </Grid>
                  </Grid>
              </Grid>
              </Paper>
              <Switch>
                <Route path={allTabs[0]} component={Overview} />
                <Route path={allTabs[1]} component={ProductionPlanner} />
                <Route path={allTabs[2]} component={GanttChart} />
                <Route path={allTabs[3]} component={PoAnalyzer} />
              </Switch>
            </Fragment>):location.pathname !== "/scheduling"?(
              <Grid container>
                <Grid item>
                  <Typography paragraph color="primary">
                    404 page not found
                  </Typography>
                </Grid>
              </Grid>
            ):''
          )}
      />
    </div>
  );
}
