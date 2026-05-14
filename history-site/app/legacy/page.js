import ImageBlock from "../../components/ImageBlock";

export default function Legacy() {
  return (
    <div className="page-container">
      <h1 className="animate-fade-in">Legacy and Impact</h1>
      
      <h2 className="animate-fade-in delay-100">United States v. Cruikshank (1876)</h2>
      <p className="animate-fade-in delay-200">
        In <em>United States v. Cruikshank</em>, an 1876 court case that was a result of the Colfax Massacre, the Supreme Court ruled that the 14th Amendment only allowed the federal government to act against state governments, not private individuals from terrorist groups like the KKK. 
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Colfax_Riot_sign_IMG_2401.JPG"
        alt="Colfax Massacre Historical Marker"
        citation='Colfax Massacre Historical Marker in Colfax, LA. Wikimedia Commons.'
      />

      <p className="animate-fade-in delay-200">
        This ruling almost fully ended the revolution of Reconstruction. It stripped the federal government's power to prosecute KKK violence, legitimizing the Klan's violent reaction. Federal protections collapsed, and Black citizens again became vulnerable to racial violence.
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Chief_Justice_Morrison_Waite.jpg"
        alt="Chief Justice Morrison Waite"
        citation='Chief Justice Morrison Waite. Brady-Handy Photograph Collection. Wikimedia Commons.'
      />

      <h2 className="animate-fade-in delay-200">Plessy v. Ferguson (1896)</h2>
      <p className="animate-fade-in delay-300">
        After Reconstruction ended, the court case <em>Plessy v. Ferguson</em> in 1896 approved racial segregation under the "separate but equal" ideology. This ingrained white supremacy in law, validating the racist efforts of the KKK and other supremacist groups until the <em>Brown v. Board of Education</em> court case overturned it in 1954.
      </p>
      
      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Plessy_marker-back.jpg"
        alt="Homer Plessy"
        citation='Homer Plessy. Wikimedia Commons.'
      />

      <h2 className="animate-fade-in delay-300">Long-Term Ramifications</h2>
      <p className="animate-fade-in delay-300">
        The KKK's violent reaction not only ended Reconstruction but also significantly impacted US history. By using terror to undermine the 14th and 15th Amendments, and by pushing the federal courts to submit to racism, the KKK helped usher in a system of racial oppression which lasted for almost a century. 
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/5/54/Civil_Rights_March_on_Washington%2C_D.C._%28Dr._Martin_Luther_King%2C_Jr._and_Mathew_Ahmann_in_a_crowd.%29_-_NARA_-_542015.jpg"
        alt="Civil Rights March on Washington (1963)"
        citation='March on Washington for Jobs and Freedom. 1963. Wikimedia Commons.'
      />

      <p className="animate-fade-in delay-300">
        Because the policies brought about in the 1860s were somewhat nullified by the violent reaction of the KKK, the African American dream of equal citizenship was much delayed until the Civil Rights movement of the 1960s.
      </p>
    </div>
  );
}
