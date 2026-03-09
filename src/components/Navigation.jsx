import { NavLink } from 'react-router-dom';
import { useStore } from '../store';
import { Package, LayoutDashboard, GitCompare, CreditCard, Settings } from 'lucide-react';

export default function Navigation() {
    const { userRole, setUserRole } = useStore();

    const getRoleName = () => {
        switch (userRole) {
            case 'technician': return 'Sameer - Field Tech';
            case 'supervisor': return 'Shilpa - Ops Supervisor';
            case 'procurement': return 'Rajesh - Procurement Mgr';
            default: return 'User';
        }
    };

    return (
        <nav className="top-nav">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '16px' }}>
                <Settings size={20} color="#10b981" />
                <span>HVAC Pulse B2B</span>
            </div>

            <div className="nav-links">
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                    <LayoutDashboard size={18} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                    Dashboard
                </NavLink>
                <NavLink to="/pdp/1" className={({ isActive }) => isActive ? 'active' : ''}>
                    <Package size={18} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                    Parts
                </NavLink>
                <NavLink to="/compare" className={({ isActive }) => isActive ? 'active' : ''}>
                    <GitCompare size={18} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                    Compare
                </NavLink>
                <NavLink to="/checkout" className={({ isActive }) => isActive ? 'active' : ''}>
                    <CreditCard size={18} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                    Finance
                </NavLink>
            </div>

            <div className="role-selector">
                <select
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                >
                    <option value="technician">Technician (Sameer)</option>
                    <option value="supervisor">Supervisor (Shilpa)</option>
                    <option value="procurement">Procurement (Rajesh)</option>
                </select>
                <div className="role-badge">{getRoleName()}</div>
            </div>
        </nav>
    );
}
