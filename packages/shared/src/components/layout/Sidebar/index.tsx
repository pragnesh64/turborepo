// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Box,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import {
//   Home,
//   People,
//   MenuBook,
//   Inventory,
//   Extension,
//   Settings,
//   SportsEsports,
//   Chat,
//   Description,
//   Campaign,
//   PersonSearch,
//   ManageAccounts,
//   ExpandMore,
//   ChevronRight,
//   Logout,
//   MenuOpen,
// } from "@mui/icons-material";

// interface SidebarItem {
//   key: string;
//   label: string;
//   icon: React.ComponentType<{
//     className?: string;
//     fontSize?: "small" | "medium";
//   }>;
//   path?: string;
//   children?: { key: string; label: string; path: string }[];
// }

// const sidebarItems: SidebarItem[] = [
//   { key: "home", label: "Home", icon: Home, path: "/" },
//   {
//     key: "contact",
//     label: "Contact",
//     icon: People,
//     children: [
//       { key: "contact-list", label: "Contact List", path: "/contact/list" },
//       { key: "contact-groups", label: "Groups", path: "/contact/groups" },
//     ],
//   },
//   {
//     key: "knowledge-base",
//     label: "Knowledge Base",
//     icon: MenuBook,
//     path: "/knowledge-base",
//   },
//   { key: "product", label: "Product", icon: Inventory, path: "/product" },
//   {
//     key: "integration",
//     label: "Integration",
//     icon: Extension,
//     path: "/integration",
//   },
//   {
//     key: "agent-config",
//     label: "Agent Configuration",
//     icon: Settings,
//     path: "/agent-configuration",
//   },
//   {
//     key: "playground",
//     label: "Playground",
//     icon: SportsEsports,
//     path: "/playground",
//   },
//   {
//     key: "conversations",
//     label: "Conversations",
//     icon: Chat,
//     children: [
//       { key: "conv-active", label: "Active", path: "/conversations/active" },
//       {
//         key: "conv-archived",
//         label: "Archived",
//         path: "/conversations/archived",
//       },
//     ],
//   },
//   {
//     key: "templates",
//     label: "Templates",
//     icon: Description,
//     children: [
//       { key: "templates-email", label: "Email", path: "/templates/email" },
//       { key: "templates-sms", label: "SMS", path: "/templates/sms" },
//     ],
//   },
//   {
//     key: "campaign",
//     label: "Campaign",
//     icon: Campaign,
//     children: [
//       { key: "campaign-active", label: "Active", path: "/campaign/active" },
//       { key: "campaign-draft", label: "Drafts", path: "/campaign/draft" },
//     ],
//   },
//   {
//     key: "lead-management",
//     label: "Lead Management",
//     icon: PersonSearch,
//     children: [
//       { key: "leads-all", label: "All Leads", path: "/leads/all" },
//       { key: "leads-qualified", label: "Qualified", path: "/leads/qualified" },
//     ],
//   },
//   {
//     key: "user-management",
//     label: "User Management",
//     icon: ManageAccounts,
//     children: [
//       { key: "users-all", label: "All Users", path: "/users/all" },
//       { key: "users-roles", label: "Roles", path: "/users/roles" },
//     ],
//   },
// ];

// interface AppSidebarProps {
//   collapsed: boolean;
//   onToggle: () => void;
//   onMenuClick?: () => void;
// }

// const AppSidebar = ({ collapsed, onToggle, onMenuClick }: AppSidebarProps) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [openKeys, setOpenKeys] = useState<string[]>([]);

//   const isActive = (item: SidebarItem): boolean => {
//     if (item.path && location.pathname === item.path) return true;
//     if (item.children) {
//       return item.children.some((child) => location.pathname === child.path);
//     }
//     return false;
//   };

//   const handleItemClick = (item: SidebarItem) => {
//     if (item.children) {
//       setOpenKeys((prev) =>
//         prev.includes(item.key)
//           ? prev.filter((k) => k !== item.key)
//           : [...prev, item.key]
//       );
//     } else if (item.path) {
//       navigate(item.path);
//       onMenuClick?.();
//     }
//   };

