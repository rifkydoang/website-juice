import styles from './Section1.module.css'
import smoothie from '../../assets/muy_mio_smoothie-removebg-preview.png'

const Section1 = () => {
    return(
    <section>
        <h1>Natural Freshly blended juice</h1>
        <div className={styles.red}>
            <p>Start your day with a freshy blended juice or smoothie. 
                Our refreshing drinks recipes are packed with fuit and
                veg, delivering a feelgood vitamin boost.
            </p>
            <a href="">Get Mine Now </a>
        </div>
        <div className={styles.abu}></div>
        <img src={smoothie} alt="smoothie"/>
    </section>
    )
}

export default Section1