'use client';
import { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

export default function CounselorForm() {
    const [visible, setVisible] = useState(false);
    const toast = useRef<Toast>(null);

    const [form, setForm] = useState({
        name: '',
        email: '',
        mobile: '',
        course: '',
        state: '',
    });

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
        { label: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands' },
        { label: 'Chandigarh', value: 'Chandigarh' },
        { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'Dadra and Nagar Haveli and Daman and Diu' },
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
        { label: 'Ladakh', value: 'Ladakh' },
        { label: 'Lakshadweep', value: 'Lakshadweep' },
        { label: 'Puducherry', value: 'Puducherry' },
    ];

    const showError = (msg: string) => {
        toast.current?.show({
            severity: 'error',
            summary: 'Validation Error',
            detail: msg,
            life: 3000,
        });
    };

    const handleSubmit = () => {
        if (!form.name.trim()) return showError('Name is required');
        if (!form.email.trim()) return showError('Email is required');
        if (!form.mobile.trim()) return showError('Mobile number is required');

        if (!/^\d{10}$/.test(form.mobile)) {
            return showError('Mobile number must be exactly 10 digits');
        }

        if (!form.course) {
            return showError('Please select a course');
        }

        if (!form.state) {
            return showError('Please select a state');
        }

        toast.current?.show({
            severity: 'success',
            summary: 'Enquiry Submitted',
            detail: 'We will contact you shortly',
            life: 3000,
        });

        setForm({
            name: '',
            email: '',
            mobile: '',
            course: '',
            state: '',
        });

        setVisible(false);
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="space-y-3 sm:space-y-5">
                {/* Name */}
                <div className="p-inputgroup flex-col sm:flex-row">
                    <span className="p-inputgroup-addon bg-white! sm:border-r-0">
                        <i className="pi pi-user"></i>
                    </span>
                    <span className="p-float-label flex-1">
                        <InputText
                            id="name"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            className="w-full sm:border-l-0! sm:pl-0!"
                        />
                        <label htmlFor="name" className="text-sm">
                            Full Name*
                        </label>
                    </span>
                </div>

                {/* Email */}
                <div className="p-inputgroup flex-col sm:flex-row">
                    <span className="p-inputgroup-addon bg-white! sm:border-r-0">
                        <i className="pi pi-envelope"></i>
                    </span>
                    <span className="p-float-label flex-1">
                        <InputText
                            id="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            className="w-full sm:border-l-0! sm:pl-0!"
                        />
                        <label htmlFor="email" className="text-sm">
                            Email Address*
                        </label>
                    </span>
                </div>

                {/* Mobile */}
                <div className="p-inputgroup flex-col sm:flex-row">
                    <span className="p-inputgroup-addon bg-white! sm:border-r-0">
                        <i className="pi pi-phone"></i>
                    </span>
                    <span className="p-float-label flex-1">
                        <InputText
                            id="mobile"
                            value={form.mobile}
                            keyfilter="int"
                            maxLength={10}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    mobile: e.target.value.replace(/\D/g, ''),
                                })
                            }
                            className="w-full sm:border-l-0!"
                            style={{ paddingLeft: 0 }}
                        />
                        <label htmlFor="mobile" className="text-sm">
                            Mobile Number*
                        </label>
                    </span>
                </div>

                {/* Course */}
                <div className="p-inputgroup flex-col sm:flex-row">
                    <span className="p-inputgroup-addon bg-white! sm:border-r-0">
                        <i className="pi pi-book"></i>
                    </span>
                    <span className="p-float-label w-full flex-1">
                        <Dropdown
                            id="course"
                            value={form.course}
                            options={courseOptions}
                            onChange={(e) =>
                                setForm({ ...form, course: e.value })
                            }
                            className="w-full sm:border-l-0!"
                        />
                        <label htmlFor="course" className="text-sm">
                            Select Course*
                        </label>
                    </span>
                </div>

                {/* State */}
                <div className="p-inputgroup flex-col sm:flex-row">
                    <span className="p-inputgroup-addon bg-white! sm:border-r-0">
                        <i className="pi pi-map"></i>
                    </span>
                    <span className="p-float-label w-full flex-1">
                        <Dropdown
                            id="state"
                            value={form.state}
                            options={stateOptions}
                            onChange={(e) =>
                                setForm({ ...form, state: e.value })
                            }
                            className="w-full border-l-0!"
                        />
                        <label htmlFor="state" className="text-sm">
                            Select State*
                        </label>
                    </span>
                </div>
                <div className="flex items-start gap-2">
                    <input 
                        type="checkbox" 
                        id="consent" 
                        className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-white">
                        I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
                    </label>
                </div>


                <div>
                    <Button
                        label="SUBMIT"
                        icon="pi pi-arrow-right"
                        iconPos="right"
                        className="w-full bg-gradient-to-l! from-[#0077BF]! to-[#00CFB2]! border-0!"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </>
    );
}
