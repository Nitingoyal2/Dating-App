import { useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '@components/AuthLayout';
import { privacyPolicyData } from '@/data';
import { Routes } from '@/types';
import type { PrivacySection } from '@interfaces';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
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

    const renderContent = (section: PrivacySection) => {
        const hasSubsections = section.subsections && section.subsections.length > 0;
        const mainContent = section.content
            ? (Array.isArray(section.content) ? section.content : [section.content])
            : [];
        const hasMainContent = mainContent.length > 0 && mainContent[0] !== '';

        return (
            <section key={section.title} className="legal-section">
                <h2 className="legal-section-title">{section.title}</h2>

                {/* Main content (paragraphs) */}
                {hasMainContent && (
                    <>
                        {mainContent.map((text, index) => {
                            if (text === '') return null;
                            return (
                                <p key={index} className="legal-text">
                                    {text}
                                </p>
                            );
                        })}
                    </>
                )}

                {/* Subsections */}
                {hasSubsections && (
                    <>
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
                                                {subsection.content.map((item, itemIndex) => {
                                                    // Check if item contains bold text (format: "Bold text: regular text")
                                                    const colonIndex = item.indexOf(':');
                                                    if (colonIndex > 0 && colonIndex < item.length - 1) {
                                                        const boldPart = item.substring(0, colonIndex);
                                                        const regularPart = item.substring(colonIndex + 1).trim();
                                                        return (
                                                            <li key={itemIndex}>
                                                                <strong>{boldPart}:</strong> {regularPart}
                                                            </li>
                                                        );
                                                    }
                                                    return <li key={itemIndex}>{item}</li>;
                                                })}
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

                {/* If no subsections and content is an array with multiple items, render as list */}
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
            title="Privacy Policy"
            description="Last updated: February 2026"
            onBackClick={handleBack}
        >
            <div className="legal-content">
                {privacyPolicyData.map((section) => renderContent(section))}
            </div>
        </AuthLayout>
    );
};

export default PrivacyPolicy;

