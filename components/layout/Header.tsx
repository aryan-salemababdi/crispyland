import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { useRouter as useNextRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  useScrollTrigger,
  Slide,
  Button,
  List,
  ListItem,
} from "@mui/material";

interface Props {
  window?: () => Window;
  children: ReactElement;
}

type Router = ReturnType<typeof useNextRouter>;

function HideOnScroll(props: Props) {
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
const Header = (props: Props) => {
  const router: Router = useNextRouter();

  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HideOnScroll>
        <AppBar sx={{ background: scroll > 30 ? "#f69435" : "none", boxShadow: "none" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item mx={3}>
              <Button
                color="warning"
                onClick={() => {
                  router.push("/google.com");
                }}
                size="medium"
                variant={scroll > 20? "contained" : "outlined"}
              >
                <Typography variant="h6">ورود</Typography>
              </Button>
              <Button
                color={scroll > 20 ? "inherit" : "warning"}
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
                  <Grid item>
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
                  <Grid item>
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
                  <Grid item>
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
                  <Grid item>
                    <ListItem>
                      <Typography fontWeight="bold" variant="h6">
                        خانه
                      </Typography>
                    </ListItem>
                  </Grid>
                  <Grid item>
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
      <Toolbar />
    </>
  );
};
export default Header;
