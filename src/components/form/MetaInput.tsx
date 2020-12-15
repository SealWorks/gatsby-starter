import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  chakra,
  IconButton,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  Tooltip,
} from "@chakra-ui/react"
import { useField } from "@unform/core"
import { FaTelegramPlane } from "react-icons/fa"
import { FiAlertCircle } from "react-icons/fi"

interface MetaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  hasSubmitButton?: boolean
}

const MetaInput: React.FC<MetaInputProps> = ({
  name,
  hasSubmitButton,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    })
  }, [fieldName, registerField])

  const handleInputFocused = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <InputGroup
      my={rest.type === "hiden" || rest.hidden ? 0 : 4}
      bg="white"
      rounded="md"
      border={rest.hidden ? 0 : "2px solid"}
      borderColor={
        !!error
          ? "red.500"
          : isFocused
          ? "brand.300"
          : isFilled
          ? "green.600"
          : "white"
      }
    >
      {error && (
        <Tooltip hasArrow label={error} bg="red.600" placement="top-start">
          <InputLeftAddon title={error} p={2} bg="red.100">
            <Icon as={FiAlertCircle} color="#red.500" />
          </InputLeftAddon>
        </Tooltip>
      )}
      <Input
        name={name}
        
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {hasSubmitButton && (
        <InputRightElement p={1}>
          <IconButton
            icon={<FaTelegramPlane />}
            aria-label="Inscrever-se"
            type="submit"
            colorScheme="brand"
            _focus={{ outline: "none" }}
            _active={{ outline: "none" }}
          />
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default chakra(MetaInput)
