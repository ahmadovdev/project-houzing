import React, {useRef} from 'react'
import {Dropdown} from 'antd'
import { Input, Button } from '../Generic';
import {Container, Icons, MenuWrapper, Section} from './style';

export const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  
  const roomsRef = useRef();
  const sizesRef = useRef();
  const sortRef = useRef();

  const maxRef = useRef();
  const minRef = useRef();


  const menu = (
  <MenuWrapper>
    <h1 className='subTitle'>Address</h1>
    <Section>
      <Input ref={countryRef} placeholder='Country'/>
      <Input ref={regionRef} placeholder='Region'/>
      <Input ref={cityRef} placeholder='City'/>
      <Input ref={zipRef} placeholder='Zip Code'/>
    </Section>
    <h1 className='subTitle'>Apartment info</h1>
    <Section>
      <Input ref={roomsRef} placeholder='Rooms'/>
      <Input ref={sizesRef} placeholder='Sizes'/>
      <Input ref={sortRef} placeholder='Sort'/>
    </Section>
    <h1 className='subTitle'>Price</h1>
    <Section>
      <Input ref={maxRef} placeholder='Max Price'/>
      <Input ref={minRef} placeholder='Min Price'/>
    </Section>
    <h1 className='subTitle'>Footer</h1>
    <Section>
    </Section>
  </MenuWrapper>
  )
  return(
    <Container>
      <Input
       placeholder={'Enter an address, neigborhood, city, or ZIP code'}
      icon={<Icons.Houses/>}
      />
      <Dropdown overlay={menu} placement="bottomRight" arrow={{ pointAtCenter: true }}>
      <div>
      <Button type='light'>
        <Icons.Filter/>Advanced
      </Button>
      </div>
      </Dropdown>
      <Button>
       <Icons.Search/>Search
      </Button>
    </Container>
  )
}

export default Filter