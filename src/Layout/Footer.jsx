import React from "react";
import Grid  from "@material-ui/core/Grid";

export default function Footer() {
  return (
    <div styles={{ marginTop: "15px"}}>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item style={{display:"flex", alignItems: "center", padding: "10px"}}>
          <small>Scheduling Production Planner</small>
          <img src={"/images/logo.svg"} alt="logo" style={{height:"20px"}} />
        </Grid>
      </Grid>
    </div>
  );
}
