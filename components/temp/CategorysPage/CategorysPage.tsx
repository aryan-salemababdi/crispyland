import { useState } from "react";
import { Button,
         Container,
         Divider,
         Grid,
        Typography,
        FormControl,
        Select,
        InputLabel,
        MenuItem,
        Card,
        CardMedia,
        CardContent,
        Rating,
        CardActions
        } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next";
import  LocationOnIcon  from '@mui/icons-material/LocationOn';
import  AddIcon  from '@mui/icons-material/Add';
import  RemoveIcon  from '@mui/icons-material/Remove';
import {
    increment,
    decrement,
    updateTotalPrice,
  } from "../../../stores/slices/templateSlice/templateSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedItem } from "../../../stores/slices/templateSlice/templateSlice";


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
    data: MenuItem[];
  }

const CategorysPage:NextPage<dataType> = ({data}) => {

  const router = useRouter();
  const [query, setQuery] = useState<{ rate: string }>({
    rate:"",
  });

  const [search, setSearch] = useState<string>("");
  const selectedItem = useSelector(selectSelectedItem);
  const dispatch = useDispatch();

  const handleChange = (e:any) => {
    setQuery({...query, [e.target.name] : e.target.value})
  };

  const searchHandler = () => {

    router.push({pathname:"/categorys", query})    

  }


  const totalPrice = selectedItem.reduce((total, itemId) => {
    const selectedItemPrice = data.find((item) => item.id === itemId)?.price;
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
    <div style={{ margin: "100px 0px" }}>
      <Container>
        <Grid display="flex" justifyContent="center">
          <Grid item>
            <Typography fontWeight="bold" variant="h4" mt={1}>
              دسته بندی
              <Divider
                sx={{ backgroundColor: "#FFA500", borderWidth: "1.5px" }}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center" m="10px 0px">
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-label" color="warning">
                امتیاز
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={query.rate}
                name="rate"
                label="rate"
                onChange={handleChange}
              >
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="1">1</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid display="flex" justifyContent="center">
          <Button variant="contained" color="warning" onClick={searchHandler}>
          <Typography fontWeight="bold">search</Typography>
          </Button>
          </Grid>
          {

            !data.length
            ?
        
                <Grid display="flex" justifyContent="center" m="20px 0px">
                <Image
                  src="/images/search.png"
                  alt="search"
                  width={300}
                  height={300}
                />
              </Grid>
            
            :
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
            {
            data.map(menu => {
                    return(
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
                            <Rating
                              name="half-rating"
                              defaultValue={menu.rate}
                              precision={0.5}
                              readOnly
                            />
                            <Typography variant="body2" color="text.secondary">
                              {menu.dsc}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              ${menu.price}
                            </Typography>
                            <Button
                              size="small"
                              onClick={() => {
                                router.push(`/menu/${menu.id}`);
                              }}
                            >
                              <Typography fontWeight="bold">مشاهده جزئیات</Typography>
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
                            $
                            {(
                              selectedItem.filter((item) => item === menu.id).length *
                              menu.price
                            ).toFixed(2)}
                          </Typography>
                        </Card>
                      </Grid>
                    )
            })
        }
             </Grid>
          }

      </Container>
    </div>
  );
};

export default CategorysPage;
