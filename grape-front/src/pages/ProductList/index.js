import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import * as useProductList from '../../hooks/api/useProductList';
import Product from './product';
export default function ProdudctList() {

    const [productList, SetProductList] = useState([])
    const [productListMenu, SetProductListMenu] = useState(true)

    const { ListAllProducts } = useProductList.GetProductList()

    useEffect(() => {
      GetAllProducts()
    }, []);

    async function GetAllProducts(){
      try {
        const ProductData = await ListAllProducts();
        console.log(ProductData)
        SetProductList(ProductData);
    } catch {
        toast('Não foi possível encontrar os produtos');
    } 
    }
    console.log(productList)
    if(productList.length >= 1){
      return (
        productList.map((e) => {
          return (
            <Product productList={e} />
           );
         }
       )

      )
    }else{
      return(  
        <Alert> você ainda não adicionou nenhum produto</Alert>
      )

    }

}

const Alert = styled.div`
height:90vh;
color:#8E65E3;
display:flex;
align-items:center;
justify-content:center;

`;
const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:70px;
`;
const IngredientContainer = styled.div`
  height: 65px;
  min-width:330px;
  max-width:500px;
  width:50%;
  margin-top:30px;
  padding:20px 50px 20px 20px;
  border-radius:10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:relative;
  background-color: ${(props) => {
    if (props.color) {
      return "#8E65E3";
    } else {
      return "#C6A3FC";
    }
  }};
  color: ${(props) => {
    if (props.color) {
      return "#F7F7F7";
    } else {
      return "#FFFFFF";
    }
  }};
  button{
    right:15px;
    position:absolute;
    background-color:${(props) => {
        if (props.color) {
        return "#8E65E3";
        } else {
        return "#C6A3FC";
        }
    }};
    border-style:none;
    color: red;
    font-size:11px;
    :hover{
        font-size:18px;
        cursor: pointer;
    }
  }
  :hover{
    height: 75px;
    min-width:340px;
    max-width:520px;
    width:56%;
  }

`;

const IngredientContainerList = styled.div`
  height: 250px;
  min-width:340px;
    max-width:520px;
    width:56%;
  margin-top:30px;
  padding:20px 50px 20px 20px;
  border-radius:10px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction:column;
  justify-content: space-between;
  position:relative;
  background-color: ${(props) => {
    if (props.color) {
      return "#8E65E3";
    } else {
      return "#8E65E3";
    }
  }};
  color: ${(props) => {
    if (props.color) {
      return "#F7F7F7";
    } else {
      return "#FFFFFF";
    }
  }};
  button{
    right:15px;
    position:absolute;
    background-color:${(props) => {
        if (props.color) {
        return "#8E65E3";
        } else {
        return "#C6A3FC";
        }
    }};
    border-style:none;
    color: red;
    font-size:11px;
    :hover{
        font-size:18px;
        cursor: pointer;
    }
  }
  .Title{
    height:45px;
    width:100%;
    padding:25px;
    top:0px;
    left:0px;
    border-radius:10px 10px 0px 0px;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#C6A3FC;

  }

`;

const IngredientList = styled.div`
  width:100%;
  margin-right:-20px;
  border-radius:2px;
  display:flex;
  justify-content:space-between;
  border-style:solid;
  border-width:2px;
  border-style:none none solid none;
  align-items:center;
`;

