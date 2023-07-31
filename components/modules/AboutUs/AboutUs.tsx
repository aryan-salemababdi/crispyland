import { Box, Container, Grid, Typography } from "@mui/material";
import Tesla from "../../icons/Tesla";
import SpaceX from "../../icons/SpaceX";
import Binance from "../../icons/Binance";
import Apple from "../../icons/Apple";

const AboutUs = () => {
  return (
    <>
      <Typography
        fontWeight="bold"
        variant="h5"
        textAlign="center"
        mt={10}
        color="#f69435"
      >
        ما کی هستیم ؟
      </Typography>
      <Container>
        <Typography fontWeight="bold" variant="body1" textAlign="center" my={2}>
          کریسپی لند، بهترین مقصد برای عاشقان مرغ سوخاری است. ما با افتخار
          بهترین مرغ‌ها را تهیه و آماده کرده‌ایم تا شما لذت‌بخش‌ترین غذای سوخاری
          را تجربه کنید. با استفاده از ترکیبات انتخاب‌شده و طعم‌دهی منحصر به فرد
          ما، هر لقمه از مرغ سوخاری ما لذتی ناب فراهم می‌کند. همچنین، ما منوی
          گسترده‌ای از غذاهای متنوع را ارائه می‌دهیم تا همه سلیقه‌ها را
          رضایت‌بخشیم. با کریسپی لند همیشه یک تجربه لذت‌بخش در انتظار شماست.
          بیایید لذت را با هر اشتها‌آورترین لقمه از مرغ سوخاری ما تجربه کنید!
        </Typography>
        <Grid
          container
          display="grid"
          gridAutoColumns="auto"
          gridTemplateColumns={{
            md: "repeat(4,1fr)",
            xs: "repeat(2,1fr)",
          }}
          sx={{ gap: { md: 4, xs: 2 }, marginY: "40px" }}
        >
          <Grid
            item
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box my={1}>
              <Apple />
            </Box>
          </Grid>
          <Grid
            item
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box my={1}>
              <Binance />
            </Box>
          </Grid>
          <Grid
            item
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box my={1}>
              <SpaceX />
            </Box>
          </Grid>
          <Grid
            item
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box my={1}>
              <Tesla />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
