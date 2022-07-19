import { Link } from 'react-router-dom';
import styles from '../styles/AgentsCard.module.css';

export function AgentsCard({ agent }) {
    const imageUrl = agent.background;
    return (
      <li className={styles.agentCard}>
        <Link to={"/agent/" + agent.uuid}>
          <img
            width={200}
            height={345}
            src={imageUrl}
            alt='agent.displayName'
            className={styles.imageCard}
          />
          <p>
            {
              agent.displayName
            }
          </p>
        </Link>
      </li>
    )
}