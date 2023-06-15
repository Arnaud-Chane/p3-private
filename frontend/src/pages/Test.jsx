import * as React from "react";
import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function valuetext(value) {
  return `${value}°C`;
}

export default function Test() {
  const [sliderValue, setSliderValue] = React.useState(0);
  const [ratingValue, setRatingValue] = React.useState(0);

  const handleChangeSlider = (e) => {
    setSliderValue(e.target.value);
  };

  const handleChangeRating = (e) => {
    setRatingValue(e.target.value);
  };

  return (
    <div className="test">
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          onChange={handleChangeSlider}
          step={10}
          marks
          min={0}
          max={100}
        />
        <button type="submit" onClick={() => console.error(sliderValue)}>
          {" "}
          test{" "}
        </button>
      </Box>

      <div className="rating">
        <Stack spacing={1}>
          <Rating
            onChange={handleChangeRating}
            name="simple-controlled"
            value={parseInt(ratingValue, 2)}
          />
          <button type="submit" onClick={() => console.error(ratingValue)}>
            {" "}
            test{" "}
          </button>
        </Stack>
      </div>
    </div>
  );
}
