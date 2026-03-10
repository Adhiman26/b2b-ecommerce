import { useState } from 'react';
import { useStore } from '../store';
import { ShoppingCart, CheckCircle, FileText, Download, Shield, AlertTriangle, PenTool, Copy, Folder, Maximize, RotateCcw, Settings, X, Printer, Search, Award, FileArchive, Globe, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PDP() {
    const { addToCart } = useStore();
    const [qty, setQty] = useState(1);
    const [serial, setSerial] = useState('');
    const [fitMatch, setFitMatch] = useState(null);

    // UI Interaction States
    const [isDocDrawerOpen, setIsDocDrawerOpen] = useState(false);
    const [isPartsModalOpen, setIsPartsModalOpen] = useState(false);
    const [isComplianceDrawerOpen, setIsComplianceDrawerOpen] = useState(false);

    // Hero Image States
    const [activeHeroTransform, setActiveHeroTransform] = useState('scaleX(1)');

    const part = {
        id: 1,
        sku: 'COP-ZPS51K5',
        name: 'Copeland Scroll 5-Ton R-410A Compressor',
        price: 68500.00,
        oem: 'Copeland',
        stock: 14,
        location: 'Rabale MIDC Warehouse',
        cutoff: '2 PM',
        specs: [
            { k: 'Tonnage', v: '5 Ton' },
            { k: 'Refrigerant', v: 'R-410A' },
            { k: 'Voltage', v: '208/230V' },
            { k: 'Phase', v: '1-Phase' },
            { k: 'SEER2 Rating', v: 'Up to 18' },
            { k: 'Rated Load Amps', v: '19.8 RLA' },
            { k: 'Locked Rotor Amps', v: '109.0 LRA' },
            { k: 'Cooling Capacity', v: '51,000 BTU/h' },
            { k: 'Suction Connection', v: '7/8" Stub' },
            { k: 'Liquid Connection', v: '1/2" Stub' },
            { k: 'Oil Type', v: 'POE' },
            { k: 'Dimensions', v: '9.69" x 9.69" x 16.92"' },
            { k: 'Dry Weight', v: '84.5 lbs' },
            { k: 'Warranty', v: '10-Year Limited' }
        ]
    };

    const checkFit = () => {
        if (!serial) return;
        setFitMatch('checking');
        setTimeout(() => {
            setFitMatch(serial.includes('29') ? 'verified' : 'mismatch');
        }, 800);
    };

    return (
        <div className="container" style={{ padding: '32px 24px' }}>
            <div className="grid-2" style={{ gridTemplateColumns: '60% 40%', gap: '32px', alignItems: 'start' }}>

                {/* Left Column: Visuals & Documents */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    {/* NEW Header Identity Block (Matches Ferguson) */}
                    <div>
                        <div style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '13px' }}>
                            <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>HVAC</Link> &raquo; <Link to="/plp" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Compressors</Link> &raquo; <Link to="/plp" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Scroll</Link> &raquo; <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Copeland</span>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                            <img src="https://placehold.co/80x40/1e293b/ffffff?text=Copeland" alt="OEM" style={{ borderRadius: '2px' }} />
                        </div>
                        <h1 style={{ fontSize: '28px', marginBottom: '16px', lineHeight: 1.2 }}>{part.name}</h1>
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '16px', fontSize: '13px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>Mfr Part #:</span>
                                <span style={{ fontWeight: 'bold' }}>ZPS51K5E-PFV-830</span>
                                <button style={{ color: 'var(--color-blue)', padding: '2px', background: 'none', border: 'none', cursor: 'pointer' }} title="Copy Manufacturer Part Number" onClick={() => alert('Copied!')}><Copy size={14} /></button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>Osem SKU:</span>
                                <span style={{ fontWeight: 'bold' }}>{part.sku}</span>
                                <button style={{ color: 'var(--color-blue)', padding: '2px', background: 'none', border: 'none', cursor: 'pointer' }} title="Copy Osem SKU" onClick={() => alert('Copied!')}><Copy size={14} /></button>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', boxShadow: 'none' }}>
                        {/* Main Product Image */}
                        <div style={{ width: '100%', minHeight: '400px', background: 'white', border: '1px solid var(--color-border)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '16px', overflow: 'hidden' }}>
                            <div
                                style={{ width: '100%', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'zoom-in' }}
                                onMouseMove={(e) => {
                                    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                                    const x = (e.clientX - left) / width * 100;
                                    const y = (e.clientY - top) / height * 100;
                                    const img = e.currentTarget.querySelector('img');
                                    if (!img) return;

                                    // Combine active perspective transform with zoom scale and translate origin
                                    img.style.transformOrigin = `${x}% ${y}%`;
                                    img.style.transform = `${activeHeroTransform} scale(2)`;
                                }}
                                onMouseLeave={(e) => {
                                    const img = e.currentTarget.querySelector('img');
                                    if (!img) return;
                                    img.style.transformOrigin = 'center center';
                                    img.style.transform = activeHeroTransform;
                                }}
                            >
                                <img
                                    src="/copeland_scroll_thumbnail_1772967496730.png"
                                    alt="Product Zoom"
                                    style={{ width: 'auto', height: '100%', maxHeight: '350px', objectFit: 'contain', transition: 'transform 0.2s ease-out', pointerEvents: 'none', transform: activeHeroTransform }}
                                />
                            </div>
                            <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'white', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '8px', display: 'flex', gap: '8px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', zIndex: 10, pointerEvents: 'none' }}>
                                <Maximize size={16} color="var(--text-main)" /> <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Hover to Zoom</span>
                            </div>
                        </div>
                        {/* Thumbnail Strip */}
                        <div style={{ display: 'flex', gap: '12px', width: '100%', overflowX: 'auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }} onClick={() => setActiveHeroTransform('scaleX(1)')}>
                                <div style={{ width: '80px', height: '80px', border: activeHeroTransform === 'scaleX(1)' ? '2px solid var(--color-blue)' : '1px solid var(--color-border)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                                    <img src="/copeland_scroll_thumbnail_1772967496730.png" alt="Thumb" style={{ maxWidth: '60px', maxHeight: '60px' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }} onClick={() => setActiveHeroTransform('scaleX(-1)')}>
                                <div style={{ width: '80px', height: '80px', border: activeHeroTransform === 'scaleX(-1)' ? '2px solid var(--color-blue)' : '1px solid var(--color-border)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                                    <img src="/copeland_scroll_thumbnail_1772967496730.png" alt="Side View" style={{ maxWidth: '60px', maxHeight: '60px', transform: 'scaleX(-1)' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }} onClick={() => alert('Loading 360° Interactive Viewer...')}>
                                <div style={{ width: '80px', height: '80px', border: '1px solid var(--color-border)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--color-blue)'} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--color-border)'}>
                                    <RotateCcw size={24} color="var(--text-secondary)" />
                                </div>
                                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 'bold' }}>360° View</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }} onClick={() => setIsDocDrawerOpen(true)}>
                                <div style={{ width: '80px', height: '80px', border: '1px solid var(--color-border)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--color-blue)'} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--color-border)'}>
                                    <FileText size={24} color="var(--color-blue)" />
                                </div>
                                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Spec Sheet</span>
                            </div>
                        </div>
                    </div>

                    {/* CRITICAL: Technical Data & Resources (Data First Hierarchy) */}
                    <div className="card">

                        {/* 1. Technical Specifications Grid */}
                        <div className="card-header" style={{ padding: '16px 24px', borderBottom: '1px solid var(--color-border)' }}>
                            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Technical Specifications</h2>
                        </div>
                        <div className="card-body" style={{ padding: 0 }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <tbody>
                                    {part.specs.map((s, idx) => (
                                        <tr key={s.k} style={{ borderBottom: idx !== part.specs.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                                            <td style={{ fontWeight: 400, color: 'var(--text-secondary)', padding: '12px 24px', background: '#f8fafc', width: '40%', borderRight: '1px solid var(--color-border)' }}>{s.k}</td>
                                            <td style={{ fontWeight: 800, color: 'black', padding: '12px 24px' }}>{s.v}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* 2. Visual Separation + Resource & Parts Row */}
                        <div style={{ padding: '32px 24px', background: '#f8fafc', borderTop: '1px solid var(--color-border)' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>Resources & Parts</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>

                                {/* Card 1: Document Library */}
                                <div
                                    style={{ background: 'white', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
                                    onMouseOver={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,113,227,0.15)'; e.currentTarget.style.borderColor = 'var(--color-blue)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                                    onMouseOut={e => { e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
                                    onClick={() => setIsDocDrawerOpen(true)}
                                >
                                    <FileText size={32} color="var(--color-blue)" style={{ pointerEvents: 'none' }} />
                                    <strong style={{ fontSize: '14px', color: 'var(--text-main)', pointerEvents: 'none' }}>Document Library</strong>
                                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', pointerEvents: 'none' }}>Download SDS & Manuals</div>
                                </div>

                                {/* Card 2: Repair Parts */}
                                <div
                                    style={{ background: 'white', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
                                    onMouseOver={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,113,227,0.15)'; e.currentTarget.style.borderColor = 'var(--color-blue)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                                    onMouseOut={e => { e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
                                    onClick={() => setIsPartsModalOpen(true)}
                                >
                                    <Settings size={32} color="var(--color-blue)" style={{ pointerEvents: 'none' }} />
                                    <strong style={{ fontSize: '14px', color: 'var(--text-main)', pointerEvents: 'none' }}>Repair Parts</strong>
                                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', pointerEvents: 'none' }}>View Internal Components</div>
                                </div>

                                {/* Card 3: Compliance */}
                                <div
                                    style={{ background: 'white', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
                                    onMouseOver={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,113,227,0.15)'; e.currentTarget.style.borderColor = 'var(--color-blue)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                                    onMouseOut={e => { e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
                                    onClick={() => setIsComplianceDrawerOpen(true)}
                                >
                                    <Shield size={32} color="var(--color-blue)" style={{ pointerEvents: 'none' }} />
                                    <strong style={{ fontSize: '14px', color: 'var(--text-main)', pointerEvents: 'none' }}>Compliance</strong>
                                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', pointerEvents: 'none' }}>Warranty & Certifications</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Right Column: Transactional & Technical Fit */}
                <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    {/* Compatibility Widget (Moved High Priority) */}
                    <div className="card">
                        <div className="card-header" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <Shield size={18} color="var(--text-main)" />
                            <h2 style={{ fontSize: '16px' }}>Does this fit my unit?</h2>
                        </div>
                        <div className="card-body">
                            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '16px' }}>Enter the Serial Number found on your condenser's data plate to verify OEM fit.</p>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input
                                    type="text"
                                    placeholder="Enter Unit Serial Number"
                                    value={serial}
                                    onChange={(e) => setSerial(e.target.value)}
                                    style={{ flex: 1 }}
                                />
                                <button className="btn btn-accent" onClick={checkFit}>Check Fit</button>
                            </div>

                            {fitMatch === 'checking' && (
                                <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--color-amber)', fontWeight: 'bold' }}>
                                    Querying manufacturer database...
                                </div>
                            )}
                            {fitMatch === 'verified' && (
                                <div style={{ marginTop: '16px', display: 'flex', gap: '8px', background: 'var(--color-green-light)', border: '1px solid var(--color-green)', padding: '12px', borderRadius: '4px' }}>
                                    <CheckCircle size={18} color="var(--color-green)" />
                                    <div>
                                        <strong style={{ color: 'var(--color-green)' }}>Guaranteed Compatibility – Ready for Quote</strong>
                                        <div style={{ fontSize: '12px', marginTop: '4px', color: 'var(--text-main)' }}>This part is verified to replace the OEM component in unit SN:{serial}.</div>
                                    </div>
                                </div>
                            )}
                            {fitMatch === 'mismatch' && (
                                <div style={{ marginTop: '16px', display: 'flex', gap: '8px', background: 'var(--color-red-light)', border: '1px solid var(--color-red)', padding: '12px', borderRadius: '4px' }}>
                                    <AlertTriangle size={18} color="var(--color-red)" />
                                    <div>
                                        <strong style={{ color: 'var(--color-red)' }}>Compatibility Warning</strong>
                                        <div style={{ fontSize: '12px', marginTop: '4px', color: 'var(--text-main)' }}>Part specifications do not match SN:{serial}.</div>
                                        <Link to="/" style={{ fontSize: '12px', fontWeight: 'bold' }}>Find Correct Part</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pricing & Cart Action Box - The Command Center */}
                    <div className="card" style={{ borderTop: '4px solid var(--color-blue)', padding: '24px' }}>

                        {/* Pricing */}
                        <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--color-border)' }}>
                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Pricing Tier: Standard Account</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                                <a href="#" style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1, color: 'var(--color-blue)', textDecoration: 'none' }}>Log in for Contract Pricing</a>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', paddingBottom: '4px' }}>
                                    Standard MSRP: ₹{(part.price * 1.35).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </div>
                            </div>
                        </div>

                        {/* Logistics Widget Split */}
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                            {/* Ship Option */}
                            <div style={{ flex: 1, padding: '12px', background: 'var(--bg-surface)', border: '1px solid var(--color-blue)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <input type="radio" name="delivery" defaultChecked style={{ accentColor: 'var(--color-blue)', marginTop: '2px' }} />
                                    <span>Ship to <strong>10001</strong></span>
                                </div>
                                <div style={{ paddingLeft: '22px' }}>
                                    <div style={{ fontSize: '13px', color: 'var(--color-blue)', fontWeight: 600 }}>Expected Wed, Mar 11</div>
                                </div>
                            </div>

                            {/* Pickup Option */}
                            <div style={{ flex: 1, padding: '12px', background: 'white', border: '1px solid var(--color-border)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <input type="radio" name="delivery" style={{ accentColor: 'var(--color-blue)', marginTop: '2px' }} />
                                    <span>Pick up at <strong>Rabale</strong></span>
                                </div>
                                <div style={{ paddingLeft: '22px' }}>
                                    <div style={{ color: 'var(--color-green)', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <CheckCircle size={14} /> 4 In Stock
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Assignment */}
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '8px' }}>Assign to Project/Job Name</label>
                            <input type="text" placeholder="e.g. Chiller Matrix Overhaul" style={{ width: '100%', height: '44px', padding: '0 12px', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '14px' }} />
                        </div>

                        {/* Add to Cart Array */}
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ width: '80px' }}>
                                <input type="number" min="1" value={qty} onChange={(e) => setQty(Number(e.target.value))} style={{ height: '52px', fontSize: '18px', fontWeight: 'bold', width: '100%', textAlign: 'center', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <button
                                    className="btn btn-primary"
                                    style={{ width: '100%', height: '52px', fontSize: '16px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                    onClick={() => { addToCart(part, qty); alert('Added to Quote Request successfully.') }}
                                >
                                    <FileText size={20} /> Add to Quote Request
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="btn btn-secondary" style={{ flex: 1, padding: '0 12px', height: '44px', fontSize: '13px', fontWeight: 'bold', color: 'var(--text-main)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', border: '1px solid var(--color-border)', background: 'transparent', cursor: 'pointer' }} onClick={() => alert('Downloading PDF Spec Sheet...')}>
                                <Download size={16} /> Download PDF Quote
                            </button>
                            <button className="btn btn-secondary" style={{ flex: 1, padding: '0 12px', height: '44px', fontSize: '13px', fontWeight: 'bold', color: 'var(--text-main)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', border: '1px solid var(--color-border)', background: 'transparent', cursor: 'pointer' }} onClick={() => alert('Saved to Project List')}>
                                <Folder size={16} /> Save to Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Document Library Side Drawer --- */}
            {isDocDrawerOpen && (
                <>
                    <div
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)', zIndex: 1000 }}
                        onClick={() => setIsDocDrawerOpen(false)}
                    />
                    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '480px', backgroundColor: 'white', zIndex: 1001, boxShadow: '-4px 0 24px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', transform: 'translateX(0)', transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>

                        {/* Drawer Header */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', borderBottom: '1px solid var(--color-border)', backgroundColor: '#f8fafc' }}>
                            <div>
                                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '4px' }}>Technical Documents</h3>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>for COP-ZPS51K5</p>
                            </div>
                            <button
                                onClick={() => setIsDocDrawerOpen(false)}
                                style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Drawer Content Area */}
                        <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: 'white' }}>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <div style={{ background: '#eff6ff', padding: '8px', borderRadius: '4px' }}>
                                            <FileText size={20} color="var(--color-blue)" />
                                        </div>
                                        <div>
                                            <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block' }}>Installation & Operation Manual.pdf</strong>
                                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>2.4 MB • Updated: Jan 2026</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button title="Print" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}><Printer size={18} /></button>
                                        <button title="Download" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-blue)' }}><Download size={18} /></button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: 'white' }}>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <div style={{ background: '#fffbeb', padding: '8px', borderRadius: '4px' }}>
                                            <AlertTriangle size={20} color="var(--color-amber)" />
                                        </div>
                                        <div>
                                            <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block' }}>SDS Safety Sheet.pdf</strong>
                                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>850 KB • OSHA Compliant</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button title="Print" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}><Printer size={18} /></button>
                                        <button title="Download" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-blue)' }}><Download size={18} /></button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: 'white' }}>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <div style={{ background: '#f8fafc', padding: '8px', borderRadius: '4px' }}>
                                            <FileText size={20} color="var(--text-main)" />
                                        </div>
                                        <div>
                                            <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block' }}>Performance Curves.csv</strong>
                                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>420 KB • Raw Data Export</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button title="Print" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}><Printer size={18} /></button>
                                        <button title="Download" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-blue)' }}><Download size={18} /></button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: 'white' }}>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <div style={{ background: '#f0fdf4', padding: '8px', borderRadius: '4px' }}>
                                            <Shield size={20} color="var(--color-green)" />
                                        </div>
                                        <div>
                                            <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block' }}>Warranty Policy.pdf</strong>
                                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>1.1 MB • Valid till: Dec 2036</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button title="Print" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}><Printer size={18} /></button>
                                        <button title="Download" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-blue)' }}><Download size={18} /></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* --- Compliance Drawer Component --- */}
            {isComplianceDrawerOpen && (
                <>
                    <div
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)', zIndex: 1000 }}
                        onClick={() => setIsComplianceDrawerOpen(false)}
                    />
                    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '480px', backgroundColor: 'white', zIndex: 1001, boxShadow: '-4px 0 24px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', transform: 'translateX(0)', transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>

                        {/* Drawer Header */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', borderBottom: '1px solid var(--color-border)', backgroundColor: '#f8fafc' }}>
                            <div>
                                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '4px' }}>Compliance & Standards</h3>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>for COP-ZPS51K5</p>
                            </div>
                            <button
                                onClick={() => setIsComplianceDrawerOpen(false)}
                                style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Drawer Content Area */}
                        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>

                            {/* Section 1: Certifications */}
                            <div>
                                <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Certifications</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: 'white' }}>
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                            <div style={{ background: '#f0fdf4', padding: '8px', borderRadius: '4px' }}>
                                                <Award size={20} color="var(--color-green)" />
                                            </div>
                                            <div>
                                                <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block' }}>ISO 9001:2015 Certified</strong>
                                                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Quality Management System</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: 'white' }}>
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                            <div style={{ background: '#eff6ff', padding: '8px', borderRadius: '4px' }}>
                                                <CheckCircle size={20} color="var(--color-blue)" />
                                            </div>
                                            <div>
                                                <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block' }}>UL Listed</strong>
                                                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Underwriters Laboratories Safety Std.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: 'white' }}>
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                            <div style={{ background: '#fffbeb', padding: '8px', borderRadius: '4px' }}>
                                                <Award size={20} color="var(--color-amber)" />
                                            </div>
                                            <div>
                                                <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block' }}>BEE Star Rating: 5 Stars</strong>
                                                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Energy Efficiency Standard</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Warranty Status */}
                            <div>
                                <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Warranty Status</h4>
                                <div style={{ padding: '20px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'white', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                        <Shield size={24} color="var(--color-blue)" />
                                    </div>
                                    <div>
                                        <strong style={{ fontSize: '15px', color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>Standard Manufacturer Warranty</strong>
                                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-blue)', marginBottom: '8px' }}>2 Years</div>
                                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '0 0 12px 0', lineHeight: 1.4 }}>Covers major compressor components against manufacturing defects under normal specified usage.</p>
                                        <a href="#" style={{ fontSize: '13px', color: 'var(--color-blue)', fontWeight: 'bold', textDecoration: 'none' }}>View Extended Protection Plans &rarr;</a>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Country of Origin */}
                            <div>
                                <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Origin Information</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: '#f8fafc' }}>
                                    <Globe size={20} color="var(--text-main)" />
                                    <div>
                                        <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block' }}>Country of Origin: India</strong>
                                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Meets Make In India Requisition Guidelines</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Footer */}
                        <div style={{ padding: '24px', borderTop: '1px solid var(--color-border)', backgroundColor: 'white' }}>
                            <button className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', fontSize: '15px' }} onClick={() => { alert('Downloading full compliance ZIP package...'); setIsComplianceDrawerOpen(false); }}>
                                <FileArchive size={18} /> Download Full Compliance Package (ZIP)
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* --- Repair Parts Modal Component --- */}
            {isPartsModalOpen && (
                <>
                    <div
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(3px)', zIndex: 2000 }}
                        onClick={() => setIsPartsModalOpen(false)}
                    />
                    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', zIndex: 2001, borderRadius: '8px', width: '900px', maxWidth: '95vw', maxHeight: '90vh', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                        <div style={{ padding: '24px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>Repair Parts Diagram</h3>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Hover over markers to view component details and prices.</p>
                            </div>
                            <button onClick={() => setIsPartsModalOpen(false)} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <X size={20} color="var(--text-main)" />
                            </button>
                        </div>

                        <div style={{ padding: '32px', flex: 1, backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                            <img src="/compressor_exploded_view.png" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} alt="Exploded Parts View" />

                            {/* Interactive Hotspot 1 */}
                            <div className="hotspot" style={{ position: 'absolute', top: '30%', left: '40%' }}>
                                <div style={{ width: '28px', height: '28px', background: 'var(--color-blue)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 0 4px rgba(0,113,227,0.3)' }}>1</div>
                                <div className="hotspot-tooltip" style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: 'white', padding: '8px 12px', borderRadius: '4px', whiteSpace: 'nowrap', fontSize: '13px', display: 'none', pointerEvents: 'none' }}>
                                    <strong>Internal Pressure Relief Valve</strong><br />
                                    <span style={{ color: '#94a3b8' }}>OEM Part: 940-0012-00 • ₹2,400</span>
                                </div>
                            </div>

                            {/* Interactive Hotspot 2 */}
                            <div className="hotspot" style={{ position: 'absolute', top: '55%', left: '55%' }}>
                                <div style={{ width: '28px', height: '28px', background: 'var(--color-blue)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 0 4px rgba(0,113,227,0.3)' }}>2</div>
                                <div className="hotspot-tooltip" style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: 'white', padding: '8px 12px', borderRadius: '4px', whiteSpace: 'nowrap', fontSize: '13px', display: 'none', pointerEvents: 'none' }}>
                                    <strong>Scroll Set Bearing Assembly</strong><br />
                                    <span style={{ color: '#94a3b8' }}>OEM Part: 810-1422-99 • ₹14,500</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '24px', borderTop: '1px solid var(--color-border)', paddingRight: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}><span style={{ color: 'var(--color-blue)', fontWeight: 'bold' }}>2</span> compatible components identified in diagram.</div>
                            <button className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '15px' }} onClick={() => { alert('Added 2 components to Enquiry List.'); setIsPartsModalOpen(false); }}>
                                Add Selected Parts for Enquiry
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Engineer Chat Floating Widget */}
            <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1000 }}>
                <button
                    style={{ backgroundColor: '#1e293b', color: 'white', border: 'none', borderRadius: '32px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer', transition: 'transform 0.2s', outline: 'none' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                    onClick={() => alert('Initiating secure chat with Systems Engineer...')}
                >
                    <MessageCircle size={20} /> Ask an Engineer
                </button>
            </div>

            {/* Sub-components styles injected locally for simplicity */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hotspot:hover .hotspot-tooltip {
                    display: block !important;
                    z-index: 100;
                }
            `}} />
        </div>
    );
}
