import { NextPage } from "next";
import CategorysPage from "../../components/temp/CategorysPage/CategorysPage";

interface MenuItem {

    id:string;
    img:string;
    name:string;
    dsc:string;
    price:number;
    rate:number;
    country:string;
    
}

interface Menu {

    data : MenuItem[];

}

const Categorys:NextPage<Menu> = ({data}) => {

    
  return (
    <div 
    style={{height:"100%",width:"100%"}}
    >
        <CategorysPage
        data = {data}
        />
     </div>
  )
}

export default Categorys;

export async function getServerSideProps(context:any){

    const {
        query: { rate },
      } = context;

    const res = await fetch(`${process.env.BASE_URL}/fried-chicken`);

    const data = await res.json();

      const filteredData = data.filter((item:any) => item.rate === parseInt(rate));

    return{
        props:{
            data:filteredData
        },
    }

};