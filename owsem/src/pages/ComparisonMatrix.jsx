import { useState } from 'react';
import { useStore } from '../store';
import { ShoppingCart, CheckCircle, FileText, Download, Shield, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComparisonMatrix() {
    const { addToCart } = useStore();
    const [highlightDiff, setHighlightDiff] = useState(false);

    // Mock selected products for comparison
    const products = [
        {
            id: 1, sku: 'COP-ZPS51K5', name: 'Copeland Scroll 5-Ton R-410A', price: 68500.00,
            specs: {
                // Electrical
                voltage: '208/230V', phase: '1-Phase', rla: '19.8 A', lra: '109.0 A',
                // Mechanical
                tonnage: '5 Ton', refrigerant: 'R-410A', btu: '51,000 BTU/h', connection: '7/8" Stub',
                // Compliance
                bee: '4 Star Rating', warranty: '10-Year Limited', sds: 'Available'
            }
        },
        {
            id: 2, sku: 'BRI-H29B35U', name: 'Bristol 5-Ton R-410A Hermetic', price: 63200.00,
            specs: {
                voltage: '208/230V', phase: '1-Phase', rla: '21.0 A', lra: '115.0 A',
                tonnage: '5 Ton', refrigerant: 'R-410A', btu: '50,500 BTU/h', connection: '7/8" Stub',
                bee: '3 Star Rating', warranty: '5-Year Limited', sds: 'Available'
            }
        },
        {
            id: 4, sku: 'LG-APB051K', name: 'LG 5-Ton R-32 Inverter', price: 78500.00,
            specs: {
                voltage: '208/230V', phase: '1-Phase', rla: '18.5 A', lra: '95.0 A',
                tonnage: '5 Ton', refrigerant: 'R-32', btu: '52,000 BTU/h', connection: '7/8" Stub',
                bee: '5 Star Rating', warranty: '10-Year Limited', sds: 'Available'
            }
        }
    ];

    const rows = [
        { group: 'Electrical', key: 'electrical_header', isHeader: true },
        { label: 'Voltage', key: 'voltage' },
        { label: 'Phase', key: 'phase' },
        { label: 'Rated Load Amps (RLA)', key: 'rla' },
        { label: 'Locked Rotor Amps (LRA)', key: 'lra' },

        { group: 'Mechanical', key: 'mechanical_header', isHeader: true },
        { label: 'Tonnage', key: 'tonnage' },
        { label: 'Refrigerant Type', key: 'refrigerant' },
        { label: 'Cooling Capacity (BTU/h)', key: 'btu' },
        { label: 'Connection Sizes', key: 'connection' },

        { group: 'Compliance & Warranty', key: 'compliance_header', isHeader: true },
        { label: 'BEE Star Rating', key: 'bee' },
        { label: 'Warranty Term', key: 'warranty' },
        { label: 'Safety Data Sheet (SDS)', key: 'sds' }
    ];

    const hasDifference = (key) => {
        const val = products[0].specs[key];
        return !products.every(p => p.specs[key] === val);
    };

    return (
        <div className="container" style={{ padding: '32px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                <div>
                    <h1 style={{ marginBottom: '8px' }}>Technical Comparison Matrix</h1>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Auditing {products.length} selected compressor units.</p>
                </div>

                {/* Control Bar: Toggle Switch */}
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 600 }}>
                    Highlight Differences Only
                    <div style={{ width: '40px', height: '24px', background: highlightDiff ? 'var(--color-blue)' : '#cbd5e1', borderRadius: '12px', position: 'relative', transition: '0.3s' }}>
                        <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '3px', position: 'absolute', top: '2px', left: highlightDiff ? '18px' : '2px', transition: '0.3s' }}></div>
                    </div>
                    {/* Hidden checkbox for accessibility */}
                    <input type="checkbox" checked={highlightDiff} onChange={() => setHighlightDiff(!highlightDiff)} style={{ display: 'none' }} />
                </label>
            </div>

            <div className="card" style={{ overflowX: 'auto', maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
                <table className="data-table" style={{ minWidth: '1000px', width: '100%', tableLayout: 'fixed', borderCollapse: 'collapse' }}>
                    <colgroup>
                        <col style={{ width: '25%' }} />
                        <col style={{ width: '25%' }} />
                        <col style={{ width: '25%' }} />
                        <col style={{ width: '25%' }} />
                    </colgroup>

                    {/* Sticky Action Header */}
                    <thead style={{ position: 'sticky', top: '0', zIndex: 10, background: 'var(--bg-surface)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <tr>
                            <th style={{ background: 'var(--bg-surface)', borderBottom: '2px solid var(--color-border)', borderRight: '1px solid var(--color-border)' }}></th>
                            {products.map((p, idx) => (
                                <th key={p.id} style={{ background: 'var(--bg-surface)', borderBottom: '2px solid var(--color-border)', padding: '24px 16px', verticalAlign: 'top', borderRight: idx < products.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        {/* Vector Thumbnail */}
                                        <div style={{ width: '64px', height: '64px', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'white', flexShrink: 0, padding: '4px' }}>
                                            <img src="https://placehold.co/100x100/ffffff/1e293b?text=CAD" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="CAD" />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                                            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                                                <Link to={`/product/${p.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{p.sku}</Link>
                                            </h2>
                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                                            <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '8px' }}>
                                                ₹{p.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </div>
                                            <button
                                                className="btn btn-primary"
                                                style={{ width: '100%', marginTop: 'auto', padding: '10px', fontSize: '13px' }}
                                                onClick={() => { addToCart({ ...p, qty: 1, location: 'Primary Warehouse' }, 1); alert('Item verified & routed to requisition.'); }}
                                            >
                                                <Check size={16} /> Select & Approve
                                            </button>
                                        </div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, idx) => {
                            if (row.isHeader) {
                                return (
                                    <tr key={idx} style={{ background: '#f1f5f9' }}>
                                        <td colSpan={4} style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--text-main)', borderBottom: '1px solid var(--color-border)', letterSpacing: '0.5px', textTransform: 'uppercase', fontSize: '12px' }}>
                                            {row.group}
                                        </td>
                                    </tr>
                                );
                            }

                            const isDiff = hasDifference(row.key);
                            // Highlight the row if it's different and the toggle is active.
                            const highlightStyle = isDiff ? { backgroundColor: highlightDiff ? '#fef9c3' : 'transparent' } : {}; // Pale yellow

                            return (
                                <tr key={idx} style={{ ...highlightStyle, transition: 'background-color 0.2s', borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ fontWeight: 400, color: 'var(--text-secondary)', borderRight: '1px solid var(--color-border)', padding: '16px' }}>{row.label}</td>
                                    {products.map((p, pIdx) => (
                                        <td key={`${p.id}-${row.key}`} style={{ fontWeight: 700, color: 'var(--text-main)', borderRight: pIdx < products.length - 1 ? '1px solid var(--color-border)' : 'none', padding: '16px' }}>
                                            {p.specs[row.key]}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
