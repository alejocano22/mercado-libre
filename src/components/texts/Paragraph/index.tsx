import styles from './Paragraph.module.css';

export interface ParagraphProps {
  text: string;
  size: 'small' | 'default';
}

const Paragraph = ({ text, size }: ParagraphProps) => {
  const getSize = (size: string) => {
    const sizes: any = {
      small: 'paragraphSmall',
      default: 'paragraph',
    };
    return sizes[size] || sizes['default'];
  };

  return <p className={`${styles[getSize(size)]}`}>{text}</p>;
};

export default Paragraph;
