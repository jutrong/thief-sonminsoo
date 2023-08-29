import React, { useState, useContext } from "react";
import axios from "../../api/axios";
import { signupContext } from "./Signup";
import * as S from "./style/EmailCertification.style";
import PageHeader from "./PageHeader";

const EmailCertification = () => {
  const [authValid, setAuthValid] = useState("");
  const useSignupContext = useContext(signupContext);
  console.log(useSignupContext, "useSignupContext");

  const handleEmailAuthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .get(`/auth/verification-code?email=${useSignupContext?.email}`)
      .then((res) => console.log("email res", res))
      .catch((e) => console.log(e));
  };
  const handleEmailAuthVaildClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    axios
      .post(`auth/verification-code`, {
        email: useSignupContext?.email,
        code: authValid,
      })
      .then((res) => {
        console.log("email res", res);
        useSignupContext?.setSignupStep("emailCertification");
        // setEmailAuthValidState(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <S.Container>
      {/* <PageHeader totalPages={3} currentPage={2} /> */}
      {/* TODO:깡 div 수정하기 */}
      <S.Agreement>본인인증하기</S.Agreement>
      <S.SubAgreement>
        정의로운 손민수 이용을 위해
        <br /> 이메일 인증을 해주세요
      </S.SubAgreement>
      <S.Form>
        <div>
          <S.InputEmail
            type="text"
            id="email"
            placeholder="이메일을 입력해 주세요."
            value={useSignupContext?.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              useSignupContext?.setEmail(e.target.value)
            }
          />
          <S.SendButton onClick={handleEmailAuthClick}>
            인증번호발송
          </S.SendButton>
        </div>
        <div>
          <S.InputNum
            type="text"
            id="emailCertificaton"
            placeholder="이메일 인증 번호를 입력해 주세요"
            value={authValid}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAuthValid(e.target.value)
            }
          />
          <S.SendButton onClick={handleEmailAuthVaildClick}>
            인증하기
          </S.SendButton>
        </div>
        <S.TextWithLink>
          이메일 인증번호가 발송되지 않았나요?<span>재발송하기</span>
        </S.TextWithLink>
      </S.Form>
    </S.Container>
  );
};
export default EmailCertification;