import {React} from 'react';
import styled from "styled-components";
import Logo from "./Sanjivani.png";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';
import abi from './Certification.json'

export default function Login() {

  const contractAddress = '0x11B6b460412582C44ddb084365E36c624C90246A';
  const contractABI = abi.abi;
    //const ethers = require('ethers');
  const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.infura.io/v3/35b5b5f38ace48d9a4db144f27c29ba0');
  const signer = provider.getSigner();
  
  const contract = new ethers.Contract(contractAddress,contractABI,signer);
 
  async function generateCertificate(id, candidateName, orgName, courseName, expirationYear) {
      const tx = await contract.generateCertificate(id, candidateName, orgName, courseName, expirationYear);
      const receipt = await tx.wait();
      console.log(receipt);
    }

  async function getData(id) {
      const data = await contract.getData(id);
      console.log(data);
    }
  const handleGenerateCertificate = async () => {
      await generateCertificate('iid', 'JohnDoe', 'ABCOrg', 'CourseName', 2024);
    }

  const handleGetData = async () => {
      await getData('iid');
    }
  let navigate = useNavigate();
  return(
    <FormContainer> 
    <form action=''>
      <div className="brand">
      <img src={Logo} alt="Sanjivani.png"/>
        <h1>Welcome to SCOE Certificate Verification</h1>
      </div>
      <center>
        <h2>What you want to Generate?</h2>
      <button type="submit" onClick={() => {navigate('/register')}} >Certificate</button>
      <br/>
      <br/>
      <button onClick={handleGenerateCertificate}  >put data</button>
      <button onClick={handleGetData}>Get Data</button>

      </center>
    </form>
    </FormContainer> 

  );

}
const FormContainer = styled.div`
height: 100vh;
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
  h2 {
    color: white;
    text-transform: uppercase;
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

