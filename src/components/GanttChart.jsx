import React from "react";
import { 
  Grid, 
  Typography, 
  Chip, 
  TextField, 
  Checkbox, 
  FormGroup, 
  FormControlLabel,
  Button } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import SendIcon from '@material-ui/icons/Send';

const filters = [
  { title: 'Mixer' },
  { title: 'Tank' },
  { title: 'Transfer Pipe' },
  { title: 'Truck' },
  { title: 'Jerry' },
];
export default function GanttChart() {
  const [value, setValue] = React.useState([...filters]);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="child-container">
      <Grid container>
        <Grid item xs={12} style={{padding: "20px 0"}}>
          <Typography
            variant="h5"
            >
            Gantt Chart
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={12}>
          <Autocomplete
            multiple
            id="equipment-autocomplete"
            value={value}
            onChange={(event, newValue) => {
              setValue([
                ...newValue
              ]);
            }}
            options={filters}
            getOptionLabel={(option) => option.title}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  label={option.title}
                  color="primary"
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} label="Equipment type" variant="outlined" placeholder="Type" />
            )}
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Autocomplete
            multiple
            id="pasteurizer-autocomplete"
            value={value}
            onChange={(event, newValue) => {
              setValue([
                ...newValue
              ]);
            }}
            options={filters}
            getOptionLabel={(option) => option.title}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  label={option.title}
                  color="primary"
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} label="Pasteurizer" variant="outlined" placeholder="Pasteurizer" />
            )}
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="blocks" />}
              label="Show Blocks"
            />
          </FormGroup>
          <Button 
            variant="contained" 
            color="secondary" 
            endIcon={<SendIcon/>}
            style={{ textTransform: "none" }}
            >
            Export
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
