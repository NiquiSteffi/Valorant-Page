import styles from '../styles/AgentsCard.module.css';

export function AgentsCard({ agent }) {
    const imageUrl = agent.fullPortraitV2;
    return (
      <li className={styles.agentCard}>
        <img
          width={230}
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
      </li>
    )
}