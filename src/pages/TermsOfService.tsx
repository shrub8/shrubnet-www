import { useEffect } from 'react';
import { ArrowLeft, MapPin, Mail } from 'lucide-react';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="section-padding py-6 border-b border-subtle">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a 
            href="/#/" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shrubnet Labs
          </a>
          <span className="text-sm font-medium text-foreground">Shrubnet</span>
        </div>
      </header>

      {/* Content */}
      <main className="section-padding py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Effective as of March 5, 2026
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Agreement between User and shrubnet.com
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Welcome to shrubnet.com. The shrubnet.com website (the "Site") is comprised of various web pages operated by Shrubnet, LLC. shrubnet.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of shrubnet.com constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                shrubnet.com is a Research & Development Services Site. The purpose of the Shrubnet website is to present information about our research and development services, technical capabilities, and to provide a means of contact for potential collaboration.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Privacy
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Your use of shrubnetlabs.com is subject to Shrubnet Labs' Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Electronic Communications
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Visiting shrubnetlabs.com or sending emails to Shrubnet Labs constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Your Account
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that Shrubnet Labs is not responsible for third party access to your account that results from theft or misappropriation of your account. Shrubnet Labs and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Children Under Thirteen
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Shrubnet Labs does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use shrubnetlabs.com only with permission of a parent or guardian.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Cancellation/Refund Policy
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Engagement with Shrubnet Labs is voluntary and based on mutual agreement of scope and terms. Any cancellation or refund policies will be specified in individual service agreements. General inquiries and initial consultations carry no obligation.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Links to Third Party Sites/Third Party Services
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                shrubnetlabs.com may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of Shrubnet Labs and Shrubnet Labs is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Shrubnet Labs is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Shrubnet Labs of the site or any association with its operators.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Certain services made available via shrubnetlabs.com are delivered by third party sites and organizations. By using any product, service or functionality originating from the shrubnetlabs.com domain, you hereby acknowledge and consent that Shrubnet Labs may share such information and data with any third party with whom Shrubnet Labs has a contractual relationship to provide the requested product, service or functionality on behalf of shrubnetlabs.com users and customers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                No Unlawful or Prohibited Use/Intellectual Property
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                You are granted a non-exclusive, non-transferable, revocable license to access and use shrubnetlabs.com strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Shrubnet Labs that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Shrubnet Labs or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                International Users
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The Service is controlled, operated and administered by Shrubnet Labs from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the Shrubnet Labs Content accessed through shrubnetlabs.com in any country or in any manner prohibited by any applicable laws, restrictions or regulations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Indemnification
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                You agree to indemnify, defend and hold harmless Shrubnet Labs, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Shrubnet Labs reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Shrubnet Labs in asserting any available defenses.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Arbitration
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrator's award shall be final, and judgment may be entered upon it in any court having jurisdiction.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/OR REPRESENTATIVE PROCEEDING.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Liability Disclaimer
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. SHRUBNET LABS AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                SHRUBNET LABS AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SHRUBNET LABS AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Termination/Access Restriction
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Shrubnet Labs reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of Texas and you hereby consent to the exclusive jurisdiction and venue of courts in Texas in all disputes arising out of or relating to the use of the Site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Shrubnet Labs reserves the right, in its sole discretion, to change the Terms under which shrubnetlabs.com is offered. The most current version of the Terms will supersede all previous versions. Shrubnet Labs encourages you to periodically review the Terms to stay informed of our updates.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Shrubnet welcomes your questions or comments regarding the Terms:
              </p>
              <div className="p-4 bg-secondary/30 rounded-sm border border-subtle">
                <p className="text-sm font-medium text-foreground mb-2">Shrubnet, LLC</p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-1">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>118 Broadway, Suite 221</p>
                    <p>San Antonio, TX 78205</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:hello@shrubnet.com" className="hover:text-emerald transition-colors duration-300">
                    hello@shrubnet.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="section-padding py-8 border-t border-subtle">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate">
            © {new Date().getFullYear()} Shrubnet, LLC
          </p>
          <div className="flex gap-6">
            <a href="/#/privacy" className="text-xs text-muted-foreground hover:text-emerald transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/#/terms" className="text-xs text-muted-foreground hover:text-emerald transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
