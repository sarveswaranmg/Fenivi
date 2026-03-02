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
                            This website and its services are operated by <span className="text-gray-900 font-medium">Fenivi Research Solutions</span> ("Company", "we", "our", "us"). By accessing our website or engaging our services, you agree to comply with the following Terms and Conditions.
                        </p>
                        <p className="mt-4">
                            If you do not agree, please refrain from using our services.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">1. Definitions</h2>
                        <p className="mb-4">For the purpose of these Terms:</p>
                        <ul className="space-y-3 list-none">
                            <li className="flex gap-2 text-gray-500"><span>•</span> "Client" means any individual, institution, organization, hospital, NGO, company, or entity engaging our services.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> "Services" include research consultation, scientific writing assistance, third-party evaluation, impact assessment, feasibility studies, survey execution, statistical analysis, academic training programs, and related services.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> "Deliverables" refer to reports, manuscripts, proposals, datasets, presentations, training materials, or any agreed output.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> "Agreement" refers to the signed proposal, email confirmation, invoice acceptance, or work order issued between the Client and Fenivi Research Solutions.</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">2. Nature of Services</h2>
                        <p className="mb-4">2.1 Fenivi Research Solutions provides professional research consultancy and academic support services.</p>
                        <p className="mb-3">2.2 We do <span className="font-semibold text-gray-900">not</span>:</p>
                        <ul className="space-y-1.5 list-none mb-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Guarantee publication in journals.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Guarantee funding approval.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Provide ghostwriting services for thesis/dissertations intended for direct academic submission without intellectual contribution from the client.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Participate in academic misconduct or unethical research practices.</li>
                        </ul>
                        <p>2.3 All services are advisory and consultative in nature.</p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">3. Engagement & Contract Formation</h2>
                        <p className="mb-4">3.1 Services commence only after:</p>
                        <ul className="space-y-1.5 list-none mb-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Written confirmation of scope.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Acceptance of quotation/proposal.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Payment of agreed advance (if applicable).</li>
                        </ul>
                        <p>3.2 Any additional work beyond the agreed scope requires written approval and may incur additional charges.</p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">4. Fees & Payment Terms</h2>
                        <p className="mb-3">4.1 Fees are determined based on:</p>
                        <ul className="space-y-1.5 list-none mb-6">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Complexity</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Scope</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Timeline</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Resource requirements</li>
                        </ul>
                        <p className="mb-3">4.2 Payment Terms:</p>
                        <ul className="space-y-1.5 list-none mb-6">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Advance payment (30–70%) may be required.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Balance payment due before final deliverable release.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Training programs require full payment prior to registration confirmation.</li>
                        </ul>
                        <p className="mb-3">4.3 Late Payments:</p>
                        <ul className="space-y-1.5 list-none mb-6">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Services may be paused for delayed payments.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Interest may be charged on overdue amounts as per applicable law.</li>
                        </ul>
                        <p className="mb-3">4.4 Refund Policy:</p>
                        <ul className="space-y-1.5 list-none">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Fees paid are generally non-refundable.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Refunds, if any, are at the discretion of Fenivi Research Solutions and subject to written agreement.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">5. Client Responsibilities</h2>
                        <p className="mb-4">The Client agrees to:</p>
                        <ul className="space-y-1.5 list-none mb-6">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Provide accurate and complete data.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Obtain necessary Institutional Ethics Committee approvals.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Ensure legal permissions for data collection.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Review and validate all outputs before submission.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Comply with academic integrity policies.</li>
                        </ul>
                        <p>Fenivi Research Solutions is not responsible for consequences arising from incorrect or incomplete information provided by the Client.</p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">6. Intellectual Property Rights</h2>
                        <p className="mb-4">6.1 Upon full payment, ownership of final deliverables transfers to the Client unless otherwise agreed.</p>
                        <p className="mb-3">6.2 The Company retains the right to:</p>
                        <ul className="space-y-1.5 list-none mb-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Use anonymized project descriptions for marketing or portfolio purposes.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Maintain internal archival copies for compliance and record keeping.</li>
                        </ul>
                        <p className="mb-4">6.3 Raw data ownership remains with the Client unless explicitly transferred.</p>
                        <p>6.4 Training materials remain intellectual property of Fenivi Research Solutions and may not be reproduced or redistributed without written consent.</p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">7. Confidentiality</h2>
                        <p className="mb-4">7.1 All client information is treated as confidential.</p>
                        <p className="mb-4">7.2 We implement reasonable administrative, technical, and physical safeguards.</p>
                        <p className="mb-3">7.3 Confidentiality obligations do not apply where:</p>
                        <ul className="space-y-1.5 list-none">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Information is publicly available.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Disclosure is required by law.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Written consent is provided by the Client.</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">8. Data Protection & Privacy</h2>
                        <p className="mb-4">8.1 Fenivi Research Solutions processes data in accordance with applicable Indian data protection regulations.</p>
                        <p className="mb-4">8.2 Clients are responsible for ensuring lawful collection of participant data.</p>
                        <p>8.3 We are not liable for data breaches caused by third-party systems used by the Client.</p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">9. Ethical Research Compliance</h2>
                        <p className="mb-3">9.1 Clients must obtain:</p>
                        <ul className="space-y-1.5 list-none mb-6">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Ethical clearance (where required)</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Government approvals (if applicable)</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Institutional permissions</li>
                        </ul>
                        <p className="mb-3">9.2 Fenivi Research Solutions reserves the right to refuse projects that:</p>
                        <ul className="space-y-1.5 list-none">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Promote unethical practices</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Violate laws</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Involve fabrication or falsification of data</li>
                        </ul>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">10. Use of Artificial Intelligence (AI)</h2>
                        <p className="mb-4">10.1 We may use AI-assisted tools to improve efficiency.</p>
                        <p className="mb-3">10.2 All AI-generated outputs are:</p>
                        <ul className="space-y-1.5 list-none mb-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Reviewed by professionals</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Verified for accuracy</li>
                        </ul>
                        <p>10.3 Clients are responsible for disclosure of AI usage if required by journals or institutions.</p>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">11. Limitation of Liability</h2>
                        <p className="mb-3">11.1 Fenivi Research Solutions shall not be liable for:</p>
                        <ul className="space-y-1.5 list-none mb-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Journal rejection</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Grant rejection</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Policy non-adoption</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Institutional disputes</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Indirect or consequential damages</li>
                        </ul>
                        <p>11.2 Maximum liability shall not exceed the total fees paid for the specific service.</p>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">12. Indemnification</h2>
                        <p className="mb-3">The Client agrees to indemnify and hold harmless Fenivi Research Solutions against any claims arising from:</p>
                        <ul className="space-y-1.5 list-none">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Misuse of deliverables</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Data inaccuracies</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Ethical violations by the Client</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Legal disputes related to client data</li>
                        </ul>
                    </section>

                    {/* Section 13 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">13. Force Majeure</h2>
                        <p className="mb-3">We shall not be liable for delays caused by:</p>
                        <ul className="space-y-1.5 list-none">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Natural disasters</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Government restrictions</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Internet failures</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Pandemic disruptions</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Labor strikes</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Acts beyond reasonable control</li>
                        </ul>
                    </section>

                    {/* Section 14 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">14. Revisions & Modifications</h2>
                        <p className="mb-4">14.1 Minor revisions within scope are included.</p>
                        <p className="mb-4">14.2 Major revisions or scope changes require additional charges.</p>
                        <p>14.3 Unlimited revisions are not included unless explicitly stated.</p>
                    </section>

                    {/* Section 15 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">15. Training Programs & Events</h2>
                        <p className="mb-4">15.1 Registration is confirmed only upon payment.</p>
                        <p className="mb-3">15.2 Fenivi Research Solutions reserves the right to:</p>
                        <ul className="space-y-1.5 list-none mb-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Reschedule sessions</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Modify speakers</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Cancel events due to low enrollment</li>
                        </ul>
                        <p>15.3 Certificates are issued only upon completion of course requirements.</p>
                    </section>

                    {/* Section 16 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">16. Termination</h2>
                        <p className="mb-3">We reserve the right to terminate services if:</p>
                        <ul className="space-y-1.5 list-none mb-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Payment defaults occur.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> The Client engages in unethical practices.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> False information is provided.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Terms are violated.</li>
                        </ul>
                        <p>In such cases, fees paid may not be refunded.</p>
                    </section>

                    {/* Section 17 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">17. Website Use Terms</h2>
                        <p className="mb-3">17.1 Users may not:</p>
                        <ul className="space-y-1.5 list-none mb-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Copy website content without permission.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Use content for commercial resale.</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Attempt to hack or disrupt services.</li>
                        </ul>
                        <p>17.2 Unauthorized use may result in legal action.</p>
                    </section>

                    {/* Section 18 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">18. Third-Party Links</h2>
                        <p>Our website may contain links to external websites. We are not responsible for their content or privacy practices.</p>
                    </section>

                    {/* Section 19 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">19. Dispute Resolution</h2>
                        <p className="mb-4">19.1 Parties shall attempt amicable resolution first.</p>
                        <p className="mb-4">19.2 If unresolved, disputes shall be subject to arbitration under Indian law.</p>
                        <p>19.3 Jurisdiction: Courts located in Tamil Nadu, India.</p>
                    </section>

                    {/* Section 20 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">20. Governing Law</h2>
                        <p>These Terms shall be governed by the laws of India.</p>
                    </section>

                    {/* Section 21 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">21. Severability</h2>
                        <p>If any provision is held invalid, the remaining provisions shall remain enforceable.</p>
                    </section>

                    {/* Section 22 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">22. Modification of Terms</h2>
                        <p>Fenivi Research Solutions reserves the right to update these Terms at any time. Updated versions will be published on the website.</p>
                    </section>

                    {/* Section 23 */}
                    <section className="pt-10 border-t border-gray-100">
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em]">23. Contact Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px]">
                            <div className="space-y-1">
                                <p className="text-gray-900 font-medium">Fenivi Research Solutions</p>
                                <p>9/56C, ISRO Road, Kavalkinaru Junction</p>
                                <p>Tirunelveli – 627105, Tamil Nadu, India</p>
                            </div>
                            <div className="space-y-1">
                                <p><span className="text-gray-400 mr-2">Email:</span> feniviresearch@gmail.com</p>
                                <p><span className="text-gray-400 mr-2">Phone:</span> +91 81486 99354</p>
                                <p><span className="text-gray-400 mr-2">Website:</span> www.fenivi.com</p>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">End of Terms and Conditions</p>
                </footer>
            </div>
        </div>
    );
}
