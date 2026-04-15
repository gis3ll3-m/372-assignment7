export default function ResultDisplay({result}){
if (!result) return null;

return(
        
            <section>
                <h2 className={result}>
                    {result == "win" && "You Win!"}
                    {result == "lose" && "You Lose!"} 
                    {result == "tie" && "Nobody wins: Tie!"}
                </h2>
            </section>
          
);
}