import React, {useState, useEffect} from "react";
//import data from "./../workouts/workout.json";
//import strength from "./../workouts/strength.json"


function StrengthTable({type, week, level}){
    const [data, setData] = useState([]);
    const [workoutData, setWorkoutData]= useState([])
    const [excersises, setExcersises] = useState([]);
    const [reps, setReps] = useState(10);
    const [sets, setSets] = useState(3);
    const [amountOfExcersises, setamountOfExcersises] = useState(3);


    useEffect(() => {
        // Simulate data fetching
         const fetchData = async () => {
            try {
                const response = await fetch('/workouts/strength.json');
                const result = await response.json();
                setData(result);
                console.log("fetched data", result); // Log only once on mount
                console.log("data length", data[type].length);

                const workoutData = data[type]; // Ensure workoutData is defined
                setWorkoutData(workoutData);
                console.log("type:", type)
                console.log("Workout data for type:", workoutData);
    
                // Calculate reps, sets, and amountOfExercises based on level
                if (level === "beginner") {
                    setReps(parseInt(week) + 10);
                    setSets(3);
                    setamountOfExcersises(3);
                    console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
                }
                else if(level === "intermediate"){
                    setReps(parseInt(week) + 10);
                    setSets(4);
                    setamountOfExcersises(5);
                    console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
                }
                else if(level === "advanced"){
                    setReps(parseInt(week) + 10);
                    setSets(5);
                    setamountOfExcersises(7);
                    console.log("reps:", reps,"sets" ,  sets,"amount:", amountOfExcersises );
                }
    
                let excersiseNumbers = [];
                while (excersiseNumbers.length < amountOfExcersises) {
                    const randomNr = Math.floor(Math.random() * workoutData.length);
                    if (!excersiseNumbers.includes(randomNr)) {
                        excersiseNumbers.push(randomNr);
                    }
                }
    
                // Build the list of exercises
                const excersisesList = excersiseNumbers.map(index => workoutData[index]);
                setExcersises(excersisesList);
                console.log(excersisesList);
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [type, week, level]);

        return (
        <div>
            <h4>Strenght {type}</h4>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>Excersise</th>
                        <th>reps</th>
                        <th>sets</th>
                    </tr>
                </thead>
                <tbody>
                    {excersises.map((excersise, index) =>{
                        return (
                        <tr key={index}>
                            <th>{index+1}</th>
                            <td>{excersise.exercise}</td>
                            <td>{reps}</td>
                            <td>{sets}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>  
        </div>
    );           
}

export default StrengthTable;