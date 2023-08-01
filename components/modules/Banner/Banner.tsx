import { NextPage } from "next";
import { Typography,
         Button,
         Divider} from "@mui/material";
import { useRouter as useNextRouter } from "next/router";


interface LandingProps {
    image: string;
}

type Router = ReturnType<typeof useNextRouter>;
  
  const Banner: NextPage<LandingProps> = ({ image }) => {

    const router:Router = useNextRouter();

    const mystyle = {
      backgroundImage: `url(${image})`,
      margin: "0px",
      height: "calc(80vh)",
      width:"100wv",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      transition: "all 0.2s linear",
      display: "flex",
      flexDirection: "column" as const, 
      justifyContent: "center" as const, 
      alignItems: "center" as const, 
      color: "#fff",
    };
    return (
        <>
<div style={mystyle}>
  <Typography fontWeight="bold" variant="h4" mt={1}>
    سرزمین سوخاری
    <Divider sx={{ backgroundColor: "#FFA500", borderWidth:"1.5px" }}  />
  </Typography>
  <Typography fontWeight="bold" variant="h5" mt={1}>
    رستوران های زنجیره ای سرزمین سوخاری
  </Typography>
  <Button
    variant="contained"
    color="success"
    sx={{ margin: "10px 0px" }}
    onClick={() => {
      router.push("/");
    }}
  >
    <Typography fontWeight="div" variant="h6" textAlign="right">
      سفارش آنلاین
    </Typography>
  </Button>
</div>
        </>
    )
}

export default Banner;