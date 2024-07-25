import React, { useState } from "react";
import Brand from "../Assets/Brand.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Tools",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: "Research",
      icon: <PhoneRoundedIcon  />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
 
  ];
  const handleSignUpClick = () => {
    alert("Please contact us contact@xtracolabs.com");
  };
  return (
    <nav>
      <div className="logo-text-container">
        <img src={Brand} alt="logo" class="logo" />
        <span class="logo-text">XtraCoLabs</span> 
      </div>
      <div className="navbar-links-container">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Tools">Tools</a>
        <a href="#Research">Research</a>
        <a href="#Contact">Contact</a>
        <button className="primary-button" onClick={handleSignUpClick}
          onMouseEnter={handleSignUpClick}>Sign Up</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
