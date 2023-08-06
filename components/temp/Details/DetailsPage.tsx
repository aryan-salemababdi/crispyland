import { Box, Container, Grid, Typography, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MenuItem {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
  rate: number;
  country: string;
}

interface dataType {
  data: MenuItem;
}

const DetailsPage: NextPage<dataType> = ({ data }) => {
  const [value, setValue] = useState<number | null | undefined>(undefined);

  const myLoader = ({ src, width }: { src: string; width: number }) => {
    return `${src}?w=${width}`;
  };

  useEffect(() => {
    if (value !== undefined) {
      alert(value);
    }
  }, [value]);

  return (
    <div style={{ margin: "100px 0px" }}>
  
        <Grid
          container
          display="flex"
          justifyContent="space-around"
        >
          <Grid item >
            <Image
              loader={myLoader}
              src={data.img}
              alt={data.name}
              layout="responsive"
              width={500} 
              height={500}
              style={{borderRadius:"2%"}} 
            />
            </Grid>
            <Grid item textAlign="center">
            <Typography fontWeight="bold" variant="h4" color="orange">
              {data.name}
            </Typography>
            <Box justifyContent="center" color="GrayText" display="flex" alignItems="center">
              <LocationOnIcon />
              <Typography fontWeight="bold" variant="h6">
                {data.country}
              </Typography>
            </Box>
            <Box color="GrayText" display="flex" justifyContent="center" alignItems="center">
              <PaymentsIcon />
              <Typography m="0px 5px" fontWeight="bold" variant="h6">
                ${data.price}
              </Typography>
            </Box>
            <Rating
              name="half-rating"
              defaultValue={data.rate}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              precision={0.5}
            />
            <Typography fontWeight="bold" variant="h6" color="InfoText">
              {data.dsc}
            </Typography>
          </Grid>
        </Grid>
    </div>
  );
};

export default DetailsPage;
