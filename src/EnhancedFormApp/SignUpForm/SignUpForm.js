import React, { useState, useRef } from "react";
import {
  FormContainer,
  Container,
  Field,
  Label,
  Input,
  ErrorMessage,
  Strength,
  Button,
  ToggleButton,
  InfoContainer,
  InfoIcon,
  TooltipText
} from "./SignUpForm.Styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const refs = {
    name: useRef(),
    username: useRef(),
    email: useRef(),
    mobile: useRef(),
    password: useRef(),
    confirmPassword: useRef(),
  };

  const getPasswordStrength = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const specialChars = password.match(/[!@#$%^&*(),.?":{}|<>]/g) || [];
    const numSpecial = specialChars.length;
    const length = password.length;

    if (length > 12 && hasUpper && hasLower && hasNumber && numSpecial >= 3) {
      return "Strong";
    } else if (length > 8 && hasUpper && hasLower && hasNumber && numSpecial >= 2) {
      return "Medium";
    } else {
      return "Weak";
    }
  }

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "email") value = value.toLowerCase();
    if (name === "username") value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (validators[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validators[name](value),
      }));
    }
  };

  const validators = {
    name: (value) =>
      value.trim() === "" ? "Name is required" : "",

    username: (value) =>
      value.trim() === "" ? "Username is required" : value.length < 6 ? "Username must be at least 6 characters" : "",

    email: (value) =>
      value.trim() === "" ? "Email is required" : /^\S+@\S+\.\S+$/.test(value) ? "" : "Invalid email address",

    mobile: (value) =>
      value.trim() === "" ? "Mobile is required" : /^\d{10}$/.test(value) ? "" : "Invalid mobile number",

    password: (value) =>
      value.trim() === "" ? "Password is required" : "",

    confirmPassword: (value) =>
      value.trim() === "" ? "Confirm Password is required" : value !== formData.password ? "Passwords must match" : "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (validators[field]) {
        const error = validators[field](formData[field]);
        if (error) newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      refs[Object.keys(newErrors)[0]].current.focus();
      return;
    }

    if (getPasswordStrength(formData.password) === "Weak") {
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Signup Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      setFormData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }, 1000);
  };


  return (
    <>
      <FormContainer>
        <Container onSubmit={handleSubmit}>
          <div>
            <h2>Sign Up Form</h2>
          </div>
          <Field>
            <Label>Name</Label>
            <Input
              ref={refs.name}
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            {
              (errors.name && (<ErrorMessage>{errors.name}</ErrorMessage>))
            }
          </Field>

          <Field>
            <Label>Username</Label>
            <Input
              ref={refs.username}
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={errors.username}
            />
            {
              (errors.username && (<ErrorMessage>{errors.username}</ErrorMessage>))
            }
          </Field>

          <Field>
            <Label>Email</Label>
            <Input
              ref={refs.email}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            {
              (errors.email && (<ErrorMessage>{errors.email}</ErrorMessage>))
            }
          </Field>

          <Field>
            <Label>Mobile</Label>
            <Input
              ref={refs.mobile}
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              error={errors.mobile}
            />
            {
              (errors.mobile && (<ErrorMessage>{errors.mobile}</ErrorMessage>))
            }
          </Field>

          <Field>
            <Label>Password
              <InfoContainer>
                <InfoIcon>ℹ️</InfoIcon>
                <TooltipText>
                  Password Rules: <br />
                  • Minimum 9 characters for Medium, 13 for Strong. <br />
                  • Must contain uppercase and lowercase letters & numbers.  <br />
                  • At least 2 special characters for Medium, 3 for Strong. <br />
                  • Must be medium or strong.
                </TooltipText>
              </InfoContainer>
            </Label>
            <Input
              ref={refs.password}
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            {
              (errors.password && (<ErrorMessage>{errors.password}</ErrorMessage>))
            }
            <Strength strength={getPasswordStrength(formData.password)}>
              {formData.password && `Strength: ${getPasswordStrength(formData.password)}`}
            </Strength>
            <ToggleButton type="button" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? "Hide" : "Show"} Password
            </ToggleButton>
          </Field>

          <Field>
            <Label>Confirm Password</Label>
            <Input
              name="confirmPassword"
              type="password"
              ref={refs.confirmPassword}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            {
              (errors.confirmPassword && (<ErrorMessage>{errors.confirmPassword}</ErrorMessage>))
            }
          </Field>

          <Button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Sign Up"}
          </Button>

          <Button
            type="button"
            onClick={() => {
              setFormData({ name: "", username: "", email: "", mobile: "", password: "", confirmPassword: "" })
              setErrors({ name: "", username: "", email: "", mobile: "", password: "", confirmPassword: "" })
            }}
            style={{ backgroundColor: "#888", marginTop: "0.5rem" }}
          >
            Reset
          </Button>
        </Container>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default SignUpForm;
