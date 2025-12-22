import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu as MenuIcon,
  MoreVert as MoreVertIcon,
  Close as CloseIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  Notifications as NotificationsIcon,
  HelpOutline as HelpOutlineIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Drawer,
  Box,
  Typography,
} from "@mui/material";
import { IntoAiPartnerLogo } from "@shared/assets/icons/index";
import { ProfileImg } from "@shared/assets/index";

interface MenuItemType {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const Navbar = ({ menus }: { menus: MenuItemType[] }) => {
  const { pathname } = useLocation();
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const [visibleMenus, setVisibleMenus] = useState<MenuItemType[]>([]);
  const [moreMenus, setMoreMenus] = useState<MenuItemType[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const adjustMenu = () => {
      const container = menuContainerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      let usedWidth = 0;

      const temp = document.createElement("span");
      temp.style.position = "absolute";
      temp.style.visibility = "hidden";
      temp.style.whiteSpace = "nowrap";
      temp.style.fontSize = "14px";
      document.body.appendChild(temp);

      const visible: MenuItemType[] = [];
      const extra: MenuItemType[] = [];

      menus.forEach((menu) => {
        temp.innerHTML = menu.label;
        const itemWidth = temp.offsetWidth + 70;

        if (usedWidth + itemWidth <= containerWidth - 80) {
          visible.push(menu);
          usedWidth += itemWidth;
        } else {
          extra.push(menu);
        }
      });

      document.body.removeChild(temp);
      setVisibleMenus(visible);
      setMoreMenus(extra);
    };

    adjustMenu();
    window.addEventListener("resize", adjustMenu);
    return () => window.removeEventListener("resize", adjustMenu);
  }, [menus]);

  // For the Profile Menu
  const handleProfileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setProfileMenuOpen(true);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuOpen(false);
    setAnchorEl(null); // Close the menu
  };

  // For the More Menu
  const handleMoreMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMoreMenuOpen(true);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuOpen(false);
    setAnchorEl(null); // Close the menu
  };

  const profileMenu = (
    <Menu
      anchorEl={anchorEl}
      open={profileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem>
        <AccountCircleIcon sx={{ marginRight: 1 }} />
        My Account
      </MenuItem>
      <MenuItem sx={{ color: "red" }}>
        <ExitToAppIcon sx={{ marginRight: 1 }} />
        Log Out
      </MenuItem>
    </Menu>
  );

  const moreMenu = (
    <Menu anchorEl={anchorEl} open={moreMenuOpen} onClose={handleMoreMenuClose}>
      {moreMenus.map((m: MenuItemType) => {
        const isActive = pathname === m.path;
        return (
          <MenuItem key={m.path}>
            <Link
              to={m.path}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: isActive ? "white" : "black",
                backgroundColor: isActive
                  ? "var(--button-bg-navbar)"
                  : "transparent",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              {m.icon}
              {m.label}
            </Link>
          </MenuItem>
        );
      })}
    </Menu>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: 3 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{ display: { lg: "none", xs: "block" } }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <IntoAiPartnerLogo />
            <Typography variant="h6" sx={{ color: "black" }}>
              Partner Portal
            </Typography>
          </Box>

          {/* Center Menu */}
          <Box
            ref={menuContainerRef}
            sx={{
              display: { lg: "flex", xs: "none" },
              flex: 1,
              justifyContent: "center",
            }}
          >
            {visibleMenus.map((item: MenuItemType) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 16px",
                    borderRadius: "4px",
                    color: active ? "white" : "black",
                    backgroundColor: active
                      ? "var(--button-bg-navbar)"
                      : "transparent",
                  }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}

            {moreMenus.length > 0 && (
              <IconButton sx={{ padding: 2 }} onClick={handleMoreMenuClick}>
                <MoreVertIcon />
              </IconButton>
            )}
          </Box>

          {/* Right */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton>
              <HelpOutlineIcon sx={{ fontSize: 24, color: "gray" }} />
            </IconButton>

            <IconButton>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon sx={{ fontSize: 24, color: "gray" }} />
              </Badge>
            </IconButton>

            <IconButton onClick={handleProfileMenuClick}>
              <Avatar sx={{ width: 36, height: 36, bgcolor: "gray" }}>
                <img
                  src={ProfileImg}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ padding: 2 }}>
            Menu
          </Typography>
          {menus.map((menu) => {
            const active = pathname === menu.path;
            return (
              <Link
                key={menu.path}
                to={menu.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: "4px",
                  color: active ? "white" : "black",
                  backgroundColor: active
                    ? "var(--button-bg-navbar)"
                    : "transparent",
                }}
              >
                {menu.icon}
                {menu.label}
              </Link>
            );
          })}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