//   const handleChildClick = (path: string) => {
//     navigate(path);
//     onMenuClick?.();
//   };

//   return (
//     <Box
//       sx={{
//         width: collapsed ? 56 : 250,
//         backgroundColor: "background.paper",
//         borderRight: 1,
//         borderColor: "divider",
//         transition: "width 200ms ease",
//         display: "flex",
//         flexDirection: "column",
//         height: "full",
//       }}
//     >
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: collapsed ? "center" : "space-between",
//           alignItems: "center",
//           padding: 2,
//           borderBottom: 1,
//           borderColor: "divider",
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Box
//             sx={{
//               width: 36,
//               height: 36,
//               borderRadius: "50%",
//               backgroundColor: "primary.main",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Typography
//               variant="body2"
//               sx={{ color: "white", fontWeight: 600 }}
//             >
//               QB
//             </Typography>
//           </Box>
//           {!collapsed && (
//             <Typography variant="h6" sx={{ marginLeft: 2 }}>
//               Sales bot
//             </Typography>
//           )}
//         </Box>
//         {!collapsed && (
//           <IconButton onClick={onToggle}>
//             <MenuOpen />
//           </IconButton>
//         )}
//       </Box>

//       {/* Navigation Items */}
//       <Box sx={{ flex: 1, overflowY: "auto" }}>
//         <List>
//           {sidebarItems.map((item) => {
//             const Icon = item.icon;
//             const active = isActive(item);
//             const isOpen = openKeys.includes(item.key);

//             return (
//               <Box key={item.key}>
//                 <ListItemButton onClick={() => handleItemClick(item)}>
//                   <ListItemIcon
//                     sx={{
//                       minWidth: collapsed ? 0 : 40,
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Box sx={{ fontSize: 20, color: "inherit" }}>
//                       <Icon />
//                     </Box>
//                   </ListItemIcon>

//                   {!collapsed && (
//                     <>
//                       <ListItemText
//                         primary={item.label}
//                         primaryTypographyProps={{
//                           fontWeight: active ? 600 : 500,
//                           fontSize: 14,
//                         }}
//                       />
//                       {item.children &&
//                         (isOpen ? <ExpandMore /> : <ChevronRight />)}
//                     </>
//                   )}
//                 </ListItemButton>

//                 {/* Submenu (Children) */}
//                 {item.children && !collapsed && (
//                   <Collapse in={isOpen} timeout="auto" unmountOnExit>
//                     <List sx={{ pl: 4 }}>
//                       {item.children.map((child) => (
//                         <ListItemButton
//                           key={child.key}
//                           onClick={() => handleChildClick(child.path)}
//                           sx={{
//                             backgroundColor:
//                               location.pathname === child.path
//                                 ? "primary.light"
//                                 : "transparent",
//                           }}
//                         >
//                           <ListItemText
//                             primary={child.label}
//                             primaryTypographyProps={{
//                               fontWeight:
//                                 location.pathname === child.path ? 600 : 400,
//                               fontSize: 14,
//                             }}
//                           />
//                         </ListItemButton>
//                       ))}
//                     </List>
//                   </Collapse>
//                 )}
//               </Box>
//             );
//           })}
//         </List>
//       </Box>

//       {/* Logout */}
//       <Box sx={{ padding: 2, borderTop: 1, borderColor: "divider" }}>
//         <ListItemButton sx={{ color: "error.main" }}>
//           {!collapsed && (
//             <ListItemText
//               primary="Log Out"
//               primaryTypographyProps={{
//                 fontWeight: 600,
//                 fontSize: 14,
//               }}
//             />
//           )}
//           <ListItemIcon sx={{ minWidth: collapsed ? 0 : "auto" }}>
//             <Logout />
//           </ListItemIcon>
//         </ListItemButton>
//       </Box>
//     </Box>
//   );
// };

