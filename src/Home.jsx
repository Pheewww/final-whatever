

import collegelogo from './images/college.png'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { FaUser, FaClipboardList, FaSignInAlt, FaInfoCircle, FaPhone } from 'react-icons/fa';
import FrontNavbar from './FrontNavbar';
import Entry from './Entry';
import Admin from './Admin';

function Home() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <img src={collegelogo} alt="College Logo" style={styles.logo} />
                <h1 style={styles.title}>VanguardPass</h1>
            </header>
            <main style={styles.main}>
                <h2 style={styles.subtitle}>Welcome to VanguardPass</h2>
                <p style={styles.description}>
                    VanguardPass helps students request visitor entry. The  JD sir can accept or deny these requests.
                </p>
                <div style={styles.stepsContainer}>
                    <div style={styles.step}>
                        <FaUser style={styles.icon} />
                        <h3 style={styles.stepTitle}>Step 1: Create Request</h3>
                        <p style={styles.stepDescription}>Fill out the form to request visitor entry.</p>
                    </div>
                    <div style={styles.step}>
                        <FaClipboardList style={styles.icon} />
                        <h3 style={styles.stepTitle}>Step 2: Review</h3>
                        <p style={styles.stepDescription}>JD sir reviews your request.</p>
                    </div>
                    <div style={styles.step}>
                        <FaSignInAlt style={styles.icon} />
                        <h3 style={styles.stepTitle}>Step 3: Entry</h3>
                        <p style={styles.stepDescription}>Get notified if your request is accepted.</p>
                    </div>
                </div>
                <section style={styles.infoSection}>
                    <h2 style={styles.infoTitle}><FaInfoCircle style={styles.infoIcon} /> About VanguardPass</h2>
                    <p style={styles.infoDescription}>
                        VanguardPass is designed to streamline the process of visitor entry requests, ensuring a smooth and efficient experience for students and staff.
                    </p>
                </section>
                <section style={styles.contactSection}>
                    <h2 style={styles.contactTitle}><FaPhone style={styles.contactIcon} /> Contact Us</h2>
                    <p style={styles.contactDescription}>
                        For any details, please contact us at support@aitpune.edu.in or call us at +91 XXXXXXXXXX.
                    </p>
                </section>
            </main>
            <Routes>
                <Route path="/entry" element={<Entry />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f0f4f8',
        minHeight: '100vh',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    logo: {
        width: '60px',
        height: '60px',
        marginRight: '10px',
    },
    title: {
        fontSize: '3rem',
        color: '#2c3e50',
        fontWeight: 'bold',
    },
    main: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
    subtitle: {
        fontSize: '2rem',
        color: '#34495e',
    },
    description: {
        fontSize: '1.2rem',
        color: '#2c3e50',
        marginBottom: '30px',
    },
    stepsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    step: {
        width: '220px',
        padding: '15px',
        backgroundColor: '#ecf0f1',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        margin: '10px',
    },
    icon: {
        fontSize: '2.5rem',
        color: '#2980b9',
        marginBottom: '10px',
    },
    stepTitle: {
        fontSize: '1.4rem',
        color: '#2c3e50',
    },
    stepDescription: {
        fontSize: '1rem',
        color: '#7f8c8d',
    },
    infoSection: {
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#ecf0f1',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    },
    infoTitle: {
        fontSize: '1.8rem',
        color: '#2c3e50',
    },
    infoIcon: {
        marginRight: '10px',
    },
    infoDescription: {
        fontSize: '1.2rem',
        color: '#7f8c8d',
    },
    contactSection: {
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#ecf0f1',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    },
    contactTitle: {
        fontSize: '1.8rem',
        color: '#2c3e50',
    },
    contactIcon: {
        marginRight: '10px',
    },
    contactDescription: {
        fontSize: '1.2rem',
        color: '#7f8c8d',
    },
};

export default Home;