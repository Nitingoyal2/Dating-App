import { useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '@components/AuthLayout';
import { termsOfServiceData } from '@/data';
import { Routes } from '@/types';
import type { TermsSection } from '@interfaces';
import './TermsOfService.css';

const TermsOfService = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        // Check if we came from Settings page
        const fromSettings = (location.state as { from?: string } | null)?.from === Routes.SETTINGS;
        if (fromSettings) {
            navigate(Routes.SETTINGS);
        } else {
            navigate(-1);
        }
    };

    const renderContent = (section: TermsSection) => {
        const content = Array.isArray(section.content) ? section.content : [section.content];
        const hasSubsections = section.subsections && section.subsections.length > 0;

        return (
            <section key={section.title} className="legal-section">
                <h2 className="legal-section-title">{section.title}</h2>

                {!hasSubsections && content.map((text, index) => (
                    <p key={index} className="legal-text">
                        {text}
                    </p>
                ))}

                {hasSubsections && (
                    <>
                        {content.map((text, index) => (
                            <p key={index} className="legal-text">
                                {text}
                            </p>
                        ))}
                        {section.subsections?.map((subsection, subIndex) => {
                            // Check if this is contact info (email/address format)
                            const isContactInfo = Array.isArray(subsection.content) &&
                                subsection.content.some(item => item.includes('@') || item.includes('Address'));

                            return (
                                <div key={subIndex}>
                                    {subsection.title && (
                                        <h3 className="legal-subtitle">{subsection.title}</h3>
                                    )}
                                    {Array.isArray(subsection.content) ? (
                                        isContactInfo ? (
                                            <p className="legal-contact">
                                                {subsection.content.map((item, itemIndex) => (
                                                    <span key={itemIndex}>
                                                        {item}
                                                        {itemIndex < subsection.content.length - 1 && <br />}
                                                    </span>
                                                ))}
                                            </p>
                                        ) : (
                                            <ul className="legal-list">
                                                {subsection.content.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        )
                                    ) : (
                                        <p className="legal-text">{subsection.content}</p>
                                    )}
                                </div>
                            );
                        })}
                    </>
                )}

                {!hasSubsections && Array.isArray(section.content) && section.content.length > 1 && (
                    <ul className="legal-list">
                        {section.content.slice(1).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </section>
        );
    };

    return (
        <AuthLayout
            title="Terms of Service"
            description="Last updated: February 2026"
            onBackClick={handleBack}
        >
            <div className="legal-content">
                {termsOfServiceData.map((section) => renderContent(section))}
            </div>
        </AuthLayout>
    );
};

export default TermsOfService;

