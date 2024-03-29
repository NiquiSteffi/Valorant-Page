import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from '../styles/AgentDetails.module.css';
// import {AbilitiesAgents} from '../components/AbilitiesAgents'

export function AgentDetails() {
  const { uuid } = useParams();
  const [agent, setAgent] = useState([]);
  const [agentRole, setAgentRole] = useState([]);
  const [agentAbilities, setAgentAbilities] = useState([]);


  const getAgentsCard = async () => {
    try {
      const response = await axios.get("https://valorant-api.com/v1/agents/" + uuid)
      const agentsDetails = response.data.data
      const agentsRole = agentsDetails.role
      const agentsAbilities = agentsDetails.abilities
      setAgentAbilities(agentsAbilities)
      setAgent(agentsDetails)
      setAgentRole(agentsRole)
    }
    catch {
      console.log("hubo un error")
    }
  }
  
  useEffect(() => {
    getAgentsCard()
  }, [uuid])
  

  return (
    <div className={styles.principalContainer}>
      <p className={styles.nameContainer}>
        {agent.displayName && agent.displayName.toUpperCase()}
      </p>

      <div className={styles.principalImageContainer}>
        <img
          src={agent.fullPortraitV2}
          alt={agent.displayName}
          className={styles.imageContainer}
          />
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.containerNameImageRole}>
          <p className={styles.nameRole}>
            {agentRole.displayName}
          </p>
          <img
            src={agentRole.displayIcon}
            alt={agentRole.displayName}
            className={styles.imageRole}
          />
        </div>
        <p className={styles.descriptionContainer}>
          {agent.description}
        </p>
        <p className={styles.descriptionRole}>
          {agentRole.description}
        </p>
        <ul className={styles.containerImageAbilities}>
          {
            agentAbilities.map((abilities) => {
              return (
                abilities.displayIcon === null
                ?
                null
                :
                <li className={styles.containerLiAbilities}>
                  <img
                    src={abilities.displayIcon}
                    alt={abilities.displayName}
                    className={styles.imageAbilities}
                    key={abilities.slot}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}