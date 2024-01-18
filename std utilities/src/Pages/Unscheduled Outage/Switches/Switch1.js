import React, { useState } from "react";
import {  FormGroup,
  FormControlLabel,
  styled,
  Dialog,
  DialogTitle,
  DialogContent, } 
          from "@mui/material";
      import Switch from "@mui/material/Switch";
import RstCut from "../RST_cut";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 62,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(35px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
  "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));


const SwitchWithPopup = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);

    // If the switch is turned on, open the popup
    if (isSwitchOn) {
      setIsPopupOpen(true);
    }
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <IOSSwitch
              sx={{ ml: 5 }}
              checked={isSwitchOn}
              onChange={handleSwitchChange}
            />
          }
          label=""
        />
      </FormGroup>
      <Dialog open={isPopupOpen} onClose={handleClosePopup}>
      <RstCut />
        
      </Dialog>
    </div>
  );
};

export default SwitchWithPopup;

