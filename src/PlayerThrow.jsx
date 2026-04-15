const choices = ["rock", "paper", "scissors"];

export default function PlayerThrow({onPlay, disabled}){
    return (
        <section>
        <h2>Your Choice</h2>

        <div className="choices">
            {choices.map((item)=> (
                <button key={item} onClick={()=> onPlay(item)}
                disabled={disabled}
                >

                <img src={`./public/images/${item}.png`} alt={`${item} choice`}
                />
                </button>
            ))}
        </div>
    </section>
    )
    
}