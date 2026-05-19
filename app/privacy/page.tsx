import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { privacyMetadata } from "@/app/metadata";

export const metadata: Metadata = privacyMetadata;

export default function PrivacyPage() {
  return (
    <section className="w-full bg-brand-white py-24 lg:py-32">
      <SectionWrapper className="prose prose-lg [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:uppercase [&_h2]:font-bold">
        <h1>PRIVACY POLICY</h1>
        <p>Protecting your private information is our priority. This Statement of Privacy applies to www.atvaga.com and Atvaga LLC and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to ATVAGA LLC include www.atvaga.com, Atvaga. The Atvaga website is an Engineering, Design  services site. By using the Atvaga website, you consent to the data practices described in this statement.</p>
        <h2>Collection of your Personal Information</h2>
        <p>In order to better provide you with products and services offered on our Site, Atvagas may collect personally identifiable information, such as your:</p>
        <ul>
          <li>First and Last Name</li>
          <li>Mailing Address</li>
          <li>E-mail Address</li>
          <li>Phone Number</li>
          <li>Employer</li>
          <li>Job Title</li>
          <li>Description of Services required by the User</li>
        </ul>
        <p>We do not collect any personal information about you unless you voluntarily provide it to us.</p>
        <p>However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a)partnering with us and signing up a partnership agreement with us; (b) sending us an email message; (c) submitting your credit card or other payment information on our payment gateway (STRIPE, Quickbooks & Bill and Pay), when ordering and paying for services on our site. To wit, we will use your information for, but not limited to, communicating with you in relation to services   you have requested from us. We also may gather additional personal or non-personal information in the future.</p>
        <h2>Use of your Personal Information</h2>
        <p>Atvaga collects and uses your personal information to operate its website(s) and deliver the services you have requested.</p>
        <p>Atvaga may also use your personally identifiable information to inform you of other products or services available from Atvaga and its affiliates.</p>
        <h2>Sharing Information with Third Parties</h2>
        <p>Atvaga does not sell, rent or lease its customer lists to third parties.</p>
        <p>Atvaga may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for other miscellaneous tasks associated with your Order, ( ex.Payment Invoices ). All such third parties are prohibited from using your personal information except to provide these services to Atvaga, and they are required to maintain the confidentiality of your information ( ex. Stripe Payment Gateway)</p>
        <p>Atvaga may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Atvaga or the site; (b) protect and defend the rights or property of Atvaga; and/or (c) act under exigent circumstances to protect the personal safety of clients of Atvaga, or the public.</p>
        <h2>Tracking User Behavior</h2>
        <p>Atvaga may keep track of the websites and pages our users visit within Atvaga, in order to determine what Atvaga services are the most popular. This data is used to deliver customized content and advertising within Atvaga to customers whose behavior indicates that they are interested in a particular subject area.</p>
        <h2>Automatically Collected Information</h2>
        <p>Information about your computer hardware and software may be automatically collected by Atvaga. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Atvaga website.</p>
        <h2>Security of your Personal Information</h2>
        <p>Atvaga secures your personal information from unauthorized access, use, or disclosure. Atvavga uses the following methods for this purpose:</p>
        <ul>
          <li>SSL Protocol</li>
        </ul>
        <p>When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.</p>
        <p>We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this site cannot be guaranteed.</p>
        <h2>Children Under Thirteen</h2>
        <p>Atvaga does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p>
        <h2>E-mail Communications</h2>
        <p>From time to time, Atvaga may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Atvaga or click on a link therein.</p>
        <p>If you would like to stop receiving marketing or promotional communications via email from Atvaga, you may opt out of such communications by Clients may unsubscribe from emails by "replying STOP" or "clicking on the UNSUBSCRIBE button".</p>
        <h2>Changes to this Statement</h2>
        <p>Atvaga reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.</p>
      </SectionWrapper>
    </section>
  );
}
