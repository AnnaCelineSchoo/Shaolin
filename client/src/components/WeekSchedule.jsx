import React from "react";
import StrengthTable from "./StrengthTable"


function WeekSchedule({week, level}){
    return(
        <div>
            <div className="container p-5 my-5 border">
                <h3 class="day-container">Sunday</h3>
                <StrengthTable  type= "arm"  week={week} level={level} />
            </div>
            <div className="container p-5 my-5 border">
                <h3 class="day-container">Monday</h3>
                <StrengthTable type= "hip" week={week} level={level}/>
                <StrengthTable type= "belly" week={week} level={level}/>
            </div>
            <div className="container p-5 my-5 border">
                <h3 class="day-container">Tuesday</h3>
                <StrengthTable type= "leg" week={week} level={level}/>
            </div>
            <div className="container p-5 my-5 border">
                <h3 class="day-container">Wednesday</h3>
                <StrengthTable type= "arm" week={week} level={level}/>
                <StrengthTable type= "hip" week={week} level={level}/>
                <StrengthTable type= "belly" week={week} level={level}/>
            </div>
        </div>
        
    );
    
}

export default WeekSchedule;