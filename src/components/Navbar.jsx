import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box } from "@mui/material";
import { Menu as MenuIcon, LinkedIn, GitHub, Code, Instagram, Article } from "@mui/icons-material";

const Navbar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuOpen = Boolean(menuAnchor);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const navItems = [
    {
      href: "https://linkedin.com/in/sathya-narayanans",
      label: "LinkedIn",
      icon: <LinkedIn />,
    },
    {
      href: "https://github.com/Sathyanarayanansakthi",
      label: "GitHub",
      icon: <GitHub />,
    },
    {
      href: "https://dly.to/sBFI3z051ds",
      label: "Dev",
      icon: <Code />,
    },
    {
      href: "https://www.instagram.com/sathyanarayanansakthi",
      label: "Instagram",
      icon: <Instagram />,
    },
    {
      href: "https://snblog.vercel.app/",
      label: "SN Blog",
      icon: <Article />,
    },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(30, 41, 59)" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "medium", color: "white" }}>
          Sathya Narayanan
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {navItems.map(({ href, label, icon }) => (
            <IconButton
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                color: "white",
                "&:hover": { color: "gray" }, // Adding hover effect
              }}
              title={label} // Title for accessibility
            >
              {icon}
            </IconButton>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { sm: "none" }, color: "white" }}
          onClick={handleMenuOpen}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Navigation Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={menuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          sx: { backgroundColor: "black", color: "white" },
        }}
      >
        {navItems.map(({ href, label, icon }) => (
          <MenuItem
            key={label}
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": { color: "gray" },
            }}
            title={label} // Title for accessibility
          >
            {icon}
            {label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Navbar;

