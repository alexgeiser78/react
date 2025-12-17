const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
const [otp, setOtp] = useState(null);

const [seconds, setSeconds] = useState(0);

const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    setOtp(newOtp);
    setSeconds(5); // start 5-second countdown
};

useEffect(() => {
    if (seconds === 0) return;

    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

return(
  <div className="container">
<h1 id="otp-title">OTP Generator</h1>

<h2 id="otp-display">
{otp ? otp : "Click 'Generate OTP' to get a code"}</h2>

<p id="otp-timer" aria-live="assertive">{seconds > 0
    ? `Expires in: ${seconds} seconds`
    : otp
    ? "OTP expired. Click the button to generate a new OTP."
    : ""} </p>  
<button id="generate-otp-button"
onClick={generateOTP}
disabled={seconds > 0}>
Generate OTP</button>
  </div>

)

};