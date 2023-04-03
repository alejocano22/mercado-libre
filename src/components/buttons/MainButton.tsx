import styles from './Buttons.module.css';

export interface MainButtonProps {
  color: 'blue' | 'red' | 'default';
  text: string;
  onClick: () => void;
}

const MainButton = ({ color, text, onClick }: MainButtonProps) => {
  const getColor = (color: string): string => {
    const colors: any = {
      blue: 'buttonBlue',
      red: 'buttonRed',
      default: 'buttonGray',
    };
    return colors[color] || colors['default'];
  };
  return (
    <button
      className={`${styles.mainButton} ${styles[getColor(color)]}`}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default MainButton;
