import React, { useState, useRef } from "react";
import styled from "styled-components";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Cert from './cert.png';


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

{/* 
      /* <div id="downloadWrapper" ref={certificateWrapper}>
          <div id="certificateWrapper">
            <p>{studentName}</p>
            <img src={Cert} alt="Certificate" />
          </div>
          </div> */}

<button onClick={generateCertificate}>Generate Certificate</button>
      
    </div>
    </FormContainer> 
  );
};

export default CertificateGenerator;

const FormContainer = styled.div`
#img{
  position : relative;

}
#name{
  position: absolute;
  margin-left: 10rem;
  top: 500px;
}
`;

