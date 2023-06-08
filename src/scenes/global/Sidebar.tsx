import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import { useState } from "react"
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
  Icon: any
}

interface IMenuCategory {
  name: string,
  items: IMenuItem[]
}


const dashboardItem: IMenuItem = {
  title: "Dashboard",
  Icon: HomeOutlinedIcon,
  href: "/dashboard"
}

const menuCategories: IMenuCategory[] = [
  {
    name: "Data",
    items: [
      {
        title: "Manage Teams",
        Icon: GroupOutlined,
        href: "/teams"
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
        href: "/profile"
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
      <Link to={item.href}>
        <Typography>{item.title}</Typography>
      </Link>
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
        <Menu iconShape="square">
          <Item
            onClick={() => setSelectedItem(dashboardItem)}
            isActive={selectedItem.title === dashboardItem.title}
            item={dashboardItem} />
          {menuCategories.map((category: IMenuCategory) => (
            <Box>
              <Typography>
                {category.name}
              </Typography>
              {category.items.map((item: IMenuItem) => (
                <Item
                  onClick={() => setSelectedItem(item)}
                  isActive={selectedItem.title === item.title}
                  item={item}
                />
              ))}
            </Box>
          ))
          }
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar