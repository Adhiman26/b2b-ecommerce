import { useStore } from '../store';
import { ShoppingCart, FileText, Upload, CreditCard, Trash2, ListPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const { cart, cartTotal, cartName, setCartName, jobSite, setJobSite, removeFromCart, updateCartQty, clearCart } = useStore();

    return (
        <div className="container" style={{ padding: '32px 24px' }}>
            {/* Breadcrumbs */}
            <div style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '13px' }}>
                <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> &raquo; <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Cart</span>
            </div>
            <h1 style={{ marginBottom: '8px' }}>B2B Enquiry Summary</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Review parts and specify logistics to submit an official request for quotation.</p>

            <div className="grid-2" style={{ gridTemplateColumns: '1fr 400px', gap: '32px', alignItems: 'start' }}>

                {/* Left Col: Cart Details & Job Site Assignment */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    <div className="card">
                        <div className="card-header">
                            <h2>Job Site & Meta-Data Assignment</h2>
                        </div>
                        <div className="card-body">
                            <div className="grid-2">
                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--text-main)' }}>Named Requisition / Cart ID</label>
                                    <input
                                        type="text"
                                        value={cartName}
                                        onChange={e => setCartName(e.target.value)}
                                        placeholder="e.g. Chiller Unit 2 Overhaul"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--text-main)' }}>Linked Job Site / Asset ID</label>
                                    <select value={jobSite} onChange={e => setJobSite(e.target.value)}>
                                        <option value="">Select Corporate Site...</option>
                                        <option value="TechPark_B">Tech Park Tower B</option>
                                        <option value="Retail_U4">Retail Mall Unit 4</option>
                                        <option value="DataC_M">Main Data Center</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2>Parts Requisition List</h2>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <span className="badge badge-green">{cart.length} OEMs Selected</span>
                                {cart.length > 0 && (
                                    <button
                                        onClick={clearCart}
                                        style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
                                    >
                                        Clear All Items
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="card-body" style={{ padding: 0 }}>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: '45%' }}>SKU / Product Info</th>
                                        <th>Warehouse</th>
                                        <th>Qty</th>
                                        <th style={{ textAlign: 'right' }}>Net Rate</th>
                                        <th style={{ textAlign: 'right' }}>Line Total</th>
                                        <th style={{ textAlign: 'right', width: '60px' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" style={{ padding: '64px 32px', textAlign: 'center' }}>
                                                <ShoppingCart size={48} color="var(--color-border)" style={{ margin: '0 auto 24px', display: 'block' }} />
                                                <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px', fontWeight: 'bold' }}>Your Requisition is Empty</h3>
                                                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '15px' }}>Add components to your cart to begin the checkout process.</p>
                                                <Link to="/" className="btn btn-primary" style={{ padding: '14px 24px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                                                    Continue Shopping
                                                </Link>
                                            </td>
                                        </tr>
                                    ) : (
                                        cart.map((item, idx) => (
                                            <tr key={idx}>
                                                <td>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{item.sku}</span>
                                                        <strong>{item.name}</strong>
                                                        <button
                                                            onClick={() => { removeFromCart(item.id); alert('Item moved to Project List.'); }}
                                                            style={{ background: 'none', border: 'none', padding: 0, marginTop: '8px', fontSize: '12px', color: 'var(--color-blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}
                                                        >
                                                            <ListPlus size={14} /> Move to Project List
                                                        </button>
                                                    </div>
                                                </td>
                                                <td style={{ verticalAlign: 'top', paddingTop: '16px' }}>{item.location.split(' ')[0]}</td>
                                                <td style={{ verticalAlign: 'top', paddingTop: '12px' }}>
                                                    <input
                                                        type="number"
                                                        value={item.qty}
                                                        onChange={(e) => updateCartQty(item.id, e.target.value)}
                                                        min="1"
                                                        style={{ width: '70px', height: '36px', padding: '4px 8px', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none', fontSize: '14px' }}
                                                        onFocus={e => e.currentTarget.style.borderColor = 'var(--color-blue)'}
                                                        onBlur={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                                                    />
                                                </td>
                                                <td style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '16px' }}>₹{item.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                                <td style={{ textAlign: 'right', fontWeight: 'bold', verticalAlign: 'top', paddingTop: '16px' }}>₹{(item.price * item.qty).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                                <td style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '12px' }}>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        style={{ background: 'none', border: 'none', color: '#ef4444', padding: '6px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', transition: 'all 0.2s' }}
                                                        title="Remove Item"
                                                        onMouseOver={e => e.currentTarget.style.background = '#fef2f2'}
                                                        onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Col: Quotation & Fulfillment Details */}
                <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    <div className="card">
                        <div className="card-header">
                            <h2>Quotation & Fulfillment Details</h2>
                        </div>
                        <div className="card-body">

                            {/* Fulfillment Options */}
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '12px', color: 'var(--text-main)' }}>Select Service Preference</label>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                                <label style={{ display: 'flex', gap: '12px', padding: '12px', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'var(--bg-canvas)', cursor: 'pointer', alignItems: 'flex-start' }}>
                                    <input type="radio" name="fulfillment" defaultChecked style={{ width: 'auto', marginTop: '4px', accentColor: 'var(--color-blue)' }} />
                                    <div>
                                        <strong style={{ display: 'block', color: 'var(--color-blue)' }}>Self-Pickup (Ex-Works)</strong>
                                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Select nearest warehouse for collection</span>
                                    </div>
                                </label>

                                <label style={{ display: 'flex', gap: '12px', padding: '12px', border: '1px solid var(--color-border)', borderRadius: '4px', cursor: 'pointer', alignItems: 'center' }}>
                                    <input type="radio" name="fulfillment" style={{ width: 'auto', accentColor: 'var(--color-blue)' }} />
                                    <div>
                                        <strong style={{ display: 'block' }}>Delivery to Site</strong>
                                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Include freight estimate in the quote</span>
                                    </div>
                                </label>
                            </div>

                            {/* Reference Logic */}
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--text-main)' }}>Client/Project Reference Number</label>
                                <input type="text" placeholder="e.g. Ref: Hilt-AC-2024" style={{ width: '100%', border: '1px solid var(--color-border)', padding: '10px 12px', borderRadius: '4px', fontSize: '14px' }} />
                                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>For your internal tracking purposes.</div>
                            </div>

                            <div style={{ marginBottom: '32px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--text-main)' }}>Quote Required By</label>
                                <select style={{ width: '100%', border: '1px solid var(--color-border)', padding: '10px 12px', borderRadius: '4px', fontSize: '14px', background: 'white' }}>
                                    <option value="Urgent">Urgent &lt; 4hrs</option>
                                    <option value="Same Day">Same Day</option>
                                    <option value="Within 24hrs">Within 24hrs</option>
                                </select>
                            </div>

                            {/* Invoice Summary */}
                            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '4px', marginBottom: '24px', border: '1px dashed var(--color-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                                    <span>Material Subtotal</span>
                                    <span>₹{cartTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--text-secondary)' }}>
                                    <span>Estimated Tax (GST 18%)</span>
                                    <span>₹{(cartTotal * 0.18).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px dashed var(--color-border)', paddingTop: '16px', fontWeight: 'bold', fontSize: '18px' }}>
                                    <span>Estimated Total</span>
                                    <span style={{ color: 'var(--color-blue)' }}>₹{(cartTotal * 1.18).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <button className="btn btn-primary" style={{ height: '48px', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }} disabled={cart.length === 0} onClick={() => alert('Quotation Request Submitted Successfully!')}>
                                    <FileText size={18} /> Submit Request for Quotation
                                </button>
                                <button className="btn btn-secondary" style={{ height: '48px', fontSize: '14px', background: 'transparent', border: '1px solid var(--color-border)' }}>
                                    Save Draft (Supervisor Edit)
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
