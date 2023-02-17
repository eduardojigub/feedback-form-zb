import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import FeedbackForm from "./components/FeedbackForm";
import GoogleMapComponent from "./components/GoogleMap";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <FeedbackForm />
        <GoogleMapComponent />
      </Container>
    </Provider>
  );
}

export default App;
