import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styles";
import AvatarInput from "./AvatarInput";

import { signOut } from "./../../store/modules/auth/actions";
import { updateProfileRequest } from "./../../store/modules/user/actions";

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo." />
        <Input name="email" type="email" placeholder="Seu e-mail." />
        <hr />
        <Input
          type="passoword"
          name="oldPassword"
          placeholder="Sua senha atual."
        />
        <Input type="passoword" name="password" placeholder="Nova senha." />
        <Input
          type="passoword"
          name="confirmPassword"
          placeholder="Confirmação de senha."
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
