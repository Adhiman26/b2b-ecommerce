import { useState } from 'react';
import { useStore } from '../store';
import { ShoppingCart, CheckCircle, Filter, LayoutGrid, List, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function PLP() {
    const navigate = useNavigate();
    const { addToCart } = useStore();
    const [compareList, setCompareList] = useState([]);
    const [viewMode, setViewMode] = useState('grid');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

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

    const desktopView = (
        <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '24px 0' }}>
            <div className="container" style={{ maxWidth: '1440px' }}>
                <div style={{ marginBottom: '24px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0' }}>Compressors</h1>
                    <div style={{ display: 'flex', gap: '8px', color: '#64748b', fontSize: '13px' }}>
                        <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link> &raquo; 
                        <Link to="/plp" style={{ color: '#64748b', textDecoration: 'none' }}>Commercial Equipment</Link> &raquo; 
                        <span style={{ color: '#0f172a', fontWeight: 600 }}>Compressors</span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '32px', alignItems: 'start' }}>
                    <div className="card" style={{ background: 'white', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                        <div className="card-header" style={{ borderBottom: '1px solid #f1f5f9', background: '#f8fafc', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Filter size={16} color="#0f172a" />
                            <h2 style={{ fontSize: '14px', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Technical Filters</h2>
                        </div>
                        <div className="card-body" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {[
                                { label: 'Tonnage', options: ['3 Ton', '5 Ton', '7.5 Ton', '10 Ton'], key: 'tonnage' },
                                { label: 'Voltage', options: ['208/230V', '460V', '575V'], key: 'voltage' },
                                { label: 'Phase', options: ['1-Phase', '3-Phase'], key: 'phase' },
                                { label: 'Refrigerant Type', options: ['R-410A', 'R-32', 'R-22'], key: 'refrigerant' },
                                { label: 'Brand (Secondary)', options: ['Copeland', 'Bristol', 'LG', 'Danfoss', 'Trane'], key: 'brand' }
                            ].map((group) => (
                                <div key={group.key}>
                                    <h3 style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>{group.label}</h3>
                                    {group.options.map(opt => (
                                        <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', cursor: 'pointer' }}>
                                            <input 
                                                type="checkbox" 
                                                checked={filters[group.key].includes(opt)} 
                                                onChange={() => handleFilterChange(group.key, opt)}
                                                style={{ width: '16px', height: '16px' }}
                                            />
                                            <span style={{ fontSize: '13px', fontWeight: 500, color: '#334155' }}>{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '13px', color: '#64748b' }}>Showing {filteredProducts.length} results matching criteria</span>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <select style={{ padding: '8px 12px', fontSize: '13px', borderRadius: '4px', border: '1px solid #e2e8f0', background: 'white', width: '200px' }}>
                                    <option>Sort by: OEM Relevance</option>
                                    <option>Price (Low to High)</option>
                                </select>
                                <div style={{ display: 'flex', background: 'white', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
                                    <button onClick={() => setViewMode('list')} style={{ padding: '6px 10px', background: viewMode === 'list' ? '#f1f5f9' : 'transparent', border: 'none', cursor: 'pointer', borderRight: '1px solid #e2e8f0' }}><List size={18} /></button>
                                    <button onClick={() => setViewMode('grid')} style={{ padding: '6px 10px', background: viewMode === 'grid' ? '#f1f5f9' : 'transparent', border: 'none', cursor: 'pointer' }}><LayoutGrid size={18} /></button>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: viewMode === 'grid' ? 'repeat(3, 1fr)' : '1fr', gap: '20px' }}>
                            {filteredProducts.map((p) => {
                                const isSelected = compareList.includes(p.id);
                                const specsDisplay = p.specs.split(' • ').slice(0, 3).join(' | ');
                                return (
                                    <div key={p.id} className="card" style={{ background: 'white', borderRadius: '4px', border: '1px solid #e2e8f0', position: 'relative', cursor: 'pointer' }} onClick={() => navigate(`/product/${p.id}`)}>
                                        <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 10 }} onClick={(e) => e.stopPropagation()}>
                                            <input type="checkbox" checked={isSelected} onChange={() => toggleCompare(p.id)} style={{ width: '18px', height: '18px' }} />
                                        </div>
                                        {p.exactMatch && <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 10 }}><CheckCircle size={20} color="#10b981" fill="#fff" /></div>}
                                        <div style={{ height: '220px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #f1f5f9' }}>
                                            <img src={p.image} alt={p.sku} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                        </div>
                                        <div style={{ padding: '20px' }}>
                                            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>{p.sku}</h2>
                                            <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px 0', fontWeight: 400, lineHeight: '1.4' }}>{p.name}</p>
                                            <div style={{ padding: '8px', border: '1px solid #e2e8f0', borderRadius: '4px', fontSize: '11px', color: '#334155', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>{specsDisplay}</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.status === 'green' ? '#10b981' : p.status === 'amber' ? '#f59e0b' : '#ef4444' }}></div>
                                                <span style={{ fontSize: '12px', fontWeight: 600, color: p.status === 'green' ? '#059669' : p.status === 'amber' ? '#d97706' : '#dc2626' }}>{p.stock} (Rabale MIDC)</span>
                                            </div>
                                            <div style={{ fontSize: '24px', fontWeight: 600, color: '#0f172a', marginBottom: '16px' }}>₹{p.price.toLocaleString('en-IN')}.00</div>
                                            <button className="btn btn-primary" style={{ width: '100%', height: '44px', fontWeight: 700 }} onClick={(e) => { e.stopPropagation(); addToCart(p, 1); }}>Add for enquiry</button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const mobileViewContent = (
        <div style={{ background: '#F2F4F7', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '0 8px', width: '100%' }}>
            <div style={{ padding: '16px 8px 8px 8px' }}>
                <h1 style={{ fontSize: '18px', margin: 0, fontWeight: 800, color: '#0f172a' }}>Compressors</h1>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Showing {filteredProducts.length} results</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '140px', gap: '8px', width: '100%' }}>
                {filteredProducts.map((p) => {
                    const isSelected = compareList.includes(p.id);
                    const techPills = p.specs.split(' • ');
                    
                    return (
                        <div key={p.id} style={{ 
                            display: 'flex', background: 'white', border: '1px solid #e2e8f0',
                            borderRadius: '6px', alignItems: 'stretch', minHeight: '90px', overflow: 'hidden',
                            width: '100%'
                        }} onClick={() => navigate(`/product/${p.id}`)}>
                            {/* Image Block */}
                            <div style={{ width: '85px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                                <div style={{ width: '70px', height: '70px', background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: '4px', padding: '6px' }}>
                                    <img src={p.image} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="" />
                                </div>
                            </div>

                            {/* Identity Block */}
                            <div style={{ flex: 1, padding: '12px 10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h2 style={{ fontSize: '14px', fontWeight: '700', fontFamily: 'monospace', color: '#0f172a', margin: 0 }}>{p.sku}</h2>
                                    <div onClick={(e) => { e.stopPropagation(); toggleCompare(p.id); }}>
                                        <input type="checkbox" checked={isSelected} readOnly style={{ width: '18px', height: '18px', accentColor: '#0ea5e9' }} />
                                    </div>
                                </div>
                                <div style={{ fontSize: '12px', color: '#475569', fontWeight: '400', lineHeight: '1.2' }}>{p.name.split(' ').slice(0, 5).join(' ')}...</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '2px' }}>
                                    {techPills.map((pill, idx) => (
                                        <span key={idx} style={{ background: '#f1f5f9', color: '#64748b', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Block */}
                            <div style={{ width: '90px', display: 'flex', flexDirection: 'column', borderLeft: '1px solid #f1f5f9' }}>
                                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 600, color: '#0f172a', padding: '4px' }}>
                                    ₹{p.price.toLocaleString('en-IN')}
                                </div>
                                <button 
                                    style={{ 
                                        height: '48px', width: '100%', background: '#0ea5e9', border: 'none', 
                                        color: 'white', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase'
                                    }} 
                                    onClick={(e) => { e.stopPropagation(); addToCart(p, 1); }}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Command Dock */}
            <div style={{ 
                position: 'fixed', bottom: 72, left: 0, right: 0, 
                display: 'flex', background: 'white', zIndex: 1000, 
                borderTop: '2px solid #0f172a', height: '60px', boxShadow: '0 -4px 12px rgba(0,0,0,0.1)'
            }}>
                <button style={{ flex: 1, height: '100%', background: 'white', border: 'none', fontWeight: 800, fontSize: '13px', borderRight: '1px solid #e2e8f0' }} onClick={() => setIsFilterOpen(true)}>
                    🎚️ Filter
                </button>
                <button style={{ flex: 1, height: '100%', background: 'white', border: 'none', fontWeight: 800, fontSize: '13px', borderRight: '1px solid #e2e8f0' }}>
                    ↕️ Sort
                </button>
                <Link 
                    to={compareList.length >= 2 ? "/compare" : "#"}
                    style={{ 
                        flex: 1.2, height: '100%', background: compareList.length >= 2 ? '#0f172a' : '#f1f5f9', 
                        color: compareList.length >= 2 ? 'white' : '#94a3b8', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                        textDecoration: 'none', fontWeight: 800, fontSize: '13px', pointerEvents: compareList.length >= 2 ? 'auto' : 'none'
                    }}
                >
                    📑 Compare ({compareList.length})
                </Link>
            </div>

            {/* Filter Bottom Sheet */}
            {isFilterOpen && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }} onClick={() => setIsFilterOpen(false)}></div>
                    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', zIndex: 1001, borderTopLeftRadius: '16px', borderTopRightRadius: '16px', padding: '24px', maxHeight: '80vh', overflowY: 'auto' }}>
                        <div style={{ width: '40px', height: '4px', background: '#cbd5e1', borderRadius: '2px', margin: '0 auto 20px' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '18px', margin: 0, fontWeight: 800 }}>Filter Catalog</h2>
                            <button style={{ color: '#0ea5e9', fontWeight: 'bold', background: 'none', border: 'none' }} onClick={() => setIsFilterOpen(false)}>Apply</button>
                        </div>
                        {['tonnage', 'voltage', 'phase', 'brand'].map(key => (
                            <div key={key} style={{ marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: '#64748b', marginBottom: '12px', fontWeight: 800 }}>{key}</h3>
                                {Array.from(new Set(products.map(p => key === 'brand' ? p.name.split(' ')[0] : p.specs.split(' • ')[0]))).map(opt => (
                                    <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '8px', marginBottom: '8px', border: '1px solid #e2e8f0' }}>
                                        <input type="checkbox" checked={filters[key]?.includes(opt)} onChange={() => handleFilterChange(key, opt)} style={{ width: '22px', height: '22px' }} />
                                        <span style={{ fontWeight: '600', color: '#334155' }}>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );

    return (
        <div style={{ background: '#F2F4F7', minHeight: '100vh' }}>
            <div className="desktop-only">{desktopView}</div>
            <div className="mobile-only" style={{ width: '100%' }}>{mobileViewContent}</div>
            {/* Desktop Comparison Tray */}
            <div className="desktop-only">
                {compareList.length > 0 && (
                    <div style={{ 
                        position: 'fixed', bottom: 0, left: 0, right: 0, 
                        background: '#0f172a', color: 'white', height: '80px', 
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 40px', zIndex: 2000, boxShadow: '0 -4px 20px rgba(0,0,0,0.3)'
                    }}>
                        <div style={{ fontSize: '16px', fontWeight: 600 }}>
                            {compareList.length} {compareList.length === 1 ? 'Item' : 'Items'} Selected for Comparison
                        </div>

                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            {compareList.map(id => {
                                const p = products.find(x => x.id === id);
                                return p ? (
                                    <div key={id} style={{ 
                                        width: '48px', height: '48px', background: 'white', 
                                        borderRadius: '4px', overflow: 'hidden', padding: '4px',
                                        border: '2px solid #38bdf8'
                                    }}>
                                        <img src={p.image} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="" />
                                    </div>
                                ) : null;
                            })}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                            <button 
                                onClick={() => setCompareList([])}
                                style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontWeight: 700, cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}
                            >
                                Clear All
                            </button>
                            <Link 
                                to="/compare" 
                                className="btn btn-primary"
                                style={{ 
                                    background: '#0ea5e9', padding: '0 24px', height: '44px', 
                                    display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '4px',
                                    textDecoration: 'none', color: 'white', fontWeight: 800
                                }}
                            >
                                Compare Specs <ChevronRight size={18} />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
