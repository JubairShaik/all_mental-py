"use client";

// import react
import * as React from "react";

// import components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";

const NavDrawer = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setOpen(open);
    };

    const navItems: { title: string; url: string; icon: any }[] = [
        { title: "Home", url: "/", icon: <HomeIcon />},
        { title: "Login", url: "/login", icon: <LoginIcon /> }
    ];

    const list = () => (
        <Box
            sx={{ width: "auto" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {navItems.map(item => (
                    <ListItem key={item.url} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <Link href={item.url}>
                                <ListItemText primary={item.title} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className="md:hidden">
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon sx={{color: "#FFFFFF"}}/>
            </Button>
            <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
};

export default NavDrawer;