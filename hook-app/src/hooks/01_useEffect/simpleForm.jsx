import { useEffect, useState } from "react";
import { Message } from "./Message";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onReset = () => {
    setFormState({
      ["username"]: "",
      ["email"]: "",
    });
  };

  useEffect(() => {
    // console.log("useEffect Called!");
  }, []);

  useEffect(() => {
    // console.log("formState Changed!");
  }, [formState]);

  useEffect(() => {
    // console.log("email Changed!");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>

      <input
        type={"text"}
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
        style={{ width: "20%", borderColor: "black" }}
      />
      {username == "erick2" && <Message />}

      <input
        type={"email"}
        className="form-control mt-2"
        placeholder="ericktest@test.com"
        name="email"
        value={email}
        onChange={onInputChange}
        style={{ width: "20%", borderColor: "black" }}
      />
      <Grid
        sx={{
          paddingTop: 1,
          display: "flex",
          justifyContent: "space-between",
          width: "10%",
        }}
      >
        <Button variant="contained">Submit</Button>
        <Button variant="contained" onClick={onReset}>
          Reset
        </Button>
      </Grid>
    </>
  );
};
