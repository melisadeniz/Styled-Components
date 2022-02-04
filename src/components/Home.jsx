import {Card} from "../StyledComponents/CardStyled"
import { ContainerStyled } from "../StyledComponents/ContainerStyled";
// import { Grid } from "../StyledComponents/Grid"
import {TextStyled} from "../StyledComponents/TextStyled"

function Home() {
  return (
    <>
      <ContainerStyled>
   
        <Card>
        <TextStyled>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit ducimus rem aperiam impedit culpa porro enim maiores fuga? Itaque animi fugit a iusto necessitatibus, deleniti reiciendis incidunt eum quam, est labore provident consequuntur quos tempore quae atque. Dolorum, explicabo.
        </TextStyled>
        </Card>
      <br />
        <Card>
        <TextStyled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit ducimus rem aperiam impedit culpa porro enim maiores fuga? Itaque animi fugit a iusto necessitatibus, deleniti reiciendis incidunt eum quam, est labore provident consequuntur quos tempore quae atque. Dolorum, explicabo.
        </TextStyled>
        </Card>

      </ContainerStyled>
    </>
  );
}

export default Home;
