import React, { useEffect } from "react";

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#fafafa] pt-32 pb-24 font-sans">
            <div className="max-w-3xl mx-auto px-8 bg-white py-16 shadow-sm border border-gray-100 rounded-sm">
                {/* Header Section */}
                <header className="mb-16 border-b border-gray-100 pb-10 text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight">Privacy Policy</h1>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium">Fenivi Research Solutions</p>
                    <div className="mt-8 flex items-center justify-center gap-6 text-[11px] text-gray-500 uppercase tracking-widest">
                        <p>Effective: Feb 23, 2026</p>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <p>Last Updated: Feb 23, 2026</p>
                    </div>
                </header>

                <div className="space-y-12 text-[14px] leading-[1.8] text-gray-600">
                    {/* Introduction */}
                    <section>
                        <p>
                            Fenivi Research Solutions (“Company”, “we”, “our”, “us”) is committed to protecting the privacy and confidentiality of our clients, research participants, website visitors, and collaborators.
                        </p>
                        <p className="mt-4">
                            This Privacy Policy explains how we collect, use, process, store, and protect personal information in accordance with applicable Indian data protection laws and global research ethics standards.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">01. Scope of This Policy</h2>
                        <p>This Policy applies to:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500 italic"><span>•</span> Website visitors</li>
                            <li className="flex gap-2 text-gray-500 italic"><span>•</span> Clients (individuals and institutions)</li>
                            <li className="flex gap-2 text-gray-500 italic"><span>•</span> Research collaborators</li>
                            <li className="flex gap-2 text-gray-500 italic"><span>•</span> Training program participants</li>
                            <li className="flex gap-2 text-gray-500 italic"><span>•</span> Survey respondents</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">02. Information We Collect</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="font-medium text-gray-800 mb-2">2.1 Personal Information</p>
                                <p className="text-[13px]">We may collect name, email, phone number, institutional affiliation, designation, billing details, and address.</p>
                            </div>
                            <div className="bg-gray-50/50 p-6 border-l-2 border-gray-200">
                                <p className="font-medium text-gray-800 mb-2">2.2 Research Data</p>
                                <p className="mb-3 text-[13px]">During projects, we process survey responses, interview transcripts, de-identified datasets, and statistical data. We do not knowingly collect sensitive personal data unless required for research and approved by ethics committees.</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 mb-2">2.3 Website Usage Data</p>
                                <p className="text-[13px]">Technical data including IP addresses, browser types, and usage analytics via cookies.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">03. Purpose of Processing</h2>
                        <p>We process information to deliver consultancy services, prepare reports, conduct evaluations, process payments, and improve our website functionality. <span className="text-gray-900 font-medium">We do not sell or trade personal data.</span></p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">04. Legal Basis for Processing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[13px]">
                            <li className="flex gap-2"><span>–</span> Contractual necessity</li>
                            <li className="flex gap-2"><span>–</span> Client consent</li>
                            <li className="flex gap-2"><span>–</span> Legal compliance</li>
                            <li className="flex gap-2"><span>–</span> Legitimate business interests</li>
                            <li className="flex gap-2"><span>–</span> Ethical research obligations</li>
                        </div>
                    </section>

                    {/* Section 5 & 8 Combined */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">05. Data Confidentiality & Security</h2>
                        <p className="mb-4">We implement encrypted channels, access-controlled systems, and anonymization protocols. Internal access is restricted to authorized personnel under confidentiality agreements.</p>
                        <p className="bg-gray-50 p-4 text-[12px] text-gray-500 border border-gray-100 italic">
                            While we use strict security protocols, no digital transmission can be guaranteed 100% secure.
                        </p>
                    </section>

                    {/* Section 6 & 7 */}
                    <section className="space-y-8">
                        <div>
                            <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">06. Data Sharing & Retention</h2>
                            <p>Sharing is limited to project collaborators, regulatory authorities (if required), and payment gateways. We retain data for the project duration or as required for legal audit and academic recordkeeping.</p>
                        </div>
                        <div>
                            <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">07. Your Rights</h2>
                            <p>You have the right to access your data, correct inaccuracies, request deletion, or withdraw consent. Requests should be directed to our official email.</p>
                        </div>
                    </section>

                    {/* Closing Section */}
                    <section className="pt-10 border-t border-gray-100">
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em]">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px]">
                            <div className="space-y-1">
                                <p className="text-gray-900 font-medium">Fenivi Research Solutions</p>
                                <p>9/56C, ISRO Road, Kavalkinaru Junction</p>
                                <p>Tirunelveli – 627105, Tamil Nadu, India</p>
                            </div>
                            <div className="space-y-1">
                                <p><span className="text-gray-400 mr-2">Email:</span> feniviresearch@gmail.com</p>
                                <p><span className="text-gray-400 mr-2">Phone:</span> +91 81486 99354</p>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">End of Privacy Policy</p>
                </footer>
            </div>
        </div>
    );
}
