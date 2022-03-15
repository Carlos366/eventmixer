import React from "react";
import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SiMailDotRu } from "react-icons/si";

function EmailInput({ name, type, input, meta: { touched, error } }) {
  const feedbackInvalid = touched && error && error;

  return (
    <FormControl isInvalid={feedbackInvalid}>
      <InputGroup size="md">
        <InputLeftElement
          p={0}
          pointerEvents="none"
          children={<Icon boxSize={4} color="primary.600" as={SiMailDotRu} />}
        />
        <Input
          {...input}
          name={name}
          type={type}
          isRequired={true}
          isInvalid={feedbackInvalid}
          placeholder="Insira o seu email"
        />
      </InputGroup>
      {feedbackInvalid && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

export default EmailInput;
