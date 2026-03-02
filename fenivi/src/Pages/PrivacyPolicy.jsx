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
                    <p className="mt-3 text-[11px] text-gray-500">Website: www.fenivi.com</p>
                </header>

                <div className="space-y-12 text-[14px] leading-[1.8] text-gray-600">
                    {/* Introduction */}
                    <section>
                        <p>
                            Fenivi Research Solutions ("Company", "we", "our", "us") is committed to protecting the privacy and confidentiality of our clients, research participants, website visitors, and collaborators.
                        </p>
                        <p className="mt-4">
                            This Privacy Policy explains how we collect, use, process, store, and protect personal information in accordance with applicable Indian data protection laws and global research ethics standards.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">1. Scope of This Policy</h2>
                        <p>This Policy applies to:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Website visitors</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Clients (individuals and institutions)</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Research collaborators</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Training program participants</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Survey respondents (where applicable)</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">2. Information We Collect</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="font-medium text-gray-800 mb-3">2.1 Personal Information</p>
                                <p className="mb-2">We may collect:</p>
                                <ul className="space-y-1.5 list-none">
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Full name</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Email address</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Phone number</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Institutional affiliation</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Designation</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Billing details</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Address</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 mb-3">2.2 Research Data</p>
                                <p className="mb-2">In the course of research projects, we may process:</p>
                                <ul className="space-y-1.5 list-none mb-4">
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Survey responses</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Interview transcripts</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> De-identified datasets</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Statistical data</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Institutional reports</li>
                                </ul>
                                <p>We do not knowingly collect sensitive personal data unless required for research and approved by relevant ethics committees.</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 mb-3">2.3 Website Usage Data</p>
                                <p className="mb-2">When you visit our website, we may collect:</p>
                                <ul className="space-y-1.5 list-none">
                                    <li className="flex gap-2 text-gray-500"><span>•</span> IP address</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Browser type</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Pages visited</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Device information</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Cookies and analytics data</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">3. Purpose of Data Collection</h2>
                        <p className="mb-2">We collect and process information for:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Delivering research consultancy services</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Preparing reports and assessments</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Conducting surveys and evaluations</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Communicating regarding projects</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Processing payments</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Registering participants for training programs</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Improving website functionality</li>
                        </ul>
                        <p className="mt-4">We do not sell or trade personal data.</p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">4. Legal Basis for Processing</h2>
                        <p className="mb-2">We process personal data based on:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Contractual necessity</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Client consent</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Legal compliance</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Legitimate business interests</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Ethical research obligations</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">5. Data Confidentiality in Research Projects</h2>
                        <p className="mb-2">Fenivi Research Solutions follows strict confidentiality protocols:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Data anonymization where applicable</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Restricted internal access</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Password-protected systems</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Secure cloud storage</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Ethical compliance review (where applicable)</li>
                        </ul>
                        <p className="mt-4">Clients are responsible for obtaining informed consent from participants prior to data collection.</p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">6. Data Sharing</h2>
                        <p className="mb-2">We may share data only:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> With authorized project collaborators</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> With regulatory authorities (if legally required)</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> With payment gateways for transaction processing</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> With professional advisors (legal/accounting)</li>
                        </ul>
                        <p className="mt-4">We do not share data for marketing purposes.</p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">7. Data Retention</h2>
                        <p className="mb-2">We retain data:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> For the duration of the project</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> For legal compliance purposes</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> For internal documentation and audit purposes</li>
                        </ul>
                        <p className="mt-4">Research data may be retained in anonymized form for academic recordkeeping.</p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">8. Data Security</h2>
                        <p className="mb-2">We implement:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Encrypted communication channels</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Access-controlled systems</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Secure backup protocols</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Confidentiality agreements with staff</li>
                        </ul>
                        <p className="mt-4">However, no digital transmission can be guaranteed 100% secure.</p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">9. Cookies Policy</h2>
                        <p className="mb-2">Our website may use cookies to:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Improve user experience</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Analyze website traffic</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Maintain session integrity</li>
                        </ul>
                        <p className="mt-4">Users may disable cookies via browser settings.</p>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">10. Rights of Users</h2>
                        <p className="mb-2">Subject to applicable laws, you may have the right to:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Access your personal data</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Correct inaccuracies</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Request deletion</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Withdraw consent (where applicable)</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Object to processing</li>
                        </ul>
                        <p className="mt-4">Requests may be sent to: feniviresearch@gmail.com</p>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">11. Children's Data</h2>
                        <p>We do not knowingly collect data from individuals under 18 years unless part of an ethically approved research study with parental consent.</p>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">12. International Data Transfer</h2>
                        <p>If data is transferred outside India (for collaborations or publications), appropriate safeguards will be implemented.</p>
                    </section>

                    {/* Section 13 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">13. Third-Party Links</h2>
                        <p>Our website may contain external links. We are not responsible for their privacy practices.</p>
                    </section>

                    {/* Section 14 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">14. Policy Updates</h2>
                        <p>We reserve the right to update this Privacy Policy. Changes will be published on this page with a revised date.</p>
                    </section>

                    {/* Section 15 */}
                    <section className="pt-10 border-t border-gray-100">
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em]">15. Contact Information</h2>
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
