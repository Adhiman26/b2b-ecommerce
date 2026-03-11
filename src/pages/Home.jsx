
import { useStore } from '../store';
import { Search, Wrench, Snowflake, Cpu, Settings, Activity, Thermometer, ShoppingCart, Camera, Plus, Upload, RefreshCcw, Headset, Folder, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const { addToCart } = useStore();
    return (
        <div className="container hero-container" style={{ padding: '32px 24px' }}>
            {/* Hero Layer: Personalized Project Dashboard */}
            {/* Hero Layer: Symmetrical Control Panel */}
            <div className="hero-block" style={{ 
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
                padding: '32px', 
                borderRadius: '12px', 
                marginBottom: '32px', 
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-sm)'
            }}>
                <div style={{ marginBottom: '24px' }}>
                    <h1 style={{ fontSize: '28px', marginBottom: '4px', letterSpacing: '-0.02em', color: '#0f172a' }}>Procurement Command Center</h1>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>Unified interface for rapid requisition, status auditing, and engineering support.</p>
                </div>

                {/* Triple-Threat Action Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'stretch' }}>
                    
                    {/* Card 1: Bulk Requisition */}
                    <button className="btn-primary" style={{ 
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
                        gap: '16px', padding: '32px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                        background: 'var(--color-blue)', color: 'white', transition: 'transform 0.2s, box-shadow 0.2s'
                    }}>
                        <Upload size={40} strokeWidth={2.5} />
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Bulk Requisition</div>
                            <div style={{ fontSize: '12px', opacity: 0.9, lineHeight: 1.4 }}>Upload Excel/PDF BOM for consolidated pricing</div>
                        </div>
                    </button>

                    {/* Card 2: Express Requisition */}
                    <div className="card" style={{ 
                        padding: '24px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1',
                        display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155' }}>
                            <RefreshCcw size={20} strokeWidth={2.5} />
                            <span style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Express Requisition</span>
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Fast-track standard maintenance kits</div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <select style={{ flex: 1, padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', background: '#f8fafc' }}>
                                <option value="">Select Kit...</option>
                                <option value="1">Monthly Filter Kit</option>
                                <option value="2">Compressor Service Pack</option>
                            </select>
                            <button className="btn btn-primary" style={{ padding: '8px 16px', borderRadius: '4px', fontSize: '12px', whiteSpace: 'nowrap' }}>Add</button>
                        </div>
                    </div>

                    {/* Card 3: Real-Time Status */}
                    <Link to="/quote" className="card" style={{ 
                        padding: '24px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1',
                        display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', textDecoration: 'none', color: 'inherit'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155' }}>
                            <Activity size={20} strokeWidth={2.5} color="var(--color-blue)" />
                            <span style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quote Status</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: '#f0fdf4', borderRadius: '4px', border: '1px solid #dcfce7' }}>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: '#166534' }}>3 Quotes Ready</span>
                                <ChevronRight size={14} color="#166534" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: '#eff6ff', borderRadius: '4px', border: '1px solid #dbeafe' }}>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af' }}>1 Shipment In-Transit</span>
                                <ChevronRight size={14} color="#1e40af" />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Expert Hotline Bar */}
                <div style={{ 
                    marginTop: '20px', padding: '12px 20px', background: '#f8fafc', borderRadius: '6px', 
                    border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'
                }}>
                    <Headset size={16} color="var(--text-secondary)" />
                    <span style={{ fontSize: '13px', color: '#475569' }}>
                        Need help with a technical selection? <strong>Talk to an Engineer now:</strong> <span style={{ fontFamily: 'monospace', color: 'var(--color-blue)' }}>+91-XXXX-XXXXXX</span>
                    </span>
                    <a href="#" style={{ fontSize: '12px', color: 'var(--color-blue)', fontWeight: 700, textDecoration: 'none', marginLeft: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Connect on WhatsApp <ArrowRight size={14} />
                    </a>
                </div>
                {/* Help & Documentation Quick Links */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px', fontSize: '13px', color: '#64748b' }}>
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

            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>

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
