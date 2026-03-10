import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import guideImage from "@/assets/guide-julien.png";
import { supabase } from "@/integrations/supabase/client";

const OptinPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);

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
        // Non-blocking: sync to Systeme.io
        supabase.functions.invoke("sync-systeme-contact", {
          body: { email: email.trim().toLowerCase(), firstName: name.trim(), phone: validPhone },
        }).catch(() => {});

        // Non-blocking: send lead magnet email
        supabase.functions.invoke("send-lead-magnet", {
          body: { email: email.trim().toLowerCase(), first_name: name.trim(), phone: validPhone },
        }).catch(() => {});
      }
    } catch {
      // Best-effort: navigate even on error
    } finally {
      setIsSubmitting(false);
      navigate("/offre");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
                📥 GUIDE GRATUIT — Téléchargement immédiat
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading">
                Parle français pour <br />
                <span className="text-accent">t'intégrer en France</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
                Un guide simple pour parler, comprendre et t'intégrer plus vite en France.
              </p>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="glass-card rounded-2xl p-6 space-y-4 max-w-md"
              >
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Prénom <span className="text-foreground">*</span></label>
                  <input
                    type="text"
                    placeholder="Ton prénom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Email <span className="text-foreground">*</span></label>
                  <input
                    type="email"
                    placeholder="Ton email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Téléphone <span className="text-muted-foreground/60 font-normal">(optionnel)</span></label>
                <div className="flex h-[54px] rounded-lg border border-border bg-background focus-within:ring-2 focus-within:ring-primary">
                  <PhoneInput
                    defaultCountry="fr"
                    preferredCountries={["fr", "be", "ch", "ca", "ma", "dz", "tn", "sn", "ci"]}
                    value={phone}
                    onChange={setPhone}
                    placeholder="Ton téléphone (optionnel)"
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
                      borderRadius: "0 0.5rem 0.5rem 0",
                    }}
                    countrySelectorStyleProps={{
                      buttonStyle: {
                        border: "none",
                        borderRight: "1px solid hsl(var(--border))",
                        background: "transparent",
                        padding: "0 0.75rem",
                        height: "100%",
                        borderRadius: "0.5rem 0 0 0.5rem",
                      },
                    }}
                  />
                </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg text-primary-foreground font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-lg flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? "Envoi en cours…" : (<>Je veux mon guide d'intégration <ArrowRight className="w-5 h-5" /></>)}
                </button>
                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Tes données sont protégées. Zéro spam.
                </p>
              </motion.form>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden md:flex justify-center"
            >
              <img src={guideImage} alt="Guide gratuit — Professeur Julien" className="max-w-md w-full drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptinPage;
