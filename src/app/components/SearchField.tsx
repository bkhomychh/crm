import styles from '@/styles/common/search-field.module.scss';

export interface SearchFieldProps {}

export default function SearchField({}: SearchFieldProps) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Search..." />
      <button className={styles.btn} type="button">
        <svg>
          <use href="./sprite.svg#search"></use>
        </svg>
      </button>
    </div>
  );
}
