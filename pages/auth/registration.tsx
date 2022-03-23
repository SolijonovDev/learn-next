import React from "react";
import { NextPage } from "next";
import { useAppDispatch, useTypedSelector } from "./../../hooks/redux";
import {
  emailAction,
  passwordAction,
  nameAction,
} from "./../../store/actions/auth";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import s from "../../styles/Auth.module.scss";
import { useRouter } from "next/router";

const Registration: NextPage = () => {
  const router = useRouter();
  const { name, email, password } = useTypedSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const changeEmail = (value: string): void => {
    dispatch(emailAction(value));
  };
  const changeName = (value: string): void => {
    dispatch(nameAction(value));
  };
  const changePassword = (value: string): void => {
    dispatch(passwordAction(value));
  };

  return (
    <Layout title={"Registratsiya page"} footer={false}>
      <div className={s.auth}>
        <div className={s.inner}>
          <h1 className={s.text}>Registratsiya</h1>
          <input
            type="text"
            value={name}
            onChange={({ target }) => changeName(target.value)}
          />
          <input
            type="text"
            value={email}
            onChange={({ target }) => changeEmail(target.value)}
          />
          <input
            type="text"
            value={password}
            onChange={({ target }) => changePassword(target.value)}
          />
          <button onClick={()=>router.push("/")} className={s.btn}>Yuborish</button>
          <Link href="/auth/login">
            <a>Login</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
