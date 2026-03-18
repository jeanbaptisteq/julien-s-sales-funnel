import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Lock, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import methodeImage from "@/assets/methode-france-avec-julien.jpg";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";

const temoignages = Object.entries(
  import.meta.glob("../assets/temoignages-pdf/*.png", { eager: true, import: "default" }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src as string)
  .slice(0, -1);

const OptinPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileTemoignageIndex, setMobileTemoignageIndex] = useState(0);
  const navigate = useNavigate();

  const prevTemoignage = () => {
    setMobileTemoignageIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length);
  };

  const nextTemoignage = () => {
    setMobileTemoignageIndex((prev) => (prev + 1) % temoignages.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);
    trackEvent("form_submit_attempt", {
      event_category: "lead",
      event_label: "optin",
      form_name: "optin",
    });

    // Normalize phone: keep only digits and leading +
    const normalizedPhone = phone.replace(/[^\d+]/g, "").replace(/(?!^\+)\+/g, "") || null;
    const validPhone = normalizedPhone && normalizedPhone.replace(/\D/g, "").length >= 8 ? normalizedPhone : null;

    try {
      const { data: lead, error } = await supabase
        .from("leads")
        .insert({
          first_name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: validPhone,
        })
        .select("id")
        .single();

      if (!error && lead) {
        trackEvent("form_submit_success", {
          event_category: "lead",
          event_label: "optin",
          form_name: "optin",
          lead_id: lead.id,
        });

        // Non-blocking: sync to Systeme.io
        supabase.functions.invoke("sync-systeme-contact", {
          body: { email: email.trim().toLowerCase(), firstName: name.trim(), phone: validPhone },
        }).catch(() => {});

        // Non-blocking: send lead magnet email
        supabase.functions.invoke("send-lead-magnet", {
          body: { email: email.trim().toLowerCase(), first_name: name.trim(), phone: validPhone },
        }).catch(() => {});
      } else {
        trackEvent("form_submit_error", {
          event_category: "lead",
          event_label: "optin",
          form_name: "optin",
          error_message: error?.message ?? "unknown_error",
        });
      }
    } catch {
      trackEvent("form_submit_error", {
        event_category: "lead",
        event_label: "optin",
        form_name: "optin",
        error_message: "exception",
      });
      // Best-effort: navigate even on error
    } finally {
      setIsSubmitting(false);
      navigate("/offre");
    }
  };

  return (
    <div className="min-h-screen bg-[#eaf6ff]">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-5 md:p-8"
        >
          <div className="text-center mb-6 md:mb-8">
            <h1 className="relative z-10 mt-4 text-3xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
              Découvre <strong className="font-extrabold underline decoration-accent/70">la méthode</strong>,
              <br />
              <span className="text-cyan-600">
                <strong className="font-extrabold uppercase">le rendez-vous du français</strong>
              </span>
            </h1>
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <button
              type="button"
              data-track-event="cta_click"
              data-track-label="optin_preview_open"
              data-track-section="hero"
              onClick={() => setIsModalOpen(true)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
              aria-label="Ouvrir le formulaire d'accès à la vidéo"
            >
              <img
                src={methodeImage}
                alt="Aperçu du rendez-vous du français"
                className="h-auto w-full scale-[1.02] transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50 flex flex-col items-center justify-center px-6 text-center">
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
                  <Lock className="h-7 w-7 text-foreground" />
                </div>
                <p className="text-white text-base md:text-lg font-semibold">
                  Aperçu verrouillé
                </p>
                <p className="text-white/90 text-sm mt-1">
                  Renseigne le formulaire pour accéder à la vidéo.
                </p>
              </div>
            </button>
            <button
              type="button"
              data-track-event="cta_click"
              data-track-label="optin_primary_open"
              data-track-section="hero"
              onClick={() => setIsModalOpen(true)}
              className="mt-5 w-full rounded-full bg-cyan-600 px-6 py-4 text-lg font-bold text-white hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2"
            >
              JE VEUX DÉCOUVRIR LA MÉTHODE
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="mt-2 text-center text-xs uppercase tracking-wide text-slate-600">
              Clique ici pour obtenir ton accès
            </p>
          </div>
        </motion.section>

        <section className="mx-auto mt-8 max-w-5xl">
          <div className="text-center">
            <h2 className="mt-3 text-3xl md:text-4xl font-bold font-heading text-slate-900">
              Des élèves qui m'ont fait <span className="text-cyan-600">confiance</span>
            </h2>
          </div>

          <div className="mt-6 md:hidden">
            <div className="relative">
              <article className="rounded-xl bg-white p-1.5 shadow-sm">
                <img
                  src={temoignages[mobileTemoignageIndex]}
                  alt={`Témoignage client ${mobileTemoignageIndex + 1}`}
                  loading="lazy"
                  className="w-full h-auto rounded-lg"
                />
              </article>
              <button
                type="button"
                onClick={prevTemoignage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black/80"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextTemoignage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black/80"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 hidden md:grid gap-3 md:grid-cols-3">
            {temoignages.map((t, i) => (
              <article key={i} className="rounded-xl bg-white p-1.5 shadow-sm">
                <img
                  src={t}
                  alt={`Témoignage client ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto rounded-lg"
                />
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-slate-900">
              Découvre comment faire <span className="text-cyan-600">comme eux</span>
            </p>
            <button
              type="button"
              data-track-event="cta_click"
              data-track-label="optin_secondary_open"
              data-track-section="social_proof"
              onClick={() => setIsModalOpen(true)}
              className="mt-4 rounded-full bg-cyan-600 px-8 py-4 text-base md:text-lg font-bold text-white hover:bg-cyan-500 transition-colors inline-flex items-center gap-2"
            >
              JE VEUX VOIR LA VIDÉO
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>

        <footer className="mx-auto mt-12 max-w-5xl border-t border-slate-300 pt-6 text-center text-xs text-slate-600">
          © 2026 Professeur Julien — Tous droits réservés
        </footer>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 p-4 md:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto mt-2 md:mt-8 max-w-2xl rounded-3xl border border-accent/40 bg-slate-50 p-4 md:p-6 shadow-2xl"
            >
              <button
                type="button"
                aria-label="Fermer"
              onClick={() => setIsModalOpen(false)}
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-slate-200"
            >
                <X className="h-6 w-6" />
              </button>

              <h3 className="mb-4 text-center text-2xl md:text-4xl font-bold font-heading text-foreground leading-tight">
                Remplis tes informations pour accéder à la vidéo offerte !
              </h3>

              <motion.form
                id="optin-form"
                data-track-form="optin"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Prénom <span className="text-foreground">*</span></label>
                  <input
                    type="text"
                    placeholder="Entre ton prénom..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Téléphone <span className="text-muted-foreground/60 font-normal">(optionnel)</span></label>
                  <div className="flex h-[54px] rounded-xl border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-primary">
                    <PhoneInput
                      defaultCountry="fr"
                      preferredCountries={["fr", "be", "ch", "ca", "ma", "dz", "tn", "sn", "ci"]}
                      value={phone}
                      onChange={setPhone}
                      placeholder="Entre ton numéro..."
                      style={{ width: "100%", height: "100%" }}
                      inputStyle={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        padding: "0 1rem",
                        border: "none",
                        background: "transparent",
                        color: "hsl(var(--foreground))",
                        fontSize: "1rem",
                        outline: "none",
                        boxShadow: "none",
                        borderRadius: "0 0.75rem 0.75rem 0",
                      }}
                      countrySelectorStyleProps={{
                        buttonStyle: {
                          border: "none",
                          borderRight: "1px solid hsl(var(--border))",
                          background: "transparent",
                          padding: "0 0.75rem",
                          height: "100%",
                          borderRadius: "0.75rem 0 0 0.75rem",
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Email <span className="text-foreground">*</span></label>
                  <input
                    type="email"
                    placeholder="Entre ton email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-track-event="form_submit"
                  data-track-label="optin_submit_button"
                  data-track-section="modal"
                  className="w-full rounded-full bg-cyan-600 px-6 py-3.5 text-base md:text-lg font-bold text-white hover:bg-cyan-500 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Envoi en cours…" : (<>JE VEUX OBTENIR LE RENDEZ-VOUS <ArrowRight className="h-5 w-5" /></>)}
                </button>

                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Tes données sont protégées.
                </p>
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OptinPage;
