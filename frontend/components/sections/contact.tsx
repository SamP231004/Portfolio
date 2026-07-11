"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { socialIcons } from "@/components/ui/social-icons";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (v) => !v || v.length >= 6,
      "Please enter a valid phone number."
    ),
  message: z
    .string()
    .trim()
    .min(20, "Message should be at least 20 characters."),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      // Mailto fallback (no backend configured). Ready for Resend later.
      const subject = encodeURIComponent(
        `Portfolio inquiry from ${values.name}`
      );
      const bodyLines = [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        values.phone ? `Phone: ${values.phone}` : null,
        "",
        values.message,
      ].filter(Boolean);
      const body = encodeURIComponent(bodyLines.join("\n"));
      const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;

      // Small delay to show loading state
      await new Promise((r) => setTimeout(r, 400));
      window.location.href = mailto;

      toast.success("Opening your email client…", {
        description: "Your message is ready to send.",
      });
      reset();
    } catch {
      toast.error("Something went wrong.", {
        description: "Please email me directly at " + profile.email,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
      data-testid="contact-section"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          label="CONTACT"
          heading="Let's build something useful."
          description="I'm open to Software Engineering opportunities, freelance projects, technical collaborations, and conversations about building production-ready products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                DIRECT CONTACT
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-md border border-border flex items-center justify-center text-accent">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm text-foreground hover:text-accent transition-colors"
                      data-testid="contact-email-link"
                    >
                      {profile.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-md border border-border flex items-center justify-center text-accent">
                    <Phone size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                      className="text-sm text-foreground hover:text-accent transition-colors"
                      data-testid="contact-phone-link"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-md border border-border flex items-center justify-center text-accent">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">
                      {profile.location}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                ELSEWHERE
              </p>
              <div className="flex items-center gap-2">
                {socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      data-testid={`contact-social-${s.icon}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      <Icon size={16} />
                      {s.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-5"
              data-testid="contact-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    data-testid="contact-name-input"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    data-testid="contact-email-input"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  data-testid="contact-phone-input"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={6}
                  aria-invalid={!!errors.message}
                  placeholder="Tell me about your project, role, or opportunity…"
                  data-testid="contact-message-input"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-muted-foreground">
                  Or email directly:{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {profile.email}
                  </a>
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit-button"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
