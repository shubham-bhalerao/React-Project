import React, { Component } from "react";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./App.css";

class App extends Component {
   findPalette(id) {
      return seedColors.find(c => c.id === id);
   }

   render() {
      return (
         <div className="App">
            <Switch>
               <Route
                  exact
                  path="/"
                  render={routeProps => (
                     <PaletteList palettes={seedColors} {...routeProps} />
                  )}
               />
               <Route
                  path="/palette/:id"
                  exact
                  render={routeProps => (
                     <Palette
                        palette={generatePalette(
                           this.findPalette(routeProps.match.params.id)
                        )}
                     />
                  )}
               />
               <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps => (
                     <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                           this.findPalette(routeProps.match.params.paletteId)
                        )}
                     />
                  )}
               />
            </Switch>
         </div>
      );
   }
}

export default App;
