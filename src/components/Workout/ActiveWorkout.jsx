import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fondoLanding from "../../assets/fondo_landing.webp";
import "./ActiveWorkout.css";

function ActiveWorkout() {
    const [seconds, setSeconds] = useState(2540);
    const [isTimerActive, setIsTimerActive] = useState(true);

    const [exercises, setExercises] = useState([
        {
            id: 1,
            name: "BENCH PRESS (BARBELL)",
            muscleGroup: "CHEST / SHOULDERS",
            sets: [
                { id: 101, weight: 80, reps: 10, is_completed: true },
                { id: 102, weight: 85, reps: "", is_completed: false }
            ]
        },
        {
            id: 2,
            name: "BACK SQUAT",
            muscleGroup: "QUADS / GLUTES",
            sets: [
                { id: 201, weight: 100, reps: 5, is_completed: true }
            ]
        }
    ]);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isTimerActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isTimerActive]);

    const formatTime = (totalSecs) => {
        const hrs = Math.floor(totalSecs / 3600);
        const mins = Math.floor((totalSecs % 3600) / 60);
        const secs = totalSecs % 60;
        return [
            hrs.toString().padStart(2, "0"),
            mins.toString().padStart(2, "0"),
            secs.toString().padStart(2, "0")
        ].join(":");
    };

    const toggleCompleted = (exerciseId, setId) => {
        setExercises(prevExercises =>
            prevExercises.map(ex => {
                if (ex.id === exerciseId) {
                    return {
                        ...ex,
                        sets: ex.sets.map(s => s.id === setId ? { ...s, is_completed: !s.is_completed } : s)
                    };
                }
                return ex;
            })
        );
    };

    const updateSet = (exerciseId, setId, field, value) => {
        setExercises(prevExercises =>
            prevExercises.map(ex => {
                if (ex.id === exerciseId) {
                    return {
                        ...ex,
                        sets: ex.sets.map(s => s.id === setId ? { ...s, [field]: value } : s)
                    };
                }
                return ex;
            })
        );
    };

    const addNewSet = (exerciseId) => {
        setExercises(prevExercises =>
            prevExercises.map(ex => {
                if (ex.id === exerciseId) {
                    const nextSetNum = ex.sets.length + 1;
                    const lastSet = ex.sets[ex.sets.length - 1];
                    const nextId = Date.now() + Math.random();
                    return {
                        ...ex,
                        sets: [
                            ...ex.sets,
                            {
                                id: nextId,
                                weight: lastSet ? lastSet.weight : 60,
                                reps: "",
                                is_completed: false
                            }
                        ]
                    };
                }
                return ex;
            })
        );
    };

    const handleConcludeTrial = () => {
        setIsTimerActive(false);
        setShowModal(true);
    };

    return (
        <div className="active-workout-container">
            <header className="dashboard-header">
                <button className="header-icon-btn" aria-label="Menú">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                <h1 className="header-title">MDM GYM</h1>
                <button className="header-icon-btn" aria-label="Notificaciones">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                </button>
            </header>

            <div className="workout-content">
                <div className="workout-hero-card">
                    <img src={fondoLanding} alt="Ancient Temple" className="hero-card-bg" />
                    <div className="hero-card-overlay"></div>
                    <div className="hero-card-content">
                        <span className="hero-badge">DIVINE STRENGTH</span>
                        <h2 className="hero-title">Ascend to Glory</h2>
                    </div>
                </div>

                <div className="chronos-panel">
                    <span className="chronos-label">CHRONOS</span>
                    <div className="chronos-timer">{formatTime(seconds)}</div>
                    
                    <div className="chronos-badges">
                        <div className="chronos-badge">
                            <span className="badge-icon">🔥</span>
                            <span>342 KCAL</span>
                        </div>
                        <div className="chronos-badge">
                            <span className="badge-icon">⏱️</span>
                            <span>REST: 60S</span>
                        </div>
                    </div>
                </div>

                <div className="exercises-list">
                    {exercises.map((exercise) => (
                        <div key={exercise.id} className="exercise-card-details">
                            <div className="exercise-header-details">
                                <div className="exercise-title-info">
                                    <h3 className="exercise-title-name">{exercise.name}</h3>
                                    <span className="exercise-muscle-group">{exercise.muscleGroup}</span>
                                </div>
                                <button className="exercise-options-btn">•••</button>
                            </div>

                            <div className="sets-table">
                                <div className="sets-table-header">
                                    <span>SET</span>
                                    <span>WEIGHT (KG)</span>
                                    <span>REPS</span>
                                    <span>STATUS</span>
                                </div>

                                <div className="sets-list-rows">
                                    {exercise.sets.map((set, index) => {
                                        const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];
                                        const setLabel = romanNumerals[index] || (index + 1).toString();
                                        return (
                                            <div key={set.id} className={`set-row ${set.is_completed ? "set-completed" : ""}`}>
                                                <div className="set-index-col">
                                                    <span>{setLabel}</span>
                                                </div>
                                                <div className="set-input-col">
                                                    <input 
                                                        type="number" 
                                                        value={set.weight} 
                                                        placeholder="0"
                                                        onChange={(e) => updateSet(exercise.id, set.id, "weight", e.target.value)}
                                                        disabled={set.is_completed}
                                                    />
                                                </div>
                                                <div className="set-input-col">
                                                    <input 
                                                        type="number" 
                                                        value={set.reps} 
                                                        placeholder="--"
                                                        onChange={(e) => updateSet(exercise.id, set.id, "reps", e.target.value)}
                                                        disabled={set.is_completed}
                                                    />
                                                </div>
                                                <div className="set-check-col">
                                                    <button 
                                                        className={`check-button ${set.is_completed ? "checked" : ""}`}
                                                        onClick={() => toggleCompleted(exercise.id, set.id)}
                                                    >
                                                        {set.is_completed ? (
                                                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="#ffffff" strokeWidth="3.5" fill="none">
                                                                <polyline points="20 6 9 17 4 12"></polyline>
                                                            </svg>
                                                        ) : (
                                                            <span className="plus-symbol">+</span>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <button className="btn-add-set" onClick={() => addNewSet(exercise.id)}>
                                <span>+ NEW RECORD</span>
                            </button>
                        </div>
                    ))}
                </div>

                <button className="btn-add-exercise-dashed">
                    <span className="plus-symbol-lg">+</span>
                    <span>ADD EXERCISE</span>
                </button>

                <button className="btn-conclude-trial" onClick={handleConcludeTrial}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="flag-icon">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                        <line x1="4" y1="22" x2="4" y2="15"></line>
                    </svg>
                    <span>CONCLUDE TRIAL</span>
                </button>
            </div>

            {showModal && (
                <div className="workout-success-modal-backdrop">
                    <div className="workout-success-modal">
                        <div className="success-laurel-wreath">🏆</div>
                        <h3 className="modal-title">¡PRUEBA SUPERADA!</h3>
                        <p className="modal-message">Tu tonelaje ha sido registrado en los anales del templo. Los Dioses del Olimpo sonríen ante tu esfuerzo.</p>
                        <div className="modal-stats">
                            <div className="modal-stat">
                                <span className="modal-stat-val">{formatTime(seconds)}</span>
                                <span className="modal-stat-lbl">TIEMPO</span>
                            </div>
                            <div className="modal-stat">
                                <span className="modal-stat-val">342 kcal</span>
                                <span className="modal-stat-lbl">CALORÍAS</span>
                            </div>
                        </div>
                        <button className="btn-modal-close" onClick={() => {
                            setShowModal(false);
                            setSeconds(0);
                            setIsTimerActive(true);
                        }}>
                            ACEPTAR LA GLORIA
                        </button>
                    </div>
                </div>
            )}

            <nav className="dashboard-nav">
                <Link to="/workout" className="nav-item active">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                        <path d="M6.5 6.5h11M6.5 12h11M6.5 17.5h11"></path>
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    </svg>
                    <span>Workout</span>
                </Link>
                <Link to="/dashboard" className="nav-item">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Social</span>
                </Link>
                <Link to="/analytics" className="nav-item">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    <span>Progress</span>
                </Link>
            </nav>
        </div>
    );
}

export default ActiveWorkout;
