import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function PoAnalyzer() {
  return (
    <div className="child-container">
      <Grid container>
        <Grid item xs={12} style={{padding: "20px 0"}}>
          <Typography
            variant="h5"
            >
            PO Analyzer
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
