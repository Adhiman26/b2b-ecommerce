import { useState } from 'react';
import { Download, CheckCircle, AlertTriangle, ChevronRight, BarChart } from 'lucide-react';

export default function PDP() {
    const [serial, setSerial] = useState('CR-2900-XX');
    const [checking, setChecking] = useState(false);
    const [match, setMatch] = useState(null);

    const checkCompatibility = () => {
        setChecking(true);
        setTimeout(() => {
            setChecking(false);
            setMatch(serial.includes('2900') ? 'success' : 'fail');
        }, 1200);
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '13px' }}>
                <span>Catalog</span>
                <ChevronRight size={14} />
                <span>Compressors</span>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--text-main)', fontWeight: '500' }}>Copeland Scroll 5-Ton 230V</span>
            </div>

            <div className="sidebar-layout">
                <div className="main-col">
                    <div className="card" style={{ marginBottom: '24px' }}>
                        <div className="card-header">
                            <h2>Technical Specs & Diagnostics</h2>
                        </div>
                        <div className="card-body">
                            <div className="exploded-view" style={{ aspectRatio: '21/9', backgroundImage: 'url("https://placehold.co/1200x500/1e293b/ffffff?text=Vector+Schematic+Copeland+CS-5T")' }}>
                                <div className="hotspot" style={{ top: '35%', left: '50%' }}>A</div>
                                <div className="hotspot" style={{ top: '65%', left: '40%' }}>B</div>
                                <div className="hotspot" style={{ top: '50%', left: '70%' }}>C</div>
                            </div>

                            <div className="tech-spec-grid" style={{ marginTop: '24px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                                <div className="spec-label">Voltage</div>
                                <div>208/230V 1-Phase</div>

                                <div className="spec-label">Refrigerant</div>
                                <div>R-410A</div>

                                <div className="spec-label">SEER2 Rating</div>
                                <div>Up to 18 SEER2 Compatible</div>

                                <div className="spec-label">Connection Size</div>
                                <div>7/8" Suction, 1/2" Liquid</div>

                                <div className="spec-label">Weight</div>
                                <div>84.5 lbs (Dry weight)</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2>Verified Compatibility Engine</h2>
                        </div>
                        <div className="card-body">
                            <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Check part compatibility against client unit before ordering.</p>
                            <div className="compatibility-checker">
                                <input
                                    type="text"
                                    value={serial}
                                    onChange={(e) => setSerial(e.target.value)}
                                    placeholder="Scan or Enter Unit Serial Number..."
                                />
                                <button className="btn btn-primary" onClick={checkCompatibility} disabled={checking}>
                                    {checking ? 'Checking System DB...' : 'Run Diagnostics Check'}
                                </button>
                            </div>

                            {match === 'success' && (
                                <div style={{ background: 'var(--color-green-light)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <CheckCircle color="var(--color-green)" size={24} />
                                    <div>
                                        <strong style={{ color: 'var(--color-green)', display: 'block' }}>100% Match Verified</strong>
                                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>This compressor is the OEM replacement for {serial}.</span>
                                    </div>
                                </div>
                            )}
                            {match === 'fail' && (
                                <div style={{ background: 'var(--color-red-light)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <AlertTriangle color="var(--color-red)" size={24} />
                                    <div>
                                        <strong style={{ color: 'var(--color-red)', display: 'block' }}>Compatibility Warning: Mismatch</strong>
                                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>This part does not meet the SEER2 baseline for {serial}.</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="card">
                        <div className="card-body">
                            <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>Copeland Scroll 5-Ton</h1>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontFamily: 'monospace' }}>SKU: COP-ZPS51K5-PFV</p>

                            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                                <span className="badge badge-green">94 In Stock (Regional WH)</span>
                            </div>

                            <div style={{ background: 'var(--bg-canvas)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '12px' }}>Wholesale Price Tiers</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>1 - 4 units</span>
                                    <strong>$845.00 /ea</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>5 - 19 units</span>
                                    <strong>$795.00 /ea</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-green)' }}>
                                    <span>20+ units (Pallet)</span>
                                    <strong>$710.00 /ea</strong>
                                </div>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', marginBottom: '12px' }}>Add to Requisition</button>
                            <button className="btn btn-secondary" style={{ width: '100%' }}>Add to Compare List</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2>Compliance Vault Downloads</h2>
                        </div>
                        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
                                <Download size={16} /> Technical Spec Sheet (PDF)
                            </button>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
                                <Download size={16} /> Wiring Diagrams
                            </button>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
                                <Download size={16} /> Safety Data Sheet (SDS)
                            </button>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
                                <Download size={16} /> Manufacturer Warranty Terms
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
