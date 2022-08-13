import React, { useState } from "react";

const LoginForm = () => {
  const [title, setTitle] = useState("");
  const [titleTouched, setTitleTouched] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(false);
  const [author, setAuthor] = useState("");
  const [authorTouched, setAuthorTouched] = useState(false);
  const [bodyState, setBodyState] = useState("");
  const [bodyStateTouched, setBodyStateTouched] = useState(false);
  const [options, setOptions] = useState(["--Gender--", "Male", "Female"]);
  const [option2, setOption2] = useState([
    "--Experience--",
    "0-2",
    "3-5",
    "6-8",
    "9-11",
  ]);

  const titleIsValid = title.trim() !== "";
  const titleInputIsInvalid = !titleIsValid && titleTouched;

  const firstNameIsValid = firstName.trim() !== "";
  const firstNameInputIsInvalid = !firstNameIsValid && firstNameTouched;

  const authorIsValid = author.trim() !== "";
  const authorInputIsInvalid = !authorIsValid && authorTouched;

  const bodyStateIsValid = bodyState.trim() !== "";
  const bodyStateInputIsValid = !bodyStateIsValid && bodyStateTouched;

  let formIsValid = false;

  if (titleIsValid && authorIsValid && bodyStateIsValid) {
    formIsValid = true;
  }

  const titleInputBlurHandler = (event) => {
    setTitleTouched(true);
  };

  const authorInputBlurHandler = (event) => {
    setAuthorTouched(true);
  };

  const bodyStateInputBlurHandler = (event) => {
    setBodyStateTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setTitleTouched(true);

    if (!titleIsValid) {
      return;
    }

    setTitle("");
    setTitleTouched(false);
    setAuthor("");
    setAuthorTouched(false);
    setBodyState("");
    setAuthorTouched(false);
  };

  const titleInputClasses = titleInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const authorInputClasses = authorInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const bodyStateInputClasses = bodyStateInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <div>
      <form onSubmit={formSubmissionHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            {/* Title */}
            Surname
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            onBlur={titleInputBlurHandler}
            value={title}
            placeholder="Enter you Surname"
          />
          {titleInputIsInvalid && (
            <p className="text-danger">Title must not be empty.</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            {/* Title */}
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={titleInputBlurHandler}
            value={firstName}
            placeholder="Enter your First Name"
          />
          {titleInputIsInvalid && (
            <p className="text-danger">Title must not be empty.</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            id="author"
            onChange={(e) => setLastName(e.target.value)}
            onBlur={authorInputBlurHandler}
            value={lastName}
            placeholder="Enter your Last Name"
          />
          {authorInputIsInvalid && (
            <p className="text-danger">Author must not be empty.</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Phone Number
          </label>
          <input
            className="form-control"
            type="text"
            id="author"
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={authorInputBlurHandler}
            value={phoneNumber}
            placeholder="Enter your Phone Number"
          />
          {authorInputIsInvalid && (
            <p className="text-danger">Author must not be empty.</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="news" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            type="text"
            id="bodyState"
            onChange={(e) => setBodyState(e.target.value)}
            onBlur={bodyStateInputBlurHandler}
            value={bodyState}
            placeholder="Address"
          />
          {bodyStateInputIsValid && (
            <p className="text-danger">News body must not be empty.</p>
          )}
        </div>

        <select
          defaultValue={options[0]}
          // onChange={onChange}
          style={{
            width: "15rem",
            height: "2.2rem",
            backgroundColor: "#EBF0FF",
            borderRadius: "2px",
            border: "1px solid #0050BC",
          }}
        >
          {options.map((option, id) => {
            return <option key={id}>{option}</option>;
          })}
        </select>

        <select
          defaultValue={options[0]}
          // onChange={onChange}
          style={{
            width: "15rem",
            height: "2.2rem",
            backgroundColor: "#EBF0FF",
            borderRadius: "2px",
            border: "1px solid #0050BC",
          }}
        >
          {option2.map((option, id) => {
            return <option key={id}>{option}</option>;
          })}
        </select>

        <div className="form-actions">
          <button
            className="btn btn-primary"
            disabled={!formIsValid}
            onClick={(e) => {
              setBodyState();
            }}
          ></button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
