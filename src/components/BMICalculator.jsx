import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight || !gender) {
      toast.error("Please enter Valid Details");
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "You're underweight. Consider seeking advice from a healthcare professional."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You are fit. keep mainting a healthy lifestyle");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You're overweight. Consider seeking advice from a healthcare professional."
      );
    } else {
      toast.error(
        "You're in the obse range. It is recommended to seek advice from a healthcare professional"
      );
    }
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height(cm)</label>
              <input
                type="number"
                value={height}
                required
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <label>weight(kg)</label>
              <input
                type="number"
                value={weight}
                required
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                value={gender}
                required
                onChange={(e) => setGender(e.target.value)}
              >
                <option value=""> Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button className="button" type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className=" wrapper">
        <img src="/bmi.jpg" alt="bmiImagge"/>

        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
