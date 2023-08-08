import { Card, 
        Container, 
        Grid, 
        Typography
     } from "@mui/material";
import Link from "next/link";

const Guide = () => {
  return (
    <>
      <Typography
        fontWeight="bold"
        variant="h5"
        textAlign="center"
        mt={12}
        color="#f69435"
      >
       راهنما
      </Typography>
      <Container>
        <Grid
          container
          display="grid"
          gridAutoColumns="auto"
          gridTemplateColumns={{
            md: "repeat(3,1fr)",
            xs: "repeat(1,1fr)",
          }}
          sx={{ gap: { md: 3, xs: 1 }, marginY: "50px" }}
        >
          <Grid 
          item 
          textAlign="center" 
          display="flex" 
          justifyContent="center"
          >
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <Card sx={{ width: "100px", textAlign: "center" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  textAlign="center"
                  my={1}
                >
                  منو
                </Typography>
              </Card>
            </Link>
          </Grid>
          <Grid 
          item 
          textAlign="center" 
          display="flex" 
          justifyContent="center"
          my={{xs: 5, md: 0}}
          >
            <Link href="/categorys" style={{ textDecoration: "none", color: "black" }}>
              <Card sx={{ width: "150px", textAlign: "center" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  textAlign="center"
                  my={1}
                >
                  نوع غذا
                </Typography>
              </Card>
            </Link>
          </Grid>

          <Grid 
          item 
          textAlign="center" 
          display="flex" 
          justifyContent="center"
          >
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <Card sx={{ width: "150px", textAlign: "center" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  textAlign="center"
                  my={1}
                >
                  تخفیف ها
                </Typography>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Guide;
