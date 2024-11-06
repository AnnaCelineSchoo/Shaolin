import React, {useState, useEffect} from "react";

function StrengthTable({type, week, reps, sets, amount, holdingTime}){
    const [data, setData] = useState([]);
    const [workoutData, setWorkoutData]= useState([])
    const [excersises, setExcersises] = useState([]);

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
    
                let excersiseNumbers = [];
                while (excersiseNumbers.length < amount) {
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
    }, [type, week, reps, sets, amount]);

        return (
        <div>
            <h4 className="bg-black text-white text-center py-2">{type}</h4>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* <th>Round</th> */}
                            <th>Excersise</th>
                            <th>{type === "basics" || type === "stances"? "Holding time (sec)" : "reps"}</th>
                            <th>sets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {excersises.map((excersise, index) =>{
                            return (
                            <tr key={index}>
                                {/* <th>{index+1}</th> */}
                                <td>{excersise.exercise}</td>
                                <td>{type === "basics" || type === "stances"? holdingTime : reps}</td>
                                <td>{sets}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table> 
            </div> 
        </div>
    );           
}

export default StrengthTable;