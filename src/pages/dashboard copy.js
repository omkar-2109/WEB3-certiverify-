// import {React} from 'react';
// import styled from "styled-components";
// import Logo from "./Sanjivani.png";
// import { ethers } from "ethers";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Certification from './Certification.json'

// export default function Login() {

//   const [certificateId, setCertificateId] = useState('');
//   const [certificateData, setCertificateData] = useState({});
//   const contractAddress = '0xAB53AaE6B007DBE08dA62C0C1F5935EA40816a8a';
//   const privateKey = "ae2e5855bfe5cf2cf575e7a39127a0a10ef682fbbde14d50209c5dd0bd7be417";

//   const providerUrl = 'https://polygon-mumbai.infura.io/v3/35b5b5f38ace48d9a4db144f27c29ba0';

//   const provider = new ethers.providers.JsonRpcProvider(providerUrl);
//   const signer = provider.getSigner('0x58aA76C20fFcA2e38Cb7ed6fCfa5cdEeb20b7E63');
//   const wallet = new ethers.Wallet(privateKey, provider);

//   const contract = new ethers.Contract(contractAddress, Certification.abi, wallet);
 
//   const generateCertificate = async () => {
//     try {
//       const tx = await contract.generateCertificate(
//         '111',
//         'Nishant',
//         'Sanjivani Org',
//         'Blockchain 1',
//         2024
//       );
//       await tx.wait();
//       console.log('Certificate generated!');
//     } catch (error) {
//       console.log('Error generating certificate:', error);
//     }
//   };
  
//   const getData = async () => {
//     try {
//       const data = await contract.getData('111');
//       setCertificateData({
//         candidateName: data[0],
//         orgName: data[1],
//         courseName: data[2],
//         expirationYear: data[3].toString(),
//       });
//     } catch (error) {
//       console.log('Error getting certificate data:', error);
//     }
//   };

//   let navigate = useNavigate();
//   return(
    
// <>    
//       <div className="brand">
//       <img src={Logo} alt="Sanjivani.png"/>
//         <h1>Welcome to SCOE Certificate Verification</h1>
//       </div>
//       <center>
//         <h2>What you want to Generate?</h2>
//       <button type="submit" onClick={() => {navigate('/register')}} >Certificate</button>
//       <br/>
//       <br/>
//       <div>
//       <button onClick={generateCertificate}>Generate Certificate</button>
//       <button onClick={getData}>Get Certificate Data</button>
//       <div>
//         <h2>Certificate Data:</h2>
//         <p>Certificate ID: {certificateId}</p>
//         <p>Candidate Name: {certificateData.candidateName}</p>
//         <p>Organization Name: {certificateData.orgName}</p>
//         <p>Course Name: {certificateData.courseName}</p>
//         <p>Expiration Year: {certificateData.expirationYear}</p>
//       </div>
//     </div>
//       </center>
// </>
//   );

// }
// const FormContainer = styled.div`
// height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .brand {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;
//     img {
//       height: 5rem;
//     }
//     h1 {
//       color: white;
//       text-transform: uppercase;
//     }
    
//   }
//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     background-color: #00000076;
//     border-radius: 2rem;
//     padding: 3rem 5rem;
//   }
//   h2 {
//     color: white;
//     text-transform: uppercase;
//   }
//   button {
//     background-color: #4e0eff;
//     color: white;
//     padding: 1rem 2rem;
//     border: none;
//     font-weight: bold;
//     cursor: pointer;
//     border-radius: 0.4rem;
//     font-size: 1rem;
//     text-transform: uppercase;
//     &:hover {
//       background-color: #4e0eff;
//     }
//   }
//   span {
//     color: white;
//     text-transform: uppercase;
//     a {
//       color: #4e0eff;
//       text-decoration: none;
//       font-weight: bold;
//     }
//   }
// `;
