import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { brandName } from '../../constants/data';

const FrontScroller = () => {
  return (
    <section className='front-scroller-service-section'>
      <div className='container mx-auto'>
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              {brandName?.map((item) => (
                <BrandGroups>
                  <BrandLogo key={item?.id}>{item?.name}</BrandLogo>
                </BrandGroups>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {brandName?.map((item) => (
                <BrandGroups>
                  <BrandLogo key={item?.id}>{item?.name}</BrandLogo>
                </BrandGroups>
              ))}
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </div>
    </section>
  );
};

export default FrontScroller;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Marquee = styled.div`
  display: flex;
  width: 100%;
  user-select: none;
  overflow: hidden;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), transparent 10%);
`;

const scrollX = keyframes`
  from{
    left: translateX(0);
  }
  to{
    transform: translateX(-100%);
}
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
  white-space: nowrap;
  width: 100%;
  padding-left: 40px;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const BrandGroups = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem+40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem+30vmin, 30rem) / 10);
`;
const BrandLogo = styled.h4`
  font-size: 2.5rem;
  font-family: 'Young Serif', serif;
  font-weight: 700;
  opacity: 0.5;
`;
