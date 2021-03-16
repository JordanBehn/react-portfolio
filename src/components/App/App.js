import React from "react";
import logo from "./../../logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Button, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/grid";

import About from "../About";
import Work from "../Work";
import Contact from "../Contact";

function App() {
  return (
    <Container class="App">
        <Grid class="Main">
          <Typography>
            <Grid item xs={12}>
              <h1 class="App-header">Jordan Q. Behn</h1>
            </Grid>
            <Grid direction="row">
              <Grid item>
                <About />
              </Grid>
              <Grid item>
                <Contact />
              </Grid>
            </Grid>
            <br></br>

            <Work />
          </Typography>
        </Grid>
    </Container>
  );
}
export default App;
