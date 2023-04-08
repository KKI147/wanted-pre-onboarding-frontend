import { useEffect, useState } from "react";
import {
  Layout,
  UseForm,
  Title,
  Section,
  LabelBox,
  InputBox,
  InputForm,
  BtnBox,
  JoinButton,
} from "./style";

const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
const PASSWORD_REGEX = /.{8,}/;

const SignUp = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [disable, setDisable] = useState(true);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  useEffect(() => {
    if (EMAIL_REGEX.test(input.email) && PASSWORD_REGEX.test(input.password))
      setDisable(false);
    else setDisable(true);
  }, [input]);

  return (
    <Layout>
      <UseForm onSubmit={handleSubmit}>
        <Title>SignUp</Title>
        <Section>
          <LabelBox>
            <label htmlFor="email">email</label>
          </LabelBox>
          <InputBox>
            <InputForm
              type="text"
              name="email"
              data-testid="email-input"
              placeholder="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
              title="@을 포함한 email을 입력해주세요."
              onChange={onChangeHandler}
              value={input.email}
            />
          </InputBox>
        </Section>

        <Section>
          <LabelBox>
            <label htmlFor="password">password</label>
          </LabelBox>
          <InputBox>
            <InputForm
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="password"
              pattern=".{8,}"
              title="비밀번호는 8자 이상입니다."
              onChange={onChangeHandler}
              value={input.password}
            />
          </InputBox>
        </Section>

        <BtnBox>
          <JoinButton
            data-testid="signup-button"
            type="submit"
            disabled={disable}
          >
            회원가입
          </JoinButton>
        </BtnBox>
      </UseForm>
    </Layout>
  );
};
export default SignUp;