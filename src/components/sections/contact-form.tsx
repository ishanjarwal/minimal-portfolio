"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { toast } from "@/components/ui/toast";
import { Send, Loader2, RotateCcw, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.add({
          type: "success",
          title: "Message Transmitted",
          description:
            result.message || "Your message was delivered successfully.",
        });
        reset();
      } else {
        toast.add({
          type: "error",
          title: "Transmission Failed",
          description:
            result.error || "Unable to send message. Please try again.",
        });
      }
    } catch {
      toast.add({
        type: "error",
        title: "Network Error",
        description:
          "Failed to connect to the mail server. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-border bg-card p-4 sm:p-5 space-y-4 font-mono select-none"
    >
      <div className="border-b border-border pb-2 flex items-center justify-between">
        <span className="text-xs font-bold text-foreground uppercase tracking-wider">
          {"// Direct Message Form"}
        </span>
        <span className="text-[11px] text-muted-foreground">smtp: active</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Input */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold text-foreground"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Ada Lovelace"
            disabled={isSubmitting}
            {...register("name")}
            className="w-full border border-border bg-background px-3 py-1.5 text-xs font-mono text-foreground placeholder:text-muted-foreground/60 rounded-none focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
          />
          {errors.name && (
            <p className="text-[11px] text-red-600 dark:text-red-400 flex items-center gap-1 pt-0.5">
              <AlertCircle className="size-3 shrink-0" />
              <span>{errors.name.message}</span>
            </p>
          )}
        </div>

        {/* Email Input */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold text-foreground"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="ada@example.com"
            disabled={isSubmitting}
            {...register("email")}
            className="w-full border border-border bg-background px-3 py-1.5 text-xs font-mono text-foreground placeholder:text-muted-foreground/60 rounded-none focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 dark:text-red-400 flex items-center gap-1 pt-0.5">
              <AlertCircle className="size-3 shrink-0" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold text-foreground"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Write your note, proposal, or question here..."
          disabled={isSubmitting}
          {...register("message")}
          className="w-full border border-border bg-background p-3 text-xs font-mono text-foreground placeholder:text-muted-foreground/60 rounded-none focus:outline-none focus:border-foreground transition-colors resize-y disabled:opacity-50"
        />
        {errors.message && (
          <p className="text-[11px] text-red-600 dark:text-red-400 flex items-center gap-1 pt-0.5">
            <AlertCircle className="size-3 shrink-0" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      {/* Action Buttons with Legacy Styling */}
      <div className="pt-1 flex flex-wrap items-center justify-between gap-3 border-t border-border">
        <div className="text-[11px] text-muted-foreground">
          * All fields are strictly validated
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => reset()}
            disabled={isSubmitting}
            className="inline-flex items-center gap-1 px-3 py-1.5 border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-mono rounded-none cursor-pointer transition-colors disabled:opacity-50"
          >
            <RotateCcw className="size-3" />
            <span>[Clear]</span>
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-blue0600 bg-blue-600 text-white hover:opacity-90 text-xs font-bold font-mono rounded-none cursor-pointer transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-3.5 animate-spin" />
                <span>[Transmitting...]</span>
              </>
            ) : (
              <>
                <Send className="size-3.5" />
                <span>[Send Message &rarr;]</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
