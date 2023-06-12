import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import { useState } from "react"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlined from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import "react-pro-sidebar/dist/css/styles.css";
import { Menu, ProSidebar, MenuItem } from "react-pro-sidebar"
import { Link } from "react-router-dom";

interface IMenuItem {
  title: string,
  href: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any
}

interface IMenuCategory {
  name: string,
  items: IMenuItem[]
}


const dashboardItem: IMenuItem = {
  title: "Dashboard",
  Icon: HomeOutlinedIcon,
  href: "/"
}

const menuCategories: IMenuCategory[] = [
  {
    name: "Data",
    items: [
      {
        title: "Manage Teams",
        Icon: GroupOutlined,
        href: "/team"
      },
      {
        title: "Contacts Information",
        Icon: ContactsOutlinedIcon,
        href: "/contacts"
      },
      {
        title: "Invoices Balances",
        Icon: ReceiptOutlinedIcon,
        href: "/invoices"
      },
    ]
  },
  {
    name: "Pages",
    items: [
      {
        title: "Profile Form",
        Icon: Person2OutlinedIcon,
        href: "/form"
      },
      {
        title: "Calendar",
        Icon: CalendarTodayOutlinedIcon,
        href: "/calendar"
      },
      {
        title: "FAQ Page",
        Icon: HelpOutlinedIcon,
        href: "/faq"
      },
    ]
  },
  {
    name: "Charts",
    items: [
      {
        title: "Bar Chart",
        Icon: BarChartOutlinedIcon,
        href: "/bar"
      },
      {
        title: "Pie Chart",
        Icon: PieChartOutlineOutlinedIcon,
        href: "/pie"
      },
      {
        title: "Line Chart",
        Icon: TimelineOutlinedIcon,
        href: "/line"
      },
      {
        title: "Geography Chart",
        Icon: MapOutlinedIcon,
        href: "/geo"
      }
    ]
  }
]

interface ItemProps {
  onClick: () => void,
  isActive: boolean,
  item: IMenuItem
}

const Item = ({ isActive, item, onClick }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      icon={<item.Icon />}
      active={isActive}
      onClick={onClick}
      style={{ color: colors.grey[100] }}
    >
      <Typography sx={{ position: "relative", bottom: -1 }}>{item.title}</Typography>
      <Link to={item.href} />
    </MenuItem>
  )
}



const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedItem, setSelectedItem] = useState<IMenuItem>(dashboardItem)

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Box sx={{ padding: isCollapsed ? undefined : "4%" }}>
          <Box display="flex" alignItems="center" justifyContent="space-around">
            {!isCollapsed && <Typography variant="h3" color={colors.primary[100]}>
              RXADMIN
            </Typography>}
            <IconButton
              onClick={() => setIsCollapsed(prev => !prev)}
              sx={{ marginTop: isCollapsed ? 1 : 0 }}
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          {
            !isCollapsed && <Box textAlign={"center"} mt={4}>
              <img src="/my-profile.png" alt="saurabh" width={105} height={105} />
            </Box>
          }
          {
            !isCollapsed && <Box textAlign={"center"} m={1}>
              <Typography variant="h2" fontWeight={700} color={colors.primary[100]} >Saurabh</Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>Web Developer</Typography>
            </Box>
          }

          <Menu iconShape="square">
            <Box
              sx={{ ...(isCollapsed ? { position: "relative", left: -4 } : {}) }}>
              <Item
                onClick={() => setSelectedItem(dashboardItem)}
                isActive={selectedItem.title === dashboardItem.title}
                item={dashboardItem}
              />
            </Box>

            {menuCategories.map((category: IMenuCategory) => (
              <Box key={category.name}>
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  ml={!isCollapsed ? 2 : 0}
                  textAlign={isCollapsed ? "center" : "left"}
                >
                  {category.name}
                </Typography>
                {
                  category.items.map((item: IMenuItem) => (
                    <Box key={item.title} sx={{ ...(isCollapsed ? { position: "relative", left: -4 } : {}) }}>
                      <Item
                        onClick={() => setSelectedItem(item)}
                        isActive={selectedItem.title === item.title}
                        item={item}
                      />
                    </Box>
                  ))
                }
              </Box>
            ))
            }
          </Menu>
        </Box>
      </ProSidebar >
    </Box >
  )
}

export default Sidebar