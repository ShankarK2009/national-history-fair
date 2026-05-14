import ImageBlock from "../../components/ImageBlock";

export default function Thesis() {
  return (
    <div className="page-container">
      <h1 className="animate-fade-in">Project Thesis</h1>
      
      <div className="thesis-box animate-fade-in delay-100">
        Although Radical Reconstruction tried to create lasting constitutional change, white resistance and government withdrawal contributed to ending these efforts. This period left a long legacy of discrimination and delayed the unfulfilled promise of freedom and equality until the Civil Rights Movement of the 1960s.
      </div>
      
      <p className="animate-fade-in delay-200">
        Our research explores how the Ku Klux Klan's violent backlash against Radical Reconstruction's legal reforms—such as the 14th and 15th Amendments and federal enforcement laws—attempted to reverse post-Civil War gains for Black Americans.
      </p>
      
      <p className="animate-fade-in delay-200">
        This resistance contributed not only to the collapse of Reconstruction's civil rights protections but also to the long-term direction of future civil rights policy in the United States.
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/%22The_first_vote%22_by_A.R._Waud_Harper%27s_Weekly_1867-11-16_Retrieved_from_the_Library_of_Congress.jpg"
        alt="The First Vote by A.R. Waud"
        citation='Waud, A.R. "The First Vote." Harper&apos;s Weekly, 1867. Wikimedia Commons.'
      />
    </div>
  );
}
