import Image from "next/image"
import styles from './Description.module.sass'

export const Description = () => {
  return (
    <section className={styles.Description}>
      <div className={styles.Description__imageContainer}>
        <Image 
          src="/images/description.jpeg" 
          alt="products marketplace" 
          fill
        />
      </div>
      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus veritatis dolorem blanditiis eos eligendi culpa totam, amet, ad assumenda deserunt inventore nisi deleniti nobis, rerum veniam porro? Reprehenderit, veniam.</p>
      </div>
    </section>
  )
}