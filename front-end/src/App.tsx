import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import FeedbackForm from "./components/FeedbackForm";
import GoogleMapComponent from "./components/GoogleMap";
import { ToastContainer } from "react-toastify";

const Container = styled.div`
  display: flex;
  font-weight: 400;
  font-weight: bold;
  margin: 0:
  padding: 0;
  box-sizing: border-box;
  background-color: ##FFFFFF;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <FeedbackForm />
        <GoogleMapComponent />
        <ToastContainer />
      </Container>
    </Provider>
  );
}

export default App;
