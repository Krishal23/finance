import { useTheme } from '../../ThemeContext';
import styles from '../styles/Testimonials.module.css';
import user1 from '../../assets/amit.jpeg'
import user2 from '../../assets/alok.jpeg'
import user3 from '../../assets/sumit.jpeg'

const testimonialsData = [
    {
        id: 1,
        text: "This platform has completely transformed my financial management! I feel more in control than ever.",
        name: "Sumit",
        year: "Elixr Crew",
        image: user1, // Replace with actual image path
    },
    {
        id: 2,
        text: "The budgeting tools are incredibly user-friendly, making it easy to track my spending.",
        name: "Alok",
        year: "1st Year Student",
        image: user2, // Replace with actual image path
    },
    {
        id: 3,
        text: "I love the personalized advice I receive. It’s like having a financial advisor at my fingertips!",
        name: "Amit Behra",
        year: "BSC 2nd Year Student",
        image: user3, // Replace with actual image path
    },
];

function Testimonials() {
    const { isDarkTheme } = useTheme();

    return (
        <section className={`${styles.testimonialsSection} ${isDarkTheme ? styles.dark : ''}`}>
            <div className={styles.container}>
                <h2 className={`${styles.title} ${isDarkTheme ? 'dark' : ''}`}>What Our Users Say</h2>
                <div className={styles.testimonialsGrid}>
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className={`${styles.testimonialItem} ${isDarkTheme ? styles.dark : ''}`}>
                            <div className={styles.imageWrapper}>
                                <img src={testimonial.image} alt={testimonial.name} className={styles.userImage} />
                            </div>
                            <p className={`${styles.testimonialText} ${isDarkTheme ? 'dark' : ''}`}>
                                “{testimonial.text}”
                            </p>
                            <span className={styles.userInfo}>
                                - {testimonial.name}, {testimonial.year}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
