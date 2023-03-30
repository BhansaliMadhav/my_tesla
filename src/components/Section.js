import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import * as Scroll from "react-scroll"
function Section({title, description,leftBtnText,rightBtnText,backgroundimg, link}){
    return(
        <Wrap bgImage = {backgroundimg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <a href={"#"}>{link}</a>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{leftBtnText}</LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                </ButtonGroup>
                </Fade>
                <DownArrow src="images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    )

    
}


export default Section


const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // eslint-disable-next-line no-template-curly-in-string
  background-image: ${props => `url("/images/${props.bgImage}")`};
  z-index: 0;
  
`



const ItemText = styled.div`
  padding-top: 60px;
  
  text-align: center;
  a{
    text-decoration: underline;
    font-size: 0.8rem;
  }
  p{
    font-size: 0.8rem;
  }
`


const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 4%;
  @media (max-width: 720px){
    flex-direction: column;
    
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32,0.8);
  height: 20px;
  width: 128px;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.78rem;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
`

const RightButton = styled.div`
  background-color: white;
  height: 20px;
  width: 128px;
  color: rgba(23, 26, 32, 0.8);
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.65;
  text-transform: uppercase;
  font-size: 0.78rem;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
`



const DownArrow = styled.img`
  
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.2s;
  
`


const Buttons = styled.div`
  
`