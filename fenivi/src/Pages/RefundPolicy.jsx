import React, { useEffect } from "react";

export default function RefundPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#fafafa] pt-32 pb-24 font-sans">
            <div className="max-w-3xl mx-auto px-8 bg-white py-16 shadow-sm border border-gray-100 rounded-sm">
                {/* Header Section */}
                <header className="mb-16 border-b border-gray-100 pb-10 text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight">Refund & Cancellation Policy</h1>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium">Fenivi Research Solutions</p>
                    <div className="mt-8 flex items-center justify-center gap-6 text-[11px] text-gray-500 uppercase tracking-widest">
                        <p>Effective: Feb 23, 2026</p>
                    </div>
                </header>

                <div className="space-y-12 text-[14px] leading-[1.8] text-gray-600">
                    {/* Intro */}
                    <section>
                        <p>This Refund & Cancellation Policy applies to all services and programs offered by Fenivi Research Solutions.</p>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">1. General Policy</h2>
                        <p>
                            Due to the intellectual and customized nature of our services, payments made are generally non-refundable unless explicitly stated in writing.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">2. Research Consultancy Services</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="font-medium text-gray-800 mb-2">2.1 Before Work Commencement</p>
                                <p>If cancellation is requested before project initiation:</p>
                                <ul className="space-y-1.5 list-none mt-3">
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Refund may be considered after deducting administrative charges.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 mb-2">2.2 After Work Has Begun</p>
                                <p>If work has commenced:</p>
                                <ul className="space-y-1.5 list-none mt-3">
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Refunds will not be issued for completed portions.</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Partial refunds may be considered at company discretion.</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Advance payments covering completed milestones are non-refundable.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 mb-2">2.3 Project Abandonment</p>
                                <p>If a client fails to respond for 30 days:</p>
                                <ul className="space-y-1.5 list-none mt-3">
                                    <li className="flex gap-2 text-gray-500"><span>•</span> The project may be considered abandoned.</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> No refund will be issued.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">3. Training Programs & Workshops</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="font-medium text-gray-800 mb-2">3.1 Participant Cancellation</p>
                                <ul className="space-y-1.5 list-none mt-3">
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Cancellation 7 days prior: Eligible for partial refund (after deduction of processing fee).</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Cancellation less than 7 days: No refund.</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> No-show: No refund.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 mb-2">3.2 Rescheduling</p>
                                <p>Participants may request transfer to a future batch (subject to availability).</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 mb-2">3.3 Cancellation by Fenivi Research Solutions</p>
                                <p>If a program is cancelled by us:</p>
                                <ul className="space-y-1.5 list-none mt-3">
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Full refund will be issued OR</li>
                                    <li className="flex gap-2 text-gray-500"><span>•</span> Participant may opt for transfer to future batch.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">4. Digital Products & Materials</h2>
                        <ul className="space-y-1.5 list-none">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Once accessed or downloaded, digital materials are non-refundable.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">5. Payment Disputes</h2>
                        <p>Clients must raise billing concerns within 7 days of invoice issuance.</p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">6. Mode of Refund</h2>
                        <p>Approved refunds will be processed via the original payment method within 15–30 business days.</p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">7. Force Majeure</h2>
                        <p>Refund obligations may be adjusted in cases of:</p>
                        <ul className="space-y-1.5 list-none mt-4">
                            <li className="flex gap-2 text-gray-500"><span>•</span> Natural disasters</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Government restrictions</li>
                            <li className="flex gap-2 text-gray-500"><span>•</span> Technical disruptions beyond reasonable control</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section className="pt-10 border-t border-gray-100">
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em]">8. Contact for Refund Requests</h2>
                        <p className="mb-6">All refund and cancellation requests must be made in writing to:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px]">
                            <div className="space-y-1">
                                <p className="text-gray-400">Official Email:</p>
                                <p className="text-gray-900 font-medium">feniviresearch@gmail.com</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-900 font-medium">Subject Line:</p>
                                <p>Refund/Cancellation Request – [Project Name]</p>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">End of Refund Policy</p>
                </footer>
            </div>
        </div>
    );
}
