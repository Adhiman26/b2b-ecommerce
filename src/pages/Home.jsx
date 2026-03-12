
import { useStore } from '../store';
import { Search, Wrench, Snowflake, Cpu, Settings, Activity, Thermometer, ShoppingCart, Camera, Plus, Upload, RefreshCcw, Headset, Folder, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const { addToCart } = useStore();

    const desktopView = (
        <div className="desktop-only container hero-container" style={{ padding: '32px 24px' }}>
            {/* Hero Layer: Symmetrical Control Panel */}
            <div className="hero-block" style={{ 
                background: '#f8fafc', 
                padding: '40px', 
                borderRadius: '16px', 
                marginBottom: '40px', 
                border: '1px solid #e2e8f0'
            }}>
                <div style={{ marginBottom: '32px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: '#0f172a', letterSpacing: '-0.025em' }}>Procurement Command Center</h1>
                    <p style={{ fontSize: '16px', color: '#64748b', margin: 0, fontWeight: 500, letterSpacing: '-0.01em' }}>Unified interface for rapid requisition, status auditing, and engineering support.</p>
                </div>

                {/* Action Grid: 3-Column Symmetrical */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '24px', 
                    alignItems: 'stretch',
                    marginBottom: '32px'
                }}>
                    
                    {/* Card 1: Bulk Requisition (Solid Sky Blue) */}
                    <div style={{ 
                        background: '#38bdf8', color: 'white', padding: '32px', borderRadius: '12px',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px',
                        textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(56, 189, 248, 0.2)'
                    }}>
                        <Upload size={48} strokeWidth={2.5} />
                        <div>
                            <h2 style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', margin: '0 0 4px 0' }}>Bulk Requisition</h2>
                            <p style={{ fontSize: '14px', opacity: 0.95, margin: 0, fontWeight: 500 }}>Upload Excel/PDF BOM for consolidated pricing</p>
                        </div>
                    </div>

                    {/* Card 2: Express Requisition */}
                    <div className="card" style={{ 
                        padding: '32px', background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0',
                        display: 'flex', flexDirection: 'column', gap: '16px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#0f172a' }}>
                            <RefreshCcw size={20} strokeWidth={2.5} />
                            <h2 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Express Requisition</h2>
                        </div>
                        <p style={{ fontSize: '14px', color: '#64748b', margin: 0, fontWeight: 500 }}>Fast-track standard maintenance kits</p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                            <select style={{ flex: 1, height: '48px', padding: '0 12px', borderRadius: '8px', border: '2px solid #e2e8f0', fontSize: '14px', fontWeight: 500 }}>
                                <option>Select Kit...</option>
                                <option>Tower A Filters</option>
                                <option>Common Spares Kit</option>
                            </select>
                            <button className="btn btn-primary" style={{ padding: '0 20px', height: '48px', borderRadius: '8px', fontWeight: 700, background: '#0ea5e9' }}>Add</button>
                        </div>
                    </div>

                    {/* Card 3: Quote Status */}
                    <div className="card" style={{ 
                        padding: '32px', background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0',
                        display: 'flex', flexDirection: 'column', gap: '16px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#0f172a' }}>
                            <Activity size={20} strokeWidth={2.5} color="#0ea5e9" />
                            <h2 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Quote Status</h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #dcfce7', cursor: 'pointer' }}>
                                <span style={{ fontSize: '14px', color: '#166534', fontWeight: 700 }}>3 Quotes Ready</span>
                                <ChevronRight size={16} color="#166534" strokeWidth={2.5} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #e0f2fe', cursor: 'pointer' }}>
                                <span style={{ fontSize: '14px', color: '#0369a1', fontWeight: 700 }}>1 Shipment In-Transit</span>
                                <ChevronRight size={16} color="#0369a1" strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Banner & Links */}
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px', marginTop: '8px' }}>
                    <div style={{ 
                        background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px 24px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '14px', marginBottom: '24px'
                    }}>
                        <Headset size={18} color="#64748b" strokeWidth={2} />
                        <span style={{ color: '#64748b', fontWeight: 500 }}>Need help with a technical selection?</span>
                        <strong style={{ color: '#0f172a', fontWeight: 700 }}>Talk to an Engineer now: +91-XXXX-XXXXXX</strong>
                        <span style={{ color: '#e2e8f0' }}>|</span>
                        <a href="#" style={{ color: '#0ea5e9', fontWeight: 700, textDecoration: 'none' }}>Connect on WhatsApp &rarr;</a>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Help & Documentation</a>
                        <span>•</span>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Integration Guides</a>
                        <span>•</span>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Warranty Claims</a>
                        <span>•</span>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>API Keys</a>
                    </div>
                </div>
            </div>

            {/* Industrial Categories Section */}
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '24px' }}>Industrial Categories</h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '24px', 
                marginBottom: '48px' 
            }}>
                {[
                    { title: 'Commercial Equipment', desc: 'Rooftops, Chillers', img: '/rtu_chiller_thumbnail_1772966538282.png' },
                    { title: 'Compressors', desc: 'Scroll, Reciprocating', img: '/scroll_compressor_thumbnail_1772966553741.png' },
                    { title: 'Motors', desc: 'ECM, Condenser', img: '/ecm_motor_thumbnail_1772966572738.png' },
                    { title: 'Refrigerants', desc: 'R-410A, R-32', img: '/refrigerant_cylinder_thumbnail_1772966588296.png' },
                    { title: 'Tools & Test Info', desc: 'Gauges, Meters', img: '/manifold_gauge_thumbnail_1772966605751.png' },
                    { title: 'Controls & Sensors', desc: 'Thermostats, Relays, Boards', img: '/smart_thermostat_thumbnail_1772966621908.png' }
                ].map((cat, idx) => (
                    <Link key={idx} to="/plp" className="card" style={{ 
                        display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', 
                        textDecoration: 'none', color: 'inherit', borderRadius: '12px', border: '1px solid #e2e8f0',
                        transition: 'box-shadow 0.2s', background: 'white'
                    }}>
                        <div style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                            <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px 0' }}>{cat.title}</h3>
                            <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>{cat.desc}</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Predictive Replenishment Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    Frequently Bought for Active Sites
                </h2>
                <Link to="/plp" style={{ fontSize: '15px', color: '#0ea5e9', fontWeight: 700, textDecoration: 'none' }}>
                    View All Suggested Parts &rarr;
                </Link>
            </div>

            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                {[
                    { site: 'MATCHES TECH PARK TOWER B', sku: 'FLT-0982', name: 'MERV 13 Commercial Filter', specs: '24x24x2 • High Capacity', img: '/merv_filter_thumbnail_1772966870436.png', id: 101 },
                    { site: 'MATCHES RETAIL MALL UNIT 4', sku: 'CAP-455', name: 'Dual Run Capacitor', specs: '45/5 MFD • 440V', img: '/capacitor_thumbnail_1772966884487.png', id: 102 },
                    { site: 'MATCHES MAIN DATA CENTER', sku: 'COP-ZPS51K5', name: 'Scroll Compressor', specs: 'R-410A • 51,000 BTU', img: '/copeland_scroll_thumbnail_1772967496730.png', id: 22 },
                    { site: 'MATCHES TECH PARK TOWER B', sku: 'YM-T48', name: 'Manifold Gauge Set', specs: '4-Valve • R-410A / R-22', img: '/manifold_gauge_thumbnail_1772966605751.png', id: 104 }
                ].map((p, idx) => (
                    <div key={idx} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '10px 16px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', fontSize: '11px', fontWeight: 700, color: '#64748b', letterSpacing: '0.02em' }}>
                            {p.site}
                        </div>
                        <div style={{ height: '220px', padding: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={p.img} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt={p.sku} />
                        </div>
                        <div style={{ padding: '24px', paddingTop: '0', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <span style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', marginBottom: '4px', fontFamily: 'monospace' }}>{p.sku}</span>
                            <span style={{ fontSize: '14px', color: '#334155', marginBottom: '4px', fontWeight: 500 }}>{p.name}</span>
                            <span style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', fontWeight: 500 }}>{p.specs}</span>

                            <div style={{ marginTop: 'auto' }}>
                                <button
                                    style={{ 
                                        width: '100%', background: 'white', border: '1px solid #0ea5e9', color: '#0ea5e9', 
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
                                        padding: '12px', fontWeight: 700, cursor: 'pointer', borderRadius: '8px', fontSize: '14px'
                                    }}
                                    onClick={() => { addToCart(p, 1); alert('Added to Quote') }}
                                >
                                    <Plus size={16} strokeWidth={2.5} /> Quick Add to Quote
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const mobileView = (
        <div className="mobile-only" style={{ background: '#F9FAFB', minHeight: '100vh', padding: '16px', paddingBottom: '32px', flexDirection: 'column' }}>
            {/* Mobile Header Title */}
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', margin: 0 }}>Procurement Command Center</h1>
            </div>

            {/* Mobile Hero Actions Re-stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {/* Card 1: Bulk Requisition - The Power Move */}
                <button style={{ 
                    width: '100%', height: '64px', background: '#0ea5e9', color: 'white', border: 'none', 
                    borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                    fontSize: '18px', fontWeight: '700', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                }}>
                    <Upload size={24} strokeWidth={3} />
                    BULK REQUISITION
                </button>

                {/* Card 2: Express Requisition - The Shortcut */}
                <div style={{ 
                    background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0',
                    display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a' }}>
                        <RefreshCcw size={20} strokeWidth={2.5} />
                        <span style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Express Requisition</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <select style={{ 
                            flex: 1, height: '52px', border: '2px solid #f1f5f9', borderRadius: '8px', 
                            padding: '0 16px', fontSize: '16px', background: '#f8fafc', fontWeight: 600, color: '#0f172a'
                        }}>
                            <option>Select Kit...</option>
                            <option>Tower A - Filters</option>
                            <option>Main Lobby - PM Kit</option>
                        </select>
                        <button className="btn btn-primary" style={{ padding: '0 20px', height: '52px', background: '#0ea5e9', borderRadius: '8px', fontWeight: 700 }}>Add</button>
                    </div>
                </div>

                {/* Card 3: Quote Status - The Live Feed */}
                <div style={{ 
                    background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0',
                    display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a' }}>
                        <Activity size={20} strokeWidth={2.5} color="#0ea5e9" />
                        <span style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quote Status</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ 
                            height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                            padding: '0 20px', background: '#f0fdf4', borderRadius: '26px', border: '1px solid #dcfce7'
                        }}>
                            <span style={{ fontSize: '16px', fontWeight: '700', color: '#166534' }}>3 Quotes Ready</span>
                            <ChevronRight size={20} color="#166534" strokeWidth={3} />
                        </div>
                        <div style={{ 
                            height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                            padding: '0 20px', background: '#f0f9ff', borderRadius: '26px', border: '1px solid #e0f2fe'
                        }}>
                            <span style={{ fontSize: '16px', fontWeight: '700', color: '#0369a1' }}>1 Shipment In-Transit</span>
                            <ChevronRight size={20} color="#0369a1" strokeWidth={3} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Banner Mobile */}
            <div style={{ 
                background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px',
                display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Headset size={20} color="#64748b" strokeWidth={2.5} />
                    <span style={{ color: '#64748b', fontWeight: '500', fontSize: '14px' }}>Technical Selection Help</span>
                </div>
                <div style={{ color: '#0f172a', fontWeight: '700', fontSize: '16px' }}>Talk to an Engineer: +91-XXXX-XXXXXX</div>
                <a href="#" style={{ color: '#0ea5e9', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Connect on WhatsApp &rarr;</a>
            </div>

            {/* Industrial Categories Section Mobile */}
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '20px' }}>Industrial Categories</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                    { title: 'Commercial Equipment', desc: 'Rooftops, Chillers', img: '/rtu_chiller_thumbnail_1772966538282.png' },
                    { title: 'Compressors', desc: 'Scroll, Reciprocating', img: '/scroll_compressor_thumbnail_1772966553741.png' },
                    { title: 'Motors', desc: 'ECM, Condenser', img: '/ecm_motor_thumbnail_1772966572738.png' },
                    { title: 'Refrigerants', desc: 'R-410A, R-32', img: '/refrigerant_cylinder_thumbnail_1772966588296.png' },
                    { title: 'Tools & Test Info', desc: 'Gauges, Meters', img: '/manifold_gauge_thumbnail_1772966605751.png' },
                    { title: 'Controls & Sensors', desc: 'Thermostats, Relays, Boards', img: '/smart_thermostat_thumbnail_1772966621908.png' }
                ].map((cat, idx) => (
                    <Link key={idx} to="/plp" className="card" style={{ 
                        display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', 
                        textDecoration: 'none', color: 'inherit', borderRadius: '12px', border: '1px solid #e2e8f0',
                        background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}>
                        <div style={{ width: '64px', height: '64px', flexShrink: 0 }}>
                            <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' }}>{cat.title}</h3>
                            <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>{cat.desc}</span>
                        </div>
                        <ChevronRight size={18} color="#cbd5e1" />
                    </Link>
                ))}
            </div>

            {/* Frequently Bought Section Mobile */}
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '20px' }}>Frequently Bought</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                    { site: 'TECH PARK TOWER B', sku: 'FLT-0982', name: 'MERV 13 Commercial Filter', specs: '24x24x2 • High Capacity', img: '/merv_filter_thumbnail_1772966870436.png', id: 101 },
                    { site: 'RETAIL MALL UNIT 4', sku: 'CAP-455', name: 'Dual Run Capacitor', specs: '45/5 MFD • 440V', img: '/capacitor_thumbnail_1772966884487.png', id: 102 }
                ].map((p, idx) => (
                    <div key={idx} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                        <div style={{ display: 'flex', padding: '20px', gap: '20px' }}>
                            <div style={{ width: '88px', height: '88px', flexShrink: 0, padding: '8px', background: '#f8fafc', borderRadius: '8px' }}>
                                <img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt={p.sku} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', marginBottom: '6px', fontFamily: 'monospace', letterSpacing: '0.02em' }}>{p.sku}</div>
                                <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '6px', lineHeight: '1.3' }}>{p.name}</div>
                                <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>{p.specs}</div>
                            </div>
                        </div>
                        <button 
                            style={{ 
                                width: '100%', height: '52px', background: 'white', borderTop: '1px solid #f1f5f9', 
                                color: '#0ea5e9', fontSize: '16px', fontWeight: '700', display: 'flex', 
                                alignItems: 'center', justifyContent: 'center', gap: '8px' 
                            }}
                            onClick={() => { addToCart(p, 1); alert('Added to Quote') }}
                        >
                            <Plus size={20} strokeWidth={3} /> Quick Add
                        </button>
                    </div>
                ))}
            </div>
            
            <Link to="/plp" style={{ 
                display: 'block', textAlign: 'center', padding: '24px', color: '#0ea5e9', 
                fontSize: '16px', fontWeight: '700', textDecoration: 'none' 
            }}>
                View All suggested parts &rarr;
            </Link>
        </div>
    );

    return (
        <div style={{ background: '#F9FAFB', minHeight: '100vh' }}>
            {desktopView}
            {mobileView}
        </div>
    );
}
