import React,{ useState } from "react";
import WeekSchedule from "./WeekSchedule";


function UserForm(){
    const [currentWeekNr, setcurrentWeekNr] = useState("1");  
    const [level, setLevel] = useState("beginner");  
    const [submitStatus, setSubmitStatus] = useState(false);  

    function showTable (e){
        e.preventDefault(); // Prevent the default form submission
        setSubmitStatus(!submitStatus);
    }

    return ( 
    <div >
        <form className="form" onSubmit={showTable}>
 
            <label>Fitness Level:</label><br/>
            <select id="select-level" onChange={(e) => setLevel(e.target.value)}>
            <option value="none">choose a level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            </select><br/><br/>

            <label>Week number:</label><br/>
            <select id="select-week" onChange = {e => setcurrentWeekNr(e.target.value)} >
            <option value="none">Choose a week</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </select><br/><br/>

            <input type="submit" value="submit"/>
        </form> 

        <div style= {{display:submitStatus? "block": "none"}}>
            <h2>Workout Plan Week {currentWeekNr}</h2>
            <WeekSchedule week={currentWeekNr} level={level}/>
        </div>
        
    </div>
    
    );
    

    
}

export default  UserForm