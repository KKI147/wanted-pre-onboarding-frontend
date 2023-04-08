import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Wrapper>
        <Title>HomePage</Title>

        <NavigateButton onClick={() => navigate(`/signup`)}>
          SignUp
        </NavigateButton>
        <NavigateButton onClick={() => navigate(`/signin`)}>
          SignIn
        </NavigateButton>
      </Wrapper>
    </Layout>
  );
};
export default Home;

const Layout = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 0 0 50px;
`;
const NavigateButton = styled.button`
  position: relative;
  width: 25%;
  height: 8%;
  margin: 15px 10px 0;
  background: transparent;
  border: 1px solid orange;
  border-radius: 24px;
  cursor: pointer;
`;
