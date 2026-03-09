import { useState } from 'react';
import { useStore } from '../store';
import { Search, Wrench, Snowflake, Cpu, Settings, Activity, Thermometer, ShoppingCart, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const { addToCart } = useStore();
    const [q1, setQ1] = useState(1);
    const [q2, setQ2] = useState(1);
    return (
        <div className="container" style={{ padding: '32px 24px' }}>
            {/* Hero Layer: Repair Parts Lookup */}
            <div className="card" style={{ marginBottom: '32px', background: 'var(--color-accent)', color: 'white' }}>
                <div className="card-body" style={{ padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '16px', fontSize: '32px' }}>Repair Parts Lookup Widget</h1>
                    <p style={{ marginBottom: '24px', color: '#cbd5e1' }}>Bypass the catalog. Use the wizard below to pull validated OEM component replacements.</p>
                    <div style={{ display: 'flex', width: '100%', maxWidth: '900px', gap: '8px', marginBottom: '24px' }}>
                        <select style={{ flex: 1, padding: '16px', fontSize: '15px', borderRadius: '4px', border: 'none', color: 'var(--text-main)', background: 'white' }}>
                            <option>Select OEM / Brand</option>
                            <option>Carrier</option>
                            <option>Trane</option>
                        </select>
                        <select style={{ flex: 1, padding: '16px', fontSize: '15px', borderRadius: '4px', border: 'none', color: 'var(--text-main)', background: 'white' }}>
                            <option>Select Equipment Type</option>
                            <option>Rooftop Unit (RTU)</option>
                            <option>Chiller</option>
                        </select>
                        <select style={{ flex: 1, padding: '16px', fontSize: '15px', borderRadius: '4px', border: 'none', color: 'var(--text-main)', background: 'white' }}>
                            <option>Select Model Number</option>
                            <option>48TC</option>
                            <option>CGAM</option>
                        </select>
                        <button className="btn btn-primary" style={{ padding: '0 32px', fontSize: '16px', fontWeight: 'bold' }}>
                            Find Compatible Parts
                        </button>
                    </div>

                    <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 24px', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', color: 'white', fontSize: '16px', cursor: 'pointer', transition: '0.2s' }}>
                        <Camera size={20} /> On Site? Scan Equipment Data Plate
                    </button>
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

            {/* Dynamic Row */}
            <h2 style={{ marginBottom: '16px' }}>Frequently Bought for Active Sites</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Some list items mimicking B2B items */}
                <div className="card card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '48px', height: '48px', flexShrink: 0, border: '1px solid var(--color-border)', borderRadius: '4px', padding: '2px', background: 'white' }}>
                            <img src="/merv_filter_thumbnail_1772966870436.png" alt="MERV 13 Filter" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div>
                            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--text-secondary)' }}>SKU: FLT-0982</div>
                            <strong>MERV 13 Commercial Filter (24x24x2)</strong>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <input type="number" min="1" value={q1} onChange={e => setQ1(Number(e.target.value))} style={{ width: '60px', height: '36px', textAlign: 'center', padding: '4px', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                        <span className="badge badge-green" style={{ minWidth: '80px', justifyContent: 'center' }}>In Stock</span>
                        <button className="btn btn-primary" style={{ height: '36px', padding: '0 16px' }} onClick={() => { addToCart({ id: 101, sku: 'FLT-0982', name: 'MERV 13 Commercial Filter (24x24x2)', price: 1250.00, location: 'Primary Warehouse' }, q1); alert('Added Quick-Order item.') }}>
                            <ShoppingCart size={14} /> Add
                        </button>
                    </div>
                </div>
                <div className="card card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '48px', height: '48px', flexShrink: 0, border: '1px solid var(--color-border)', borderRadius: '4px', padding: '2px', background: 'white' }}>
                            <img src="/capacitor_thumbnail_1772966884487.png" alt="Dual Run Capacitor" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div>
                            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--text-secondary)' }}>SKU: CAP-455</div>
                            <strong>Dual Run Capacitor 45/5 MFD 440V</strong>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <input type="number" min="1" value={q2} onChange={e => setQ2(Number(e.target.value))} style={{ width: '60px', height: '36px', textAlign: 'center', padding: '4px', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                        <span className="badge badge-amber" style={{ minWidth: '80px', justifyContent: 'center' }}>Low Stock</span>
                        <button className="btn btn-primary" style={{ height: '36px', padding: '0 16px' }} onClick={() => { addToCart({ id: 102, sku: 'CAP-455', name: 'Dual Run Capacitor 45/5 MFD 440V', price: 650.00, location: 'Primary Warehouse' }, q2); alert('Added Quick-Order item.') }}>
                            <ShoppingCart size={14} /> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
