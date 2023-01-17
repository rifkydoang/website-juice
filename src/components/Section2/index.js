import styles from './Section2.module.css';

const Section2 = () => {
    return(
        <div className={styles.section2}>
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <h1>100% Natural Juice</h1>
                {/* <!-- <p>looks very similar to real text, dummy name for Lorem ipsum text include</p> --> */}
            </div>
            <div className={styles.content}>
                <h1>No Water</h1>
                {/* <!-- <p>looks very similar to real text, dummy name for Lorem ipsum text include</p> --> */}
            </div>
            <div className={styles.content}>
                <h1>No preservatives</h1>
                {/* <!-- <p>looks very similar to real text, dummy name for Lorem ipsum text include</p> --> */}
            </div>
        </div>
    </div>
    )
}

export default Section2;