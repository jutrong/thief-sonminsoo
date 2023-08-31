import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import * as S from "./style/SettingList.style";
import axios from "../../api/axios";
import { useNavigate, Link } from "react-router-dom";
const SettingList = () => {
  const navigation = useNavigate();

  return (
    <>
      <HeaderBar BackButton={true} title={"설정"} />
      <S.SettingContainer>
        <Link to={"infoModify"}>
          <S.Menu>개인정보 수정</S.Menu>
        </Link>
        <Link to={"passwordModify"}>
          <S.Menu>비밀번호 재설정</S.Menu>
        </Link>
        <Link to={"sonminsooRule"}>
          <S.Menu>정의로운 손민수 십계명</S.Menu>
        </Link>
        <S.Menu
          onClick={() => {
            axios
              .delete(`/auth/sign-out`)
              .then((res) => {
                console.log(res);
                navigation("/home");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          로그아웃
        </S.Menu>
      </S.SettingContainer>
    </>
  );
};
export default SettingList;