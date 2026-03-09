import { useState } from 'react';
import { useStore } from '../store';
import { Search, Wrench, Snowflake, Cpu, Settings, Activity, Thermometer, ShoppingCart, Camera, Plus, Upload, RefreshCcw, Headset, Folder, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const { addToCart } = useStore();
    const [q1, setQ1] = useState(1);
    const [q2, setQ2] = useState(1);
    return (
        <div className="container" style={{ padding: '32px 24px' }}>
            {/* Hero Layer: Personalized Project Dashboard */}
            <div style={{ background: '#f4f7f9', padding: '32px', borderRadius: '8px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '20px', border: '1px solid #e0e4e8' }}>

                {/* Top Section: Power Actions & Live Activity Feed */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 450px', gap: '24px', alignItems: 'stretch' }}>

                    {/* Left: Command Center */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 style={{ fontSize: '32px', marginBottom: '8px', lineHeight: 1.2, color: '#0f172a' }}>Your Procurement Command Center</h1>
                        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '24px', maxWidth: '90%' }}>Manage site-specific quotes, verify fitment, and access technical support in one place.</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {/* Card 1 */}
                            <button className="btn btn-primary" style={{ height: 'auto', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'left', borderRadius: '4px' }}>
                                <div style={{ marginTop: '2px' }}>
                                    <Upload size={20} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>Upload Bulk BOM</span>
                                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>Excel, CSV, or PDF.</span>
                                </div>
                            </button>
                            {/* Card 2 */}
                            <button className="btn" style={{ height: 'auto', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'left', background: 'white', border: '1px solid #e0e4e8', borderRadius: '4px' }}>
                                <div style={{ color: 'var(--color-blue)', marginTop: '2px' }}>
                                    <Search size={20} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '4px' }}>Part Cross-Reference</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Cross-reference OEM parts.</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right: Project Updates Widget */}
                    <div className="card" style={{ background: 'white', display: 'flex', flexDirection: 'column', padding: '20px', border: '1px solid #e0e4e8', borderRadius: '4px', boxShadow: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '1px solid #e0e4e8', paddingBottom: '12px' }}>
                            <Activity size={18} color="var(--color-blue)" />
                            <h2 style={{ fontSize: '16px', margin: 0, color: '#0f172a' }}>Project Updates</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                            {/* Item 1 */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', background: '#fafafa', borderRadius: '4px', border: '1px solid #e0e4e8' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-main)' }}>Quote #4402</span>
                                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Ready for Review (2h ago)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '10px', padding: '2px 6px', background: '#dcfce7', color: '#166534', borderRadius: '12px', fontWeight: 'bold' }}>Ready</span>
                                    <Link to="/" style={{ fontSize: '12px', color: 'var(--color-blue)', fontWeight: 'bold', textDecoration: 'none' }}>[View PDF]</Link>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', background: '#fafafa', borderRadius: '4px', border: '1px solid #e0e4e8' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-main)' }}>Shipment #881</span>
                                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Out for Delivery (Rabale Site)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '10px', padding: '2px 6px', background: '#dbeafe', color: '#1e40af', borderRadius: '12px', fontWeight: 'bold' }}>In Transit</span>
                                    <Link to="/" style={{ fontSize: '12px', color: 'var(--color-blue)', fontWeight: 'bold', textDecoration: 'none' }}>[Track]</Link>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', background: '#fafafa', borderRadius: '4px', border: '1px solid #e0e4e8' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-main)' }}>Draft Enquiry</span>
                                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Saved (10 March)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '10px', padding: '2px 6px', background: '#fef3c7', color: '#92400e', borderRadius: '12px', fontWeight: 'bold' }}>Saved</span>
                                    <Link to="/checkout" style={{ fontSize: '12px', color: 'var(--color-blue)', fontWeight: 'bold', textDecoration: 'none' }}>[Resume]</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Engineer on Call Bar */}
                <div style={{ background: '#0f172a', padding: '12px 20px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', marginTop: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Headset size={18} color="var(--color-blue)" />
                        <span style={{ fontSize: '13px', fontWeight: '500' }}>Need technical validation for a quote? Talk to an Owsem Engineer:</span>
                    </div>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--color-blue)', fontFamily: 'monospace' }}>+91-XXXX-XXXXXX</span>
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
