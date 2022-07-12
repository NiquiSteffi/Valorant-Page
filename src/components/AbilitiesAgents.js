export function AbilitiesAgents({ abilitie }) {
    
    const imgAbilitie = abilitie.displayIcon;
    return (
        <div>
            <img
                src={imgAbilitie}
                alt={abilitie.slot}
            />
        </div>
      
    )
}