import React, { useState } from "react";
import WeekSchedule from "./WeekSchedule";

function UserForm() {
  const [week, setCurrentWeekNr] = useState("1");
  const [level, setLevel] = useState("beginner");
  const [reps, setReps] = useState(0);
  const [sets, setSets] = useState(0);
  const [holdingTime, setHoldingTime] = useState(0);
  const [pushupWeek, setPushupWeek] = useState("");
  const [amountOfExcersises, setamountOfExcersises] = useState(0);
  const [amountOfForms, setamountOfForms] = useState(0);
  const [submitStatus, setSubmitStatus] = useState(false);

  function showTable(e) {
    e.preventDefault(); // Prevent the default form submission

    if (level === "beginner") {
      setReps(parseInt(week) + 4);
      setSets(1);
      setamountOfExcersises(10);
      setamountOfForms(1);
      setPushupWeek(week);
      setHoldingTime((parseInt(week) + 10).toString());
    }
    if (level === "novice") {
      setReps(parseInt(week) + 9);
      setSets(1);
      setamountOfExcersises(10);
      setamountOfForms(2);
      setPushupWeek((parseInt(week) + 4).toString());
      setHoldingTime((parseInt(week) * 2 + 10).toString());
    } else if (level === "intermediate") {
      setReps(parseInt(week) + 14);
      setSets(1);
      setamountOfExcersises(10);
      setamountOfForms(3);
      setPushupWeek((parseInt(week) + 10).toString());
      setHoldingTime((parseInt(week) * 3 + 30).toString());
    } else if (level === "proficient") {
      setReps(parseInt(week) + 19);
      setSets(1);
      setamountOfExcersises(10);
      setamountOfForms(4);
      setPushupWeek((parseInt(week) + 20).toString());
      setHoldingTime((parseInt(week) * 3 + 60).toString());
    } else if (level === "advanced") {
      setReps(parseInt(week) + 29);
      setSets(2);
      setamountOfExcersises(10);
      setamountOfForms(5);
      setPushupWeek("30");
      setHoldingTime((parseInt(week) * 3 + 180).toString());
    } else if (level === "master") {
      setReps(parseInt(week) + 39);
      setSets(2);
      setamountOfExcersises(10);
      setamountOfForms(5);
      setPushupWeek("30");
      setHoldingTime((parseInt(week) * 6 + 240).toString());
    }
    setSubmitStatus(!submitStatus);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={showTable}>
        <h2 className="text-center">Shaolin Workout Plan</h2>

        <div className="form-group">
          <label>Fitness Level:</label>
          <select
            className="form-control"
            onChange={(e) => {
              setSubmitStatus(false);
              setLevel(e.target.value);
            }}
          >
            <option value="beginner">Beginner (0-1 years of training)</option>
            <option value="novice">Novice (1-3 years of training)</option>
            <option value="intermediate">
              Intermediate (3-5 years of training)
            </option>
            <option value="proficient">
              Proficient (5-7 years of training)
            </option>
            <option value="advanced">Advanced (7-9 years of training)</option>
            <option value="master">Master (9-10 years of training)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Intensity Level:</label>
          <select
            className="form-control"
            onChange={(e) => {
              setSubmitStatus(false);
              setCurrentWeekNr(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Get Workout Plan
        </button>
      </form>

      <div
        style={{ display: submitStatus ? "block" : "none" }}
        className="mt-4"
      >
        <div className="card shadow-lg p-4">
          <WeekSchedule
            week={week}
            reps={reps}
            sets={sets}
            amount={amountOfExcersises}
            pushupWeek={pushupWeek}
            holdingTime={holdingTime}
            level={level}
            amountForms={amountOfForms}
          />
        </div>
      </div>
    </div>
  );
}
export default UserForm;
