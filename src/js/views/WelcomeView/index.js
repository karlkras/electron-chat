import React, { useEffect } from 'react';
import LoginForm from "../../components/LoginForm";
import FormBody from "./FormBody";
import { useSelector } from "react-redux";
import { formDataToJson } from "../../utils";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {login as loginUser, register} from "../../api/auth";
import LoadingView from "../../components/shared/LoadingView";
import {useParams} from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";

const WelcomeView = () => {
  const user = useSelector(({auth}) => auth.user);
  const isChecking = useSelector(({auth}) => auth.isChecking);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { type } = useParams();

  useEffect(() => {
    console.log("welcome Login!");
    if(user) {
      navigate("/home");
    }
  }, [user]);

  if(isChecking) {
    return <LoadingView/>
  }

  const submitCallback = async (evt) => {
    evt.preventDefault();
    const theFormInfo = formDataToJson(new FormData(evt.target));
    if(!type || type === "login") {
      dispatch(loginUser(theFormInfo));
    } else {
      dispatch(await register(theFormInfo));
    }
  }

  if(!type || type === "login") {
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
  } else {
    return (
      <FormBody navText={"Login"}
                navTo={"/"}
                navPrompt={"Already Registered?"}
                formText={"Create an account"}
                submitText={"Register"}
                submitCallback={submitCallback}
      >
        <RegisterForm />
      </FormBody>
    )
  }
}
export default WelcomeView;
