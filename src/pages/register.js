import React from 'react';
import styled from "styled-components";
//import Logo from './logo.jpg';
import Logo from "./Sanjivani.png";
export default function Dashboard() {

  return(
    <FormContainer> 
    <form action=''>
      <div className="brand">
      <img src={Logo} alt="Sanjivani.png"/>
        <h1>SCOE Marksheet Verification</h1>
      </div>
      <label>Name of Student</label>
      <input type="text" placeholder="Name of Student"
        name="Name of Student" required/>
    <label>Name of Course</label>
      <input type=""
        placeholder="Name of Course" name="Course Name" required/>
     <label>Name of Organiztion</label>
      <input type=""
        placeholder="Name of Organization" name="COrganization Name" required/>
      <button type="submit">Register</button>
    </form>
    </FormContainer> 

  );

}
const FormContainer = styled.div`
height: 150vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  h3{
    color: white;
      text-transform: uppercase;
  }
  label{
    color: white;
      text-transform: uppercase;
  }
  h4{
    color: white;
      text-transform: uppercase;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 60%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }

`;