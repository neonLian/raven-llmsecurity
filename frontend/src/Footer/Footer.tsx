import { Container, Text, Box } from '@mantine/core';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <Box component="footer" mt="100px" className={styles.footer}>
            <Container size="xl">
                <Text size="sm" c="gray" ta="center" className={styles.footerText}>
                    Microsoft Intern Hackathon 2025
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;
