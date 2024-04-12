import React, {useEffect} from 'react';
import FormBody from "../../components/FormBody";
import RegisterForm from "../../components/RegisterForm";
import { formDataToJson } from "../../utils";
import { useDispatch } from "react-redux";
import { register } from "../../api/auth";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(({auth}) => auth.user);

  useEffect(() => {
    console.log("welcome Register!");
    if(user) {
      navigate("/home");
    }
  }, [user]);

  const submitCallback = evt => {
    evt.preventDefault();
    const theFormInfo = formDataToJson(new FormData(evt.target));
    dispatch(register(theFormInfo));
  }

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
export default Register;
