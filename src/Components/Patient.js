import React from "react";
import { useForm } from "react-hook-form";

export default function Patient(props) {
  const { register, handleSubmit } = useForm();
  function onSubmit(data, e) {}
  const onError = (errors, e) => console.log(errors, e);
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return props.patients.map((patient) => (
    <tr key={patient.email}>
      <td>{patient.fullname}</td>
      <td>{patient.phone}</td>
      <td>{year - patient.birth_year}</td>
      <td>{date + "/" + month + "/" + year}</td>
      <td>
        <form>
          <button className="btn btn-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </button>
          <select
            {...register("action")}
            onChange={handleSubmit(onSubmit, onError)}
            hidden={true}
          >
            <option value="" defaultValue></option>
            <option value="edit">Edit patient</option>
            <option value="upload">Upload record</option>
            <option value="remove">Remove patient</option>
            <option value="feedback">Ask for feedback</option>
          </select>
        </form>
      </td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </td>
    </tr>
  ));
}
