import ImageBlock from "../components/ImageBlock";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <section className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <h1 className="animate-fade-in">Terror's Turning Point</h1>
            <h2 className={`animate-fade-in delay-100 ${styles.subtitle}`}>The KKK and the Collapse of Reconstruction</h2>
            <p className={`animate-fade-in delay-200 ${styles.heroLead}`}>
              A study of how Reconstruction's promise of citizenship met organized racial terror, weakened federal enforcement, and a legal retreat that delayed equal protection for generations.
            </p>
            <div className={`animate-fade-in delay-300 ${styles.heroActions}`}>
              <Link href="/thesis">Read the Thesis</Link>
              <Link href="/details">Explore the Evidence</Link>
            </div>
          </div>

          <figure className={`animate-fade-in delay-200 ${styles.heroImage}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Worse_than_Slavery_%281874%29%2C_by_Thomas_Nast.jpg"
              alt="Worse than Slavery cartoon by Thomas Nast"
            />
            <figcaption>Nast, Thomas. "Worse Than Slavery." Harper's Weekly, 1874.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.overviewBand}>
        <div className={styles.overviewGrid}>
          <article>
            <span>1865</span>
            <h3>Freedom Redefined</h3>
            <p>The Thirteenth Amendment ended slavery, but the meaning of citizenship remained contested.</p>
          </article>
          <article>
            <span>1868-1871</span>
            <h3>Rights Enforced</h3>
            <p>Federal amendments and enforcement laws tried to protect Black political participation.</p>
          </article>
          <article>
            <span>1876</span>
            <h3>Protection Retreats</h3>
            <p>Violence, court decisions, and waning federal will helped Reconstruction collapse.</p>
          </article>
        </div>
      </section>
        
      <div className="page-container">
        <p className="animate-fade-in delay-200">
            Prior to the Civil War, slavery and racial inequality shaped nearly every part of American life, especially in the South. Politics, the economy, and social interactions revolved around a system built on forced labor and white supremacy. Although the Union's victory in 1865, along with the Thirteenth Amendment, officially ended slavery, questions about Black citizenship and political rights remained unclear.
        </p>
        <p className="animate-fade-in delay-300">
            During Radical Reconstruction, Congressional Republicans pushed through the Fourteenth and Fifteenth Amendments in order to protect the civil rights and voting rights of those who had just been freed, sparking fierce backlash. This led to the formation of white supremacist groups like the Ku Klux Klan, using violence and intimidation to block reforms, scare Black voters, and attack Republican officials.
        </p>
          
        <ImageBlock 
          src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Worse_than_Slavery_%281874%29%2C_by_Thomas_Nast.jpg"
          alt="Worse than Slavery cartoon by Thomas Nast"
          citation='Nast, Thomas. "Worse Than Slavery." Harper&apos;s Weekly, 1874. Wikimedia Commons.'
        />
          
        <p className="animate-fade-in delay-300">
            As federal enforcement declined and the Supreme Court limited Reconstruction's legal support, this campaign of violence became increasingly effective. The KKK and similar groups managed to reverse many of the Reconstruction efforts, crushing civil rights protections and causing Black citizens to lose their political influence.
        </p>
      </div>
    </div>
  );
}
