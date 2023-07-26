import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    companyname: '',
    ownername: '',
    rollnumber: '',
    accesscode: '',
    clientID: "b46128a0-fbde-4c16-a4b1-6ae6ad718e27",
    clientSecret: "XOyolORPayKBOJAN"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyname">Company Name:</label>
        <input
          type="text"
          id="companyname"
          name="companyname"
          value={formData.companyname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ownername">Owner Name:</label>
        <input
          type="text"
          id="ownername"
          name="ownername"
          value={formData.ownername}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rollnumber">Roll Number:</label>
        <input
          type="text"
          id="rollnumber"
          name="rollnumber"
          value={formData.rollnumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="accesscode">Access Code:</label>
        <input
          type="text"
          id="accesscode"
          name="accesscode"
          value={formData.accesscode}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
