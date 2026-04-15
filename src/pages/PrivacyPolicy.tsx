import { useEffect } from 'react';
import { ArrowLeft, MapPin, Mail } from 'lucide-react';

export function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Effective as of March 5, 2026
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <p className="text-base text-muted-foreground leading-relaxed">
                This Privacy Policy ("Policy") applies to Shrubnet, LLC ("Company") and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to the Company include shrubnet.com. By using the Company website, you consent to the data practices described in this statement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                California Consumer Privacy Act and California Privacy Rights Act
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                If you are a California resident, you have the following rights under the California Consumer Privacy Act ("CCPA") and California Privacy Rights Act ("CPRA"):
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1">•</span>
                  <span><strong className="text-foreground/80">Right to Know.</strong> You may request details on what personal data we collect, use, and share.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1">•</span>
                  <span><strong className="text-foreground/80">Right to Delete.</strong> You can request deletion of personal data, subject to certain legal exceptions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1">•</span>
                  <span><strong className="text-foreground/80">Right to Correct.</strong> You may request corrections to inaccurate personal information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1">•</span>
                  <span><strong className="text-foreground/80">Right to Opt-Out.</strong> You can opt out of the sale or sharing of personal data for advertising.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1">•</span>
                  <span><strong className="text-foreground/80">Right to Restrict Sensitive Data Use.</strong> You may limit the use of sensitive personal information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1">•</span>
                  <span><strong className="text-foreground/80">Right Against Retaliation.</strong> The Company will not discriminate against you for exercising your rights.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Collection of Your Personal Information
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) sending us an email message; (c) submitting your information when requesting services.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Sharing Information with Third Parties
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                The Company does not sell, rent, or lease its customer lists to third parties.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                The Company may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to the Company, and they are required to maintain the confidentiality of your information.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                The Company may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on the Company or the site; (b) protect and defend the rights or property of the Company; and/or (c) act under exigent circumstances to protect the personal safety of users of the Company, or the public.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Right to Deletion
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1">•</span>
                  <span>Delete your personal information from our records; and</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1">•</span>
                  <span>Direct any service providers to delete your personal information from their records.</span>
                </li>
              </ul>
              <p className="text-base text-muted-foreground leading-relaxed">
                Please note that we may not be able to comply with requests to delete your personal information if it is necessary to complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, and provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Security of Your Personal Information
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The Company secures your personal information from unauthorized access, use, or disclosure. The Company uses industry-standard encryption protocols to protect personal information transmitted to and from the website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Changes to This Statement
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The Company reserves the right to change this Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or services available after such modifications will constitute your: (a) acknowledgment of the modified Policy; and (b) agreement to abide and be bound by that Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-medium text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                The Company welcomes your questions or comments regarding this Policy. If you believe that the Company has not adhered to this Policy, please contact us at:
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
