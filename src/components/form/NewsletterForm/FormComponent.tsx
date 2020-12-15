import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react"
import { Form } from "@unform/web"
import React, { useCallback, useRef } from "react"
import { navigate } from "gatsby"
import { FaTelegramPlane } from "react-icons/fa"
import * as Yup from "yup"
import getValidationErrors from "../../../utils/getValidationErrors"
import urlEncode from "../../../utils/urlEncode"
import MetaInput from "../MetaInput"

interface NewsletterFormData {
  "bot-field"?: string
  "form-name"?: string
  name: string
  email: string
}

const schema = Yup.object().shape({
  "bot-field": Yup.string(),
  "form-name": Yup.string(),
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string()
    .required("Email é obrigatório")
    .email("Favor digitar um email válido"),
})

export default function App() {
  const formRef = useRef()
  const handleSubmit = useCallback(async (data, { resetForm }) => {
    try {
      formRef.current.setErrors({})
      // console.log(urlEncode(data));
      await schema.validate(data, { abortEarly: false })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncode(data),
      })
        .then(() => {
          navigate("/newsletter/obrigado")
          resetForm()
        })
        .catch(error => {
          console.log(error)
        })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current.setErrors(errors)
        return
      }
    }
  }, [])
  return (
    <Form
      schema={schema}
      name="newsletter"
      method="post"
      ref={formRef}
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Flex direction="column" maxW="350px" color="black">
        <MetaInput name="form-name" value="newsletter" type="hidden" hidden />
        <MetaInput name="bot-field" hidden />
        <MetaInput type="text" placeholder="Seu Nome" name="name" />
        <MetaInput
          type="text"
          placeholder="Email"
          name="email"
          hasSubmitButton
        />
      </Flex>
    </Form>
  )
}
