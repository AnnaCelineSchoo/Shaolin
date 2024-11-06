import React,{ useState } from "react";
import WeekSchedule from "./WeekSchedule";

function UserForm(){
    const [week, setCurrentWeekNr] = useState("1");  
    const [level, setLevel] = useState("beginner");  
    const [reps, setReps] = useState(0);
    const [sets, setSets] = useState(0);
    const [pushupWeek, setPushupWeek] = useState("");
    const [amountOfExcersises, setamountOfExcersises] = useState(0);
    const [submitStatus, setSubmitStatus] = useState(false);  


    function showTable (e){
        e.preventDefault(); // Prevent the default form submission

        if (level === "beginner") {
            setReps(parseInt(week) + 9);
            setSets(3);
            setamountOfExcersises(3);
            setPushupWeek(week);
            console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
        }
        else if(level === "intermediate"){
            setReps(parseInt(week) + 14);
            setSets(4);
            setamountOfExcersises(5);
            setPushupWeek((parseInt(week) +10).toString());
            console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
        }
        else if(level === "advanced"){
            setReps(parseInt(week) + 19);
            setSets(5);
            setamountOfExcersises(7);
            setPushupWeek((parseInt(week) +20).toString());
            console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
        }
        setSubmitStatus(!submitStatus);
    }

    return (
        <div className="container">
          <form className="form" onSubmit={showTable}>
            <h2 className="text-center">Shaolin Workout Plan</h2>
    
            <div className="form-group">
              <label>Week Number:</label>
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
    
            <div className="form-group">
              <label>Fitness Level:</label>
              <select
                className="form-control"
                onChange={(e) => {
                  setSubmitStatus(false);
                  setLevel(e.target.value);
                }}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
    
            <button type="submit" className="btn btn-dark w-100">
              Get Workout Plan
            </button>
          </form>
    
          <div style={{ display: submitStatus ? 'block' : 'none' }} className="mt-4">
            <div className="card shadow-lg p-4">
              <h4 className="text-center">Workout Plan Week {week}</h4>
              <WeekSchedule
                week={week}
                reps={reps}
                sets={sets}
                amount={amountOfExcersises}
                pushupWeek={pushupWeek}
              />
            </div>
          </div>
        </div>
      );
    }
export default  UserForm