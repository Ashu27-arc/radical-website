'use client';
import { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

export default function CounselorForm() {
    const toast = useRef<Toast>(null);

    const [form, setForm] = useState({
        name: '',
        mobile: '',
        course: '',
        state: '',
    });

    const [loading, setLoading] = useState(false);
    const [apiMessage, setApiMessage] = useState('');

    const courseOptions = [
        { label: 'MBBS INDIA', value: 'MBBS INDIA' },
        { label: 'MBBS ABROAD', value: 'MBBS ABROAD' },
        { label: 'BDS INDIA', value: 'BDS INDIA' },
        { label: 'AYUSH INDIA', value: 'AYUSH INDIA' },
        { label: 'MD/MS/DNB', value: 'MD/MS/DNB' },
        { label: 'MBA', value: 'MBA' },
        { label: 'PGDM', value: 'PGDM' },
        { label: 'B.TECH', value: 'B.TECH' },
        { label: 'M.TECH', value: 'M.TECH' },
        { label: 'OTHERS', value: 'OTHERS' },
    ];

    const stateOptions = [
        { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
        { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
        { label: 'Assam', value: 'Assam' },
        { label: 'Bihar', value: 'Bihar' },
        { label: 'Chhattisgarh', value: 'Chhattisgarh' },
        { label: 'Goa', value: 'Goa' },
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'Haryana', value: 'Haryana' },
        { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
        { label: 'Jharkhand', value: 'Jharkhand' },
        { label: 'Karnataka', value: 'Karnataka' },
        { label: 'Kerala', value: 'Kerala' },
        { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { label: 'Maharashtra', value: 'Maharashtra' },
        { label: 'Manipur', value: 'Manipur' },
        { label: 'Meghalaya', value: 'Meghalaya' },
        { label: 'Mizoram', value: 'Mizoram' },
        { label: 'Nagaland', value: 'Nagaland' },
        { label: 'Odisha', value: 'Odisha' },
        { label: 'Punjab', value: 'Punjab' },
        { label: 'Rajasthan', value: 'Rajasthan' },
        { label: 'Sikkim', value: 'Sikkim' },
        { label: 'Tamil Nadu', value: 'Tamil Nadu' },
        { label: 'Telangana', value: 'Telangana' },
        { label: 'Tripura', value: 'Tripura' },
        { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
        { label: 'Uttarakhand', value: 'Uttarakhand' },
        { label: 'West Bengal', value: 'West Bengal' },
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Chandigarh', value: 'Chandigarh' },
        { label: 'Other', value: 'Other' },
    ];

    const showError = (msg: string) => {
        toast.current?.show({
            severity: 'error',
            summary: 'Validation Error',
            detail: msg,
            life: 3000,
        });
    };

    const handleSubmit = async () => {
        if (!form.name.trim()) return showError('Name is required');
        if (!form.mobile.trim()) return showError('Mobile number is required');
        if (!/^\d{10}$/.test(form.mobile)) return showError('Mobile number must be exactly 10 digits');
        if (!form.course) return showError('Please select a course');
        if (!form.state) return showError('Please select a state');

        setLoading(true);
        try {
            const response = await fetch('/api/counselor-enquiry/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const result = await response.json();
            if (result.success) {
                toast.current?.show({
                    severity: 'success',
                    summary: 'Enquiry Submitted',
                    detail: result.message || 'We will contact you shortly',
                    life: 3000,
                });
                setForm({ name: '', mobile: '', course: '', state: '' });
                setApiMessage(result.message);
            } else {
                showError(result.message || 'Failed to submit enquiry');
            }
        } catch (error) {
            showError('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative overflow-hidden md:overflow-visible">
            <Toast ref={toast} />
            {/* Background Decorative Image */}
            <div className="absolute -top-16.5 -right-0.5 w-10 h-10 md:w-20 md:h-20 z-0 pointer-events-none">
                <img
                    src="/images/star-6.webp"
                    alt="Counselor Decor"
                    className="w-full h-full object-contain transform rotate-12"
                />
            </div>

            <div className="space-y-6 relative z-10">
                <div className="p-inputtext-sm">
                    <InputText
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full h-14 rounded-lg bg-[#F9FAFB] border-gray-100 px-4 !text-gray-500"
                    />
                </div>

                <div className="p-inputtext-sm">
                    <InputText
                        value={form.mobile}
                        maxLength={10}
                        keyfilter="int"
                        onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, '') })}
                        placeholder="Phone Number"
                        className="w-full h-14 rounded-lg bg-[#F9FAFB] border-gray-100 px-4 !text-gray-500"
                    />
                </div>

                <div className="p-inputtext-sm">
                    <Dropdown
                        value={form.course}
                        options={courseOptions}
                        onChange={(e) => setForm({ ...form, course: e.value })}
                        placeholder="Select Course"
                        className="w-full h-14 rounded-lg bg-[#F9FAFB] border-gray-100 flex items-center text-gray-500"
                    />
                </div>

                <div className="p-inputtext-sm">
                    <Dropdown
                        value={form.state}
                        options={stateOptions}
                        onChange={(e) => setForm({ ...form, state: e.value })}
                        placeholder="Select State"
                        className="w-full h-14 rounded-lg bg-[#F9FAFB] border-gray-100 flex items-center text-gray-500"
                    />
                </div>

                <div className="flex items-start gap-3 py-2">
                    <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 w-5 h-5 accent-[#00B4B4] rounded border-gray-300"
                        required
                    />
                    <label htmlFor="consent" className="text-xs text-gray-500 leading-tight">
                        I Consent To Receiving Calls, WhatsApp, Email And Google RCS From Edwise To Assist With This Enquiry.
                    </label>
                </div>

                <Button
                    label="Submit"
                    onClick={handleSubmit}
                    loading={loading}
                    className="w-full h-14 !rounded-[14px] text-lg font-bold !border-none !bg-gradient-to-r !from-[#63CDB4] !to-[#099CF6] shadow-lg hover:opacity-90 transition-opacity"
                />

                {apiMessage && (
                    <div className="text-center text-white font-semibold mt-4 py-2 px-4 rounded bg-white/10 backdrop-blur-sm animate-fade-in">
                        {apiMessage}
                    </div>
                )}
            </div>
        </div>
    );
}
