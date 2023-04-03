import styles from './Subtitle.module.css';

export interface SubtitleProps {
  text: string;
  hierarchy: 'h2' | 'h3' | 'h4';
}

const Subtitle = ({ hierarchy, text }: SubtitleProps) => {
  const getElement = (hierarchy: string, text: string) => {
    const subtitles: any = {
      h2: <h2 className={styles.subtitle2}>{ text }</h2>,
      h3: <h3 className={styles.subtitle3}>{ text }</h3>,
      h4: <h4 className={styles.subtitle4}>{ text }</h4>,
    };

    return subtitles[hierarchy] || subtitles['h2'];
  };

  return getElement(hierarchy, text);
};

export default Subtitle;
