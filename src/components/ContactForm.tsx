"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

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
                <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
                <p className="text-muted text-lg">
                    We&apos;ve received your request. Our team will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-purple hover:text-purple-dark font-semibold text-sm transition-colors"
                >
                    Send another message →
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
                Request a Quote
            </h3>
            <p className="text-muted mb-8 text-sm">
                Fill out the form below and our team will respond within 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                        Full Name *
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-lavender-light border border-border text-dark placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                        Email Address *
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-lavender-light border border-border text-dark placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+966 5XX XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-lavender-light border border-border text-dark placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                        Service Required
                    </label>
                    <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 rounded-xl bg-lavender-light border border-border text-dark focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all text-sm appearance-none"
                    >
                        <option value="">Select a service</option>
                        <option value="chiller">Air Cooled Chiller</option>
                        <option value="ahu">Air Handling Unit (AHU)</option>
                        <option value="ducted">Ducted Concealed</option>
                        <option value="vrv">VRV / VRF Systems</option>
                        <option value="package">Package Unit</option>
                        <option value="exhaust">Exhaust Fan & Ventilation</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    Project Details *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, location, and requirements..."
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
                        Sending...
                    </>
                ) : (
                    <>
                        <Send size={18} />
                        Send Request
                    </>
                )}
            </button>
        </form>
    );
}
