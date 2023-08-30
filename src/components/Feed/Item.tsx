import React from "react";
import * as S from "./style/Item.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
// import { FeedItemProps } from "../../types/feed";
export type Data = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: SonminsuItems;
  image: string;
  tags: string[];
  comments: number;
};
export type SonminsuItems = {
  id: number;
  isInBucket: boolean;
  createdAt: string;
  originUrl: string;
  title: string;
  price: number;
  imgUrl: string;
  groupName: string;
  artistName: string;
};
export type FeedItemProps = {
  items: SonminsuItems[];
};

const ItemBox: React.FC<FeedItemProps> = ({ items }) => {
  const navigate = useNavigate();
  const swiperParams = {
    slidesPerView: 3.5,
    spaceBetween: 10,
  };
  return (
    <S.ItemWrap>
      <Swiper {...swiperParams}>
        {items &&
          items.map((item, itemIndex) => (
            <SwiperSlide
              key={`${itemIndex}`}
              onClick={() => {
                navigate(`/minsooItem/details/${item.id}`);
              }}
            >
              <S.Item src={item.imgUrl} />
              <S.ProductName>{item.title}</S.ProductName>
              <S.Price>
                {item.price}
                <S.Won></S.Won>
              </S.Price>
            </SwiperSlide>
          ))}
      </Swiper>
    </S.ItemWrap>
  );
};

export default ItemBox;
