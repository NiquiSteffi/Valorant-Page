import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from '../styles/AgentDetails.module.css';

export function AgentDetails() {
  const { uuid } = useParams();
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents/" + uuid)
      .then(response => {
        setAgent(response.data.data)
    })
    .catch(e => {
    })
  }, [uuid])

  if (!agent) {
    return null
  }

  const imageUrl = agent.fullPortraitV2;

  return (
    <div className={styles.principalContainer}>
      <div className={styles.detailsContainer}>
        <p>
          <strong>{agent.displayName}</strong>
        </p>
        <p>
          {agent.description}
        </p>
      </div>
      <img
        src={imageUrl}
        alt={agent.displayName}
        className={styles.imageContainer}
      />
    </div>
  )
}