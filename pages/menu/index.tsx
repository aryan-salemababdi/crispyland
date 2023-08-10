import { NextPage } from 'next';
import MenuPage from '../../components/temp/MenuPage/MenuPage';

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




const Menu:NextPage<Menu> = ({data}) => {
  return (
    <div style={{ height: "100%",width:"100%"}}>
    <MenuPage
    data={data}
    
    />
    </div>
  )
}

export default Menu;


export async function getStaticProps(){

    const res = await fetch(`${process.env.BASE_URL}/fried-chicken`);
    
    const data = await res.json();

    return{
        props:{
            data
        },
        revalidate:10, // for now
    }

};