import { Link } from 'react-router-dom';
import { FaDollarSign, FaChartLine, FaRegBell, FaBullseye, FaChartPie } from 'react-icons/fa';
import { useTheme } from '../ThemeContext'; // Assuming you have a theme context
import styles from './styles/Services.module.css';

const Services = () => {
    const { isDarkTheme } = useTheme(); // Using theme context

    const services = [
        {
            title: "Expense Tracking & Budgeting",
            description: "Log your expenses and manage budgets.",
            path: "/expense-track",
            icon: <FaDollarSign className={styles.icon} />,
        },
        {
            title: "Resources for Financial Independency",
            description: "Resources to manage student expenses and finances. Help track and control spending, ensuring better financial management and independence.",
            path: "/resources",
            icon: <FaRegBell className={styles.icon} />,
        },
        {
            title: "Fiancial Event Planning (Members)",
            description: "Set and track financial goals with advanced tools for your upcoming event.",
            path: "/event-manage",
            icon: <FaBullseye className={styles.icon} />,
        },
        {
            title: "Visual Reports & Insights (Members)",
            description: "View detailed analytics and personalized insights.",
            path: "/visual-reports",
            icon: <FaChartPie className={styles.icon} />,
        },
    ];

    return (
        <div className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
            <h1 className={styles.title}>Our Services</h1>
            <p className={styles.subtitle}>
                Explore our financial tools to help you manage your expenses and improve your financial well-being.
            </p>
            <div className={styles.cardGrid}>
                {services.map((service, index) => (
                    <Link to={service.path} key={index} className={`${styles.card} ${isDarkTheme ? styles.darkCard : styles.lightCard}`}>
                        {service.icon}
                        <h2 className={styles.cardTitle}>{service.title}</h2>
                        <p className={styles.cardDescription}>{service.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Services;
