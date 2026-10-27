import { useState } from 'react';
import { siteConfig } from './config';

const letters = ['t','e','a','c','h','e','r','s'];
const colors = ['#C97C5D','#7FA7C9','#E5B94B','#A8C3A0','#C97C5D','#7FA7C9','#A8C3A0','#E5B94B'];

function Wordmark() { return <a className="brand" href="/" aria-label="Teacher Tradepost home"><img src="/Teacher.png" alt="Teacher Tradepost" onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.insertAdjacentText("afterend", "Teacher Tradepost"); }} /></a>; }
function Action({ href, children, variant = 'solid' }: { href: string; children: React.ReactNode; variant?: 'solid' | 'outline' }) { return href ? <a className={`button ${variant}`} href={href} target="_blank" rel="noopener noreferrer">{children}</a> : <span className={`button ${variant} disabled`} aria-disabled="true" title="Link coming soon">{children}<span className="button-note">(coming soon)</span></span>; }
function Icon({ type }: { type: 'discover'|'trade'|'locker' }) { return <span className={`feature-icon ${type}`} aria-hidden="true">{type === 'discover' ? '⌕' : type === 'trade' ? '⇄' : '▤'}</span>; }

function PrivacyPage() {
 return <><header className="site-header"><div className="container header-inner"><Wordmark /><a className="privacy-back" href="/">← Back to Teacher Tradepost</a></div></header>
 <main className="privacy-main"><article className="container privacy-document">
 <p className="eyebrow">TEACHER TRADEPOST · COMING SOON</p>
 <h1>Privacy Policy</h1><p className="privacy-updated">Effective October 27, 2026</p>
 <p>Teacher Tradepost is a developing educational-resource marketplace operated by Hoot Happens LLC. This policy explains how information is handled through our public coming-soon website, interest forms, and launch waitlist. The marketplace is not yet open for purchases or seller accounts through this website.</p>
 <h2>Information we collect</h2>
 <p>When you join our waitlist, we collect the email address you submit and any optional information you choose to provide. If you complete our “Share Your Ideas” form, we receive the responses and any contact information you provide. Services supporting the website and forms may also process technical information, such as IP address, device/browser details, timestamps, and security logs.</p>
 <h2>How we use information</h2>
 <p>We use your information to manage the waitlist, send requested launch announcements and occasional Teacher Tradepost news, review educator feedback, answer inquiries, maintain the website, and help prevent misuse. You may unsubscribe from marketing emails at any time using the link in those messages.</p>
 <h2>Services we use</h2>
 <p>Our website is hosted through Cloudflare. Our early interest forms use Google Forms, and we are transitioning the waitlist to MailerLite for email subscriptions and announcements. Zoho Mail is used for business correspondence. These providers process information to deliver their services under their own applicable privacy terms. The forms you use may be hosted directly by these providers.</p>
 <h2>Sharing and protection</h2>
 <p>We do not intend to sell waitlist email addresses or use them to send unrelated third-party promotions. Information may be shared with providers helping operate the website and communications, or disclosed when required by law or necessary to address security or legal concerns. We use reasonable measures to safeguard information, but no online service can guarantee absolute security.</p>
 <h2>Retention and your choices</h2>
 <p>We retain waitlist information while it is useful for requested updates, unless you unsubscribe or request deletion, subject to legal or operational retention requirements. Form responses may be retained to help plan Teacher Tradepost. You may request access, correction, or deletion of information you provided by emailing us. We will review requests and respond as required by applicable law.</p>
 <h2>Cookies and analytics</h2>
 <p>Our hosting and form providers may use cookies or similar technologies for security and essential operation. Additional analytics or marketing technologies, if introduced, will be reflected in an updated policy.</p>
 <h2>Children</h2>
 <p>Our waitlist is intended for educators and other adults, not children under 13. We do not knowingly seek personal information from children through these forms. Contact us if you believe a child has submitted personal information.</p>
 <h2>Changes to this policy</h2>
 <p>We may revise this policy as Teacher Tradepost develops. We will update the date above when we publish a revision. Before the full marketplace launches, we expect to expand the policy to address customer accounts, resource storage, purchases, and other services.</p>
 <h2>Contact us</h2>
 <p>For privacy questions or requests, email <a href="mailto:admin@teachertradepost.com">admin@teachertradepost.com</a>. Operator: Hoot Happens LLC (doing business as Teacher Tradepost).</p>
 <p className="privacy-disclaimer">This notice applies to the public coming-soon website and waitlist, not the future full marketplace.</p>
 <a className="button outline privacy-home-button" href="/">Return to Teacher Tradepost</a>
 </article></main><footer className="footer"><div className="container copyright">© {new Date().getFullYear()} Teacher Tradepost · <a href="/">Home</a> · <a href="/privacy">Privacy Policy</a></div></footer></>;
}

