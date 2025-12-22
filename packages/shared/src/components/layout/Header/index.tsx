import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import {
  NotificationsOutlined,
  HelpOutline,
  ArrowDropDown,
  Menu as MenuIcon,
} from "@mui/icons-material";

interface Props {
  collapsed: boolean;
  onToggle: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
}

const Header = ({
  collapsed,
  onToggle,
  isMobile = false,
  isTablet = false,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleNotificationsMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setNotificationsAnchorEl(event.currentTarget);
  const handleNotificationsMenuClose = () => setNotificationsAnchorEl(null);

  if (isMobile) {
    return (
      <AppBar
        position="sticky"
        sx={{
          m: 0,
          boxSizing: "border-box",
          height: 64,
          bgcolor: "white",
          px: 3,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Sidebar Toggle Icon */}
          <IconButton color="inherit" onClick={onToggle} sx={{ ml: 2 }}>
            {collapsed ? <ArrowDropDown /> : <MenuIcon />}
          </IconButton>

          {/* Notifications, Support, and Avatar */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            {/* Notifications */}
            <IconButton color="inherit" onClick={handleNotificationsMenuOpen}>
              <Badge badgeContent={3} color="error">
                <NotificationsOutlined />
              </Badge>
            </IconButton>

            {/* Support Icon */}
            <IconButton color="inherit">
              <HelpOutline />
            </IconButton>

            {/* Avatar */}
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Avatar sx={{ bgcolor: "gray", width: 32, height: 32 }}>
                JP
              </Avatar>
            </IconButton>
          </div>
        </Toolbar>

        {/* Notifications Dropdown */}
        <Menu
          anchorEl={notificationsAnchorEl}
          open={Boolean(notificationsAnchorEl)}
          onClose={handleNotificationsMenuClose}
        >
          <MenuItem>Notifications</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Available Credits</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Billing</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>

        {/* User Menu Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Billing</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    );
  }

  if (isTablet) {
    return (
      <AppBar
        position="sticky"
        sx={{
          m: 0,
          boxSizing: "border-box",
          height: 64,
          bgcolor: "white",
          px: 4,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Sidebar Toggle Icon */}
          <IconButton color="inherit" onClick={onToggle} sx={{ mr: 3 }}>
            {collapsed ? <ArrowDropDown /> : <MenuIcon />}
          </IconButton>

          {/* Notifications, Credits, and Avatar */}
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {/* Notifications */}
            <IconButton color="inherit" onClick={handleNotificationsMenuOpen}>
              <Badge badgeContent={3} color="error">
                <NotificationsOutlined />
              </Badge>
            </IconButton>

            {/* Available Credits */}
            <Button
              variant="outlined"
              color="secondary"
              sx={{ textTransform: "none" }}
              endIcon={<ArrowDropDown />}
            >
              Available Credits
            </Button>

            {/* Avatar */}
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Avatar sx={{ bgcolor: "gray", width: 32, height: 32 }}>
                JP
              </Avatar>
            </IconButton>
          </div>
        </Toolbar>

        {/* Notifications Dropdown */}
        <Menu
          anchorEl={notificationsAnchorEl}
          open={Boolean(notificationsAnchorEl)}
          onClose={handleNotificationsMenuClose}
        >
          <MenuItem>Notifications</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Available Credits</MenuItem>
        </Menu>

        {/* User Menu Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Billing</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    );
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        m: 0,
        boxSizing: "border-box",
        height: 64,
        bgcolor: "white",
        pr: 5,
        pl: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Sidebar Toggle Icon */}
        <IconButton color="inherit" onClick={onToggle} sx={{ ml: 1 }}>
          {collapsed ? <ArrowDropDown /> : <MenuIcon />}
        </IconButton>

        {/* Notifications, Support, Credits, and User Info */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {/* Support Icon */}
          <IconButton color="inherit">
            <HelpOutline />
          </IconButton>

          {/* Notifications */}
          <IconButton color="inherit" onClick={handleNotificationsMenuOpen}>
            <Badge badgeContent={3} color="error">
              <NotificationsOutlined />
            </Badge>
          </IconButton>

          {/* Available Credits Button */}
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              textTransform: "none",
              display: "flex",
              alignItems: "center",
            }}
            endIcon={<ArrowDropDown />}
          >
            Available Credits
          </Button>

          {/* Avatar and User Info */}
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ bgcolor: "gray", width: 36, height: 36 }}>
                JP
              </Avatar>
              <div
                style={{
                  marginLeft: 8,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body2"
                  color="textPrimary"
                  sx={{ fontWeight: "medium" }}
                >
                  John Partner
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  partner@example.com
                </Typography>
              </div>
              <ArrowDropDown sx={{ fontSize: 16, color: "gray" }} />
            </div>
          </IconButton>
        </div>
      </Toolbar>

      {/* Notifications Dropdown */}
      <Menu
        anchorEl={notificationsAnchorEl}
        open={Boolean(notificationsAnchorEl)}
        onClose={handleNotificationsMenuClose}
      >
        <MenuItem>Notifications</MenuItem>
        <MenuItem>Support</MenuItem>
        <MenuItem>Available Credits</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Billing</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      {/* User Menu Dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Billing</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
