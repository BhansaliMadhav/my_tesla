import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
function Header() {
    const [burgerStatus, setburgerStatus] = useState(false);

    const cars = useSelector(selectCars);
    return(
        <Container>
            <a href={"#"}>
                <img src="/images/logo.svg" alt={""}/>
            </a>
            <Menu>
                {cars && cars.map((car, index)=>(
                    <a key={index} href={"#"}>{car}</a>
                ))}
                <a href={"#"}>Solar roof</a>
                <a href={"#"}>Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href={"#"}>Shop</a>
                <a href={"#"}>Account</a>
                <CustomMenu onClick={()=>setburgerStatus(true)}>

                </CustomMenu>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setburgerStatus(false)}/>
                </CloseWrapper>

                {cars && cars.map((car, index)=>(
                    <li key={index}><a href={"#"}>{car}</a></li>
                ))}
                <li><a href={"#"}>Existing Inventory</a></li>
                <li><a href={"#"}>Used Inventory</a></li>
                <li><a href={"#"}>Trade-in</a></li>
                <li><a href={"#"}>Cybertruck</a></li>
                <li><a href={"#"}>Roadster</a></li>

            </BurgerNav>
        </Container>
    )
}


export default Header


const Container = styled.div`
  min-height: 3rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 0 1.5rem;
  margin-left: 0.5rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  img{
    height: 1rem;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-style: normal;
    font-weight: 600;
    padding: 0.3rem 1rem;
    flex-wrap: nowrap;
  }

  a:hover {
    background-color: rgba(33, 34, 35, 0.1);
    -webkit-backface-visibility: visible;
    animation-duration: 0.3s;
    fill-opacity: 100%;
    font-optical-sizing: auto;
    transition: all 0.8s ease ;
    border-radius: 0.3rem;
  }

  @media (max-width: 720px) {
    visibility: hidden;
  }
`



const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    font-weight: 600;
    margin-right: 10px;
    padding: 0.3rem 0.3rem;
    border-radius: 0.3rem;
  }
  a:hover {
    background-color: rgba(33, 34, 35, 0.1);
    -webkit-backface-visibility: visible;
    animation-duration: 0.3s;
    fill-opacity: 100%;
    font-optical-sizing: auto;
  }
  
`



const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  border-radius: 0.3rem;
  
`


const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  font-size: 10px;
  background-color: white;
  width: 14rem;
  z-index: 16;
  list-style: none;
  padding: 20px ;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s ease;
  li{
    padding: 0.4rem 0;
    
    a{
      mso-element-frame-width: auto;
      font-weight: 600;
      font-size: 8px;
      padding: 0.3rem 1rem;
      border-radius: 0.3rem;
    }
    a:hover {
      background-color: rgba(33, 34, 35, 0.1);
      -webkit-backface-visibility: visible;
      animation-duration: 0.3s;
      fill-opacity: 100%;
      font-optical-sizing: auto;
    }
  }
  transform: ${props => props.show ? 'translateX(0)': 'TranslateX(100%)'};
`


const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  margin: 0;
  padding: 0;
`

const CloseWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 5px;
  right: 0.8rem;
  cursor: pointer;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  
`