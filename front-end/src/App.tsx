import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import FeedbackForm from "./components/FeedbackForm";
import GoogleMapComponent from "./components/GoogleMap";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import YellowFooter from "./assets/YellowFooter.svg";
import FullPink from "./assets/FullPink.svg";
import YellowCircle from "./assets/YellowCircle.svg";

const Container = styled.div`
  display: flex;
  font-weight: 400;
  font-weight: bold;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-image: url("/src/assets/Cloud.svg");
`;

export const AssetYellowImage = styled.div`
  position: absolute;
  top: 0;
  left: calc(5% - 60px);
  width: 150px;
  height: 150px;
  background-image: url(${YellowFooter});
  background-size: cover;
  background-position: center;
  @media (max-width: 820px) {
    display: none;
  }
`;

export const AssetPinkImage = styled.div`
  position: absolute;
  left: calc(40% - 60px);
  width: 250px;
  height: 250px;
  background-image: url(${FullPink});
  background-size: cover;
  background-position: center;
  z-index: 1;
  @media (max-width: 820px) {
    display: none;
  }
`;

export const AssetYellowCircle = styled.div`
  position: absolute;
  top: 290px;
  left: calc(37% - 60px);
  width: 150px;
  height: 150px;
  background-image: url(${YellowCircle});
  background-size: cover;
  background-position: center;
  z-index: 1;

  @media (max-width: 820px) {
    display: none;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <AssetPinkImage />
        <AssetYellowImage />
        <AssetYellowCircle />
        <FeedbackForm />
        <GoogleMapComponent />
        <ToastContainer />
      </Container>
      <Footer />
    </Provider>
  );
}

export default App;
