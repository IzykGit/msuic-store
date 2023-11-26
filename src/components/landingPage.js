import styles from '../styles/landingPage.module.css'

const LandingPage = () => {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.storeTitle}>
                <h1 data-aos='fade-down'>Classic Format</h1>
                <p data-aos='fade-down' data-aos-delay={250}>The best place for vintage music formats.</p>
            </div>
        </div>
    )
}

export default LandingPage;