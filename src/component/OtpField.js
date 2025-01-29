import React, { useRef, useState } from "react";

const OTPInput = ({ length = 5, onComplete = ()=>{} }) => {
  const [otp, setOtp] = useState(Array(length).fill("")); 
  const inputRefs = useRef([]); 

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
        const finalOtpResult = [...otp, value].filter((data)=>{return data != ""} )
      onComplete(finalOtpResult.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };


  const StyledOtp = {
    width: "54px",
    height: "54px",
    textAlign: "center",
    fontSize: "18px",
    border: "1px solid #D9D9D9",
    borderRadius: "5px",
    background:"#D9D9D9"
  }

  return (
    <div className="text-center">
      <div className="flex gap-2 justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
            className=""
            style={StyledOtp}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;