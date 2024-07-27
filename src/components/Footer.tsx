import { useEffect, useState } from 'react';
import '../styles/Footer.css'; // Import your styles for the footer

export const Footer = () => {
    const [isBlurred, setIsBlurred] = useState(true);

    useEffect(() => {
        // Set a timeout to remove the blur after a short delay
        const timer = setTimeout(() => {
            setIsBlurred(false);
        }); // Adjust the duration as needed

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <footer className={`footer ${isBlurred ? 'blur' : ''}`}>
            <p>2024 &copy; Ville Varjus</p>
        </footer>
    );
};