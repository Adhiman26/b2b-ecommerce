import { useState } from 'react';
import { useStore } from '../store';
import { Search, Wrench, Snowflake, Cpu, Settings, Activity, Thermometer, ShoppingCart, Camera, Plus, Upload, RefreshCcw, Headset, Folder, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const { addToCart } = useStore();
    const [q1, setQ1] = useState(1);
    const [q2, setQ2] = useState(1);
    return (
        <div className="container" style={{ padding: '32px 24px' }}>
            {/* Hero Layer: Personalized Project Dashboard */}
            <div style={{ background: '#e2e8f0', padding: '32px', borderRadius: '8px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '20px', border: '1px solid #cbd5e1' }}>

                {/* Top Section: Power Actions & Live Activity Feed */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 450px', gap: '24px', alignItems: 'stretch' }}>

                    {/* Left: Command Center */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 style={{ fontSize: '32px', marginBottom: '8px', lineHeight: 1.2, color: '#0f172a' }}>Your Procurement Command Center</h1>
                        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '24px', maxWidth: '90%' }}>Manage site-specific quotes, verify fitment, and access technical support in one place.</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {/* Card 1 */}
                            <button className="btn btn-primary" style={{ height: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', textAlign: 'center', borderRadius: '6px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
                                <div>
                                    <Upload size={36} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '6px' }}>Bulk Requisition</span>
                                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.95)', lineHeight: 1.4 }}>Upload your Excel/PDF list for a consolidated quote.</span>
                                </div>
                            </button>
                            {/* Card 2 */}
                            <div className="card" style={{ padding: '20px 16px', background: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '15px', fontWeight: 'bold', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <RefreshCcw size={18} color="#475569" />
                                    Express Requisition
                                </label>
                                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>Reorder Standard Kits</span>
                                <div style={{ display: 'flex', marginTop: '4px' }}>
                                    <select style={{ flex: 1, padding: '10px 12px', borderRadius: '4px 0 0 4px', border: '1px solid #cbd5e1', borderRight: 'none', fontSize: '13px', outline: 'none', background: '#f8fafc', color: '#334155', appearance: 'none' }}>
                                        <option value="">Select Saved Kit...</option>
                                        <option value="1">Monthly Filter Kit - Hotel Hilton</option>
                                        <option value="2">Compressor Service Pack - Unit A</option>
                                    </select>
                                    <button className="btn btn-primary" style={{ padding: '0 16px', borderRadius: '0 4px 4px 0', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap', background: '#475569', color: 'white' }}>Add to Enquiry</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Project Updates Widget */}
                    <div className="card" style={{ background: 'white', display: 'flex', flexDirection: 'column', padding: '24px', border: '1px solid #e0e4e8', borderRadius: '6px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '1px solid #e0e4e8', paddingBottom: '12px' }}>
                            <Activity size={18} color="var(--color-blue)" />
                            <h2 style={{ fontSize: '16px', margin: 0, color: '#0f172a' }}>Project Updates</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, borderTop: '1px solid #e0e4e8', marginTop: '4px' }}>
                            {/* Item 1 */}
                            <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #e0e4e8', textDecoration: 'none', cursor: 'pointer' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#0f172a', fontFamily: 'monospace' }}>Ref: Hilt-AC-Q4</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span style={{ fontSize: '11px', padding: '4px 10px', background: '#d1fae5', color: '#059669', borderRadius: '4px', fontWeight: '900', letterSpacing: '0.5px' }}>READY</span>
                                    <ChevronRight size={18} color="#94a3b8" />
                                </div>
                            </a>

                            {/* Item 2 */}
                            <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #e0e4e8', textDecoration: 'none', cursor: 'pointer' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#0f172a', fontFamily: 'monospace' }}>Ref: MIDC-Unit-Trns</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span style={{ fontSize: '11px', padding: '4px 10px', background: '#dbeafe', color: '#1d4ed8', borderRadius: '4px', fontWeight: '900', letterSpacing: '0.5px' }}>IN TRANSIT</span>
                                    <ChevronRight size={18} color="#94a3b8" />
                                </div>
                            </a>

                            {/* Item 3 */}
                            <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid transparent', textDecoration: 'none', cursor: 'pointer' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#0f172a', fontFamily: 'monospace' }}>Ref: K-Line-Draft</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span style={{ fontSize: '11px', padding: '4px 10px', background: '#e2e8f0', color: '#334155', borderRadius: '4px', fontWeight: '900', letterSpacing: '0.5px' }}>DRAFT</span>
                                    <ChevronRight size={18} color="#94a3b8" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Engineer on Call Bar */}
                <div style={{ background: '#f1f5f9', padding: '16px 24px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#0f172a', marginTop: '12px', border: '1px solid #e0e4e8', boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Headset size={22} color="var(--text-main)" />
                        <span style={{ fontSize: '15px', fontWeight: '700' }}>Need a Custom Configuration? Talk to an Owsem Engineer: <span style={{ fontFamily: 'monospace' }}>+91-XXXX-XXXXXX</span></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#25D366', color: 'white', padding: '8px 16px', borderRadius: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                            </svg>
                            WhatsApp Connect
                        </a>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-blue)', fontFamily: 'monospace' }}>+91-XXXX-XXXXXX</span>
                    </div>
                </div>

                {/* Help & Documentation Quick Links */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '8px', fontSize: '13px', color: '#64748b' }}>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>Help & Documentation</a>
                    <span>•</span>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Integration Guides</a>
                    <span>•</span>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Warranty Claims</a>
                    <span>•</span>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>API Keys</a>
                </div>
            </div>

            {/* Industrial Icon Grid */}
            <h2 style={{ marginBottom: '16px' }}>Industrial Categories</h2>
            <div className="grid-3" style={{ marginBottom: '48px' }}>
                {/* Category Cards */}
                <Link to="/plp" className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: '100px', height: '100px', flexShrink: 0, background: 'transparent' }}>
                        <img src="/rtu_chiller_thumbnail_1772966538282.png" alt="Commercial Equipment" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} />
                    </div>
                    <div><h3 style={{ margin: 0 }}>Commercial Equipment</h3><span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Rooftops, Chillers</span></div>
                </Link>
                <Link to="/plp" className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: '100px', height: '100px', flexShrink: 0, background: 'transparent' }}>
                        <img src="/scroll_compressor_thumbnail_1772966553741.png" alt="Compressors" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} />
                    </div>
                    <div><h3 style={{ margin: 0 }}>Compressors</h3><span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Scroll, Reciprocating</span></div>
                </Link>
                <Link to="/plp" className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: '100px', height: '100px', flexShrink: 0, background: 'transparent' }}>
                        <img src="/ecm_motor_thumbnail_1772966572738.png" alt="Motors" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} />
                    </div>
                    <div><h3 style={{ margin: 0 }}>Motors</h3><span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>ECM, Condenser</span></div>
                </Link>
                <Link to="/plp" className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: '100px', height: '100px', flexShrink: 0, background: 'transparent' }}>
                        <img src="/refrigerant_cylinder_thumbnail_1772966588296.png" alt="Refrigerants" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} />
                    </div>
                    <div><h3 style={{ margin: 0 }}>Refrigerants</h3><span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>R-410A, R-32</span></div>
                </Link>
                <Link to="/plp" className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: '100px', height: '100px', flexShrink: 0, background: 'transparent' }}>
                        <img src="/manifold_gauge_thumbnail_1772966605751.png" alt="Tools & Test Info" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} />
                    </div>
                    <div><h3 style={{ margin: 0 }}>Tools & Test Info</h3><span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Gauges, Meters</span></div>
                </Link>
                <Link to="/plp" className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: '100px', height: '100px', flexShrink: 0, background: 'transparent' }}>
                        <img src="/smart_thermostat_thumbnail_1772966621908.png" alt="Controls & Sensors" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} />
                    </div>
                    <div><h3 style={{ margin: 0 }}>Controls & Sensors</h3><span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Thermostats, Relays, Boards</span></div>
                </Link>
            </div>

            {/* Predictive Replenishment Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ margin: 0 }}>Frequently Bought for Active Sites</h2>
                <Link to="/plp" style={{ fontSize: '14px', color: 'var(--color-blue)', fontWeight: 'bold', textDecoration: 'none' }}>View All Suggested Parts &rarr;</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>

                {/* Card 1 */}
                <div style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <div style={{ padding: '8px 12px', background: 'var(--bg-canvas)', borderBottom: '1px solid var(--color-border)', fontSize: '11px', fontWeight: 'bold', color: 'var(--text-secondary)' }}>
                        MATCHES TECH PARK TOWER B
                    </div>
                    <div style={{ height: '180px', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                        <img src="/merv_filter_thumbnail_1772966870436.png" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="Filter" />
                    </div>
                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, borderTop: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>FLT-0982</span>
                        <span style={{ fontSize: '14px', color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>MERV 13 Commercial Filter</span>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'monospace', marginBottom: '16px' }}>24x24x2 • High Capacity</span>

                        <div style={{ marginTop: 'auto' }}>
                            <button
                                className="btn"
                                style={{ width: '100%', background: 'white', border: '1px solid var(--color-blue)', color: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px' }}
                                onClick={() => { addToCart({ id: 101, sku: 'FLT-0982', name: 'MERV 13 Commercial Filter (24x24x2)', price: 1250.00, location: 'Primary Warehouse' }, 1); alert('Added to Quote') }}
                            >
                                <Plus size={16} /> Quick Add to Quote
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <div style={{ padding: '8px 12px', background: 'var(--bg-canvas)', borderBottom: '1px solid var(--color-border)', fontSize: '11px', fontWeight: 'bold', color: 'var(--text-secondary)' }}>
                        MATCHES RETAIL MALL UNIT 4
                    </div>
                    <div style={{ height: '180px', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                        <img src="/capacitor_thumbnail_1772966884487.png" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="Capacitor" />
                    </div>
                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, borderTop: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>CAP-455</span>
                        <span style={{ fontSize: '14px', color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>Dual Run Capacitor</span>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'monospace', marginBottom: '16px' }}>45/5 MFD • 440V</span>

                        <div style={{ marginTop: 'auto' }}>
                            <button
                                className="btn"
                                style={{ width: '100%', background: 'white', border: '1px solid var(--color-blue)', color: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px' }}
                                onClick={() => { addToCart({ id: 102, sku: 'CAP-455', name: 'Dual Run Capacitor 45/5 MFD 440V', price: 650.00, location: 'Primary Warehouse' }, 1); alert('Added to Quote') }}
                            >
                                <Plus size={16} /> Quick Add to Quote
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <div style={{ padding: '8px 12px', background: 'var(--bg-canvas)', borderBottom: '1px solid var(--color-border)', fontSize: '11px', fontWeight: 'bold', color: 'var(--text-secondary)' }}>
                        MATCHES MAIN DATA CENTER
                    </div>
                    <div style={{ height: '180px', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                        <img src="/copeland_scroll_thumbnail_1772967496730.png" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="Scroll Compressor" />
                    </div>
                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, borderTop: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>COP-ZPS51K5</span>
                        <span style={{ fontSize: '14px', color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>Scroll Compressor</span>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'monospace', marginBottom: '16px' }}>R-410A • 51,000 BTU</span>

                        <div style={{ marginTop: 'auto' }}>
                            <button
                                className="btn"
                                style={{ width: '100%', background: 'white', border: '1px solid var(--color-blue)', color: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px' }}
                                onClick={() => { addToCart({ id: 22, sku: 'COP-ZPS51K5', name: 'Copeland Scroll Compressor', price: 64700.00, location: 'Primary Warehouse' }, 1); alert('Added to Quote') }}
                            >
                                <Plus size={16} /> Quick Add to Quote
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <div style={{ padding: '8px 12px', background: 'var(--bg-canvas)', borderBottom: '1px solid var(--color-border)', fontSize: '11px', fontWeight: 'bold', color: 'var(--text-secondary)' }}>
                        MATCHES TECH PARK TOWER B
                    </div>
                    <div style={{ height: '180px', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                        <img src="/manifold_gauge_thumbnail_1772966605751.png" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="Manifold Gauge" />
                    </div>
                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, borderTop: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>YM-T48</span>
                        <span style={{ fontSize: '14px', color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>Manifold Gauge Set</span>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'monospace', marginBottom: '16px' }}>4-Valve • R-410A / R-22</span>

                        <div style={{ marginTop: 'auto' }}>
                            <button
                                className="btn"
                                style={{ width: '100%', background: 'white', border: '1px solid var(--color-blue)', color: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px' }}
                                onClick={() => { addToCart({ id: 104, sku: 'YM-T48', name: 'Manifold Gauge Set', price: 9500.00, location: 'Primary Warehouse' }, 1); alert('Added to Quote') }}
                            >
                                <Plus size={16} /> Quick Add to Quote
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
