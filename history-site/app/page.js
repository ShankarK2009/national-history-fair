import ImageBlock from "../components/ImageBlock";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className="animate-fade-in">Terror's Turning Point</h1>
        <h2 className={`animate-fade-in delay-100 ${styles.subtitle}`}>The KKK and the Collapse of Reconstruction</h2>
        
        <div className="page-container" style={{ textAlign: 'left', marginTop: '2rem' }}>
          <p className="animate-fade-in delay-200">
            Prior to the Civil War, slavery and racial inequality shaped nearly every part of American life, especially in the South. Politics, the economy, and social interactions revolved around a system built on forced labor and white supremacy. Although the Union's victory in 1865, along with the Thirteenth Amendment, officially ended slavery, questions about Black citizenship and political rights remained unclear.
          </p>
          <p className="animate-fade-in delay-300">
            During Radical Reconstruction, Congressional Republicans pushed through the Fourteenth and Fifteenth Amendments in order to protect the civil rights and voting rights of those who had just been freed, sparking fierce backlash. This led to the formation of white supremacist groups like the Ku Klux Klan, using violence and intimidation to block reforms, scare Black voters, and attack Republican officials.
          </p>
          
          <ImageBlock 
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Worse_than_Slavery_Thomas_Nast.jpg"
            alt="Worse than Slavery cartoon by Thomas Nast"
            citation='Nast, Thomas. "Worse Than Slavery." Harper&apos;s Weekly, 1874. Wikimedia Commons.'
          />
          
          <p className="animate-fade-in delay-300">
            As federal enforcement declined and the Supreme Court limited Reconstruction's legal support, this campaign of violence became increasingly effective. The KKK and similar groups managed to reverse many of the Reconstruction efforts, crushing civil rights protections and causing Black citizens to lose their political influence.
          </p>
        </div>
      </div>
    </div>
  );
}
