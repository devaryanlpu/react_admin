import React from "react";
import { 
  Grid, 
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Divider,
  Paper,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
 } from "@material-ui/core";

import DateRangeIcon from '@material-ui/icons/DateRange';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { useStyles } from "./styles";

const ldTanks = ["LD100","LD102","LD300","LD400","LD500","LD600","LD700"];
const sterileTanks = ["ST100","ST102","ST300","ST400","ST500","ST600","ST700"];

function createData(pasteurizer, start_date, start_time) {
  return { pasteurizer, start_date, start_time };
}

const rows = [
  createData('PA001', '09.08.2021', '00.05'),
  createData('PA002', '09.08.2021', '00.05'),
  createData('PA003', '09.08.2021', '00.05'),
  createData('PA004', '09.08.2021', '00.05'),
  createData('PA005', '09.08.2021', '00.05'),
];

export default function Overview() {
  const classes = useStyles();
  return (
    <div className="child-container">
      <Grid container >
        <Grid item xs={12} style={{padding: "20px 0"}}>
          <Typography
            variant="h5"
            >
            Production Scheduling Optimization
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <DateRangeIcon />
                </Avatar>
              }
              title="Schedule start"
            />
            <Divider />
            <CardContent>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Pasteurizer</TableCell>
                      <TableCell align="right">Start date</TableCell>
                      <TableCell align="right">Start time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.pasteurizer}>
                        <TableCell component="th" scope="row">
                          {row.pasteurizer}
                        </TableCell>
                        <TableCell align="right">{row.start_date}</TableCell>
                        <TableCell align="right">{row.start_time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <VerifiedUserIcon />
                </Avatar>
              }
              title="Tanks"
            />
            <Divider />
            <CardContent>
              <Paper elevation={1} style={{padding: "10px"}}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Selected LD Tank(s)
                </Typography>
                {
                  ldTanks.map((item, index) => (
                    <Chip size="small" key={index} label={item} color="primary" style={{margin: "5px"}} />)
                    )
                }
              </Paper>
              <Paper elevation={1} style={{marginTop: "10px", padding: "10px"}}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Selected sterile Tank(s)
                </Typography>
                {
                  sterileTanks.map((item, index) => (
                    <Chip size="small" key={index} label={item} color="primary" style={{margin: "5px"}} />)
                    )
                }
              </Paper>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <WatchLaterIcon />
              </Avatar>
            }
            title="Scheduling duration"
          />
          <Divider />
          <CardContent>
            <Paper elevation={0}>
              <Typography variant="body2" color="textSecondary" component="p">
                Original SCM Total Duration
              </Typography>
              <small>2 days 03:06:48</small>
            </Paper>
            <Paper elevation={0} style={{marginTop: "10px"}}>
              <Typography variant="body2" color="textSecondary" component="p">
                Original SCM Total Duration
              </Typography>
              <small>2 days 03:06:48</small>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      </Grid>
    </div>
  );
}
