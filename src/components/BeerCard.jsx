import { CardStyled } from '../StyledComponents/CardStyled'

function BeerCard(props) {

  const {image_url, name, first_brewed} = props

return <>
   <CardStyled>
   <div>
   <img src={image_url} alt={name} height={500} width={300} />
   </div>
     <div>
       <h4>{name}</h4>
       <h6>
       First Brewed In: {first_brewed}
       </h6>
     </div>
   </CardStyled>
</>
}
export default BeerCard;