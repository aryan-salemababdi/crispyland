import { NextPage } from "next";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCounter, selectSelectedItem } from "../../../stores/slices/templateSlice/templateSlice";
import { increment, decrement } from "../../../stores/slices/templateSlice/templateSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

interface MenuItem {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
  raate: number;
  country: string;
}

interface dataType {
  data: MenuItem[];
}

const MenuPage: NextPage<dataType> = ({ data }) => {

  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const counter = useSelector(selectCounter);
  const selectedItem = useSelector(selectSelectedItem);
  const dispatch = useDispatch();

  const handleIncrement = (id: string) => {
    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, id]);
    dispatch(increment(id));
  };

  const handleDecrement = (id:string) => {
    setSelectedCards((prevSelectedCards) => prevSelectedCards.filter((itemId) => itemId !== id));
    if (counter > 0) dispatch(decrement(id));
  };
  

  return (
    <>
    {
        data
        ?
    <>
      <Typography
        fontWeight="bold"
        variant="h5"
        textAlign="center"
        mt={15}
        color="#f69435"
      >
        لیست غذا ها
      </Typography>
      <Grid
        container
        display="grid"
        gridAutoColumns="auto"
        gridTemplateColumns={{
          md: "repeat(3,1fr)",
          xs: "repeat(1,1fr)",
        }}
        p={2}
      >
        {data.map((menu) => (
          <Grid m={1} item key={menu.id}>
            <Card>
              <CardMedia
                sx={{ height: 200 }}
                image={menu.img}
                title={menu.id}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {menu.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="address">
                  <LocationOnIcon />
                  {menu.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {menu.dsc}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${menu.price}
                </Typography>
                <Button size="small">
                  مشاهده جزئیات
                </Button>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="warning"
                  onClick={() => handleIncrement(menu.id)}
                >
                  <AddIcon />
                </Button>
                <Typography variant="body2" color="text.secondary" ml={1}>
                {selectedItem.filter((item) => item === menu.id).length}
                </Typography>
                <Button
                  size="small"
                  color="warning"
                  onClick={()=>handleDecrement(menu.id)}
                >
                  <RemoveIcon />
                </Button>
              </CardActions>
              <Typography 
              variant="h6" 
              color="green" 
              fontWeight="bold" 
              textAlign="center" 
              my={1}
              >
                ${((selectedItem.filter((item) => item === menu.id).length)*menu.price).toFixed(2)}
                </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
    :
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        loading
    </div>
}
    </>
  );
};

export default MenuPage;
