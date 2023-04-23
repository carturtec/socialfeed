import styles from './Avatar.module.css';

//se hasBorder = true então aplica a borda
export function Avatar({hasBorder = true, src}) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
  );
}