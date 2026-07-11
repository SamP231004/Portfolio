"use client";

import { useEffect, useState } from "react";
import { Download, ExternalLink, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type Props = {
  triggerLabel?: string;
  triggerVariant?: "default" | "outline" | "ghost" | "secondary";
  triggerSize?: "sm" | "default" | "lg";
  triggerClassName?: string;
  triggerTestId?: string;
  compact?: boolean;
  showIcon?: boolean;
};

export function ResumeDialog({
  triggerLabel = "View Resume",
  triggerVariant = "outline",
  triggerSize = "lg",
  triggerClassName,
  triggerTestId = "resume-preview-trigger",
  compact = false,
  showIcon = true,
}: Props) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const resumeUrl = profile.resumeUrl;

  // Check availability when dialog opens
  useEffect(() => {
    if (!open) return;
    setLoaded(false);
    setFailed(false);
    let cancelled = false;
    fetch(resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (cancelled) return;
        const ct = res.headers.get("content-type") ?? "";
        if (!res.ok || !ct.includes("pdf")) {
          setFailed(true);
        }
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [open, resumeUrl]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {compact ? (
          <button
            type="button"
            data-testid={triggerTestId}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-md hover:border-accent hover:text-accent transition-colors",
              triggerClassName
            )}
          >
            {showIcon && <FileText size={14} />}
            {triggerLabel}
          </button>
        ) : (
          <Button
            variant={triggerVariant}
            size={triggerSize}
            data-testid={triggerTestId}
            className={triggerClassName}
          >
            {showIcon && <FileText size={triggerSize === "sm" ? 14 : 16} />}
            {triggerLabel}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="max-w-4xl w-[95vw] h-[90vh] p-0 gap-0 flex flex-col overflow-hidden"
        data-testid="resume-preview-dialog"
      >
        <DialogHeader className="flex-row items-center justify-between px-5 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-accent" aria-hidden="true" />
            <DialogTitle>Resume — {profile.name}</DialogTitle>
          </div>
          <div className="flex items-center gap-2 pr-8">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="resume-open-tab-link"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              <ExternalLink size={13} />
              Open in new tab
            </a>
            <a
              href={resumeUrl}
              download
              data-testid="resume-download-link"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              <Download size={13} />
              Download
            </a>
          </div>
        </DialogHeader>

        <div className="relative flex-1 bg-card-alt overflow-hidden">
          {!loaded && !failed && (
            <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 size={16} className="animate-spin" />
              Loading resume…
            </div>
          )}
          {failed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <FileText size={28} className="text-muted-foreground" aria-hidden="true" />
              <p className="text-sm text-foreground max-w-md">
                Resume preview isn&apos;t available yet.
              </p>
              <p className="text-xs text-muted-foreground max-w-md">
                Drop a <code className="font-mono text-foreground">resume.pdf</code> file into the{" "}
                <code className="font-mono text-foreground">public/</code> folder,
                or use the buttons above to download / open in a new tab.
              </p>
            </div>
          ) : (
            <object
              data={`${resumeUrl}#toolbar=0&navpanes=0`}
              type="application/pdf"
              className="h-full w-full"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              aria-label={`Resume PDF preview for ${profile.name}`}
              data-testid="resume-preview-iframe"
            >
              <iframe
                src={resumeUrl}
                className="h-full w-full"
                title={`Resume — ${profile.name}`}
                onLoad={() => setLoaded(true)}
                onError={() => setFailed(true)}
              />
            </object>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
