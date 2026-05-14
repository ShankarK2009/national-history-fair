import ImageBlock from "../../components/ImageBlock";

export default function Details() {
  return (
    <div className="page-container">
      <h1 className="animate-fade-in">Detailed Description</h1>
      
      <p className="animate-fade-in delay-100">
        The era of Reconstruction (~1865-1877) was defined by an explosion of violence in order to destroy the Reconstruction's legal protections for African Americans and reestablish white supremacy, particularly in states like Tennessee, South Carolina, Georgia, and Louisiana.
      </p>

      <h2 className="animate-fade-in delay-100">Political Motivations for Violence</h2>
      <p className="animate-fade-in delay-200">
        York County, South Carolina, became a central hub for Ku Klux Klan activity specifically to counter the rising political power of Black citizens and the Republican Party's success in the 1868 state and national elections. The violence escalated significantly in 1870 after Republican Governor Robert Scott appointed three all-Black militias; while these militias successfully protected Black voters during the 1870 election, their presence triggered a massive increase in Klan atrocities.
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/8/81/Ku_Klux_Klan_%28L%27Ev%C3%A9nement_illustr%C3%A9%2C_1868-06-08%29.jpg"
        alt="Ku Klux Klan members in Tennessee (1868)"
        citation='Ku Klux Klan members in Tennessee. 1868. Wikimedia Commons.'
      />

      <h2 className="animate-fade-in delay-200">Scale of Terror and Federal Response</h2>
      <p className="animate-fade-in delay-300">
        A federal investigation led by Col. Lewis Merrill in March 1871 revealed the systematic nature of the resistance, documenting evidence of at least seven murders and over 300 whippings committed by the Klan since the previous autumn. Interpreting the violence as a rebellion against the U.S., Congress passed the Third Enforcement Act.
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Enforcement_Act_of_1870.png"
        alt="Enforcement Act of 1870 Document"
        citation='Enforcement Act of 1870. National Archives and Records Administration. Wikimedia Commons.'
      />

      <h2 className="animate-fade-in delay-300">Psychological Warfare</h2>
      <p className="animate-fade-in delay-300">
        The KKK used direct psychological warfare and death threats against Black officials to force them out of politics. A primary source letter to Black sheriff Davie Jeems explicitly threatened to "nail all radicals in boxes" unless they stopped supporting the Republican party, demanding they "vote right with the white people." By forcing a choice between death or abandoning their rights, the KKK aimed to nullify the 15th Amendment at the grassroots level.
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/The_Union_as_it_was_%281874%29%2C_by_Thomas_Nast.jpg/800px-The_Union_as_it_was_%281874%29%2C_by_Thomas_Nast.jpg"
        alt="The Union as it was cartoon by Thomas Nast"
        citation='Nast, Thomas. "The Union As It Was / This Is A White Man&apos;s Government." Harper&apos;s Weekly, 1874. Wikimedia Commons.'
      />

      <h2 className="animate-fade-in delay-300">Abandonment of Enforcement</h2>
      <p className="animate-fade-in delay-300">
        Although there were over 1,300 indictments for Klan activities in South Carolina, wealthy leaders managed to flee the region to avoid capture, leaving mostly farmers and laborers to face conviction and imprisonment. Despite the federal crackdown, racial violence persisted, and the federal commitment to civil rights protections collapsed when President Ulysses S. Grant pardoned all convicted Klansmen by 1876.
      </p>
      
      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Ulysses_S._Grant_1870-1880.jpg"
        alt="President Ulysses S. Grant"
        citation='President Ulysses S. Grant. Brady-Handy Photograph Collection. Wikimedia Commons.'
      />
    </div>
  );
}
