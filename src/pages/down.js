import React, { useState, useRef } from "react";
import styled from "styled-components";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Cert from './cert1.png';


const CertificateGenerator = () => {
  const [certificateId, setCertificateId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
//const certificateWrapper = React.createRef();

  const certificateRef = useRef(null);

  function generateCertificate() {
    // Get the certificate element
    const certificateElement = certificateRef.current;
  
    // Create a canvas from the certificate element
    html2canvas(certificateElement).then(canvas => {
      // Create a PDF document    context.font = '30px Arial';    
      const context = canvas.getContext('2d');
      
      context.fillText(text, 10, 50);
      const pdf = new jsPDF();
  
      // Add the canvas to the PDF document
      pdf.addImage(canvas.toDataURL(Cert), 'PNG', 0, 0, 210, 297);
  
      // Save the PDF document with the candidate's name as the filename
      pdf.save(`${studentName}-certificate.pdf`);
    });
  }

  return (
    <FormContainer> 
    <div>
 <div id="imga" ref={certificateRef }>
  <img id="img" src={Cert} alt="Certificate" />
  <p id="name">{studentName}</p>
</div>
      <form>
        <label>
          Certificate ID:
          <input type="text" value={certificateId} onChange={(e) => setCertificateId(e.target.value)} />
        </label>
        <label>
          Student Name:
          <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
        </label>
        <label>
          College Name:
          <input type="text" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} />
        </label>
        <label>
          Course Name:
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        </label>
        <label>
          Expiry Year:
          <input type="text" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} />
        </label>
      </form>


<button onClick={generateCertificate}>Generate Certificate</button>
      
    </div>
    </FormContainer> 
  );
};

export default CertificateGenerator;

const FormContainer = styled.div`
height: 200vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
#img{  

  paddding-left: 50px;
  max-width: 90%; 
  max-height: 90%;
  border: 1px solid black;
  padding-top:50px;
  padding-bottom: 50px;
  position : relative;
}
form {
  height: 50vh;
  display: flex;
  justify-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: #00000076;
  border-radius: 2rem;
  padding: 3rem 5rem;
}
#name{
  position: absolute;
  margin-left: 10rem;
  top: 500px;
}
input {
  background-color: transparent;
  margin-left:10px;
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
label{
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
`;

