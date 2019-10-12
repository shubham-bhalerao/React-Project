import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

class Palette extends Component {
   constructor(props) {
      super(props);
      this.state = {
         level: 500,
         format: "hex"
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleFormatChange = this.handleFormatChange.bind(this);
   }

   handleChange(level) {
      this.setState({ level });
   }

   handleFormatChange(val) {
      this.setState({ format: val });
   }

   render() {
      let { colors, paletteName, emoji, id } = this.props.palette;
      let { level, format } = this.state;
      let colorBoxes = colors[level].map(c => (
         <ColorBox
            background={c[format]}
            name={c.name}
            key={c.id}
            moreUrl={`/palette/${id}/${c.id}`}
            showLink
         />
      ));
      return (
         <div className="Palette">
            <Navbar
               level={level}
               handleChange={this.handleChange}
               handleFormatChange={this.handleFormatChange}
               showSlider
            />
            <div className="Palette-colors">{colorBoxes}</div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
         </div>
      );
   }
}

export default Palette;
