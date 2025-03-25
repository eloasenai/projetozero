import styles from './Logo.module.css';
import logoImage from './img/Captura de tela 2025-03-25 112327.png'; // Ajuste o caminho da imagem

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logoImage} alt="Logo" className={styles.logoImage} />
    </div>
  );
}

export default Logo;