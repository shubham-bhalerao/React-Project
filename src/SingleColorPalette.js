import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
   constructor(props) {
      super(props);
      this.state = {
         format: "hex"
      };
      this._shades = this.gatherShades(this.props.palette, this.props.colorId);
      this.handleFormatChange = this.handleFormatChange.bind(this);
   }

   handleFormatChange(val) {
      this.setState({ format: val });
   }

   gatherShades(palette, colorId) {
      let shades = [];
      let allColors = palette.colors;

      for (let key in allColors) {
         shades.push(allColors[key].find(color => color.id === colorId));
      }
      //return all shades except first one
      return shades.slice(1);
   }
   render() {
      const { format } = this.state;
      const { paletteName, emoji, id } = this.props.palette;
      const colorBoxes = this._shades.map(color => (
         <ColorBox
            key={color.name}
            name={color.name}
            background={color[format]}
            showLink={false}
         />
      ));

      return (
         <div className="SingleColorPalette Palette">
            <Navbar
               handleFormatChange={this.handleFormatChange}
               showSlider={false}
            />
            <div className="Palette-colors">
               {colorBoxes}
               <div
                  className="go-back ColorBox"
                  style={{ marginBottom: "-4px" }}
               >
                  <Link to={`/palette/${id}`} className="back-button">
                     GO BACK
                  </Link>
               </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
         </div>
      );
   }
}

export default SingleColorPalette;
