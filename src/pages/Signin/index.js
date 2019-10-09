import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { signInRequest } from "./../../store/modules/auth/actions";
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira seu e-mail.")
    .required("E-mail obrigatório"),
  password: Yup.string().required("Senha obrigatório.")
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail." />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
