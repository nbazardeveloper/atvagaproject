import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata = {
  title: "Terms & Procedure",
  description: "Terms & Procedure for ATVAGA LLC services."
};

export default function TermsPage() {
  return (
    <section className="w-full bg-brand-white py-24 lg:py-32">
      <SectionWrapper className="prose prose-lg [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:uppercase [&_h2]:font-bold">
        <h1>Terms &amp; Procedure</h1>
        <p>Disclaimer: We do not offer structural engineering, mechanical, electrical, or plumbing engineering.</p>
        <h2>PROCEDURE WITH REGARD PERMIT DRAWINGS EFFECTIVE MAY 2022.</h2>
        <ul>
          <li>Client accepts the proposal</li>
          <li>The client pays for the site visit (if site visit is needed) in advance.</li>
          <li>After the client pays for the site visit, the Atvaga arranges the site visit.</li>
          <li>Client gives the relevant information to the Atvaga by filling out the checklist or providing the information to the Atvaga via e-mail.</li>
          <li>Only once the client has made a 50% advance payment can the Atvaga begin working on the client's project.</li>
          <li>Within 15-21 working days, Atvaga provides preliminary drawings for the client's approval. If Atvaga does not submit the first drawings within 21 working days after the site visit, the client will receive a 5% courtesy discount on the amount that will be settled in the balance payment.</li>
          <li>When the final drawings are completed, Atvaga will notify the client, and the client must pay the balance immediately.</li>
          <li>Only once the remaining balance payment is received will Atvaga provide the final set of designs.</li>
          <li>Atvaga will provide up to two free revisions to the client. If Atvaga does not hear from the client for more than 5 business days, the project will be put on hold with no further work until the client returns. In this situation, project adjustments (if necessary) will be made in accordance with the Atvaga's time available.</li>
        </ul>
        <h2>Permit Drawings Project Terms and Conditions, Effective May 2024 (including projects balance payments of which was not settled before May 2025)</h2>
        <ul>
          <li>Structural engineer calculations, review/seal, MEP or Land surveyor services are not included in the offers.</li>
          <li>After the client has submitted drawings to the city, we will make any required changes to the design drawings at the request of the building department for FREE until the building permit is approved (provided that the changes do not need scopes not mentioned in the proposal).</li>
          <li>Atvaga is not in charge of submitting paperwork to the city or county. If the city wants extra information that is outside the scope of Atvaga, the Client is responsible for providing it to the city or county.</li>
          <li>Site visit fee is $450 (to collect initial information, like building measurements, photos, and information about heating, cooling, ventilation, domestic water heating, lighting, and insulation). The client must prepare and make the necessary facilities available for the measurements.</li>
          <li>It takes between 15 and 21 business days to submit the initial version of the drawings to you. Delays can occur due to technical reasons. If Atvaga does not submit the first drawings within 21 working days, the client will receive a 5% courtesy discount on the amount that will be settled in the balance payment.</li>
          <li>Advance payment of 50% of the amount is required to start the project. Balance payment is due when you receive the first revision of the drawings.</li>
          <li>Any additional revisions will be charged at rate of $45 per hour.</li>
          <li>The offer excludes fees collected by the city or county, such as permit fees and other levies.</li>
        </ul>
      </SectionWrapper>
    </section>
  );
}
