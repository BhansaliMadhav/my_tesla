import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
    return(
        <Container>
            <Section title = "Model Y" link = "Schedule a Demo Drive" backgroundimg ="model-y.jpg" leftBtnText = "Custom Order" rightBtnText="Existing Inventory"></Section>
            <Section title = "Model 3" link = "Schedule a Demo Drive" backgroundimg ="model-3.jpg" leftBtnText = "Custom Order" rightBtnText="Existing Inventory"></Section>
            <Section title = "Model S" link = "Schedule a Demo Drive" backgroundimg ="model-s.jpg" leftBtnText = "Custom Order" rightBtnText="Existing Inventory"></Section>
            <Section title = "Model X" link = "Schedule a Demo Drive" backgroundimg ="model-x.jpg" leftBtnText = "Custom Order" rightBtnText="Existing Inventory"></Section>
            <Section title = "Lowest Cost Solar Panel in America" description = "Money-back guarantee" backgroundimg ="solar-panel.jpg" leftBtnText = "Order Now" rightBtnText="Learn More"></Section>
            <Section title = "Solar for New Roofs" description = "Solar Roof Costs Less Than A New Roof Plus Solar Panels" backgroundimg ="solar-roof.jpg" leftBtnText = "Order Now" rightBtnText="Learn more"></Section>
            <Section title = "Accessories" description = "" backgroundimg ="accessories.jpg" leftBtnText = "Shop Now" rightBtnText=""></Section>
        </Container>
    )
}

export default Home



const Container = styled.div`
  height: 100vh;
  
`