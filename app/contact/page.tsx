import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { QuickReach } from "@/components/contact/quick-reach";
import { SocialProfiles } from "@/components/contact/social-profiles";
import { OpenTo } from "@/components/contact/open-to";
import { GitHubActivity } from "@/components/contact/github-activity";

export const metadata: Metadata = {
  title: "Contact | Rupesh Bharambe",
  description:
    "Get in touch with Rupesh Bharambe — open to full-time roles, hackathons, research collaborations, and open-source contributions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="space-y-12">
        <PageHeader
          comment="contact"
          title="Let's Connect"
          description="Have a project in mind or just want to say hi? Drop me a message and I'll get back to you as soon as possible."
        />

        {/* Two-column layout: form left, sidebar right */}
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-6 md:col-span-2">
            <QuickReach />
            <SocialProfiles />
            <OpenTo />
          </div>
        </div>

        {/* Full-width GitHub activity */}
        <GitHubActivity />
      </div>
    </div>
  );
}
