import { Container, Content, Detailss, Icons, Image, Divider } from './style';
import noImg from '../../assets/img/noimg.png'

export const HouseCard = ({url, title, bed, bath, garage, ruler, info}) => {
  return (
    <Container>
      <Image src={url || noImg } />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Detailss>
          <Detailss.Item>
            <Icons.Bed/>
            <div className="info">Bed {bed || 0}</div>
          </Detailss.Item>
          <Detailss.Item>
            <Icons.Bath/>
            <div className="info">Bath {bath || 0}</div>
          </Detailss.Item>
          <Detailss.Item>
            <Icons.Garage/>
            <div className="info">Garage {garage || 0}</div>
          </Detailss.Item>
          <Detailss.Item>
            <Icons.Ruler/>
            <div className="info">Ruler {ruler || 0}</div>
          </Detailss.Item>
        </Detailss>
      </Content>
      <Divider />
      <Content footer>
        <Detailss.Item footer>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Detailss.Item>
        <Detailss.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Detailss.Item>
      </Content>
    </Container>
    )
}

export default HouseCard