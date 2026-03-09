import { UploadCloud, FileText, CheckCircle, CreditCard, Clock } from 'lucide-react';

export default function Checkout() {
    return (
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0' }}>
            <h1 style={{ marginBottom: '8px' }}>Procurement Cart & Wallet</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Finalize order details, attach PO, and process 30/60-day credit terms.</p>

            <div className="sidebar-layout">
                <div className="main-col" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="card">
                        <div className="card-header">
                            <h2>Verified Cart Items</h2>
                        </div>
                        <div className="card-body">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Item / Spec</th>
                                        <th>Qty</th>
                                        <th>Rate</th>
                                        <th>Net Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Copeland Scroll 5-Ton</strong><br />
                                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>ZPS51K5-PFV • 208/230V</span>
                                        </td>
                                        <td>1</td>
                                        <td>$845.00</td>
                                        <td>$845.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Carrier Run Capacitor</strong><br />
                                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>45/5 MFD 440V Dual</span>
                                        </td>
                                        <td>2</td>
                                        <td>$18.50</td>
                                        <td>$37.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2>B2B Payment & Documentation</h2>
                        </div>
                        <div className="card-body">
                            <div className="grid-2" style={{ gap: '24px' }}>
                                <div>
                                    <h3 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--text-secondary)' }}>Payment Method</h3>
                                    <div style={{ padding: '16px', border: '1px solid var(--color-green)', borderRadius: 'var(--radius-sm)', background: 'var(--color-green-light)', position: 'relative' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                            <Clock size={16} color="var(--color-green)" />
                                            <strong style={{ color: 'var(--color-green)' }}>Net 30/60 Credit Line</strong>
                                        </div>
                                        <p style={{ fontSize: '13px', color: 'var(--color-green)' }}>Approved Credit Limit: $25,000.00</p>
                                        <p style={{ fontSize: '13px', color: 'var(--color-green)', fontWeight: 'bold' }}>Available Balance: $14,280.00</p>
                                        <CheckCircle style={{ position: 'absolute', top: '16px', right: '16px' }} color="var(--color-green)" />
                                    </div>

                                    <button className="btn btn-secondary" style={{ width: '100%', marginTop: '12px' }}>
                                        <CreditCard size={16} /> Pay by Corp Card Instead
                                    </button>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--text-secondary)' }}>Upload Purchase Order (PO)</h3>
                                    <div style={{ height: '90px', border: '2px dashed var(--color-border)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--text-secondary)', cursor: 'pointer', background: '#f8fafc' }}>
                                        <UploadCloud size={24} style={{ marginBottom: '4px' }} />
                                        <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Drag & Drop PO PDF</span>
                                    </div>

                                    <h3 style={{ fontSize: '14px', margin: '16px 0 8px', color: 'var(--text-secondary)' }}>Job Reference / Cost Center</h3>
                                    <input type="text" placeholder="e.g., SITE-14 Tech Park Tower B" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <div className="card">
                        <div className="card-header">
                            <h2>GST Invoice Summary</h2>
                        </div>
                        <div className="card-body">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '13px' }}>
                                <span>Subtotal (Net)</span>
                                <strong>$882.00</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '13px' }}>
                                <span>Standard Delivery (2 Days)</span>
                                <strong>$45.00</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '13px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
                                <span className="badge badge-amber">GST / SGST (18%)</span>
                                <strong>$166.86</strong>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '18px' }}>
                                <span>Total Payload</span>
                                <strong>$1,093.86</strong>
                            </div>

                            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: 'var(--radius-sm)', marginBottom: '24px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                                <strong>Term Note:</strong> Invoice #INV-8890 will be generated upon dispatch. Due date automatically set to Net 30.
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', minHeight: '48px', marginBottom: '12px' }}>
                                <CheckCircle size={16} /> Authorize Order ($1,093.86)
                            </button>
                            <button className="btn btn-secondary" style={{ width: '100%' }}>
                                <FileText size={16} /> Preview Proforma Invoice
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
