import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from '../styles/AgentDetails.module.css';
// import {AbilitiesAgents} from '../components/AbilitiesAgents'

export function AgentDetails() {
  const { uuid } = useParams();
  const [agent, setAgent] = useState([]);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents/" + uuid)
      .then(response => {
        setAgent(response.data.data)
      })
      .catch(e => {
      })
  }, [uuid])
  // console.log(agent)
  
  useEffect(() => {
    setAbilities(agent)
  }, [])
  console.log(abilities)
  
  

  if (!agent) {
    return null
  }

  
  
  const imageUrl = agent.fullPortraitV2;
  
  return (
    <div className={styles.principalContainer}>
      <div>
        
      </div>
      <div className={styles.detailsContainer}>
        <p className={styles.nameContainer}>
          {agent.displayName}
        </p>
        <p className={styles.descriptionContainer}>
          {agent.description}
        </p>
        <div>
          {
            // Abilities.map((abilitie) => {
            //   return (
            //     <AbilitiesAgents key={abilitie.uuid} abilitie={abilitie} />
            //   )
            // })
          }
        </div>
      </div>
      <div className={styles.principalImageContainer}>
        <img
          src={imageUrl}
          alt={agent.displayName}
          className={styles.imageContainer}
        />
      </div>
    </div>
  )
}