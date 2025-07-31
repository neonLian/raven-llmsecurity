
import { Button, Container, Title, Text } from '@mantine/core';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const handleBeginClick = () => {
    const beginElement = document.getElementById('begin');
    if (beginElement) {
      beginElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
        <Container size="md" className={styles.hero}>
            <Title order={1} size="5rem" className={styles.title}>R.A.V.E.N</Title>
            <Text size="2rem" className={styles.subtitle}>Red-teaming AI Validation & Exploitation Network</Text>
            <Button variant="gradient" size="lg" className="button" onClick={handleBeginClick}>BEGIN</Button>
        </Container>
        <div className={styles.triangleLeft}></div>
        <div className={styles.triangleRight}></div>
        <div className={styles.floatingLinesContainer}>
            <div className={`${styles.floatingLine} ${styles.floatingLineLeft}`}></div>
            <div className={`${styles.floatingLine} ${styles.floatingLineLeft}`}></div>
            <div className={`${styles.floatingLine} ${styles.floatingLineLeft}`}></div>
            <div className={`${styles.floatingLine} ${styles.floatingLineRight}`}></div>
            <div className={`${styles.floatingLine} ${styles.floatingLineRight}`}></div>
            <div className={`${styles.floatingLine} ${styles.floatingLineRight}`}></div>
        </div>
    </>
  );
};

export default Hero;
