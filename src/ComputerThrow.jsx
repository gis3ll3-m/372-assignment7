export default function ComputerThrow ({choice}){
    return (
        <section>
            <h2>Computer</h2>
            <img className="computer" src={choice ? `/public/images/${choice}.png` : "/public/images/question-mark.png"} 
            alt="computer choice"></img>
        </section>
    );
}