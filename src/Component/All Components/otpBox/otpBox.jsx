import React, { useState, useRef, useEffect } from "react";

const OTPInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill("")); // State to store OTP digits
  const inputRefs = useRef([]); // Refs for each input box

  // Handle change in input
  const handleChange = (index, value) => {
    if (/\D/.test(value)) return; // Allow only numeric input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to the next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Trigger onComplete if all digits are filled
    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move focus to the previous input on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pasteData)) {
      // If pasted data is a valid 6-digit OTP
      const newOtp = pasteData.split("").slice(0, length);
      setOtp(newOtp);
      onComplete(newOtp.join(""));
    }
  };

  // Focus the first input on mount
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el)}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      ))}
    </div>
  );
};

// Usage Example
const OtpBox = () => {
  const handleOTPComplete = (otp) => {
    console.log("OTP Entered:", otp);
    alert(`OTP Entered: ${otp}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter OTP</h2>
      <OTPInput length={6} onComplete={handleOTPComplete} />
    </div>
  );
};

export default OtpBox;