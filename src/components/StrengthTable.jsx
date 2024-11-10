import React, {useState, useEffect} from "react";

function StrengthTable({type, week, reps, sets, amount, holdingTime}){
    const [excersises, setExcersises] = useState([]);

    useEffect(() => {
        // Simulate data fetching
         const fetchData = async () => {
            try {
                //const response = await fetch('/workouts/strength.json');
                const response = await fetch(`${process.env.PUBLIC_URL}/workouts/excersises.json`);
                const result = await response.json();
                const workoutData = result[type]; // Ensure workoutData is defined
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
                            {type.includes("Form") || type.includes("basics")? null: <th>{ type === "stances" ? "Holding time (sec)" : "reps"}</th>}
                            {type.includes("Form") || type.includes("basics")  ? null : <th>Sets</th>}
                            <th>videolink</th>
                        </tr>
                    </thead>
                    <tbody>
                        {excersises.map((excersise, index) =>{
                            return (
                            <tr key={index}>
                                {/* <th>{index+1}</th> */}
                                <td>{excersise.exercise}</td>
                                {type.includes("Form") || type.includes("basics")? null : <td>{type === "stances"? holdingTime : reps}</td>}
                                {type.includes("Form")|| type.includes("basics") ? null : <td>{sets}</td>}
                                {excersise.videoLink === ""? <td>not availible</td> : <td><a className="link-danger link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href={excersise.videoLink} target="_blank" rel="noopener noreferrer">video</a></td> }
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