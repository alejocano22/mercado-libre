import styles from './Title.module.css';

export interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
