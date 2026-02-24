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
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight">Refund & Cancellation</h1>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium">Fenivi Research Solutions</p>
                    <div className="mt-8 flex items-center justify-center gap-6 text-[11px] text-gray-500 uppercase tracking-widest">
                        <p>Effective: Feb 23, 2026</p>
                    </div>
                </header>

                <div className="space-y-12 text-[14px] leading-[1.8] text-gray-600">
                    {/* General Policy */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">01. General Policy</h2>
                        <p>
                            Due to the intellectual and customized nature of our services, payments made are <span className="text-gray-900 font-medium">generally non-refundable</span> unless explicitly stated in writing. This Policy applies to all services and programs offered by Fenivi Research Solutions.
                        </p>
                    </section>

                    {/* Consultancy */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">02. Research Consultancy</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="font-medium text-gray-800 mb-1">Before Work Commencement</p>
                                <p className="text-[13px]">Refunds may be considered after deducting administrative charges if cancellation is requested before project initiation.</p>
                            </div>
                            <div className="bg-gray-50/50 p-6 border-l-2 border-gray-200">
                                <p className="font-medium text-gray-800 mb-1">After Work Has Begun</p>
                                <p className="text-[13px]">Refunds will not be issued for completed portions. Advance payments covering completed milestones are non-refundable.</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 mb-1">Project Abandonment</p>
                                <p className="text-[13px]">Projects where the client fails to respond for 30 consecutive days may be considered abandoned with no eligibility for refund.</p>
                            </div>
                        </div>
                    </section>

                    {/* Training */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">03. Training & Workshops</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px]">
                            <div className="space-y-2">
                                <p className="font-medium text-gray-800">Participant Cancellation</p>
                                <p>7+ days prior: Partial refund (fee deduction).<br />Less than 7 days or No-show: No refund.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium text-gray-800">Company Cancellation</p>
                                <p>Full refund or transfer to a future batch will be provided if we cancel a program.</p>
                            </div>
                        </div>
                    </section>

                    {/* Processing */}
                    <section className="space-y-8">
                        <div>
                            <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">04. Refunds & Disputes</h2>
                            <p>Billing concerns must be raised within 7 days of invoice. Approved refunds will be processed via the original payment method within <span className="text-gray-900 font-medium">15–30 business days</span>.</p>
                        </div>
                        <p className="bg-gray-50 p-4 text-[12px] text-gray-500 border border-gray-100 italic">
                            Digital products and downloaded materials are strictly non-refundable once accessed.
                        </p>
                    </section>

                    {/* Force Majeure */}
                    <section>
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-2">05. Force Majeure</h2>
                        <p>Refund obligations may be adjusted in cases of natural disasters, government restrictions, or technical disruptions beyond reasonable control.</p>
                    </section>

                    {/* Contact Information */}
                    <section className="pt-10 border-t border-gray-100">
                        <h2 className="text-[12px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.15em]">Request Submission</h2>
                        <p className="mb-6">All refund and cancellation requests must be made in writing to:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px]">
                            <div className="space-y-1">
                                <p className="text-gray-900 font-medium">Subject Line:</p>
                                <p>Refund/Cancellation Request – [Project Name]</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-400">Official Email:</p>
                                <p className="text-gray-900 font-medium">feniviresearch@gmail.com</p>
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
