import React from "react";
import styled from "styled-components";

function Movies(props) {
  return (
    <Container>
      <h4>{props.title}</h4>
      {/* <h4>Recommended for you</h4> */}
      <br />
      <Content>
        <Wrap>
          <img
            src="https://i0.wp.com/kakuchopurei.com/wp-content/uploads/2021/10/Eternals-2-1.jpg?fit=1280%2C720&ssl=1"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fshanonlee%2Ffiles%2F2018%2F12%2FBird-Box-1200x725.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cdn.vox-cdn.com/thumbor/kLhMHqhPRHYV2SPs-qOgIw_uO6I=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63304028/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cdn.vox-cdn.com/thumbor/vvDT6zeUMX89dpbk0NP2YuGb8K0=/0x0:1687x2500/1200x800/filters:focal(714x2027:982x2295)/cdn.vox-cdn.com/uploads/chorus_image/image/69335080/Eternals_Teaser_1_Sheet_v10_Lg.0.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.thedirect.com/media/article_full/shang-chi-review-mcu.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://ae01.alicdn.com/kf/HTB1b5PKIpOWBuNjy0Fiq6xFxVXa8/DIY-frame-The-Vampire-Diaries-Sexy-Girl-Blood-Season-6-Hot-TV-Series-Movie-Film-Poster.jpg"
            alt=""
          />
        </Wrap>

        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVI-WWJfnTYILW3fTCtgZURcbIeYUto7tVQ&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://townsquare.media/site/442/files/2017/10/captain_america_the_winter_soldier_ver2_xlg.jpg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 50px;
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0/80%) 0px 26px 30px -10px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
