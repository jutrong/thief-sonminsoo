import { useState, useEffect } from "react";
import * as S from "./style/FandomRanking.style";

type FandomRankData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    thumbnailImgUrl: string;
};
type FandomData = FandomRankData[];

type FandomdataProps = {
    item: FandomRankData;
};

const FandomRanking: React.FC<FandomdataProps> = ({ item }) => {
    //  const [rankData, setRankData] = useState<FandomData | undefined>(undefined);
    console.log("dd", item);

    useEffect(() => {}, []);

    return (
        <S.FandomRankingContainer key={item.id}>
            <S.RankingNumberText>{item.rank}</S.RankingNumberText>
            <S.CircleImg />
            <S.RnakingTextBox>
                <S.FandomNameMemberBox>
                    <S.FandomNameText>{item.fandomName}</S.FandomNameText>
                    <S.MamberIcon />
                    <S.MemberQuantity>{item.memberLength}k</S.MemberQuantity>
                </S.FandomNameMemberBox>
                <S.ActivityTime>채팅활동 10분전</S.ActivityTime>
            </S.RnakingTextBox>
        </S.FandomRankingContainer>
    );
};

export default FandomRanking;
