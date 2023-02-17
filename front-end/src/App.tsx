import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import FeedbackForm from "./components/FeedbackForm";

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
      </Container>
    </Provider>
  );
}

export default App;
