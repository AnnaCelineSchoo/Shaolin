import React, {useState, useEffect} from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { Link } from "react-router-dom";

function StrengthTable({type, week, reps, sets, amount, holdingTime}){
    const [excersises, setExcersises] = useState([]);

    useEffect(() => {
        // Simulate data fetching
         const fetchData = async () => {
            try {
                //const response = await fetch('/workouts/strength.json');
                const response = await fetch(`${process.env.PUBLIC_URL}/workouts/strength.json`);
                const result = await response.json();
                console.log("fetched data", result); // Log only once on mount
                console.log("data length", result[type].length);

                const workoutData = result[type]; // Ensure workoutData is defined
                console.log("type:", type)
                console.log("Workout data for type:", workoutData);
    
                let newAmount = amount;
                let excersiseNumbers = [];
                if (amount > workoutData.length){
                    newAmount = workoutData.length
                }
                while (excersiseNumbers.length < newAmount) {
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
            <h4 className="bg-black text-white text-center py-2">{type.replaceAll("_", " ")}</h4>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Excersise</th>
                            {type.includes("forms") || type.includes("basics")? null: <th>{ type === "stances" ? "Holding time (sec)" : "reps"}</th>}
                            {type.includes("forms") || type.includes("basics")  ? null : <th>Sets</th>}
                            <th className="no-print">videolink</th>
                        </tr>
                    </thead>
                    <tbody>
                        {excersises.map((excersise, index) =>{
                            return (
                            <tr key={index}>
                                <td>{excersise.exercise}</td>
                                {type.includes("forms") || type.includes("basics")? null : <td>{type === "stances"? holdingTime : reps}</td>}
                                {type.includes("forms")|| type.includes("basics") ? null : <td>{sets}</td>}
                                {/* {excersise.videoLink === ""? <td className="no-print"><NotInterestedIcon/></td> : <td className="no-print"><IconButton className="link-danger link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href={excersise.videoLink} target="_blank" rel="noopener noreferrer"><YouTubeIcon/></IconButton></td> } */}
                                {!excersise.embedLink || excersise.embedLink === "" ? (
                                    <td className="no-print"><NotInterestedIcon /></td>
                                    ) : (
                                        <td className="no-print">
                                            <Link
                                                to={`/video/${excersise.embedLink}`} // Extract video ID from the YouTube URL
                                                style={{ textDecoration: "none", color: "inherit" }} // Optional styling for cleaner appearance
                                            >
                                                <IconButton
                                                    className="link-danger link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                                >
                                                    <YouTubeIcon />
                                                </IconButton>
                                            </Link>
                                        </td>
                                    )}
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