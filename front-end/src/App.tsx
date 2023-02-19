import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import FeedbackForm from "./components/FeedbackForm";
import GoogleMapComponent from "./components/GoogleMap";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

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

function App() {
  return (
    <Provider store={store}>
      <Container>
        <FeedbackForm />
        <GoogleMapComponent />
        <ToastContainer />
      </Container>
      <Footer />
    </Provider>
  );
}

export default App;
