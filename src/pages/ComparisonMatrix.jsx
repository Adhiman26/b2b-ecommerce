import { useState } from 'react';
import { useStore } from '../store';
import { ShoppingCart, CheckCircle, FileText, Download, Shield, Copy, Check, X, Plus, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function ComparisonMatrix() {
    const { addToCart } = useStore();
    const navigate = useNavigate();
    const [highlightDiff, setHighlightDiff] = useState(false);

    // Mock selected products for comparison
    const [products, setProducts] = useState([
        {
            id: 1, sku: 'COP-ZPS51K5', name: 'Copeland Scroll 5-Ton R-410A', price: 68500.00,
            image: '/copeland_scroll_thumbnail_1772967496730.png',
            specs: {
                voltage: '208/230V', phase: '1-Phase', rla: '19.8 A', lra: '109.0 A',
                tonnage: '5 Ton', refrigerant: 'R-410A', btu: '51,000 BTU/h', connection: '7/8" Stub',
                bee: '4 Star Rating', warranty: '10-Year Limited', sds: 'Available'
            }
        },
        {
            id: 2, sku: 'BRI-H29B35U', name: 'Bristol 5-Ton R-410A Hermetic', price: 63200.00,
            image: '/scroll_compressor_thumbnail_1772966553741.png',
            specs: {
                voltage: '208/230V', phase: '1-Phase', rla: '21.0 A', lra: '115.0 A',
                tonnage: '5 Ton', refrigerant: 'R-410A', btu: '50,500 BTU/h', connection: '7/8" Stub',
                bee: '3 Star Rating', warranty: '5-Year Limited', sds: 'Available'
            }
        },
        {
            id: 4, sku: 'LG-APB051K', name: 'LG 5-Ton R-32 Inverter', price: 78500.00,
            image: '/refrigerant_cylinder_thumbnail_1772966588296.png', // Fallback
            specs: {
                voltage: '208/230V', phase: '1-Phase', rla: '18.5 A', lra: '95.0 A',
                tonnage: '5 Ton', refrigerant: 'R-32', btu: '52,000 BTU/h', connection: '7/8" Stub',
                bee: '5 Star Rating', warranty: '10-Year Limited', sds: 'Available'
            }
        }
    ]);

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
        if (products.length < 2) return false;
        const val = products[0].specs[key];
        return !products.every(p => p.specs[key] === val);
    };

    const removeProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const desktopView = (
        <div className="container" style={{ padding: '32px 24px' }}>
            <div style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '13px' }}>
                <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> &raquo; <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Compare</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                    <h1 style={{ marginBottom: '8px' }}>Technical Comparison Matrix</h1>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Auditing {products.length} selected compressor units.</p>
                </div>

                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontWeight: 600, userSelect: 'none' }}>
                    <span style={{ fontSize: '14px' }}>Highlight Differences Only</span>
                    <div style={{ width: '40px', height: '24px', background: highlightDiff ? 'var(--color-blue)' : '#cbd5e1', borderRadius: '12px', position: 'relative', transition: '0.3s' }}>
                        <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: highlightDiff ? '18px' : '2px', transition: '0.3s', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}></div>
                    </div>
                    <input type="checkbox" checked={highlightDiff} onChange={() => setHighlightDiff(!highlightDiff)} style={{ display: 'none' }} />
                </label>
            </div>

            <div className="card" style={{ overflowX: 'auto', maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
                <table className="data-table" style={{ minWidth: '1000px', width: '100%', tableLayout: 'fixed', borderCollapse: 'collapse' }}>
                    <colgroup>
                        <col style={{ width: '25%' }} />
                        {products.map(p => <col key={p.id} style={{ width: `${75 / products.length}%` }} />)}
                    </colgroup>

                    <thead style={{ position: 'sticky', top: '0', zIndex: 10, background: 'var(--bg-surface)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <tr>
                            <th style={{ background: 'var(--bg-surface)', borderBottom: '2px solid var(--color-border)', borderRight: '1px solid var(--color-border)' }}></th>
                            {products.map((p, idx) => (
                                <th key={p.id} style={{ background: 'var(--bg-surface)', borderBottom: '2px solid var(--color-border)', padding: '24px 16px', verticalAlign: 'top', borderRight: idx < products.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        <div style={{ width: '64px', height: '64px', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'white', flexShrink: 0, padding: '4px' }}>
                                            <img src={p.image} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="SKU" />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, textAlign: 'left' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                                                    <Link to={`/product/${p.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{p.sku}</Link>
                                                </h2>
                                                <X size={18} style={{ cursor: 'pointer', color: '#94a3b8' }} onClick={() => removeProduct(p.id)} />
                                            </div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                                            <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '8px' }}>
                                                ₹{p.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </div>
                                            <button
                                                className="btn btn-primary"
                                                style={{ width: '100%', marginTop: 'auto', padding: '10px', fontSize: '13px', background: '#0ea5e9' }}
                                                onClick={() => { addToCart({ ...p, qty: 1, location: 'Primary Warehouse' }, 1); alert('Item added to cart.'); }}
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
                                        <td colSpan={products.length + 1} style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--text-main)', borderBottom: '1px solid var(--color-border)', letterSpacing: '0.5px', textTransform: 'uppercase', fontSize: '12px' }}>
                                            {row.group}
                                        </td>
                                    </tr>
                                );
                            }

                            const isDiff = hasDifference(row.key);
                            const highlightStyle = isDiff ? { backgroundColor: highlightDiff ? '#fef9c3' : 'transparent' } : {};

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

    const mobileView = (
        <div className="mobile-only" style={{ background: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', maxWidth: '100vw', overflowX: 'hidden' }}>
            {/* Header / Utility Bar - Fixed at top of page */}
            <div style={{ padding: '16px', background: 'white', borderBottom: '1px solid #e2e8f0', zIndex: 50, position: 'sticky', top: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h1 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#0f172a' }}>Technical Matrix</h1>
                    <Link to="/plp" style={{ fontSize: '13px', fontWeight: 700, color: '#0ea5e9', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                         Exit <X size={16} />
                    </Link>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button 
                        onClick={() => setHighlightDiff(!highlightDiff)}
                        style={{ 
                            display: 'flex', alignItems: 'center', gap: '8px', background: highlightDiff ? '#eff6ff' : '#f8fafc',
                            border: `1px solid ${highlightDiff ? '#3b82f6' : '#e2e8f0'}`, padding: '8px 12px', borderRadius: '20px',
                            transition: '0.2s'
                        }}
                    >
                        <div style={{ 
                            width: '32px', height: '18px', background: highlightDiff ? '#3b82f6' : '#cbd5e1', 
                            borderRadius: '9px', position: 'relative' 
                        }}>
                            <div style={{ 
                                width: '14px', height: '14px', background: 'white', borderRadius: '50%', 
                                position: 'absolute', top: '2px', left: highlightDiff ? '16px' : '2px', transition: '0.2s' 
                            }}></div>
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: highlightDiff ? '#1e40af' : '#64748b' }}>Highlight Differences</span>
                    </button>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px' }}>
                        {products.length} Units
                    </span>
                </div>
            </div>

            {/* Matrix Viewport */}
            <div style={{ flex: 1, overflowX: 'auto', position: 'relative', scrollSnapType: 'x mandatory', scrollPaddingLeft: '35vw' }}>
                <table style={{ borderCollapse: 'collapse', width: 'max-content', tableLayout: 'fixed' }}>
                    <thead>
                        {/* Sticky Product Header Row */}
                        <tr>
                            {/* Top-Left Corner Piece - Sticky on both axes via CSS */}
                            <th style={{ 
                                position: 'sticky', left: 0, top: 0, zIndex: 45, 
                                background: '#F2F4F7', width: '35vw', height: '180px',
                                borderRight: '2px solid #e2e8f0', borderBottom: '2px solid #0f172a',
                                boxShadow: '2px 0 5px rgba(0,0,0,0.1)', padding: 0
                            }}></th>
                            
                            {products.map((p) => (
                                <th key={p.id} style={{ 
                                    width: '32.5vw', minWidth: '130px', height: '180px',
                                    background: 'white', borderBottom: '2px solid #0f172a',
                                    padding: '12px 8px', verticalAlign: 'top', scrollSnapAlign: 'start',
                                    position: 'sticky', top: 0, zIndex: 40
                                }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '6px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div style={{ width: '44px', height: '44px', borderRadius: '6px', border: '1px solid #f1f5f9', padding: '4px' }}>
                                                <img src={p.image} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="" />
                                            </div>
                                            <button onClick={() => removeProduct(p.id)} style={{ border: 'none', background: '#f8fafc', color: '#94a3b8', cursor: 'pointer' }}>
                                                <X size={14} />
                                            </button>
                                        </div>
                                        <div style={{ textAlign: 'left', minHeight: '40px' }}>
                                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', fontFamily: 'monospace', marginBottom: '1px' }}>{p.sku}</div>
                                            <div style={{ fontSize: '9px', color: '#64748b', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.name}</div>
                                        </div>
                                        <button 
                                            className="btn btn-primary"
                                            style={{ background: '#0ea5e9', height: '34px', width: '100%', fontSize: '10px', fontWeight: 800, padding: 0, marginTop: 'auto', border: 'none', color: 'white', borderRadius: '4px' }}
                                            onClick={() => { addToCart(p, 1); alert('Added to Enquiry'); }}
                                        >
                                            ADD ENQUIRY
                                        </button>
                                    </div>
                                </th>
                            ))}

                            {/* Ghost Add Card Piece */}
                            {products.length < 4 && (
                                <th style={{ 
                                    width: '32.5vw', minWidth: '130px', height: '180px',
                                    background: '#F8FAFC', borderBottom: '2px solid #e2e8f0',
                                    padding: '12px', verticalAlign: 'middle', scrollSnapAlign: 'start',
                                    position: 'sticky', top: 0, zIndex: 40
                                }} onClick={() => navigate('/plp')}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Plus size={16} />
                                        </div>
                                        <span style={{ fontSize: '10px', fontWeight: 700 }}>Add More</span>
                                    </div>
                                </th>
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, rIdx) => {
                            const isRowHeader = row.isHeader;
                            const rowBg = isRowHeader ? '#F1F5F9' : (rIdx % 2 === 0 ? 'white' : '#F9FAFB');
                            
                            return (
                                <tr key={rIdx} style={{ background: rowBg }}>
                                    {/* Sticky Label Column */}
                                    <td style={{ 
                                        position: 'sticky', left: 0, zIndex: 35, 
                                        background: isRowHeader ? '#E2E8F0' : '#F2F4F7',
                                        width: '35vw', padding: isRowHeader ? '8px 12px' : '14px 12px',
                                        fontSize: '11px', fontWeight: 800, color: '#475569',
                                        borderBottom: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0',
                                        boxShadow: '2px 0 5px rgba(0,0,0,0.02)', textAlign: 'left'
                                    }}>
                                        {isRowHeader ? row.group : row.label}
                                    </td>

                                    {/* Data Columns */}
                                    {products.map((p) => {
                                        const isDiff = !isRowHeader && highlightDiff && hasDifference(row.key);
                                        return (
                                            <td key={p.id} style={{ 
                                                width: '32.5vw', minWidth: '130px', padding: '14px 8px',
                                                fontSize: '11px', color: '#0f172a', textAlign: 'center',
                                                borderBottom: '1px solid #f1f5f9',
                                                background: isDiff ? '#fef9c3' : 'transparent',
                                                fontFamily: !isRowHeader ? 'monospace' : 'inherit'
                                            }}>
                                                {!isRowHeader && p.specs[row.key]}
                                            </td>
                                        );
                                    })}

                                    {/* Ghost Fillers */}
                                    {products.length < 4 && (
                                        <td style={{ width: '32.5vw', minWidth: '130px', borderBottom: '1px solid #f1f5f9', background: '#F8FAFC' }}></td>
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div style={{ background: '#F2F4F7', minHeight: '100vh' }}>
            <div className="desktop-only">{desktopView}</div>
            <div className="mobile-only" style={{ width: '100%' }}>{mobileView}</div>
        </div>
    );
}
