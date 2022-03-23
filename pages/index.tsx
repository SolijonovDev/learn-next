import type { NextPage } from "next";
import { useTypedSelector } from "../hooks/redux";
import { useAppDispatch } from "./../hooks/redux";

const Home: NextPage = () => {
  const { kurs, name } = useTypedSelector((state) => state.user);
  const dispatch = useAppDispatch();
  dispatch({ type: "ADD", payload: 5 });
  return (
    <div>
      <h2>Kurs: {kurs}</h2>
      <h2>Name: {name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore
        vitae molestiae praesentium mollitia veniam dicta est quod architecto
        culpa!
      </p>
    </div>
  );
};

export default Home;
