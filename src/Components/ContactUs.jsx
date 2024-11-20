import { useState } from 'react';
import { useTheme } from '../ThemeContext'; // Adjust the import path based on your structure
import styles from './styles/ContactUs.module.css'; // Adjust the path based on your structure
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Import an icon for the success message
import { motion } from 'framer-motion'; // Import Framer Motion for animation

const ContactUs = () => {
    const { isDarkTheme } = useTheme(); // Get the theme context
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // State to store error message

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent
        const contactData = { name, email, query };

        try {
            const response = await fetch('http://localhost:5000/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (response.ok) {
                // Successful submission
                setIsSubmitted(true);
                setName('');
                setEmail('');
                setQuery('');
                setErrorMessage(''); // Reset error message
            } else {
                // Handle errors
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    const closePopup = () => {
        setIsSubmitted(false);
    };

    return (
        <div className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={`${styles.contactUs} ${isDarkTheme ? styles.dark : styles.light}`}>
                <h1 className={styles.title}>Feedback Form</h1>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="query">Your Query/Feedback</label>
                        <textarea
                            id="query"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>

                {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

                {isSubmitted && (
                    <motion.div 
                        className={styles.popup}
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 20 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.popupContent}>
                            <AiOutlineCheckCircle size={40} color="#4caf50" />
                            <h2>Thank You!</h2>
                            <p>Our team will contact you soon.</p>
                            <button onClick={closePopup} className={styles.closeButton}>Close</button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ContactUs;
