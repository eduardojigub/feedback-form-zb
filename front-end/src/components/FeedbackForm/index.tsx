import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setName, setEmail, setMessage } from "../../redux/feedbackSlice";
import {
  Container,
  FormContainer,
  FormInput,
  FormTextarea,
  SubmitButton,
} from "./styles";

const FeedbackForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, message } = useAppSelector((state) => state.feedback);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setMessage(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting feedback:", { name, email, message });
    // Make API request to submit feedback
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <FormInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <FormTextarea
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default FeedbackForm;
