import { useState, useEffect } from "react";
import { Box, Drawer, IconButton, Paper, Typography } from "@mui/material";
import { useBreakpoint } from "@shared/hooks";
import * as ReactRouterDom from "react-router-dom";

import AlertBanner from "../../../../packages/shared/src/components/overlay/AlertBanner/index";
import AppSidebar from "../../../../packages/shared/src/components/Layout/Sidebar/index";
import AppHeader from "../../../../packages/shared/src/components/Layout/Header/index";
import { sidebarItems } from "./constant";
import { Close } from "@mui/icons-material";

const AppLayout = () => {
  //   const [collapsed, setCollapsed] = useState(false);
  //   const [showBanner, setShowBanner] = useState(true);
  //   const [drawerOpen, setDrawerOpen] = useState(false);
  //   const [isMobile, setIsMobile] = useState(false);

  //   useEffect(() => {
  //     const checkMobile = () => {
  //       setIsMobile(window.innerWidth < 768);
  //     };
  //     checkMobile();
  //     window.addEventListener("resize", checkMobile);
  //     return () => window.removeEventListener("resize", checkMobile);
  //   }, []);

  //   useEffect(() => {
  //     if (!isMobile) {
  //       setDrawerOpen(false);
  //     }
  //   }, [isMobile]);

  //   const handleToggle = () => {
  //     if (isMobile) {
  //       setDrawerOpen((v) => !v);
  //     } else {
  //       setCollapsed((v) => !v);
  //     }
  //   };

  //   const closeDrawer = () => setDrawerOpen(false);

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { isDesktop, isTablet, isMobile } = useBreakpoint();

  const DrawerAny = Drawer as any;
  const OutletAny = (ReactRouterDom as any).Outlet as any;

  const closeSidebar = () => setDrawerOpen(false);

  const handleToggle = () => {
    if (isDesktop) {
      setCollapsed((v) => !v);
      closeSidebar();
      return;
    }

    setDrawerOpen((v) => !v);
  };

  useEffect(() => {
    if (isDesktop) {
      closeSidebar();
      return;
    }

    setCollapsed(false);
  }, [isDesktop]);

  return (
    <Box className="h-screen w-screen overflow-hidden flex flex-col">
      {/* Alert Banner */}
      {showNavbar && (
        <Box className="h-12 shrink-0">
          <AlertBanner onClose={() => setShowNavbar(false)} />
        </Box>
      )}

      {/* Main Content */}
      {/* <Box className="flex flex-1 overflow-hidden">
        {!isMobile && (
          <AppSidebar collapsed={collapsed} onToggle={handleToggle} />
        )}

        {isMobile && (
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={closeDrawer}
            PaperProps={{
              sx: {
                width: 250,
                backgroundColor: "hsl(var(--sidebar-background))",
                boxShadow: "4px 0 12px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <AppSidebar
              collapsed={false}
              onToggle={closeDrawer}
              onMenuClick={closeDrawer}
            />
          </Drawer>
        )}

        <Box className="flex flex-col flex-1 overflow-hidden">
          <AppHeader
            collapsed={isMobile ? drawerOpen : collapsed}
            onToggle={handleToggle}
            isMobile={isMobile}
          />

          <Box component="main" className="flex-1 overflow-auto p-3 pb-4">
            <Box className="bg-card border border-border rounded-xl p-6 min-h-full shadow-sm">
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box> */}
      <Box display="flex" flex="1" overflow="hidden">
        {/* Desktop Sidebar */}
        {isDesktop && (
          <AppSidebar collapsed={collapsed} sidebarItems={sidebarItems} />
        )}

        {/* Mobile/Tablet Drawer */}
        {(isTablet || isMobile) && (
          <Drawer
            open={drawerOpen}
            onClose={closeSidebar}
            anchor="left"
            variant="temporary"
            ModalProps={{ keepMounted: true }}
            sx={{
              width: 250,
              "& .MuiDrawer-paper": {
                width: 250,
                boxShadow: "4px 0 12px rgba(0, 0, 0, 0.15)",
                paddingTop: "12px",
              },
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
            >
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--bg-logo-gradient)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "var(--text-sidebar-active)",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                    }}
                  >
                    QB
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ marginLeft: 2 }}>
                  Sales bot
                </Typography>
              </Box>
              <IconButton onClick={closeSidebar} aria-label="Close sidebar">
                <Close />
              </IconButton>
            </Box>
            <AppSidebar
              collapsed={false}
              sidebarItems={sidebarItems}
              onMenuClick={closeSidebar}
              showHeader={false}
            />
          </Drawer>
        )}

        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          overflow="hidden"
          sx={{ transition: "margin-left 200ms ease-in-out" }}
        >
          {/* Header */}
          <Box sx={{ height: 64, flexShrink: 0 }}>
            <AppHeader
              collapsed={isDesktop ? collapsed : drawerOpen}
              onToggle={handleToggle}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </Box>

          {/* Main Content */}
          <Box
            component="main"
            flex={1}
            sx={{
              overflow: "auto",
              bgcolor: "var(--color-white)",
              pt: 0,
              px: 3,
              pb: 3,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              transition: "padding 200ms ease-in-out",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Paper
              sx={{
                backgroundColor: "var(--bg-content)",
                border: "1px solid #E5E7EB",
                borderRadius: "20px",
                p: 3,
                boxShadow: 1,
                minHeight: "calc(100vh - 32px)",
                transition:
                  "padding 200ms ease-in-out, border-radius 200ms ease-in-out",
              }}
            >
              <OutletAny />
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
