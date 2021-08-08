import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import clsx from "clsx";
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  Grid,
  Button,
  TextField,
  InputAdornment,
  Divider } from "@material-ui/core";

import BackupIcon from '@material-ui/icons/Backup';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { useStyles } from "./styles";

export default function NavBar({menustate}) {
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = useState({
    posTime: 50
  });
  const [file1, setFile1] = useState(null)
  const [file2, setFile2] = useState(null)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const onFile1Change = (e) => {
    let file = e.target.files[0];
    setFile1(file);
  }
  const onFile2Change = (e) => {
    let file = e.target.files[0];
    setFile2(file);
  }
  // Submit
  const onSubmit = (path) => {
    history.push(path);
  }
  
  return (
    <List style={{ marginTop: "20px" }}>
      <ListItem>
        <ListItemIcon
          className={clsx(classes.icon, classes.primaryIcon,{
            [classes.collapseIcon]: !menustate
          })}
          >
          <DonutLargeIcon/>
        </ListItemIcon>
        <small>Load data</small>
      </ListItem>
      <Divider />
      <ListItem style={{marginTop: "20px"}} className={clsx({
          [classes.hide]: !menustate
        })}>
        <Grid container>
          <label className="custom-file-upload">
            <input type="file" onChange={onFile1Change} />
            <BackupIcon className={classes.primaryIcon}/> 
            {!file1?'Upload file':''}
            {file1?(<small>{file1.name}</small>):''}
          </label>
        </Grid>
      </ListItem>
      <ListItem className={clsx({
          [classes.hide]: !menustate
        })}>
        <Grid container>
          <label className="custom-file-upload">
            <input type="file" onChange={onFile2Change} />
            <BackupIcon className={classes.primaryIcon}/> 
            {!file2?'Upload file':''}
            {file2?(<small>{file2.name}</small>):''}
          </label>
        </Grid>
      </ListItem>
      <ListItem 
        className={clsx({
          [classes.hide]: !menustate
        })}>
        <TextField
          label="Time between POs for Mixer"
          id="posTime"
          InputProps={{
            startAdornment: <InputAdornment position="start">sec</InputAdornment>,
          }}
          value={values.posTime}
          onChange={handleChange('posTime')}
          variant="outlined"
          size="small"
        />
      </ListItem>
      <ListItem className={clsx({
          [classes.hide]: !menustate
        })}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ textTransform: "none" }}
              size="small"
              fullWidth
              onClick={() => onSubmit('/scheduling/overview') }
              >
              Submit    
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button 
              variant="outlined"  
              style={{ textTransform: "none" }}
              size="small"
              fullWidth
              >
              Reset    
            </Button>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
}
