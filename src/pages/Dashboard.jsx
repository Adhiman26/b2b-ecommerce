import { useState, useRef, useEffect } from 'react';
import { useStore } from '../store';
import { Camera, FileText, Send, CheckCircle, AlertTriangle, Download, Plus, Maximize, X } from 'lucide-react';

function TechnicianDashboard() {
    const videoRef = useRef(null);
    const [isScanning, setIsScanning] = useState(false);
    const [scanSuccess, setScanSuccess] = useState(false);
    const [cameraError, setCameraError] = useState(false);
    const [addedParts, setAddedParts] = useState([]);

    const { addQuote } = useStore();

    const startCamera = async () => {
        setIsScanning(true);
        setScanSuccess(false);
        setCameraError(false);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }

            // Simulate scanning process completion after 3s
            setTimeout(() => {
                stopCamera(stream);
                setIsScanning(false);
                setScanSuccess(true);
            }, 3000);
        } catch (err) {
            console.error("Camera access denied or unvailable:", err);
            setCameraError(true);
            // Fallback: fast simulate success if camera hardware is unavailable
            setTimeout(() => {
                setIsScanning(false);
                setScanSuccess(true);
            }, 2000);
        }
    };

    const stopCamera = (streamToStop) => {
        if (streamToStop) {
            streamToStop.getTracks().forEach(track => track.stop());
        } else if (videoRef.current && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        }
    };

    useEffect(() => {
        return () => stopCamera();
    }, []);

    const togglePart = (part) => {
        if (addedParts.includes(part)) {
            setAddedParts(addedParts.filter(p => p !== part));
        } else {
            setAddedParts([...addedParts, part]);
        }
    };

    const handlePushRFQ = () => {
        let cost = 0;
        if (addedParts.includes('compressor')) cost += 562.50;
        if (addedParts.includes('txv')) cost += 85.00;

        const newQuote = {
            id: `Q-${Math.floor(1000 + Math.random() * 9000)}`,
            parts: addedParts,
            status: 'pending',
            technician: 'Sameer',
            baseCost: cost
        };
        addQuote(newQuote);
        setAddedParts([]);
        setScanSuccess(false);
        setIsScanning(false);
        alert(`Quote ${newQuote.id} pushed to Supervisor queue successfully!`);
    };

    return (
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '16px' }}>Diagnostic Input</h1>

            <div className="card" style={{ marginBottom: '16px' }}>
                <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ margin: 0 }}>Unit Scanner</h2>
                    {scanSuccess && <span className="badge badge-green"><CheckCircle size={14} style={{ marginRight: '4px' }} /> Verified Match</span>}
                </div>
                <div className="card-body">
                    <div className="camera-view" style={{ backgroundColor: '#000', position: 'relative', height: scanSuccess ? '160px' : '300px', transition: 'height 0.3s' }}>
                        {!isScanning && !scanSuccess && (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                <Camera size={48} color="rgba(255,255,255,0.5)" />
                                <button className="btn btn-primary" onClick={startCamera}>
                                    <Maximize size={16} /> Tap to Scan Unit QR/SN
                                </button>
                                {cameraError && <p style={{ color: 'var(--color-amber)', fontSize: '12px', marginTop: '8px', textAlign: 'center', padding: '0 16px' }}>Camera unavailable. Simulating scan instead...</p>}
                            </div>
                        )}

                        {isScanning && (
                            <>
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                                />
                                <div className="scanner-overlay" style={{ zIndex: 10 }}></div>
                                <p style={{ color: 'white', position: 'absolute', bottom: '20px', zIndex: 10, background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: 'var(--radius-sm)' }}>
                                    Align QR/Barcode in frame...
                                </p>
                            </>
                        )}

                        {scanSuccess && (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                                <CheckCircle size={48} color="var(--color-green)" style={{ marginBottom: '12px' }} />
                                <h3 style={{ margin: 0 }}>Scan Complete</h3>
                            </div>
                        )}
                    </div>

                    {scanSuccess && (
                        <div style={{ marginTop: '16px', padding: '16px', background: 'var(--color-green-light)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-green)' }}>
                            <h3 style={{ color: 'var(--color-green)', marginBottom: '8px', marginTop: 0 }}>Detected Model: Carrier Infinity 26</h3>
                            <p style={{ color: 'var(--text-main)', fontSize: '13px', margin: '4px 0' }}><strong>Serial:</strong> CR-2900-XX</p>
                            <p style={{ color: 'var(--text-main)', fontSize: '13px', margin: '4px 0' }}><strong>Install Date:</strong> March 2021</p>
                            <p style={{ color: 'var(--text-main)', fontSize: '13px', margin: '4px 0' }}><strong>Warranty:</strong> Active (Parts Only)</p>
                            <button className="btn btn-secondary" style={{ marginTop: '12px', fontSize: '12px', padding: '6px 12px' }} onClick={() => setScanSuccess(false)}>Retake Scan</button>
                        </div>
                    )}
                </div>
            </div>

            <div className={`card ${!scanSuccess ? 'disabled' : ''}`} style={{ marginBottom: '16px', opacity: !scanSuccess ? 0.5 : 1, pointerEvents: !scanSuccess ? 'none' : 'auto', transition: 'opacity 0.3s' }}>
                <div className="card-header">
                    <h2 style={{ margin: 0 }}>Exploded View & Spare Selection</h2>
                </div>
                <div className="card-body">
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '12px', fontSize: '13px' }}>Identify faulty components from the schematic.</p>
                    <div className="exploded-view" style={{ position: 'relative' }}>
                        <div className="hotspot" style={{ top: '30%', left: '40%' }}>1</div>
                        <div className="hotspot" style={{ top: '60%', left: '70%' }}>2</div>
                        <div className="hotspot" style={{ top: '80%', left: '20%' }}>3</div>
                    </div>
                    <div style={{ marginTop: '16px' }} className="grid-2">
                        <button
                            className={`btn ${addedParts.includes('compressor') ? 'btn-green' : 'btn-secondary'}`}
                            onClick={() => togglePart('compressor')}
                        >
                            {addedParts.includes('compressor') ? <CheckCircle size={16} /> : <Plus size={16} />} 5-Ton Compressor
                        </button>
                        <button
                            className={`btn ${addedParts.includes('txv') ? 'btn-green' : 'btn-secondary'}`}
                            onClick={() => togglePart('txv')}
                        >
                            {addedParts.includes('txv') ? <CheckCircle size={16} /> : <Plus size={16} />} TXV Valve R-410A
                        </button>
                    </div>
                </div>
            </div>

            <button
                className={`btn ${addedParts.length > 0 ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', minHeight: '48px', marginTop: '16px', opacity: !scanSuccess ? 0.5 : 1, pointerEvents: !scanSuccess ? 'none' : 'auto' }}
                disabled={addedParts.length === 0}
                onClick={handlePushRFQ}
            >
                <Send size={18} /> {addedParts.length > 0 ? `Push ${addedParts.length} Parts RFQ to Supervisor` : 'Select Parts to Quote'}
            </button>
        </div>
    );
}

function SupervisorDashboard() {
    const { quotes } = useStore();
    const [markup, setMarkup] = useState(25);
    const [activeQuoteId, setActiveQuoteId] = useState(quotes.length > 0 ? quotes[0].id : null);

    const activeQuote = quotes.find(q => q.id === activeQuoteId) || quotes[0];
    const baseCost = activeQuote ? activeQuote.baseCost : 0;
    const laborCost = 400.00; // Fixed flat rate logic for demo
    const partTotal = baseCost * (1 + markup / 100);
    const finalTotal = partTotal + laborCost;

    return (
        <div>
            <h1 style={{ marginBottom: '24px' }}>Coordination & Margin Control</h1>

            <div className="grid-2" style={{ marginBottom: '24px' }}>
                <div className="card">
                    <div className="card-header">
                        <h2>Pending Quotes (From Techs)</h2>
                    </div>
                    <div className="card-body">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Job ID</th>
                                    <th>Tech</th>
                                    <th>Base Cost</th>
                                    <th>Markup (%)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotes.map(quote => (
                                    <tr
                                        key={quote.id}
                                        style={{ background: activeQuoteId === quote.id ? '#f1f5f9' : 'transparent', cursor: 'pointer' }}
                                        onClick={() => setActiveQuoteId(quote.id)}
                                    >
                                        <td>{quote.id}</td>
                                        <td>{quote.technician}</td>
                                        <td>${quote.baseCost.toFixed(2)}</td>
                                        <td className="markup-tool" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={(e) => e.stopPropagation()}>
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={markup}
                                                onChange={(e) => setMarkup(Number(e.target.value))}
                                                style={{ width: '80px', padding: 0 }}
                                            />
                                            <input
                                                type="number"
                                                value={markup}
                                                onChange={(e) => setMarkup(Number(e.target.value))}
                                                style={{ width: '60px' }}
                                            /> %
                                        </td>
                                        <td>
                                            <button className="btn btn-primary" style={{ padding: '6px 12px' }}><FileText size={14} /> Gen PDF</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h2>Kanban: Site-Visit Status</h2>
                    </div>
                    <div className="card-body">
                        <div className="kanban-board">
                            <div className="kanban-col">
                                <div className="kanban-header">
                                    <span>Diagnosing</span>
                                    <span className="badge badge-amber">1</span>
                                </div>
                                <div className="kanban-card">
                                    <h4>Retail Mall Unit 4</h4>
                                    <p className="kanban-card-meta"><span>Tech: Sameer</span> <span>Today</span></p>
                                </div>
                            </div>
                            <div className="kanban-col">
                                <div className="kanban-header">
                                    <span>Awaiting Approval</span>
                                    <span className="badge badge-amber">2</span>
                                </div>
                                <div className="kanban-card">
                                    <h4>Tech Park Tower B</h4>
                                    <p className="kanban-card-meta"><span>Approval req by Rajesh</span> <span>2 hrs</span></p>
                                </div>
                            </div>
                            <div className="kanban-col">
                                <div className="kanban-header">
                                    <span>Parts Ordered</span>
                                    <span className="badge badge-green">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2>PDF Quote Auto-Gen Preview</h2>
                </div>
                <div className="card-body" style={{ background: '#cbd5e1', padding: '32px' }}>
                    <div className="pdf-preview">
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #0f172a', paddingBottom: '16px', marginBottom: '24px' }}>
                            <h2>HVAC Pulse Service Pro</h2>
                            <div style={{ textAlign: 'right' }}>
                                <strong>Quote {activeQuote ? `#${activeQuote.id}` : '#1001'}</strong><br />
                                Date: Oct 24, 2026
                            </div>
                        </div>
                        <table style={{ width: '100%', marginBottom: '32px' }} className="data-table">
                            <tr style={{ background: 'transparent' }}>
                                <th style={{ background: 'transparent' }}>Description</th>
                                <th style={{ background: 'transparent', textAlign: 'right' }}>Amount</th>
                            </tr>
                            {activeQuote && activeQuote.parts.map((p, idx) => (
                                <tr key={idx}>
                                    <td style={{ textTransform: 'capitalize' }}>OEM Replacement ({p})</td>
                                    <td style={{ textAlign: 'right' }}>-----</td>
                                </tr>
                            ))}
                            <tr><td style={{ fontWeight: '500' }}>Parts Subtotal (inc. margin)</td><td style={{ textAlign: 'right' }}>${partTotal.toFixed(2)}</td></tr>
                            <tr><td style={{ fontWeight: '500' }}>Labor (Est. 4 hours)</td><td style={{ textAlign: 'right' }}>${laborCost.toFixed(2)}</td></tr>
                            <tr style={{ fontWeight: 'bold', borderTop: '2px solid var(--color-border)' }}><td>Total</td><td style={{ textAlign: 'right', fontSize: '18px', color: 'var(--color-green)' }}>${finalTotal.toFixed(2)}</td></tr>
                        </table>
                        <button className="btn btn-green" style={{ width: '100%' }}>Send to Client & Request PO</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProcurementDashboard() {
    return (
        <div>
            <h1 style={{ marginBottom: '24px' }}>Audit, Compliance & Approvals</h1>

            <div className="grid-3" style={{ marginBottom: '24px' }}>
                <div className="card">
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ color: 'var(--text-secondary)' }}>Pending Approvals</h3>
                        <span style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--color-amber)' }}>14</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ color: 'var(--text-secondary)' }}>Compliance Missing</h3>
                        <span style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--color-red)' }}>2</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ color: 'var(--text-secondary)' }}>Approved This Week</h3>
                        <span style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--color-green)' }}>56</span>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2>Approval Requests & Compliance Vault</h2>
                </div>
                <div className="card-body">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Req ID</th>
                                <th>Project / Supervisor</th>
                                <th>Part Specs</th>
                                <th>Compliance Documents</th>
                                <th>Match</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>REQ-2099</td>
                                <td>Tech Park / Shilpa</td>
                                <td>TXV Valve - R410A Component</td>
                                <td>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <span className="badge badge-green"><Download size={12} style={{ marginRight: '4px' }} /> GST</span>
                                        <span className="badge badge-green"><Download size={12} style={{ marginRight: '4px' }} /> SDS</span>
                                    </div>
                                </td>
                                <td><span className="badge badge-green"><CheckCircle size={12} style={{ marginRight: '4px' }} /> Verified Match</span></td>
                                <td>
                                    <button className="btn btn-primary" style={{ padding: '6px 12px' }}>Approve PO</button>
                                </td>
                            </tr>
                            <tr>
                                <td>REQ-2100</td>
                                <td>Retail Mall / Shilpa</td>
                                <td>Compressor 5-Ton</td>
                                <td>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <span className="badge badge-red"><AlertTriangle size={12} style={{ marginRight: '4px' }} /> Missing Warranty</span>
                                    </div>
                                </td>
                                <td><span className="badge badge-amber"><AlertTriangle size={12} style={{ marginRight: '4px' }} /> Voltage Mismatch Risk</span></td>
                                <td>
                                    <button className="btn btn-secondary" style={{ padding: '6px 12px' }}>Review Specs</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default function Dashboard() {
    const { userRole } = useStore();

    return (
        <>
            {userRole === 'technician' && <TechnicianDashboard />}
            {userRole === 'supervisor' && <SupervisorDashboard />}
            {userRole === 'procurement' && <ProcurementDashboard />}
        </>
    );
}
