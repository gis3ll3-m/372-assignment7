export default function ScoreBoard({ score }) {
    return (
        <section className="scoreboard">
            <div className="score-box">
                <h3>Player</h3>
                <p>{score.win}</p>
            </div>

            <div className="score-box">
                <h3>Computer</h3>
                <p>{score.lose}</p>
            </div>
        </section>
    )
}