import React from "react";
import { NextPage } from "next";
import { useTypedSelector } from "../../hooks/redux";
import { useAppDispatch } from "./../../hooks/redux";
import { emailAction, passwordAction } from "./../../store/actions/auth";
import Link from "next/link";
import s from "../../styles/Auth.module.scss";
import { Layout } from "../../components/Layout";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const { name, email, password } = useTypedSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const changeEmail = (value: string): void => {
    dispatch(emailAction(value));
  };
  const changePassword = (value: string): void => {
    dispatch(passwordAction(value));
  };

  return (
    <Layout title={"Login page"} footer={false}>
      <div className={s.auth}>
        <div className={s.inner}>
          <h1 className={s.text}>Login</h1>
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
          <button onClick={() => router.push("/")} className={s.btn}>
            Yuborish
          </button>
          <Link href="/auth/registration">
            <a>Registratsiya</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
