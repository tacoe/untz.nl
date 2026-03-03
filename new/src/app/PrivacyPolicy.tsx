import { SiteHeader, SiteFooter } from "./layout";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <SiteHeader />

      <main className="pt-40 pb-20 max-w-[1280px] mx-auto px-8 md:px-[33px]">
        <h1 className="text-3xl md:text-[40px] font-medium mb-4">Privacy Policy</h1>
        <div className="border-t border-black pt-8 max-w-2xl">

          <div className="space-y-10 text-base leading-relaxed">

            <section>
              <h2 className="text-lg font-medium mb-2">Contact</h2>
              <p>
                If you fill in the contact form, we store your name and email so we can get back to you.
                That's the only reason we keep it, and the only time we ask for it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-2">Instruments</h2>
              <p>
                Our instruments process and store data locally on your device.
                Nothing is sent to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-2">Analytics</h2>
              <p>
                We collect anonymous usage statistics using a locally-generated identifier.
                This ID is created on your device, contains no personal information,
                and cannot be traced back to you.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-2">And</h2>
              <p>
                We employ no cookies, no cross-site tracking, and no third-party data brokers.
                No personal information is collected, stored, or transmitted — unless you explicitly reach out.
              </p>
            </section>

          </div>

          <p className="mt-16">Last updated March 2026</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
