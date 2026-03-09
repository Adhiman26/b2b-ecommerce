import { useState } from 'react';
import { useStore } from '../store';
import { ShoppingCart, CheckCircle, AlertTriangle, Filter, Copy, LayoutGrid, List } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function PLP() {
    const navigate = useNavigate();
    const { addToCart } = useStore();
    const [quantities, setQuantities] = useState({});
    const [compareList, setCompareList] = useState([]);
    const [viewMode, setViewMode] = useState('grid');

    const [filters, setFilters] = useState({
        tonnage: [],
        voltage: [],
        phase: [],
        refrigerant: [],
        brand: []
    });

    const handleFilterChange = (category, value) => {
        setFilters(prev => {
            const current = prev[category];
            if (current.includes(value)) {
                return { ...prev, [category]: current.filter(v => v !== value) };
            } else {
                return { ...prev, [category]: [...current, value] };
            }
        });
    };

    const handleQtyChange = (id, val) => setQuantities(prev => ({ ...prev, [id]: val }));
    const toggleCompare = (id) => setCompareList(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

    const products = [
        { id: 1, sku: 'COP-ZPS51K5', name: 'Copeland Scroll 5-Ton R-410A Compressor', price: 68500.00, stock: '14 In Stock', status: 'green', specs: '5 Ton • 208/230V • 1-Phase • R-410A', image: '/copeland_scroll_thumbnail_1772967496730.png', exactMatch: true },
        { id: 2, sku: 'BRI-H29B35U', name: 'Bristol 5-Ton R-410A Hermetic Compressor', price: 63200.00, stock: '2 In Stock', status: 'amber', specs: '5 Ton • 208/230V • 1-Phase • R-410A', image: '/bristol_hermetic_thumbnail_1772967513065.png', exactMatch: false },
        { id: 3, sku: 'DAN-HRP051', name: 'Danfoss 5-Ton R-410A Commercial Scroll', price: 71000.00, stock: 'Out of Stock', status: 'red', specs: '5 Ton • 460V • 3-Phase • R-410A', image: '/danfoss_scroll_thumbnail_1772967528901.png', exactMatch: false },
        { id: 4, sku: 'LG-APB051K', name: 'LG 5-Ton R-32 Inverter Compressor', price: 78500.00, stock: '45 In Stock', status: 'green', specs: '5 Ton • 208/230V • 1-Phase • R-32', image: '/lg_inverter_thumbnail_1772967545003.png', exactMatch: false },
        { id: 5, sku: 'TRN-COM112', name: 'Trane OEM 5-Ton R-410A Replacement', price: 82000.00, stock: '6 In Stock', status: 'green', specs: '5 Ton • 208/230V • 1-Phase • R-410A', image: '/trane_oem_thumbnail_1772967563052.png', exactMatch: true }
    ];

    const filteredProducts = products.filter(p => {
        const passTonnage = filters.tonnage.length === 0 || filters.tonnage.some(t => p.specs.includes(t));
        const passVoltage = filters.voltage.length === 0 || filters.voltage.some(v => p.specs.includes(v));
        const passPhase = filters.phase.length === 0 || filters.phase.some(ph => p.specs.includes(ph));
        const passRef = filters.refrigerant.length === 0 || filters.refrigerant.some(r => p.specs.includes(r));
        const passBrand = filters.brand.length === 0 || filters.brand.some(b => p.name.includes(b));

        return passTonnage && passVoltage && passPhase && passRef && passBrand;
    });

    return (
        <div className="container" style={{ padding: '32px 24px' }}>
            <h1 style={{ marginBottom: '8px' }}>Compressors</h1>
            <div style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '13px' }}>
                <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> &raquo; <Link to="/plp" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Commercial Equipment</Link> &raquo; <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Compressors</span>
            </div>

            <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: '32px', alignItems: 'start' }}>

                {/* Left Sidebar: Technical Faceted Navigation */}
                <div className="card">
                    <div className="card-header" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <Filter size={16} /> <h2 style={{ fontSize: '16px' }}>Technical Filters</h2>
                    </div>
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        <div>
                            <strong style={{ display: 'block', marginBottom: '8px' }}>Tonnage</strong>
                            {['3 Ton', '5 Ton', '7.5 Ton', '10 Ton'].map(t => (
                                <label key={t} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px', cursor: 'pointer' }}>
                                    <input type="checkbox" checked={filters.tonnage.includes(t)} onChange={() => handleFilterChange('tonnage', t)} />
                                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{t}</span>
                                </label>
                            ))}
                        </div>

                        <div>
                            <strong style={{ display: 'block', marginBottom: '8px' }}>Voltage</strong>
                            {['208/230V', '460V', '575V'].map(v => (
                                <label key={v} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px', cursor: 'pointer' }}>
                                    <input type="checkbox" checked={filters.voltage.includes(v)} onChange={() => handleFilterChange('voltage', v)} />
                                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{v}</span>
                                </label>
                            ))}
                        </div>

                        <div>
                            <strong style={{ display: 'block', marginBottom: '8px' }}>Phase</strong>
                            {['1-Phase', '3-Phase'].map(ph => (
                                <label key={ph} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px', cursor: 'pointer' }}>
                                    <input type="checkbox" checked={filters.phase.includes(ph)} onChange={() => handleFilterChange('phase', ph)} />
                                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{ph}</span>
                                </label>
                            ))}
                        </div>

                        <div>
                            <strong style={{ display: 'block', marginBottom: '8px' }}>Refrigerant Type</strong>
                            {['R-410A', 'R-32', 'R-22'].map(r => (
                                <label key={r} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px', cursor: 'pointer' }}>
                                    <input type="checkbox" checked={filters.refrigerant.includes(r)} onChange={() => handleFilterChange('refrigerant', r)} />
                                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{r}</span>
                                </label>
                            ))}
                        </div>

                        <div style={{ paddingBottom: '24px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px' }}>Brand (Secondary)</strong>
                            {['Copeland', 'Bristol', 'LG', 'Danfoss', 'Trane'].map(b => (
                                <label key={b} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px', cursor: 'pointer' }}>
                                    <input type="checkbox" checked={filters.brand.includes(b)} onChange={() => handleFilterChange('brand', b)} />
                                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{b}</span>
                                </label>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Right Column: High-Density Horizontal List View */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Showing {filteredProducts.length} results matching criteria</span>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <select style={{ width: 'auto', padding: '6px 12px' }}>
                                <option>Sort by: OEM Relevance</option>
                                <option>Sort by: Price (Low to High)</option>
                                <option>Sort by: Stock Availability</option>
                            </select>
                            <div style={{ display: 'flex', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
                                <button style={{ padding: '6px 10px', background: viewMode === 'list' ? 'var(--bg-surface)' : 'white', border: 'none', borderRight: '1px solid var(--color-border)', cursor: 'pointer', color: viewMode === 'list' ? 'var(--text-main)' : 'var(--text-secondary)' }} onClick={() => setViewMode('list')} title="List View">
                                    <List size={18} />
                                </button>
                                <button style={{ padding: '6px 10px', background: viewMode === 'grid' ? 'var(--bg-surface)' : 'white', border: 'none', cursor: 'pointer', color: viewMode === 'grid' ? 'var(--text-main)' : 'var(--text-secondary)' }} onClick={() => setViewMode('grid')} title="Grid View">
                                    <LayoutGrid size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {filteredProducts.length === 0 && (
                        <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)', background: 'var(--bg-surface)', border: '1px solid var(--color-border)', borderRadius: '4px' }}>
                            No compressors found matching all selected criteria.
                        </div>
                    )}

                    {viewMode === 'list' && filteredProducts.length > 0 && (
                        <div style={{ display: 'flex', padding: '8px 16px', fontSize: '12px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                            <div style={{ width: '70px', textAlign: 'center', flexShrink: 0 }}>Compare</div>
                            <div style={{ paddingLeft: '24px' }}>Product Details</div>
                        </div>
                    )}

                    {viewMode === 'list' && filteredProducts.map((p, idx) => {
                        const isSelected = compareList.includes(p.id);
                        return (
                            <div key={p.id} className="card card-body" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '16px', backgroundColor: isSelected ? '#f0f9ff' : 'white', borderColor: isSelected ? '#bae6fd' : 'var(--color-border)', transition: 'all 0.2s ease', cursor: 'pointer' }} onClick={() => navigate(`/product/${p.id}`)}>

                                {/* Column 0: Selection Checkbox */}
                                <div style={{ width: '70px', display: 'flex', justifyContent: 'center', flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
                                    <input type="checkbox" checked={isSelected} onChange={(e) => { e.stopPropagation(); toggleCompare(p.id); }} onClick={(e) => e.stopPropagation()} style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--color-blue)' }} />
                                </div>

                                {/* Column 1: Thumbnail */}
                                <div style={{ position: 'relative', width: '130px', flexShrink: 0, border: '1px solid var(--color-border)', borderRadius: '4px', padding: '12px', background: 'white' }}>
                                    <img src={p.image} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} alt={p.name} />
                                    {p.exactMatch && (
                                        <div style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--color-green)', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} title="Exact OEM Match">
                                            <CheckCircle size={14} />
                                        </div>
                                    )}
                                </div>

                                {/* Column 2: Data Flow (Part #, Copy, Title, Specs) */}
                                <div style={{ minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                                            <span style={{ color: 'inherit', textDecoration: 'none' }}>{p.sku}</span>
                                        </h2>
                                        <button style={{ color: 'var(--text-secondary)', padding: '2px', background: 'none', border: 'none', cursor: 'pointer' }} title="Copy Part Number" onClick={(e) => e.stopPropagation()}>
                                            <Copy size={16} />
                                        </button>
                                    </div>
                                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 400 }}>{p.name}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--text-main)', marginTop: '4px', fontWeight: 600 }}>{p.specs}</div>
                                </div>

                                {/* Column 3: Stock Status Badge */}
                                <div style={{ width: '120px', display: 'flex', flexDirection: 'column' }}>
                                    {p.status === 'green' && <span className="badge badge-green" style={{ width: 'fit-content' }}><CheckCircle size={12} style={{ marginRight: '4px' }} /> {p.stock}</span>}
                                    {p.status === 'amber' && <span className="badge badge-amber" style={{ width: 'fit-content' }}><AlertTriangle size={12} style={{ marginRight: '4px' }} /> {p.stock}</span>}
                                    {p.status === 'red' && <span className="badge badge-red" style={{ width: 'fit-content' }}><AlertTriangle size={12} style={{ marginRight: '4px' }} /> {p.stock}</span>}
                                </div>

                                {/* Column 4: Contract Price */}
                                <div style={{ width: '120px' }}>
                                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '2px' }}>Your Price</div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                        ₹{p.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </div>
                                </div>

                                {/* Column 5: Action Zone */}
                                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={(e) => e.stopPropagation()}>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantities[p.id] || 1}
                                        onChange={(e) => handleQtyChange(p.id, Number(e.target.value))}
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ width: '60px', height: '40px', textAlign: 'center' }}
                                        disabled={p.status === 'red'}
                                    />
                                    <button
                                        className="btn btn-primary"
                                        style={{ padding: '8px 16px', height: '40px' }}
                                        disabled={p.status === 'red'}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart({ ...p, location: 'Primary Warehouse', oem: 'Mixed' }, quantities[p.id] || 1);
                                            alert('Added to requisition.')
                                        }}
                                    >
                                        <ShoppingCart size={16} /> Add for enquiry
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                    {viewMode === 'grid' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', alignItems: 'stretch' }}>
                            {filteredProducts.map((p) => {
                                const isSelected = compareList.includes(p.id);
                                return (
                                    <div key={p.id} className="card" style={{ display: 'flex', flexDirection: 'column', position: 'relative', backgroundColor: isSelected ? '#f0f9ff' : 'white', borderColor: isSelected ? '#bae6fd' : 'var(--color-border)', transition: 'all 0.2s ease', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate(`/product/${p.id}`)}>
                                        <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 10 }} onClick={(e) => e.stopPropagation()}>
                                            <input type="checkbox" checked={isSelected} onChange={(e) => { e.stopPropagation(); toggleCompare(p.id); }} onClick={(e) => e.stopPropagation()} style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--color-blue)', backgroundColor: 'white' }} title="Compare" />
                                        </div>
                                        {p.exactMatch && (
                                            <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--color-green)', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 10 }} title="Exact OEM Match">
                                                <CheckCircle size={14} />
                                            </div>
                                        )}
                                        <div style={{ padding: '24px', display: 'flex', justifyContent: 'center', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
                                            <img src={p.image} alt={p.name} style={{ width: '100%', height: '180px', objectFit: 'contain' }} />
                                        </div>
                                        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                            <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                                                <span style={{ color: 'inherit', textDecoration: 'none' }}>{p.sku}</span>
                                            </div>
                                            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '12px', minHeight: '38px', lineHeight: '1.4' }}>{p.name}</div>
                                            <div style={{ background: '#f8fafc', padding: '6px 8px', borderRadius: '4px', fontSize: '12px', color: 'var(--text-main)', fontWeight: 600, border: '1px solid var(--color-border)', marginBottom: '16px', textAlign: 'center' }}>
                                                {p.specs.split(' • ').slice(0, 3).join(' | ')}
                                            </div>
                                            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }} onClick={(e) => e.stopPropagation()}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                    {p.status === 'green' && <span style={{ fontSize: '12px', color: 'var(--color-green)', fontWeight: 600 }}>● {p.stock} (Rabale MIDC)</span>}
                                                    {p.status === 'amber' && <span style={{ fontSize: '12px', color: 'var(--color-amber)', fontWeight: 600 }}>● {p.stock} (Rabale MIDC)</span>}
                                                    {p.status === 'red' && <span style={{ fontSize: '12px', color: 'var(--color-red)', fontWeight: 600 }}>● {p.stock} (Rabale MIDC)</span>}

                                                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginTop: '2px' }}>
                                                        ₹{p.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-primary"
                                                    style={{ width: '100%', padding: '12px', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}
                                                    disabled={p.status === 'red'}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        addToCart({ ...p, location: 'Primary Warehouse', oem: 'Mixed' }, quantities[p.id] || 1);
                                                        alert('Added to requisition.')
                                                    }}
                                                >
                                                    <ShoppingCart size={16} /> Add for enquiry
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

            </div>

            {/* Floating Comparison Tray */}
            {
                compareList.length >= 1 && (
                    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0f172a', color: 'white', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, boxShadow: '0 -4px 12px rgba(0,0,0,0.15)' }}>
                        <div style={{ fontSize: '16px', fontWeight: 600, width: '300px' }}>
                            {compareList.length} Item{compareList.length !== 1 ? 's' : ''} Selected for Comparison
                        </div>
                        <div style={{ display: 'flex', gap: '12px', flex: 1, justifyContent: 'center' }}>
                            {compareList.map(id => {
                                const p = products.find(prod => prod.id === id);
                                if (!p) return null;
                                return (
                                    <div key={id} style={{ width: '40px', height: '40px', background: 'white', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', padding: '2px', flexShrink: 0 }}>
                                        <img src={p.image} alt={p.sku} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </div>
                                );
                            })}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', width: '300px', justifyContent: 'flex-end' }}>
                            <button style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer', textDecoration: 'underline', fontSize: '14px' }} onClick={() => setCompareList([])}>
                                Clear All
                            </button>
                            <Link to="/compare" className="btn btn-primary" style={{ padding: '0 24px', height: '44px', display: 'flex', alignItems: 'center', textDecoration: 'none', fontWeight: 'bold' }}>
                                Compare Specs &rarr;
                            </Link>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
