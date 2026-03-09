import { useState } from 'react';
import { useStore } from '../store';
import { FileText, Send, Save, Plus, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuoteWorkspace() {
    const { cart } = useStore();

    // We'll use mock data if cart is empty, or adapt cart items.
    const initialItems = cart.length > 0 ? cart.map(item => ({ ...item, markup: 0 })) : [
        { id: 1, sku: 'COP-ZPS51K5', name: 'Copeland Scroll 5-Ton R-410A Component', price: 68500.00, qty: 1, markup: 0 },
        { id: 101, sku: 'FLT-0982', name: 'MERV 13 Commercial Filter (24x24x2)', price: 1250.00, qty: 4, markup: 0 }
    ];

    const [items, setItems] = useState(initialItems);
    const [globalMarkup, setGlobalMarkup] = useState(false);
    const globalMarkupValue = 15;

    const handleMarkupChange = (index, val) => {
        const newItems = [...items];
        newItems[index].markup = Number(val);
        setItems(newItems);
    };

    // Calculations
    const totalBaseCost = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

    const totalMargin = items.reduce((sum, item) => {
        const activeMarkup = globalMarkup ? globalMarkupValue : (item.markup || 0);
        const profitPerItem = item.price * (activeMarkup / 100);
        return sum + (profitPerItem * item.qty);
    }, 0);

    const subtotal = totalBaseCost + totalMargin;
    const gstTax = subtotal * 0.18; // 18% GST typical for India
    const grandTotal = subtotal + gstTax;

    return (
        <div className="container" style={{ padding: '32px 24px' }}>
            {/* Breadcrumbs */}
            <div style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '13px' }}>
                <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> &raquo; <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Quote Gen</span>
            </div>

            {/* Contextual Header */}
            <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 style={{ fontSize: '24px', margin: '0 0 8px 0' }}>Requisition #REQ-2099 - Pending Quote</h1>
                        <div style={{ display: 'flex', gap: '24px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                            <span><strong>Project Site:</strong> Tech Park Phase 1</span>
                            <span><strong>Technician:</strong> Sameer M.</span>
                        </div>
                    </div>
                    <span className="badge badge-amber" style={{ fontSize: '13px' }}>Draft State</span>
                </div>
            </div>

            {/* Split Screen Layout */}
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>

                {/* Left Column: Line Items (70%) */}
                <div style={{ flex: '7', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="card" style={{ overflowX: 'auto' }}>
                        <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ background: '#f1f5f9', borderBottom: '2px solid var(--color-border)' }}>
                                <tr>
                                    <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Item</th>
                                    <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', textAlign: 'center' }}>Qty</th>
                                    <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', textAlign: 'right' }}>Base Cost</th>
                                    <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', textAlign: 'center' }}>Markup %</th>
                                    <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', textAlign: 'right' }}>Final Quoted</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, idx) => {
                                    const activeMarkup = globalMarkup ? globalMarkupValue : (item.markup || 0);
                                    const finalPrice = item.price * (1 + activeMarkup / 100);

                                    return (
                                        <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '16px' }}>
                                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                                    <div style={{ width: '40px', height: '40px', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'white', padding: '2px' }}>
                                                        <img src="https://placehold.co/40x40/ffffff/1e293b?text=CAD" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Thumb" />
                                                    </div>
                                                    <div>
                                                        <div style={{ fontWeight: 800, fontSize: '13px', color: '#0f172a' }}>{item.sku}</div>
                                                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '200px' }}>{item.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>{item.qty}</td>
                                            <td style={{ padding: '16px', textAlign: 'right', color: 'var(--text-secondary)' }}>₹{item.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                            <td style={{ padding: '16px', textAlign: 'center' }}>
                                                <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        value={activeMarkup}
                                                        onChange={(e) => handleMarkupChange(idx, e.target.value)}
                                                        disabled={globalMarkup}
                                                        style={{ width: '60px', padding: '6px', border: 'none', textAlign: 'center', outline: 'none', background: globalMarkup ? '#f1f5f9' : 'white' }}
                                                    />
                                                    <span style={{ padding: '6px 8px', background: '#f8fafc', borderLeft: '1px solid var(--color-border)', color: 'var(--text-secondary)' }}>%</span>
                                                </div>
                                            </td>
                                            <td style={{ padding: '16px', textAlign: 'right', fontWeight: 'bold', fontSize: '15px' }}>
                                                ₹{finalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <button className="btn" style={{ background: 'white', border: '1px dashed var(--color-border)', color: 'var(--text-main)', padding: '16px', display: 'flex', justifyContent: 'center', gap: '8px', cursor: 'pointer', borderRadius: '4px', fontWeight: 600 }}>
                        <Plus size={18} /> Add Custom Line Item (Labor/Service Fee)
                    </button>
                </div>

                {/* Right Column: Financial Summary (30%) */}
                <div style={{ flex: '3', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="card card-body" style={{ background: '#f8fafc' }}>
                        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}>
                            <span>Apply Global Margin (15%)</span>
                            <div style={{ width: '40px', height: '24px', background: globalMarkup ? 'var(--color-blue)' : '#cbd5e1', borderRadius: '12px', position: 'relative', transition: '0.3s' }}>
                                <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '3px', position: 'absolute', top: '2px', left: globalMarkup ? '18px' : '2px', transition: '0.3s' }}></div>
                            </div>
                            <input type="checkbox" checked={globalMarkup} onChange={() => setGlobalMarkup(!globalMarkup)} style={{ display: 'none' }} />
                        </label>
                    </div>

                    <div className="card card-body">
                        <h3 style={{ fontSize: '16px', margin: '0 0 16px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>Financial Summary</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>Total Base Cost:</span>
                                <span>₹{totalBaseCost.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-green)' }}>
                                <span>Total Margin/Markup Profit:</span>
                                <span>+ ₹{totalMargin.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>GST (18%):</span>
                                <span>₹{gstTax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--color-border)', fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>
                                <span>Grand Total:</span>
                                <span>₹{grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Block */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <button className="btn btn-primary" style={{ padding: '14px', fontSize: '14px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                            <FileDown size={18} /> Generate Client PDF Quote
                        </button>
                        <button className="btn" style={{ padding: '14px', fontSize: '14px', background: 'white', color: '#0f172a', border: '1px solid #0f172a', display: 'flex', justifyContent: 'center', gap: '8px', fontWeight: 'bold' }}>
                            <Send size={18} /> Submit to Procurement for PO
                        </button>
                        <button className="btn" style={{ padding: '12px', fontSize: '14px', background: 'transparent', color: 'var(--color-blue)', border: 'none', display: 'flex', justifyContent: 'center', gap: '8px', textDecoration: 'underline', cursor: 'pointer' }}>
                            <Save size={18} /> Save as Draft
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}
