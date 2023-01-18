import { Container, Content, Image, Blur } from "./style";
import noImg from "../../assets/img/noimg.png";
import category from "../../assets/img/category.png";

export const HouseCard = ({ data = {} }) => {
  const { name } = data;
  return (
    <Container>
      <Image src={category || noImg} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default HouseCard;
