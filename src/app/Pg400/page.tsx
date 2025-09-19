'use client';
import InPageLinks from '@/components/pg400/InPageLinks';
import CeoMessageSection from '@/components/pg400/CeoMessageSection';
import CompanyProfileSection from '@/components/pg400/CompanyProfileSection';
import HistorySection from '@/components/pg400/HistorySection';
import AccessSection from '@/components/pg400/AccessSection';
import { useMessage } from '@/lib/useMessage';
import PageHero from '@/components/common/PageHero';
import { siteConfig } from '@/config/siteConfig';

export default function Page400() {
    const getMessage = useMessage();


    const companyNavLinks = [
        { label: getMessage('Pg400', 'nav_ceo') || '', path: '#ceo-message' },
        { label: getMessage('Pg400', 'nav_profile') || '', path: '#profile' },
        { label: getMessage('Pg400', 'nav_history') || '', path: '#history' },
        { label: getMessage('Pg400', 'nav_access') || '', path: '#access' },
    ];


    const ceoData = {
        title: getMessage('Pg400', 'ceo_title') || '',
        paragraph1: getMessage('Pg400', 'ceo_p1') || '',
        paragraph2: getMessage('Pg400', 'ceo_p2') || '',
        signature: getMessage('Pg400', 'ceo_signature') || '',
    };


    const profileSectionData = {
        title: getMessage('Pg400', 'profile_title') || '',
        profileData: [
            { label: getMessage('Pg400', 'profile_name_label') || '', value: getMessage('Pg400', 'profile_name_value') || '' },
            { label: getMessage('Pg400', 'profile_corp_num_label') || '', value: getMessage('Pg400', 'profile_corp_num_value') || '' },
            { label: getMessage('Pg400', 'profile_date_label') || '', value: getMessage('Pg400', 'profile_date_value') || '' },
            { label: getMessage('Pg400', 'profile_capital_label') || '', value: getMessage('Pg400', 'profile_capital_value') || '' },
            { label: getMessage('Pg400', 'profile_rep_label') || '', value: getMessage('Pg400', 'profile_rep_value') || '' },
            { label: getMessage('Pg400', 'profile_address_label') || '', value: getMessage('Pg400', 'profile_address_value') || '' },
            { label: getMessage('Pg400', 'profile_overseas_label') || '', value: getMessage('Pg400', 'profile_overseas_value') || '' },
            { label: getMessage('Pg400', 'profile_services_label') || '', value: getMessage('Pg400', 'profile_services_value') || '' },
            { label: getMessage('Pg400', 'profile_contact_label') || '', value: getMessage('Pg400', 'profile_contact_value') || '' },
        ]
    };


    const historyData = {
        title: getMessage('Pg400', 'history_title') || '',
        yearSuffix: getMessage('common', 'year_suffix') || '',
        monthSuffix: getMessage('common', 'month_suffix') || '',
        events: [
            { year: 2024, month: 1, description: getMessage('Pg400', 'history_event_1_desc') || '' },
            { year: 2025, description: getMessage('Pg400', 'history_event_2_desc') || '' },
        ]
    };

    const accessData = {
        title: getMessage('Pg400', 'access_title') || '',
        companyName: getMessage('Pg400', 'access_company_name') || '',
        postalCode: getMessage('Pg400', 'access_postal_code') || '',
        address: getMessage('Pg400', 'access_address') || '',
        tel: getMessage('Pg400', 'access_tel') || '',
        mapButtonText: getMessage('Pg400', 'access_map_button') || '',
        mapUrl: siteConfig.maps.shareUrl,
        mapEmbedUrl: siteConfig.maps.embedUrl,
    };

    return (
        <>
           
            <PageHero
                title={getMessage('Pg400', 'header_title') || ''}
                subtitle={getMessage('Pg400', 'header_subtitle') || ''}
            />

            <main style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }}>
                <InPageLinks navLinks={companyNavLinks} />
                <CeoMessageSection {...ceoData} />
                <CompanyProfileSection {...profileSectionData} />
                <HistorySection {...historyData} />
                <AccessSection {...accessData} />
            </main>
        </>
    );
}