export default function App() {
 const [menuOpen, setMenuOpen] = useState(false);
 if (window.location.pathname.replace(/\\/$/, "") === "/privacy") return <PrivacyPage />;
 const closeMenu = () => setMenuOpen(false);
 return <>
  <header className="site-header"><div className="container header-inner"><Wordmark /><button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(v => !v)}>{menuOpen ? '✕' : '☰'}</button><nav id="site-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation"><a onClick={closeMenu} href="#home">Home</a><a onClick={closeMenu} href="#features">Features</a><a onClick={closeMenu} href="#about">About</a><div onClick={closeMenu}><Action href={siteConfig.joinWaitlistUrl}>Join Waitlist</Action></div></nav></div></header>
  <main id="home"><section className="hero"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">THE FUTURE OF TEACHER RESOURCES</span><h1>A better place for teaching resources starts with <span className="rainbow-word" aria-label="teachers">{letters.map((letter, i) => <span key={i} aria-hidden="true" style={{ color: colors[i] }}>{letter}</span>)}</span><span className="period">.</span></h1><p>Teacher Tradepost is a new marketplace where educators can discover, share, and organize teaching resources. I'm building this with teachers, for teachers, and your feedback will help shape the journey.</p><div className="hero-actions"><Action href={siteConfig.shareIdeasUrl}>Share Your Ideas</Action><Action href={siteConfig.joinWaitlistUrl} variant="outline">Join the Waitlist</Action></div><div className="hero-footnote">Thoughtfully created for the educators who do it all.</div></div></div></section>
  <section id="features" className="features section"><div className="container"><div className="section-intro"><h2>How Teacher Tradepost Works</h2><p>Everything you need, all in one thoughtful place.</p></div><div className="feature-grid"><article className="feature-card"><Icon type="discover" /><h3>Discover</h3><p>Find quality teaching resources designed to make classroom life easier.</p></article><article className="feature-card"><Icon type="trade" /><h3>Trade</h3><p>Share your creativity, support fellow educators, and earn from the resources you create.</p></article><article className="feature-card"><Icon type="locker" /><h3>Teacher Locker</h3><p>Keep your teaching resources organized and easy to access in one convenient place.</p></article></div></div></section>
  <section id="about" className="about section"><div className="container"><div className="difference"><h2>What Makes Teacher Tradepost Different?</h2><p className="difference-intro">Teacher Tradepost is being designed around one simple idea: giving educators more freedom, better experiences, and tools that make life easier.</p><div className="difference-grid"><div><h3>More Freedom for Sellers</h3><p>Greater flexibility, independence, and more opportunities to succeed as a resource creator.</p></div><div><h3>Better Experiences for Buyers</h3><p>A simpler, more enjoyable way to discover, purchase, and organize teaching resources.</p></div><div><h3>Less Unnecessary Work for Everyone</h3><p>Thoughtful tools and streamlined processes that help educators save valuable time.</p></div></div><p className="difference-quote">Because teaching is already hard enough. Finding, sharing, and managing resources shouldn't be.</p></div></div></section></main>
  <footer className="footer"><div className="container footer-inner"><div><Wordmark /><p>Made for educators, inspired by educators.</p></div><nav aria-label="Footer navigation"><a href="#home">Home</a><a href="#features">Features</a><a href="#about">About</a>{siteConfig.contactUrl ? <a href={siteConfig.contactUrl}>Contact</a> : <span title="Contact details coming soon">Contact (coming soon)</span>}<a href="/privacy">Privacy Policy</a></nav></div><div className="container copyright">© {new Date().getFullYear()} Teacher Tradepost. All rights reserved.</div></footer>
 </>;
}
