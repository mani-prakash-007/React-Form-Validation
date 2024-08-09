import React from "react";
import { useRef, useState } from "react";
export const FormCard = () => {
  //References
  const firstName = useRef();
  const lastName = useRef();
  const date = useRef();
  const email = useRef();
  const password = useRef();
  const hobbies = useRef();
  const gender = useRef(null);
  const nationality = useRef();
  const nationalityInputValue = useRef();
  //States
  const [nationalityInputVisiblity, setNationalityInputVisibility] =
    useState("none");
  const [nationalityOtherValue, setNationalityOtherValue] = useState("Other");
  const [newNationalityOptionVisiblity, setNewNationalityOptionVisiblity] =
    useState("none");
  const [otherOptionVisiblity, setOtherOptionVisiblity] = useState("none");

  //State for firstName Input (Error Display)
  const [firstNameInput, setFirstNameInput] = useState([
    "border-black",
    "none",
    "",
  ]);
  //State for lastName Input (Error Display)
  const [lastNameInput, setlastNameInput] = useState([
    "border-black",
    "none",
    "",
  ]);
  //State for Date input (Error Display)
  const [dateInput, setdateInput] = useState(["border-black", "none", ""]);
  //State for Email input (Error Display)
  const [emailInput, setEmailInput] = useState(["border-black", "none", ""]);
  //State for Password input (Error Display)
  const [passwordInput, setPasswordInput] = useState([
    "border-black",
    "none",
    "",
  ]);
  //State for Gender ( Error Display)
  const [genderInput, setGenderInput] = useState("none");
  //State for Hobbies (Error Display)
  const [hobbyInput, setHobbyInput] = useState("none");
  //Functions
  const addNationalityInputField = () => {
    if (nationality.current.value === "Other") {
      setNationalityInputVisibility("block");
    }
  };
  const handleKeyEvent = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setNationalityOtherValue(nationalityInputValue.current.value);
      setNewNationalityOptionVisiblity("block");
      setNationalityInputVisibility("none");
      setOtherOptionVisiblity("block");
    }
  };
  //Validate First name Field
  const validateFname = () => {
    if (firstName.current.value.length === 0) {
      setFirstNameInput(["border-red-600", "block", "First name is required"]);
    } else if (firstName.current.value.length < 3) {
      setFirstNameInput(["border-red-600", "block", "Requires 3+ characters"]);
    } else {
      setFirstNameInput(["border-black", "none", ""]);
    }
  };
  //Validate Last name Field
  const validateLname = () => {
    if (lastName.current.value.length === 0) {
      setlastNameInput(["border-red-600", "block", "Last name is Required"]);
    } else {
      setlastNameInput(["border-black", "none"]);
    }
  };
  //Validate Date Field
  const validateDate = () => {
    if (date.current.value.length === 0) {
      setdateInput(["border-red-600", "block", "Date of Birth is Required"]);
    } else {
      setdateInput(["border-black", "none"]);
    }
  };
  //Validate Gender Field
  const validateGender = () => {
    const selectedRadio = gender.current.querySelector(
      'input[name="gender"]:checked'
    );
    if (!selectedRadio) {
      setGenderInput("block");
    } else {
      setGenderInput("none");
    }
  };
  //Validate Email
  const validateEmail = () => {
    console.log(email.current.value.length);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailPattern.test(email.current.value);
    if (email.current.value.length === 0) {
      setEmailInput(["border-red-600", "block", "Email is Required"]);
    } else if (!isValidEmail) {
      setEmailInput(["border-red-600", "block", "Enter a valid Email"]);
    } else {
      setEmailInput(["border-black", "none", ""]);
    }
  };
  const validatePassword = () => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordPattern.test(password.current.value);
    if (password.current.value.length === 0) {
      setPasswordInput(["border-red-600", "block", "Password is Required"]);
    } else if (!isValidPassword) {
      setPasswordInput([
        "border-red-600",
        "block",
        "Password must contain One lowerCase, upperCase, number, symbol and 8 characters",
      ]);
    } else {
      setPasswordInput(["border-black", "none", ""]);
    }
  };
  //Validate Hobbies
  const validateHobbies = () => {
    const selectedHobbies = hobbies.current.querySelector(
      'input[name="hobbies"]:checked'
    );
    if (!selectedHobbies) {
      setHobbyInput("block");
    } else {
      setHobbyInput("none");
    }
  };
  //Validate Fields upon Submit.
  const validateFields = (e) => {
    validateFname();
    validateLname();
    validateDate();
    validateGender();
    validateEmail();
    validatePassword();
    validateHobbies();
  };
  return (
    <div className="border border-black">
      <div className=" w-80 mx-10 flex justify-center">
        <div>
          <h2 className="font-bold text-xl my-4">Personal Information</h2>
          <label htmlFor="firstName" className="font-bold">
            First Name
          </label>
          <br />
          <input
            type="text"
            ref={firstName}
            name="firstName"
            id="firstName"
            className={`border px-2 py-1 mb-2 ${firstNameInput[0]}`}
            onChange={validateFname}
          />
          <p className="text-red-600" style={{ display: firstNameInput[1] }}>
            {firstNameInput[2]}
          </p>
          <br />
          <label htmlFor="lastName" className="font-bold">
            Last Name
          </label>
          <br />
          <input
            type="text"
            ref={lastName}
            name="lastName"
            id="lastName"
            className={`border px-2 py-1 mb-2 ${lastNameInput[0]}`}
            onChange={validateLname}
          />
          <p className="text-red-600" style={{ display: lastNameInput[1] }}>
            Last Name Required...!!
          </p>
          <br />
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <br />
          <input
            type="text"
            name="email"
            ref={email}
            id="email"
            className={`border mb-3 px-2 py-1 ${emailInput[0]}`}
            onChange={validateEmail}
          />
          <p className="text-red-600" style={{ display: emailInput[1] }}>
            {emailInput[2]}
          </p>
          <br />
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <br />
          <input
            type="text"
            ref={password}
            name="password-1"
            id="password-1"
            className={`border mb-3 px-2 py-1 ${passwordInput[0]}`}
            onChange={validatePassword}
          />
          <p className="text-red-600" style={{ display: passwordInput[1] }}>
            {passwordInput[2]}
          </p>
          <fieldset ref={hobbies}>
            <legend className="font-bold">Hobbies</legend>
            <label htmlFor="reading">
              <input
                type="checkbox"
                name="hobbies"
                id="reading"
                value="reading"
                className="mr-3"
                onChange={validateHobbies}
              />
              Reading
            </label>
            <br />
            <label htmlFor="traveling">
              <input
                type="checkbox"
                name="hobbies"
                id="traveling"
                value="traveling"
                className="mr-3"
                onChange={validateHobbies}
              />
              Traveling
            </label>
            <br />
            <label htmlFor="cooking">
              <input
                type="checkbox"
                name="hobbies"
                id="cooking"
                value="cooking"
                className="mr-3"
                onChange={validateHobbies}
              />
              Cooking
            </label>
            <br />
            <label htmlFor="sports">
              <input
                type="checkbox"
                name="hobbies"
                id="sports"
                value="sports"
                className="mr-3"
                onChange={validateHobbies}
              />
              Sports
            </label>
          </fieldset>
          <p className="text-red-600" style={{ display: hobbyInput }}>
            Hobby is Required
          </p>
          <br />
          <label htmlFor="dateOfBirth" className="font-bold">
            Date of Birth
          </label>
          <br />
          <input
            type="date"
            ref={date}
            name="dateOfBirth"
            id="dateOfBirth"
            className={`border px-2 py-1 mb-2  ${dateInput[0]}`}
            onChange={validateDate}
          />
          <p className="text-red-600" style={{ display: dateInput[1] }}>
            {dateInput[2]}
          </p>
          <br />
          <fieldset ref={gender}>
            <legend className="font-bold">Gender</legend>
            <label htmlFor="male">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                className="mr-3"
                onChange={validateGender}
              />
              Male
            </label>
            <br />
            <label htmlFor="female">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                className="mr-3"
                onChange={validateGender}
              />
              Female
            </label>
            <br />
            <label htmlFor="binary">
              <input
                type="radio"
                name="gender"
                id="binary"
                value="binary"
                className="mr-3"
                onChange={validateGender}
              />
              Binary
            </label>
            <br />
            <label htmlFor="preferNotToSay">
              <input
                type="radio"
                name="gender"
                id="preferNotToSay"
                value="preferNotToSay"
                className="mr-3 mb-2"
                onChange={validateGender}
              />
              Prefer not to say
            </label>
          </fieldset>
          <p className="text-red-600" style={{ display: genderInput }}>
            Gender is Required...!!
          </p>
          <label htmlFor="nationality" className="font-bold">
            Nationality
          </label>
          <br />
          <select
            name="nationality"
            id="nationality"
            ref={nationality}
            onChange={addNationalityInputField}
            className="border border-black"
          >
            <option value="Indian">Indian</option>
            <option value={nationalityOtherValue}>
              {nationalityOtherValue}
            </option>
            <option value="Other" style={{ display: otherOptionVisiblity }}>
              Other
            </option>
          </select>
          <br />
          <div style={{ display: nationalityInputVisiblity }}>
            <label htmlFor="nationality">Specify Nationality</label>
            <br />
            <input
              type="text"
              id="nationality"
              name="nationality"
              ref={nationalityInputValue}
              className="border border-black mt-1 px-1"
              onKeyDown={handleKeyEvent}
            />
          </div>
          <div className="flex justify-evenly my-4">
            <button
              type="submit"
              className="border border-black px-4 py-1"
              onClick={validateFields}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
