import { Link } from "react-router-dom";
import minotauroChallenge from "../../assets/minotauro_challenge.png";
import "./Dashboard.css";

function Dashboard() {
    const activeChallenge = {
        title: "Derrotar al Minotauro",
        badge: "ESFUERZO COLECTIVO",
        description: "Aporta tu tonelaje levantado esta semana para superar la prueba del laberinto. La gloria aguarda a los espartanos.",
        currentWeight: 8450,
        targetWeight: 10000,
        percentage: 84.5
    };

    const leaderboard = [
        { id: 1, name: "ZURRAABUELAS27", total_weight: 3475, rank: 1 },
        { id: 2, name: "MAIKELNAJT", total_weight: 2765, rank: 2 },
        { id: 3, name: "GAMBABRIEL", total_weight: 1765, rank: 3 }
    ];

    const feed = [
        { id: 10, user_name: "Juan", workout_name: "Pecho y Tríceps", date: "2026-06-12", total_volume: 4500 },
        { id: 11, user_name: "Maria", workout_name: "Sentadilla Pesada", date: "2026-06-12", total_volume: 3800 },
        { id: 12, user_name: "Pedro", workout_name: "Tirón e Hipertrofia", date: "2026-06-11", total_volume: 5100 }
    ];

    return (
        <div className="dashboard-container">
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

            <div className="dashboard-content">
                <section className="section-challenges">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Desafíos Grupales</h2>
                        <span className="badge-active">ACTIVO</span>
                    </div>

                    <div className="challenge-card">
                        <div className="challenge-image-container">
                            <img src={minotauroChallenge} alt="Minotauro Labyrinth" className="challenge-image" />
                            <div className="challenge-image-overlay"></div>
                            <span className="challenge-category">{activeChallenge.badge}</span>
                        </div>

                        <div className="challenge-body">
                            <h3 className="challenge-title">{activeChallenge.title}</h3>
                            <p className="challenge-description">{activeChallenge.description}</p>
                            
                            <div className="challenge-progress-container">
                                <div className="challenge-progress-text">
                                    <span>PROGRESO ACTUAL: <strong className="gold-text">{activeChallenge.currentWeight.toLocaleString()}</strong> / {activeChallenge.targetWeight.toLocaleString()} kg</span>
                                    <span className="gold-text">{activeChallenge.percentage}%</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div className="progress-bar-fill" style={{ width: `${activeChallenge.percentage}%` }}></div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="challenge-actions">
                                <button className="btn-primary-sm">REGISTRAR PESO</button>
                                <button className="btn-secondary-sm">DETALLES</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-leaderboard">
                    <h2 className="section-title">LEADERBOARD</h2>
                    <div className="leaderboard-marble-panel">
                        <div className="leaderboard-header-laurel">
                            {/* Laurel wreath vector style */}
                            <svg viewBox="0 0 100 30" width="80" height="24" fill="var(--gold-primary)" opacity="0.8">
                                <path d="M 50 25 C 40 25 35 15 30 15 C 33 15 36 20 40 20 C 42 15 38 10 33 10 C 37 10 41 12 43 16 C 45 12 42 5 36 5 C 41 5 45 8 47 12 C 48 8 49 4 50 4 C 51 4 52 8 53 12 C 55 8 59 5 64 5 C 58 5 55 12 57 16 C 59 12 63 10 67 10 C 62 10 58 15 60 20 C 64 20 67 15 70 15 C 65 15 60 25 50 25 Z" />
                            </svg>
                        </div>
                        <ul className="leaderboard-list">
                            {leaderboard.map((user) => (
                                <li key={user.id} className="leaderboard-row">
                                    <div className="leaderboard-rank">
                                        <span className={`rank-number rank-${user.rank}`}>{user.rank}</span>
                                    </div>
                                    <div className="leaderboard-username">{user.name}</div>
                                    <div className="leaderboard-score">{user.total_weight} <span className="score-unit">kg</span></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="section-feed">
                    <h2 className="section-title">Últimos entrenamientos globales</h2>
                    <div className="feed-list">
                        {feed.map((item) => (
                            <div key={item.id} className="feed-item">
                                <div className="feed-item-header">
                                    <div className="feed-user-avatar">
                                        <span>{item.user_name[0]}</span>
                                    </div>
                                    <div className="feed-user-info">
                                        <h4 className="feed-username">{item.user_name}</h4>
                                        <p className="feed-workout-name">{item.workout_name}</p>
                                    </div>
                                    <div className="feed-meta">
                                        <span className="feed-date">{item.date}</span>
                                    </div>
                                </div>
                                <div className="feed-item-body">
                                    <span className="feed-stat-label">VOLUMEN TOTAL</span>
                                    <span className="feed-stat-value">{item.total_volume.toLocaleString()} kg</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <nav className="dashboard-nav">
                <Link to="/workout" className="nav-item">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                        <path d="M6.5 6.5h11M6.5 12h11M6.5 17.5h11"></path>
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    </svg>
                    <span>Workout</span>
                </Link>
                <Link to="/dashboard" className="nav-item active">
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

export default Dashboard;
