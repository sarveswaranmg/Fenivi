import React, { useEffect } from "react";

export default function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#fafafa] pt-32 pb-24 font-sans">
            <div className="max-w-3xl mx-auto px-8 bg-white py-16 shadow-sm border border-gray-100 rounded-sm">
                {/* Header Section */}
                <header className="mb-16 border-b border-gray-100 pb-10 text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight">Terms & Conditions</h1>
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
                            This website and its services are operated by <span className="text-gray-900 font-medium">Fenivi Research Solutions</span> (“Company”, “we”, “our”, “us”). By accessing our website or engaging our services, you agree to comply with the following Terms and Conditions.
                        </p>
                        <p className="mt-4">
                            If you do not agree, please refrain from using our services.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">01. Definitions</h2>
                        <p className="mb-4 text-gray-500 italic">For the purpose of these Terms:</p>
                        <ul className="space-y-3">
                            <li className="flex gap-4">
                                <span className="text-gray-400 font-mono text-[10px] mt-1">01.1</span>
                                <span><strong className="text-gray-800 font-medium uppercase text-[11px] tracking-wider mr-2 font-sans">Client:</strong> Any individual, institution, organization, hospital, NGO, company, or entity engaging our services.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-gray-400 font-mono text-[10px] mt-1">01.2</span>
                                <span><strong className="text-gray-800 font-medium uppercase text-[11px] tracking-wider mr-2 font-sans">Services:</strong> Research consultation, scientific writing assistance, third-party evaluation, impact assessment, feasibility studies, survey execution, statistical analysis, academic training programs, and related services.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-gray-400 font-mono text-[10px] mt-1">01.3</span>
                                <span><strong className="text-gray-800 font-medium uppercase text-[11px] tracking-wider mr-2 font-sans">Deliverables:</strong> Reports, manuscripts, proposals, datasets, presentations, training materials, or any agreed output.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-gray-400 font-mono text-[10px] mt-1">01.4</span>
                                <span><strong className="text-gray-800 font-medium uppercase text-[11px] tracking-wider mr-2 font-sans">Agreement:</strong> The signed proposal, email confirmation, invoice acceptance, or work order issued between the Client and Fenivi Research Solutions.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">02. Nature of Services</h2>
                        <p className="mb-4">2.1 Fenivi Research Solutions provides professional research consultancy and academic support services.</p>
                        <div className="bg-gray-50/50 p-6 border-l-2 border-gray-200">
                            <p className="font-medium text-gray-800 mb-2">2.2 Exclusions to Services:</p>
                            <p className="mb-3">We do <span className="underline underline-offset-4 decoration-gray-300">not</span> provide or guarantee the following:</p>
                            <ul className="space-y-1.5 list-none">
                                <li className="flex gap-2"><span>–</span> Publication in journals</li>
                                <li className="flex gap-2"><span>–</span> Funding approval</li>
                                <li className="flex gap-2"><span>–</span> Ghostwriting services for academic submission</li>
                                <li className="flex gap-2"><span>–</span> Unethical research practices</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">03. Engagement & Formation</h2>
                        <p>3.1 Services commence only after written confirmation of scope, acceptance of quotation, and payment of agreed advance.</p>
                        <p className="mt-4">3.2 Additional work beyond the agreed scope require separate written approval and may incur further charges.</p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">04. Fees & Payment Terminology</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div className="space-y-2">
                                <p className="font-medium text-gray-800">4.1 Fee Determination</p>
                                <p className="text-[13px] text-gray-500">Based on complexity, scope, timeline, and resource requirements.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium text-gray-800">4.2 Payment Milestones</p>
                                <p className="text-[13px] text-gray-500">Advance payment (30–70%) required; balance due before delivery.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium text-gray-800">4.3 Late Payments</p>
                                <p className="text-[13px] text-gray-500">Services may be paused. Interest may be charged per applicable law.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium text-gray-800">4.4 Refund Policy</p>
                                <p className="text-[13px] text-gray-500">Generally non-refundable; discretionary based on written agreement.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">05. Client Obligations</h2>
                        <p className="mb-4">The Client is responsible for accurate data provision, obtaining Ethics Committee approvals, ensuring legal permissions, and validating all outputs before submission.</p>
                        <p className="bg-gray-50 p-4 text-[12px] text-gray-500 border border-gray-100 italic">
                            Fenivi Research Solutions is not liable for consequences arising from incorrect or incomplete information provided by the Client.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">06. Intellectual Property</h2>
                        <p>6.1 Upon full payment, ownership of final deliverables transfers to the Client.</p>
                        <p className="mt-2">6.2 The Company retains rights for anonymized project descriptions for portfolio purposes.</p>
                    </section>

                    {/* Section 7 - 9 Combined for Brevity in this view */}
                    <section className="space-y-8">
                        <div>
                            <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">07. Confidentiality & Privacy</h2>
                            <p>All client information is confidential. Data is processed in accordance with Indian regulations. Clients ensure lawful collection of participant data.</p>
                        </div>
                        <div>
                            <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">08. Ethical Compliance & AI</h2>
                            <p>We refuse projects violating laws or involving data fabrication. AI tools may be used for efficiency; outputs are professionally reviewed.</p>
                        </div>
                        <div>
                            <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">09. Limitation of Liability</h2>
                            <p>Maximum liability is restricted to total fees paid for the specific service. No liability for journal or grant rejections.</p>
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
                                <p><span className="text-gray-400 mr-2">Web:</span> www.fenivi.com</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer legal line */}
                <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">End of Terms and Conditions</p>
                </footer>
            </div>
        </div>
    );
}
