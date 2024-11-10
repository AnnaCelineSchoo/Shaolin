import React,{ useState, useEffect} from "react";
import WeekSchedule from "./WeekSchedule";

function UserForm(){
    const [week, setCurrentWeekNr] = useState("1");  
    const [level, setLevel] = useState("beginner");  
    const [reps, setReps] = useState(0);
    const [sets, setSets] = useState(0);
    const [holdingTime, setHoldingTime] = useState(0);
    const [pushupWeek, setPushupWeek] = useState("");
    const [amountOfExcersises, setamountOfExcersises] = useState(0);
    const [submitStatus, setSubmitStatus] = useState(false);  
    const [selectFormsStatus, setSelectFormsStatus] = useState(false);
    const [beginnerForms, setBeginnerForms] = useState([]);
    const [higherForms, setHigherFoms] = useState([]);
    const [weaponForms, setWeaponForms] = useState([]);
    const [taiChiForms, setTaiChiForms] = useState([]);
    const [taiChiWeaponForms, setTaiChiWeaponForms] = useState([]);
    const [selectedForms, setSelectedForms] = useState({
      beginnerForm: [],
      higherForm: [],
      weaponForm: [],
      taiChiForm: [],
      taiChiWeaponForm: []
    });

    function showTable (e){
        e.preventDefault(); // Prevent the default form submission

        if (level === "beginner") {
            setReps(parseInt(week) + 4);
            setSets(2);
            setamountOfExcersises(3);
            setPushupWeek(week);
            setHoldingTime(((parseInt(week)) +10).toString())
            console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
        }
        if (level === "novice") {
          setReps(parseInt(week) + 9);
          setSets(3);
          setamountOfExcersises(3);
          setPushupWeek((parseInt(week) +4).toString());
          setHoldingTime(((parseInt(week)*2) +10).toString())
          console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
      }
        else if(level === "intermediate"){
            setReps(parseInt(week) + 14);
            setSets(3);
            setamountOfExcersises(4);
            setPushupWeek((parseInt(week) +10).toString());
            setHoldingTime(((parseInt(week)*3) +30).toString())
            console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
        }
        else if(level === "proficient"){
          setReps(parseInt(week) + 19);
          setSets(4);
          setamountOfExcersises(4);
          setPushupWeek((parseInt(week) +20).toString());
          setHoldingTime(((parseInt(week)*3) +60).toString())
          console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
      }
        else if(level === "advanced"){
            setReps(parseInt(week) + 29);
            setSets(5);
            setamountOfExcersises(4);
            setPushupWeek(30);
            setHoldingTime(((parseInt(week)*3) +180).toString())
            console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
        }
        else if(level === "master"){
          setReps(parseInt(week) + 39);
          setSets(5);
          setamountOfExcersises(5);
          setPushupWeek((parseInt(week) +20).toString());
          setHoldingTime(((parseInt(week)*6) +240).toString())
          console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
      }
        setSubmitStatus(!submitStatus);
    }

    useEffect(() => {
      // Simulate data fetching
       const fetchData = async () => {
          try {
              //const response = await fetch('/workouts/strength.json');
              const response = await fetch(`${process.env.PUBLIC_URL}/workouts/excersises.json`);
              const result = await response.json();
              setBeginnerForms(result.beginnerForm);
              setHigherFoms(result.higherForm);
              setWeaponForms(result.weaponForm);
              setTaiChiForms(result.taiChiForm);
              setTaiChiWeaponForms(result.taiChiWeaponForm)
              console.log("fetched from data", result); // Log only once on mount
              console.log("beginnerforms", beginnerForms)
          } catch (error) {
              console.error("Error fetching data:", error);
          }
        };
        fetchData();
    }, [selectFormsStatus]);

    function handleCheckboxChange(e, category) {
      const { value, checked } = e.target;
    
      setSelectedForms((prevSelectedForms) => {
        const updatedCategoryForms = checked
          ? [...prevSelectedForms[category], value]  // Add if checked
          : prevSelectedForms[category].filter((form) => form !== value);  // Remove if unchecked
    
        return {
          ...prevSelectedForms,
          [category]: updatedCategoryForms
        };
      });
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
                <option value="intermediate">Intermediate (3-5 years of training)</option>
                <option value="proficient">Proficient (5-7 years of training)</option>
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
              
            <button type="button" className="btn btn-dark m-2" onClick={() => { setSelectFormsStatus((prevValue => !prevValue))}} >Select Forms To practice</button>
            <div className="form-group" style= {{display: selectFormsStatus ? 'block' : 'none'}}>
              <div className="checkbox-container px-5">
                <div className="checkbox-item">
                  <h4>Beginner Froms</h4>
                  {beginnerForms.map((form, index)=>{
                    return (
                      <div key={index}>
                        <input type="checkbox" id={index} name={form.exercise} value={form.exercise} onChange={(e) => handleCheckboxChange(e, "beginnerForm")}/>
                        <label for={form.exercise}>{form.exercise}</label><br/>
                      </div>
                    );
                  })}
                  </div>
                <div className="checkbox-item">
                  <h4>Higher Froms</h4>
                  {higherForms.map((form, index)=>{
                    return (
                      <div key={index}>
                        <input type="checkbox" id={index} name={form.exercise} value={form.exercise} onChange={(e) => handleCheckboxChange(e, "higherFrom")}/>
                        <label for={form.exercise}>{form.exercise}</label><br/>
                      </div>
                    );
                  })}
                </div>
                <div className="checkbox-item">
                  <h4>Weapon Froms</h4>
                  {weaponForms.map((form, index)=>{
                    return (
                      <div key={index}>
                        <input type="checkbox" id={index} name={form.exercise} value={form.exercise} onChange={(e) => handleCheckboxChange(e, "weaponForm")}/>
                        <label for={form.exercise}>{form.exercise}</label><br/>
                      </div>
                    );
                  })}
                </div>
                <div className="checkbox-item">
                  <h4>Tai Chi Forms</h4>
                  {taiChiForms.map((form, index)=>{
                    return (
                      <div key={index}>
                        <input type="checkbox" id={index} name={form.exercise} value={form.exercise} onChange={(e) => handleCheckboxChange(e, "taiChiForm")}/>
                        <label for={form.exercise}>{form.exercise}</label><br/>
                      </div>
                    );
                  })}
                </div>
                <div className="checkbox-item">
                  <h4>Tai Chi Weapon Forms</h4>
                  {taiChiWeaponForms.map((form, index)=>{
                    return (
                      <div key={index}>
                        <input type="checkbox" id={index} name={form.exercise} value={form.exercise} onChange={(e) => handleCheckboxChange(e, "taiChiWeaponForm")}/>
                        <label for={form.exercise}>{form.exercise}</label><br/>
                      </div>
                    );
                  })}
                </div> 
              </div>
            </div>
    
            <button type="submit" className="btn btn-dark w-100">
              Get Workout Plan
            </button>
          </form>
    
          <div style={{ display: submitStatus ? 'block' : 'none' }} className="mt-4">
            <div className="card shadow-lg p-4">
              <WeekSchedule
                week={week}
                reps={reps}
                sets={sets}
                amount={amountOfExcersises}
                pushupWeek={pushupWeek}
                holdingTime={holdingTime}
                level={level}
                selectedForms={selectedForms} 
              />
            </div>
          </div>
        </div>
      );
    }
export default  UserForm