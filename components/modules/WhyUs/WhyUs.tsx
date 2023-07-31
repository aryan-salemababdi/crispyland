import { Card, Container, Grid, Typography } from "@mui/material";
import Fast from "../../icons/Fast";
import Food from "../../icons/Food";
import Choice from "../../icons/Choice";
import Clock from "../../icons/Clock";

const WhyUs = () => {
  return (
    <>

        <Typography
         fontWeight="bold"
         variant="h5"
         textAlign="center"
         mt={12}
         color="#f69435"
         >
            چرا ما ؟
         </Typography>
         <Container>
      <Grid
        container
        display="grid"
        gridAutoColumns="auto"
        gridTemplateColumns={
            {
                md:"repeat(4,1fr)",
                xs: "repeat(2,1fr)"
            }
        }
        sx={{ gap: { md: 4, xs: 2 },marginY:"40px"}}
      >
        <Grid item textAlign="center">
          <Card>
            <Fast />
            <Typography
         variant="h6"
         textAlign="center"
         my={1}
         >
            سریع
         </Typography>
          </Card>
        </Grid>
        <Grid item textAlign="center">
          <Card>
            <Food />

            <Typography
         variant="h6"
         textAlign="center"
         my={1}
         >
            بهترین سوخاری
         </Typography>
          </Card>
        </Grid>
        <Grid item textAlign="center">
          <Card>
            <Choice />
            <Typography
         variant="h6"
         textAlign="center"
         my={1}
         >
            هر انتخابی
         </Typography>
          </Card>
        </Grid>
        <Grid item textAlign="center">
          <Card>
            <Clock />
            <Typography
         variant="h6"
         textAlign="center"
         my={1}
         >
          24-7
         </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default WhyUs;