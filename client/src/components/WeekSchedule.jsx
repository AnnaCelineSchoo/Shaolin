import React from "react";
import StrengthTable from "./StrengthTable";
import PushupTable from "./pushupsTable";

function WeekSchedule({week, reps, sets, amount, pushupWeek}) {
    return (
        <div className="container mt-4">
            <div className="row">
                {/* Sunday */}
                <div className="col-12 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-header bg-warning text-white text-center">
                            <h4>Sunday</h4>
                        </div>
                        <div className="card-body">
                            <PushupTable week={pushupWeek} />
                            <StrengthTable type="arm" week={week} reps={reps} sets={sets} amount={amount} />
                        </div>
                    </div>
                </div>

                {/* Monday */}
                <div className="col-12 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-header bg-warning text-white text-center">
                            <h4>Monday</h4>
                        </div>
                        <div className="card-body">
                            <StrengthTable type="leg" week={week} reps={reps} sets={sets} amount={amount} />
                            <StrengthTable type="stances" week={week} reps={reps} sets={sets} amount={amount} />
                            <StrengthTable type="stamina" week={week} reps={reps} sets={sets} amount={amount}/>
                        </div>
                    </div>
                </div>

                {/* Tuesday */}
                <div className="col-12 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-header bg-warning text-white text-center">
                            <h4>Tuesday</h4>
                        </div>
                        <div className="card-body">
                            <StrengthTable type="hip" week={week} reps={reps} sets={sets} amount={amount} />
                            <StrengthTable type="belly" week={week} reps={reps} sets={sets} amount={amount} />
                            <StrengthTable type="basics" week={week} reps={reps} sets={sets} amount={amount} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* Wednesday */}
                <div className="col-12 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-header bg-warning text-white text-center">
                            <h4>Wednesday</h4>
                        </div>
                        <div className="card-body">
                            <PushupTable week={pushupWeek} />
                            <StrengthTable type="arm" week={week} reps={reps} sets={sets} amount={amount} />
                        </div>
                    </div>
                </div>

                {/* Thursday */}
                <div className="col-12 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-header bg-warning text-white text-center">
                            <h4>Thursday</h4>
                        </div>
                        <div className="card-body">
                            <StrengthTable type="hip" week={week} reps={reps} sets={sets} amount={amount} />
                            <StrengthTable type="belly" week={week} reps={reps} sets={sets} amount={amount} />
                        </div>
                    </div>
                </div>

                {/* Friday */}
                <div className="col-12 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-header bg-warning text-white text-center">
                            <h4>Friday</h4>
                        </div>
                        <div className="card-body">
                            <p>Zaal training</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* Saturday */}
                <div className="col-12 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-header bg-warning text-white text-center">
                            <h4>Saturday</h4>
                        </div>
                        <div className="card-body">
                            <p>Rest Day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeekSchedule;
