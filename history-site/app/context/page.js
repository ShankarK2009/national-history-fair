import ImageBlock from "../../components/ImageBlock";

export default function Context() {
  return (
    <div className="page-container">
      <h1 className="animate-fade-in">Historical Context</h1>
      
      <p className="animate-fade-in delay-100">
        Prior to the Civil War, slavery and racial inequality shaped nearly every part of American life, especially in the South. Politics, the economy, and social interactions revolved around a system built on forced labor and white supremacy.
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Freedmen%27s_School%2C_James_Plantation%2C_North_Carolina.png"
        alt="Freedmen's Bureau School"
        citation='Freedmen&apos;s Bureau School. Harper&apos;s Weekly. Wikimedia Commons.'
      />
      
      <p className="animate-fade-in delay-200">
        Although the Union's victory in 1865, along with the Thirteenth Amendment, officially ended slavery, questions about Black citizenship and political rights remained unclear. The era of Radical Reconstruction began as an attempt to dismantle the antebellum social order and enforce Black citizenship through federal power.
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Thaddeus_Stevens_-_Brady-Handy-crop.jpg/960px-Thaddeus_Stevens_-_Brady-Handy-crop.jpg"
        alt="Representative Thaddeus Stevens"
        citation='Thaddeus Stevens, a leader of the Radical Republicans. Brady-Handy Photograph Collection. Wikimedia Commons.'
      />
      
      <h2 className="animate-fade-in delay-200">The Constitutional Revolution</h2>
      
      <p className="animate-fade-in delay-300">
        To combat the violent insurgency of groups that opposed these new freedoms, the federal government attempted to enforce the "Revolution" of Black citizenship through the Enforcement Acts of 1870 and 1871 (also known as the KKK Acts). These laws allowed the President to suspend habeas corpus and use the military to protect voting rights, marking a massive expansion of federal power to protect civil rights.
      </p>

      <ImageBlock 
        src="https://upload.wikimedia.org/wikipedia/commons/c/cf/15th-amendment-celebration-1870.jpg"
        alt="15th Amendment Celebration"
        citation='15th Amendment Celebration. 1870. Wikimedia Commons.'
      />
    </div>
  );
}
