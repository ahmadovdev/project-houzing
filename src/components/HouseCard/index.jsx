import { Container, Content, Detailss, Icons, Image, Divider } from "./style";
import noImg from "../../assets/img/noimg.png";

export const HouseCard = ({ data = {} }) => {
  const {
    attachments,
    houseDetails,
    salePrice,
    price,
    address,
    city,
    country,
    description,
  } = data;
  console.log(data);
  return (
    <Container>
      <Image src={(attachments && attachments[0]?.imgPath) || noImg} />
      <Content>
        <div className="subTitle inline">
          {city}, {country}, {description}{" "}
        </div>
        <div className="info">{address || "Quincy St, Brooklyn, NY, USA"}</div>
        <Detailss>
          <Detailss.Item>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0}</div>
          </Detailss.Item>
          <Detailss.Item>
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0}</div>
          </Detailss.Item>
          <Detailss.Item>
            <Icons.Garage />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Detailss.Item>
          <Detailss.Item>
            <Icons.Ruler />
            <div className="info">Ruler {houseDetails?.area || 0}kv</div>
          </Detailss.Item>
        </Detailss>
      </Content>
      <Divider />
      <Content footer>
        <Detailss.Item footer>
          <div className="info">${salePrice || 0}/mo</div>
          <div className="subTitle">${price || 0}/mo</div>
        </Detailss.Item>
        <Detailss.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Detailss.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
