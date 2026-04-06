"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { t } = useLanguage();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-2xl p-12 text-center border border-border">
                <div className="w-20 h-20 mx-auto mb-6 bg-lavender rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-purple" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">{t("form.thankYou")}</h3>
                <p className="text-muted text-lg">
                    {t("form.received")}
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-purple hover:text-purple-dark font-semibold text-sm transition-colors"
                >
                    {t("form.sendAnother")}
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 border border-border"
        >
            <h3 className="text-2xl font-bold text-dark mb-2 tracking-tight">
                {t("form.title")}
            </h3>
            <p className="text-muted mb-8 text-sm">
                {t("form.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                        {t("form.fullName")}
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={t("form.namePlaceholder")}
                        className="w-full px-4 py-3 rounded-xl bg-lavender-light border border-border text-dark placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                        {t("form.emailLabel")}
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t("form.emailPlaceholder")}
                        className="w-full px-4 py-3 rounded-xl bg-lavender-light border border-border text-dark placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                        {t("form.phoneLabel")}
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={t("form.phonePlaceholder")}
                        className="w-full px-4 py-3 rounded-xl bg-lavender-light border border-border text-dark placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                        {t("form.serviceLabel")}
                    </label>
                    <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 rounded-xl bg-lavender-light border border-border text-dark focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all text-sm appearance-none"
                    >
                        <option value="">{t("form.selectService")}</option>
                        <option value="chiller">{t("footer.airCooledChiller")}</option>
                        <option value="ahu">{t("footer.ahu")}</option>
                        <option value="ducted">{t("footer.ductedConcealed")}</option>
                        <option value="vrv">{t("footer.vrvVrf")}</option>
                        <option value="package">{t("footer.packageUnit")}</option>
                        <option value="exhaust">{t("footer.exhaustVent")}</option>
                        <option value="other">{t("form.other")}</option>
                    </select>
                </div>
            </div>

            <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    {t("form.detailsLabel")}
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t("form.detailsPlaceholder")}
                    className="w-full px-4 py-3 rounded-xl bg-lavender-light border border-border text-dark placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all text-sm resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed !py-4 text-base"
            >
                {loading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("form.sending")}
                    </>
                ) : (
                    <>
                        <Send size={18} />
                        {t("form.send")}
                    </>
                )}
            </button>
        </form>
    );
}
