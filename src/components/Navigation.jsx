import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, ScanBarcode, FileText, CheckCircle, PackageSearch, FileSignature, Camera, X, ImageIcon, Bell } from 'lucide-react';
import { useStore } from '../store';

export default function Navigation() {
    const [isImageSearchOpen, setIsImageSearchOpen] = useState(false);
    const { cart } = useStore();
    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <>
            {/* Desktop Header */}
            <header className="desktop-only" style={{ background: '#0f172a', color: 'white', position: 'sticky', top: 0, zIndex: 100 }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '32px', padding: '16px 24px' }}>

                    {/* Logo */}
                    <Link to="/" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <PackageSearch size={28} color="var(--color-blue)" />
                        Osem<span style={{ color: 'var(--color-blue)', fontWeight: 400 }}>B2B</span>
                    </Link>

                    {/* Mega Search Bar */}
                    <div style={{ flex: 1, display: 'flex', background: 'white', borderRadius: '4px', overflow: 'hidden' }}>
                        <div
                            style={{ padding: '0 16px', display: 'flex', alignItems: 'center', background: '#f9fafb', borderRight: '1px solid var(--color-border)', cursor: 'pointer' }}
                            onClick={() => setIsImageSearchOpen(true)}
                            title="Search by Image"
                        >
                            <Camera size={20} color="var(--text-main)" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by Keyword, OEM Part #, or Unit Serial #"
                            style={{ border: 'none', borderRadius: 0, height: '48px', fontSize: '15px' }}
                        />
                        <button style={{ backgroundColor: 'var(--color-blue)', color: 'white', padding: '0 24px', fontWeight: 'bold' }}>
                            <Search size={20} />
                        </button>
                    </div>

                    {/* Global Toolbar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <Link to="/quote" style={{ color: '#cbd5e1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                            <FileSignature size={20} />
                            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Quote Gen</span>
                        </Link>

                        <Link to="/" style={{ color: '#cbd5e1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                            <FileText size={20} />
                            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Quick Order</span>
                        </Link>

                        <div style={{ position: 'relative', cursor: 'pointer' }}>
                            <Link to="/" style={{ color: '#cbd5e1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                <User size={20} />
                                <span style={{ fontSize: '11px', fontWeight: 'bold' }}>My Account</span>
                            </Link>
                            {/* Hidden Portal Dropdown Simulation */}
                            <div style={{ position: 'absolute', top: '40px', right: 0, background: 'white', border: '1px solid var(--color-border)', borderRadius: '4px', width: '240px', boxShadow: 'var(--shadow-md)', display: 'none' }}>
                                <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)' }}><strong style={{ color: 'var(--text-main)' }}>Supervisor Portal</strong></div>
                                <ul style={{ padding: '8px 0' }}>
                                    <li style={{ padding: '8px 16px', color: 'var(--text-main)' }}>Draft Quotes & Margins</li>
                                    <li style={{ padding: '8px 16px', color: 'var(--text-main)' }}>Order Approvals <span className="badge badge-amber" style={{ marginLeft: '4px' }}>3</span></li>
                                    <li style={{ padding: '8px 16px', color: 'var(--text-main)' }}>Compliance Vault</li>
                                    <li style={{ padding: '8px 16px', color: 'var(--text-main)' }}>My Sites/Equipment</li>
                                </ul>
                            </div>
                        </div>

                        <Link to="/checkout" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--color-green)', padding: '8px 16px', borderRadius: '4px', color: 'white', fontWeight: 'bold' }}>
                            <div style={{ position: 'relative' }}>
                                <ShoppingCart size={20} />
                                {itemCount > 0 && (
                                    <span style={{ position: 'absolute', top: '-8px', right: '-12px', background: 'var(--color-red)', color: 'white', fontSize: '10px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                        {itemCount}
                                    </span>
                                )}
                            </div>
                            <span>Cart</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="mobile-header mobile-only">
                <Link to="/" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                    <PackageSearch size={22} color="var(--color-blue)" />
                    Osem<span style={{ color: 'var(--color-blue)', fontWeight: 400 }}>B2B</span>
                </Link>
                <div style={{ position: 'relative' }}>
                    <Bell size={22} color="white" />
                    <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: 'var(--color-red)', width: '10px', height: '10px', borderRadius: '50%' }}></span>
                </div>
            </header>

            {/* Mobile Bottom Tab Bar */}
            <nav className="bottom-tab-bar mobile-only">
                <Link to="/" className="bottom-tab-item active">
                    <Search size={22} />
                    <span>Home</span>
                </Link>
                <div className="bottom-tab-item" onClick={() => setIsImageSearchOpen(true)}>
                    <Camera size={22} />
                    <span>Search</span>
                </div>
                <Link to="/quote" className="bottom-tab-item">
                    <FileSignature size={22} />
                    <span>Quotes</span>
                </Link>
                <Link to="/checkout" className="bottom-tab-item" style={{ position: 'relative' }}>
                    <ShoppingCart size={22} />
                    {itemCount > 0 && (
                        <span style={{ position: 'absolute', top: '10px', right: '14px', background: 'var(--color-red)', color: 'white', fontSize: '10px', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>{itemCount}</span>
                    )}
                    <span>Cart</span>
                </Link>
                <Link to="/" className="bottom-tab-item">
                    <User size={22} />
                    <span>Account</span>
                </Link>
            </nav>

            {/* Image Search Modal - Inspired by Google Lens */}
            {
                isImageSearchOpen && (
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'initial' }} onClick={() => setIsImageSearchOpen(false)}>
                        <div style={{ background: '#282a2d', width: '100%', maxWidth: '720px', borderRadius: '16px', overflow: 'hidden', padding: '24px', position: 'relative', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }} onClick={e => e.stopPropagation()}>
                            <button
                                onClick={() => setIsImageSearchOpen(false)}
                                style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', color: '#9aa0a6', cursor: 'pointer', padding: '4px' }}
                            >
                                <X size={24} />
                            </button>

                            <h2 style={{ textAlign: 'center', color: '#e8eaed', fontSize: '18px', fontWeight: '500', marginBottom: '24px', marginTop: '8px' }}>Search any product with Image</h2>

                            <div style={{ background: '#202124', borderRadius: '12px', padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ position: 'relative', width: '64px', height: '64px', marginBottom: '24px' }}>
                                    {/* Viewfinder Corners */}
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '16px', height: '16px', borderTop: '3px solid #5f6368', borderLeft: '3px solid #5f6368', borderTopLeftRadius: '4px' }}></div>
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '16px', height: '16px', borderTop: '3px solid #5f6368', borderRight: '3px solid #5f6368', borderTopRightRadius: '4px' }}></div>
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '16px', height: '16px', borderBottom: '3px solid #5f6368', borderLeft: '3px solid #5f6368', borderBottomLeftRadius: '4px' }}></div>
                                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '16px', height: '16px', borderBottom: '3px solid #5f6368', borderRight: '3px solid #5f6368', borderBottomRightRadius: '4px' }}></div>

                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <ImageIcon size={32} color="#8ab4f8" fill="#8ab4f8" strokeWidth={1} style={{ opacity: 0.8 }} />
                                    </div>
                                </div>

                                <p style={{ color: '#e8eaed', fontSize: '16px', marginBottom: '24px', fontWeight: 500 }}>
                                    Drag an image here or <span style={{ color: '#8ab4f8', textDecoration: 'underline', cursor: 'pointer' }}>upload a file</span>
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '16px 0', gap: '16px' }}>
                                    <div style={{ flex: 1, height: '1px', background: '#3c4043' }}></div>
                                    <span style={{ color: '#9aa0a6', fontSize: '13px', fontWeight: 500 }}>OR</span>
                                    <div style={{ flex: 1, height: '1px', background: '#3c4043' }}></div>
                                </div>

                                <div style={{ display: 'flex', width: '100%', gap: '12px', marginTop: '16px' }}>
                                    <input
                                        type="text"
                                        placeholder="Paste image link"
                                        style={{ flex: 1, background: '#303134', border: '1px solid #3c4043', borderRadius: '24px', padding: '0 24px', color: '#e8eaed', fontSize: '15px', outline: 'none', height: '48px' }}
                                        onFocus={(e) => e.currentTarget.style.border = '1px solid #5f6368'}
                                        onBlur={(e) => e.currentTarget.style.border = '1px solid #3c4043'}
                                    />
                                    <button
                                        style={{ background: '#303134', border: '1px solid #3c4043', borderRadius: '24px', padding: '0 32px', color: '#8ab4f8', fontSize: '14px', fontWeight: 500, cursor: 'pointer', height: '48px', transition: 'background 0.2s' }}
                                        onClick={() => alert('Analyzing compressor specifications from image...')}
                                        onMouseOver={(e) => e.currentTarget.style.background = '#3c4043'}
                                        onMouseOut={(e) => e.currentTarget.style.background = '#303134'}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
