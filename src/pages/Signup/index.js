import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signUpRequest } from "./../../store/modules/auth/actions";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório."),
  email: Yup.string()
    .email("Digite seu e-mail.")
    .required("E-mail obrigatório."),
  password: Yup.string()
    .min(6, "Senha precisa ter no mínimo 6 caracteres.")
    .required("Senha obrigatório.")
});

export default function Signup() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo." />
        <Input name="email" type="email" placeholder="Seu e-mail." />
        <Input name="password" type="password" placeholder="Sua senha." />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
