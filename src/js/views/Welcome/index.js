import React from 'react';
import LoginForm from "../../components/LoginForm";
import FormBody from "../../components/FormBody";
import { useSelector } from "react-redux";
import { formDataToJson } from "../../utils";
import {redirect} from "react-router-dom";

const Welcome = () => {
  const user = useSelector(({auth}) => auth.user);
  const isChecking = useSelector(({auth}) => auth.isChecking);

  if(isChecking) {
    return <h1>Checking the state...</h1>
  }

  if(user) {
    return redirect("/home");
  }

  const submitCallback = (evt) => {
    evt.preventDefault();
    const theFormInfo = formDataToJson(new FormData(evt.target));
    console.log(theFormInfo);
  }

  return (
    <FormBody navText={"Register"}
              navTo={"/register"}
              navPrompt={"Not registered?"}
              formText={"Login and chat with other people!"}
              submitText={"Login"}
              submitCallback={submitCallback}
    >
      <LoginForm/>
    </FormBody>
  )
}
export default Welcome;
