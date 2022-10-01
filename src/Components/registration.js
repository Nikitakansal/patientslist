import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [patients, setpatient] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(patient, e) {
    e.preventDefault();
    await setpatient([...patients, patient]);
    navigate("/", { replace: true });
  }
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const onError = (errors, e) => console.log(errors, e);

  const registerOptions = {
    fullname: { required: "Name is required." },
    phone: {
      required: "Contact number is required.",
      minLength: {
        value: 10,
        message: "Please enter a valid mobile number."
      },
      maxLength: {
        value: 10,
        message: "Please enter a valid mobile number."
      }
    },
    email: { required: "E-mail is required." },
    date: {
      required: "Date is required.",
      min: {
        value: 1,
        message: "Please enter a valid date."
      },
      max: {
        value: 31,
        message: "Please enter a valid date."
      }
    },
    month: {
      required: "Month is required.",
      min: {
        value: 1,
        message: "Please enter a valid month."
      },
      max: {
        value: 12,
        message: "Please enter a valid month."
      }
    },
    year: {
      required: "Year is required.",
      min: {
        value: 1900
      },
      max: {
        value: 2022
      }
    },
    address: { required: "Addressis required." },
    city: { required: "City is required." },
    state: { required: "State is required." },
    postalcode: { required: "Postalcode is required." },
    country: { required: "Country is required." }
  };

  return (
    <div className="container" style={{ padding: "40px" }}>
      <h2 className="d-flex">Register new patient</h2>
      <form className="row g-3" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="col-md-8">
          <label className="form-label"></label>
          <input
            type="text"
            {...register("fullname", registerOptions.fullname)}
            className="form-control"
            id="inputEmail4"
            placeholder="Fullname"
          />
          <small className="text-danger">
            {errors?.fullName && errors.fullname.message}
          </small>
        </div>
        <div className="d-flex">
          <div className="col-md-1" style={{ margin: "0px 4px 0px 0px" }}>
            <label className="form-label"></label>
            <select
              id="inputcountry"
              className="form-select"
              {...register("countrycode")}
            >
              <option defaultValue>+91</option>
              <option>+01</option>
            </select>
          </div>
          <div className="col-3">
            <label className="form-label"></label>
            <input
              {...register("phone", registerOptions.phone)}
              type="number"
              className="form-control"
              id="inputnumber4"
              placeholder="Contact number"
            />
            <small className="text-danger">
              {errors?.phone && errors.phone.message}
            </small>
          </div>
        </div>
        <div className="col-6">
          <label className="form-label"></label>
          <input
            {...register("email", registerOptions.email)}
            type="email"
            className="form-control"
            id="inputemail"
            placeholder="Email address"
          />
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
        </div>
        <div className="d-flex">
          <div className="col-md-6">
            <label className="form-label"></label>
            <select
              {...register("gender")}
              id="inputgender"
              className="form-select"
              placeholder="Gender"
            >
              <option defaultValue>Gender</option>
              <option>Male</option>
              <option>female</option>
              <option>Non-confirming</option>
            </select>
          </div>
        </div>
        <div className="d-flex col-md-12">
          <label className="form-label">Date of Birth</label>
        </div>
        <div className="col-md-2 col-sm-3 col-xs-3">
          <input
            {...register("birth_date", registerOptions.date)}
            type="number"
            className="form-control"
            id="inputdate"
            placeholder="DD"
          />
        </div>
        <div className="col-md-2 col-sm-3 col-xs-3">
          <input
            {...register("birth_month", registerOptions.month)}
            type="number"
            className="form-control"
            id="inputmonth"
            placeholder="MM"
          />
        </div>
        <div className="<col-md-2 col-sm-4 col-xs-4">
          <input
            {...register("birth_year", registerOptions.year)}
            type="number"
            className="form-control"
            id="inputyear"
            placeholder="YYYY"
          />
        </div>
        <div className="col-8">
          <label className="d-flex form-label">
            <strong>Contact details</strong>
          </label>
          <input
            {...register("address1", registerOptions.address)}
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address line 1"
          />
        </div>
        <div className="col-8">
          <input
            {...register("address2")}
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Address line 2"
          />
        </div>
        <div className="d-flex">
          <div className="col-4" style={{ margin: "0px 10px 0px 0px" }}>
            <input
              {...register("city", registerOptions.city)}
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="City"
            />
          </div>
          <div className="col-4">
            <select
              {...register("state", registerOptions.state)}
              id="inputState"
              className="form-select"
            >
              <option defaultValue>State</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="d-flex col-4">
          <input
            {...register("postalcode", registerOptions.postalcode)}
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Postalcode"
          />
        </div>
        <div className="col-4">
          <select
            {...register("country", registerOptions.country)}
            id="inputCountry"
            className="form-select"
          >
            <option defaultValue>Country</option>
            <option>...</option>
          </select>
        </div>
        <div className="d-flex col-12">
          {" "}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: "0px 10px 0px 0px" }}
          >
            ADD PATIENT
          </button>
          <button type="button" className="btn btn-outline-danger">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
