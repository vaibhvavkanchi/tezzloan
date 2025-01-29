import { Box, Typography } from "@mui/material";
import React from "react";

const useStyles = {
  imgBox: {
    maxWidth: "300px",
    width: "100%",
    
  }
 
};
export default function NoDataFound({ text }) {
  const classes = useStyles;
  return (
    <Box className="displayCenter" mt={6} mb={4}>
      <Box>
        <img sx={classes.imgBox} src="images/nodatafound.png" alt="" />
      </Box>
    </Box>
  );
}
