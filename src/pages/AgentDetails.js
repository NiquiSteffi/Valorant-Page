import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from '../styles/AgentDetails.module.css';
// import {AbilitiesAgents} from '../components/AbilitiesAgents'

export function AgentDetails() {
  const { uuid } = useParams();
  const [agent, setAgent] = useState([]);
  const [agentRole, setAgentRole] = useState([]);


  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents/" + uuid)
      .then(response => {
        setAgent(response.data.data)
        setAgentRole(agent.role)
      })
      .catch(e => {
      })
  }, [uuid])
  
  // if (!agent) {
  //   return null
  // }
  
  return (
    <div className={styles.principalContainer}>
      <p className={styles.nameContainer}>
        {agent.displayName.toUpperCase()}
      </p>

      <div className={styles.principalImageContainer}>
        <img
          src={agent.fullPortraitV2}
          alt={agent.displayName}
          className={styles.imageContainer}
          />
      </div>

      <div className={styles.detailsContainer}>
        <div>
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
      </div>
    </div>
  )
}