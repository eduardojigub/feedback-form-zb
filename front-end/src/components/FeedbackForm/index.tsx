import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  setName,
  setEmail,
  setMessage,
  cleanForm,
} from "../../redux/feedbackSlice";
import {
  Container,
  FormContainer,
  FormInput,
  FormTextarea,
  SubmitButton,
  ErrorLabel,
} from "./styles";

const FeedbackForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, message } = useAppSelector((state) => state.feedback);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isValidEmail = (email: string) => {
    // email validation regex
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setName(e.target.value));
    setErrors((prevState) => ({
      ...prevState,
      name: value ? "" : "Name is required",
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setEmail(e.target.value));
    setErrors((prevState) => ({
      ...prevState,
      email: value
        ? isValidEmail(value)
          ? ""
          : "Email is not valid"
        : "Email is required",
    }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    dispatch(setMessage(e.target.value));
    setErrors((prevState) => ({
      ...prevState,
      message: value ? "" : "Message is required",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      setErrors((prevState) => ({ ...prevState, name: "Name is required" }));
    }
    if (!email) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email is required",
      }));
    } else if (!isValidEmail(email)) {
      setErrors((prevState) => ({ ...prevState, email: "Email is not valid" }));
    }
    if (!message) {
      setErrors((prevState) => ({
        ...prevState,
        message: "Message is required",
      }));
    }

    if (name && email && isValidEmail(email) && message) {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3333", {
          name,
          email,
          message,
        });
        console.log("Form submitted successfully:", response.data);
        toast.success("Form submitted successfully!");
        dispatch(cleanForm());
      } catch (error) {
        console.error("Error submitting form:", error);
        dispatch(cleanForm());
      }
    }
  };
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Your name*"
          value={name}
          onChange={handleNameChange}
        />
        {errors.name && <ErrorLabel>{errors.name}</ErrorLabel>}
        <FormInput
          type="email"
          placeholder="Your e-mail*"
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <ErrorLabel>{errors.email}</ErrorLabel>}
        <FormTextarea
          placeholder="Your Message*"
          value={message}
          onChange={handleMessageChange}
        />
        {errors.message && <ErrorLabel>{errors.message}</ErrorLabel>}
        <SubmitButton type="submit">Send Message</SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default FeedbackForm;