// export default AppSidebar;

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Home,
  People,
  MenuBook,
  Inventory,
  Extension,
  Settings,
  SportsEsports,
  Chat,
  Description,
  Campaign,
  PersonSearch,
  ManageAccounts,
  Logout,
  MenuOpen,
} from "@mui/icons-material";

const AppSidebar = ({ collapsed, onToggle, onMenuClick }: any) => {
  const sidebarItems = [
    { key: "home", label: "Home", icon: Home, path: "/" },
    {
      key: "contact",
      label: "Contact",
      icon: People,
      children: [
        { key: "contact-list", label: "Contact List", path: "/contact/list" },
        { key: "contact-groups", label: "Groups", path: "/contact/groups" },
      ],
    },
    {
      key: "knowledge-base",
      label: "Knowledge Base",
      icon: MenuBook,
      path: "/knowledge-base",
    },
    { key: "product", label: "Product", icon: Inventory, path: "/product" },
    {
      key: "integration",
      label: "Integration",
      icon: Extension,
      path: "/integration",
    },
    {
      key: "agent-config",
      label: "Agent Configuration",
      icon: Settings,
      path: "/agent-configuration",
    },
    {
      key: "playground",
      label: "Playground",
      icon: SportsEsports,
      path: "/playground",
    },
    {
      key: "conversations",
      label: "Conversations",
      icon: Chat,
      children: [
        { key: "conv-active", label: "Active", path: "/conversations/active" },
        {
          key: "conv-archived",
          label: "Archived",
          path: "/conversations/archived",
        },
      ],
    },
    {
      key: "templates",
      label: "Templates",
      icon: Description,
      children: [
        { key: "templates-email", label: "Email", path: "/templates/email" },
        { key: "templates-sms", label: "SMS", path: "/templates/sms" },
      ],
    },
    {
      key: "campaign",
      label: "Campaign",
      icon: Campaign,
      children: [
        { key: "campaign-active", label: "Active", path: "/campaign/active" },
        { key: "campaign-draft", label: "Drafts", path: "/campaign/draft" },
      ],
    },
    {
      key: "lead-management",
      label: "Lead Management",
      icon: PersonSearch,
      children: [
        { key: "leads-all", label: "All Leads", path: "/leads/all" },
        {
          key: "leads-qualified",
          label: "Qualified",
          path: "/leads/qualified",
        },
      ],
    },
    {
      key: "user-management",
      label: "User Management",
      icon: ManageAccounts,
      children: [
        { key: "users-all", label: "All Users", path: "/users/all" },
        { key: "users-roles", label: "Roles", path: "/users/roles" },
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: collapsed ? 56 : 250,
        backgroundColor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        transition: "width 200ms ease",
        display: "flex",
        flexDirection: "column",
        height: "full",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: collapsed ? "center" : "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "primary.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white", fontWeight: 600 }}
            >
              QB
            </Typography>
          </Box>
          {!collapsed && (
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Sales bot
            </Typography>
          )}
        </Box>
        {!collapsed && (
          <IconButton onClick={onToggle}>
            <MenuOpen />
          </IconButton>
        )}
      </Box>

      {/* Navigation Items */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <List>
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Box key={item.key}>
                <ListItemButton onClick={() => onMenuClick(item)}>
                  <ListItemIcon
                    sx={{
                      minWidth: collapsed ? 0 : 40,
                      justifyContent: "center",
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  {!collapsed && <ListItemText primary={item.label} />}
                </ListItemButton>
              </Box>
            );
          })}
        </List>
      </Box>

      {/* Logout */}
      <Box sx={{ padding: 2, borderTop: 1, borderColor: "divider" }}>
        <ListItemButton
          sx={{ color: "error.main" }}
          onClick={() => console.log("Log Out")}
        >
          {!collapsed && <ListItemText primary="Log Out" />}
          <ListItemIcon sx={{ minWidth: collapsed ? 0 : "auto" }}>
            <Logout />
          </ListItemIcon>
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default AppSidebar;
