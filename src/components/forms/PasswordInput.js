import React from "react";
import {
  FormControl,
  FormErrorMessage,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { FaKey, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function PasswordInput({ input, meta: { touched, error } }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const feedbackInvalid = touched && error && error;

  return (
    <FormControl isInvalid={feedbackInvalid}>
      <InputGroup size="md">
        <InputLeftElement
          p={0}
          pointerEvents="none"
          children={<Icon boxSize={4} color="primary.600" as={FaKey} />}
        />
        <Input
          {...input}
          pr="4.5rem"
          name="password"
          isRequired={true}
          isInvalid={feedbackInvalid}
          type={show ? "text" : "password"}
          placeholder={
            input.name === "password-again"
              ? "Insira a novamente sua password"
              : "Insira a sua password"
          }
        />
        <InputRightElement width="4.75rem">
          <IconButton
            h={8}
            size="sm"
            variant="transparent"
            onClick={handleClick}
            icon={
              <Icon
                boxSize={6}
                color="primary.600"
                as={show ? FaRegEyeSlash : FaRegEye}
              />
            }
          />
        </InputRightElement>
      </InputGroup>
      {feedbackInvalid && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

export default PasswordInput;
