import React from "react";
import styled from "styled-components";
function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://cdn.vox-cdn.com/thumbor/vvDT6zeUMX89dpbk0NP2YuGb8K0=/0x0:1687x2500/1200x800/filters:focal(714x2027:982x2295)/cdn.vox-cdn.com/uploads/chorus_image/image/69335080/Eternals_Teaser_1_Sheet_v10_Lg.0.jpg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://cdn.vox-cdn.com/thumbor/vvDT6zeUMX89dpbk0NP2YuGb8K0=/0x0:1687x2500/1200x800/filters:focal(714x2027:982x2295)/cdn.vox-cdn.com/uploads/chorus_image/image/69335080/Eternals_Teaser_1_Sheet_v10_Lg.0.jpg"
          alt=""
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2022 -7m -Family,Comdey, Adventures..</SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        aspernatur sapiente, modi minima deserunt rem ducimus repudiandae,
        aliquam voluptatem a harum doloremque ipsum repellat culpa quae quia
        sequi cumque dignissimos.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  posititon: relative;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // font-size: 3rem;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottm: 0;
  right: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: -105px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  padding: 0px 24px;
  font-size: 15px;
  display: flex;
  letter-spacing: 1.8px;
  margin-right: 22px;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  max-width: 700px;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
