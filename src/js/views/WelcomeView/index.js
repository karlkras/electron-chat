import React, { useEffect } from 'react';
import LoginForm from "../../components/LoginForm";
import FormBody from "../../components/FormBody";
import { useSelector } from "react-redux";
import { formDataToJson } from "../../utils";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login as loginUser} from "../../api/auth";
import LoadingView from "../../components/shared/LoadingView";

const WelcomeView = () => {
  const user = useSelector(({auth}) => auth.user);
  const isChecking = useSelector(({auth}) => auth.isChecking);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("welcome Login!");
    if(user) {
      navigate("/home");
    }
  }, [user]);

  if(isChecking) {
    return <LoadingView/>
  }


  const submitCallback = (evt) => {
    evt.preventDefault();
    const theFormInfo = formDataToJson(new FormData(evt.target));
    dispatch(loginUser(theFormInfo));
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
export default WelcomeView;
