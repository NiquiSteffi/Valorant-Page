import axios from "axios";
import { useEffect, useState } from "react";
import { AgentsCard } from "../components/AgentsCard";
import styles from "../styles/Agents.module.css";

        
export function Agents() {

  const [agents, setAgents] = useState([]);


  const obtenerAgente = async () => {
    const respuesta = await axios.get("https://valorant-api.com/v1/agents")
    const Agent = await respuesta.data.data
    setAgents(Agent)
  }

  useEffect(() => {
    obtenerAgente()
  }, [])
  

  return (
    <>
      <ul className={styles.agentsGrid}>
        {
          agents.map((agent) => {
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
    </>
  )
  
} 