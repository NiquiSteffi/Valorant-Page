import axios from "axios";
import { useEffect, useState } from "react";
import { AgentsCard } from "../components/AgentsCard";
import styles from "../styles/Agents.module.css";

        
export function Agents() {

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents")
      .then(response => {
      setAgents(response.data.data)
    })
    .catch(e => {
    })
  }, [])
  

  return (
    <ul className={styles.agentsGrid}>
      {
        agents.map((agent) => {
          console.log(agents)
          return (
            agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"
            ?
            <AgentsCard key={agent.uuid} agent={agent} />
            :
            null
          )
        })
      }
    </ul>
  )
  
} 