import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement,ReactNode } from "react";
import { useRouter as useNextRouter } from "next/router";
import {
  AppBar,
  Grid,
  Typography,
  useScrollTrigger,
  Slide,
  Button,
  List,
  ListItem,
  Menu,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { NextPage } from "next";

interface HeaderProps {
  window?: () => Window;
  children: ReactElement | ReactNode | any;
}

type Router = ReturnType<typeof useNextRouter>;

function HideOnScroll(props: HeaderProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: NextPage<HeaderProps> = ({children}) => {
  const router: Router = useNextRouter();

  const currentPath = router.pathname;

  const [scroll, setScroll] = useState<number>(0);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            background: scroll > 30 || currentPath !== "/" ? "#f69435" : "none",
            boxShadow: "none",
            position: "fixed",
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item p={1}>
              <Button
                color="warning"
                onClick={() => {
                  router.push("/google.com");
                }}
                size="medium"
                variant="contained"
              >
                <Typography variant="h6">ورود</Typography>
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  router.push("/");
                }}
                size="medium"
                variant="text"
              >
                <Typography fontWeight="bold" variant="h6">
                  ثبت نام
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <List>
                <Grid container alignItems="center">
                  <Grid
                    item
                    sx={{ display: { md: "none", sm: "block", xs: "block" } }}
                  >
                    <ListItem>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        color="inherit"
                      >
                        <MenuIcon />
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link
                            href="/"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <Typography fontWeight="bold" variant="h6">
                              خانه
                            </Typography>
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                        <Link
                        href="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography fontWeight="bold" variant="h6">
                          منو
                        </Typography>
                      </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                        <Link
                        href="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography fontWeight="bold" variant="h6">
                          درباره ما
                        </Typography>
                      </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                        <Link
                        href="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography fontWeight="bold" variant="h6">
                          تماس با ما
                        </Typography>
                      </Link>
                        </MenuItem>
                      </Menu>
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  >
                    <ListItem>
                      <Link
                        href="/"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <Typography fontWeight="bold" variant="h6">
                          تماس با ما
                        </Typography>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  >
                    <ListItem>
                      <Link
                        href="/"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <Typography fontWeight="bold" variant="h6">
                          درباره ما
                        </Typography>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  >
                    <ListItem>
                      <Link
                        href="/"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <Typography fontWeight="bold" variant="h6">
                          منو
                        </Typography>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  >
                    <ListItem>
                      <Link
                        href="/"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <Typography fontWeight="bold" variant="h6">
                          خانه
                        </Typography>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  >
                    <ListItem>
                      <Typography mr={1} fontWeight="bold" variant="h5">
                        | کریسپی لند
                      </Typography>
                      <Image
                        src="/icon-192x192.png"
                        alt="logo"
                        width={50}
                        height={50}
                      />
                    </ListItem>
                  </Grid>
                </Grid>
              </List>
            </Grid>
          </Grid>
        </AppBar>
      </HideOnScroll>

      {children}
    </>
  );
};
export default Header;
