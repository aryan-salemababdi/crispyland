import { NextPage } from "next";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedItem } from "../../../stores/slices/templateSlice/templateSlice";
import { increment, decrement, updateTotalPrice } from "../../../stores/slices/templateSlice/templateSlice";
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
  TextField,
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
  const [search, setSearch] = useState<string>("");
  const selectedItem = useSelector(selectSelectedItem);
  const dispatch = useDispatch();


  const totalPrice = selectedItem.reduce((total, itemId) => {
    const selectedItemPrice = data.find(item => item.id === itemId)?.price;
    return total + (selectedItemPrice || 0);
  }, 0);

  dispatch(updateTotalPrice(totalPrice));

  const handleIncrement = (id: string) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id: string) => {
    if (selectedItem.includes(id)) {
      dispatch(decrement(id));
    }
  };

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <>
      {data ? (
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
            <TextField
              id="outlined-basic"
              label="نام غذای خود را وارد کنید"
              name="foodSearch"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="outlined"
            />
            {search === "" ? (
              data.map((menu) => (
                <Grid m={1} item key={menu.id}>
                <Card>
                  <CardMedia sx={{ height: 200 }} image={menu.img} title={menu.id} />
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
                    <Button size="small">مشاهده جزئیات</Button>
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
                      onClick={() => handleDecrement(menu.id)}
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
                    ${(
                      selectedItem.filter((item) => item === menu.id).length * menu.price
                    ).toFixed(2)}
                  </Typography>
                </Card>
              </Grid>
              ))
            ) : filteredData.length > 0 ? (
              filteredData.map((menu) => (
                <Grid m={1} item key={menu.id}>
                  <Card>
                    <CardMedia sx={{ height: 200 }} image={menu.img} title={menu.id} />
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
                      <Button size="small">مشاهده جزئیات</Button>
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
                        onClick={() => handleDecrement(menu.id)}
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
                      ${(
                        selectedItem.filter((item) => item === menu.id).length * menu.price
                      ).toFixed(2)}
                    </Typography>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid
              sx={{height:"100vh"}}
              >
              <Typography variant="h5" textAlign="center" mt={2} color="red">
                موردی یافت نشد
              </Typography>
              </Grid>
            )}
          </Grid>
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          loading
        </div>
      )}
    </>
  );
};

export default MenuPage;
