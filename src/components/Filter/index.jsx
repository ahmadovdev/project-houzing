import React, { useRef } from "react";
import { Dropdown } from "antd";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";

export const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch()

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizesRef = useRef();
  const sortRef = useRef();

  const maxRef = useRef();
  const minRef = useRef();

  console.log(query.get('country'), 'params');

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get('country')}
          onChange={onChange}
          ref={countryRef}
          name="country"
          placeholder="Country"
        />
        <Input
          defaultValue={query.get('region')}
          onChange={onChange}
          ref={regionRef}
          name="region"
          placeholder="Region"
        />
        <Input
          defaultValue={query.get('city')}
          onChange={onChange}
          ref={cityRef}
          name="address"
          placeholder="City"
        />
        <Input
          defaultValue={query.get('zip_code')}
          onChange={onChange}
          ref={zipRef}
          name="zip_code"
          placeholder="Zip Code"
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} placeholder="Rooms" />
        <Input ref={sizesRef} placeholder="Sizes" />
        <Input ref={sortRef} placeholder="Sort" />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={maxRef} placeholder="Max Price" />
        <Input ref={minRef} placeholder="Min Price" />
      </Section>
      <h1 className="subTitle">Footer</h1>
      <Section></Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        placeholder={"Enter an address, neigborhood, city, or ZIP code"}
        icon={<Icons.Houses />}
      />
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        trigger="click "
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Button type="light">
            <Icons.Filter />
            Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
