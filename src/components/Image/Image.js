import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
require("./image.css");

const Image = props => {
  return (
    <div className="singleImage">
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={0}
        defaultPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <div onClick={zoomIn} className="button_cont" align="center">
                <a className="example_b">+</a>
              </div>
              <div onClick={zoomOut} className="button_cont" align="center">
                <a className="example_b">-</a>
              </div>
              <div
                onClick={resetTransform}
                className="button_cont"
                align="center"
              >
                <a className="example_b">Reset</a>
              </div>
            </div>
            <TransformComponent>
              <div>
                <img src={props.url} alt="" />
              </div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
      <FormControl component="fieldset">
        <FormLabel component="legend">Label this animal:-</FormLabel>

        <RadioGroup
          aria-label="position"
          name="position"
          value={props.rvalue}
          onChange={props.rclick}
          row
        >
          <FormControlLabel
            value="cat"
            control={<Radio color="primary" />}
            label="cat"
            labelPlacement="start"
          />

          <FormControlLabel
            value="dog"
            control={<Radio color="primary" />}
            label="dog"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Image;
