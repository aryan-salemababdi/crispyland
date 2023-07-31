import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";

const HowToOrder = () => {
  return (
    <>
      <Typography
        fontWeight="bold"
        variant="h5"
        textAlign="center"
        mt={10}
        color="#f69435"
      >
        نحوه سفارش
      </Typography>

      <Container>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <List>
            <ListItem>
              <Typography textAlign="right" fontWeight="bold" variant="h6" mx={1}>
                وارد شوید و آدرس تحویل خود را تنظیم کنید (یا یک حساب ایجاد کنید)
              </Typography>
              <Circle sx={{ color: "#f69435", fontSize: 12 }} />
            </ListItem>
            <ListItem>
              <Typography textAlign="right" fontWeight="bold" variant="h6" mx={1}>
                موارد خود را انتخاب کنید و روی «افزودن به سبد خرید» ضربه بزنید
              </Typography>
              <Circle sx={{ color: "#f69435", fontSize: 12 }} />
            </ListItem>
            <ListItem>
              <Typography textAlign="right" fontWeight="bold" variant="h6" mx={1}>
              برای ثبت سفارش، "مشاهده سبد خرید" یا "تسویه حساب" را انتخاب کنید
              </Typography>
              <Circle sx={{ color: "#f69435", fontSize: 12 }} />
            </ListItem>
            <ListItem>
              <Typography textAlign="right" fontWeight="bold" variant="h6" mx={1}>
              سفارش خود را مرور کنید و روی «ثبت سفارش» ضربه بزنید
              </Typography>
              <Circle sx={{ color: "#f69435", fontSize: 12 }} />
            </ListItem>
          </List>
        </Grid>
      </Container>
    </>
  );
};

export default HowToOrder;
