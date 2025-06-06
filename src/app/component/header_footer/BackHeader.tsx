import styles from "./component.module.css"

export default function BackHeader(){
    return(
      <div className={styles.backHeader}>
        <a href="#">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    )
}