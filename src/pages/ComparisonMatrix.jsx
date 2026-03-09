import { XCircle, CheckCircle } from 'lucide-react';

export default function ComparisonMatrix() {
    const parts = [
        {
            id: 1,
            model: 'Copeland ZPS51K5-PFV',
            brand: 'Copeland Scroll',
            gas: 'R-410A',
            seer2: 'Up to 18',
            tonnage: '5 Ton',
            voltage: '208/230V 1-PH',
            amperage: '19.8 RLA',
            lra: '109.0 LRA',
            capacity: '51,000 BTU/h',
            connectionSuction: '7/8" Stub',
            connectionLiquid: '1/2" Stub',
            oilType: 'POE',
            dimensions: '9.69" x 9.69" x 16.92"',
            weight: '84.5 lbs',
            warranty: '10-Year Limited',
            price: '$845.00',
            stock: '94 in stock',
            diffSEER2: false,
            diffAmperage: false,
            diffGas: false,
            diffLRA: false,
        },
        {
            id: 2,
            model: 'Bristol H29B35UABCA',
            brand: 'Bristol Compressors',
            gas: 'R-410A',
            seer2: 'Up to 16',
            tonnage: '5 Ton',
            voltage: '208/230V 1-PH',
            amperage: '22.4 RLA',
            lra: '137.0 LRA',
            capacity: '49,500 BTU/h',
            connectionSuction: '7/8" Stub',
            connectionLiquid: '1/2" Stub',
            oilType: 'POE',
            dimensions: '10.5" x 10.5" x 15.2"',
            weight: '92.0 lbs',
            warranty: '5-Year Limited',
            price: '$790.00',
            stock: '12 in stock',
            diffSEER2: true,
            diffAmperage: true,
            diffGas: false,
            diffLRA: true,
        },
        {
            id: 3,
            model: 'LG APB051KAA',
            brand: 'LG Electronics',
            gas: 'R-32',
            seer2: 'Up to 20',
            tonnage: '5 Ton',
            voltage: '208/230V 1-PH',
            amperage: '18.5 RLA',
            lra: '98.0 LRA',
            capacity: '52,000 BTU/h',
            connectionSuction: '7/8" Stub',
            connectionLiquid: '3/8" Stub',
            oilType: 'PVE',
            dimensions: '9.4" x 9.4" x 17.1"',
            weight: '82.0 lbs',
            warranty: '10-Year Limited',
            price: '$920.00',
            stock: 'Backordered',
            diffSEER2: true,
            diffAmperage: true,
            diffGas: true,
            diffLRA: true,
        },
        {
            id: 4,
            model: 'Danfoss HRP051T4',
            brand: 'Danfoss Scrolls',
            gas: 'R-410A',
            seer2: 'Up to 18',
            tonnage: '5 Ton',
            voltage: '208/230V 1-PH',
            amperage: '19.5 RLA',
            lra: '110.0 LRA',
            capacity: '51,200 BTU/h',
            connectionSuction: '7/8" Rotolock',
            connectionLiquid: '1/2" Rotolock',
            oilType: 'POE',
            dimensions: '9.5" x 9.5" x 16.8"',
            weight: '85.0 lbs',
            warranty: '1-Year Commercial',
            price: '$865.00',
            stock: '4 in stock',
            diffSEER2: false,
            diffAmperage: false,
            diffGas: false,
            diffLRA: false,
        }
    ];

    return (
        <div>
            <h1 style={{ marginBottom: '8px' }}>Technical Comparison Matrix</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Review spec differences before procurement validation.</p>

            <div className="table-wrapper" style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
                <table className="data-table" style={{ fontSize: '14px' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '15%' }}>Spec Parameter</th>
                            {parts.map(p => (
                                <th key={p.id} style={{ width: '21.25%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 'normal' }}>{p.brand}</span>
                                        <strong style={{ fontSize: '16px' }}>{p.model}</strong>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Nominal Tonnage</td>
                            {parts.map(p => (
                                <td key={`ton-${p.id}`}>
                                    <span>{p.tonnage}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Cooling Capacity</td>
                            {parts.map(p => (
                                <td key={`cap-${p.id}`}>
                                    <span>{p.capacity}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Refrigerant Gas Type</td>
                            {parts.map(p => (
                                <td key={`gas-${p.id}`} className={p.diffGas ? "diff-cell" : ""}>
                                    <span className={p.diffGas ? "diff-highlight" : ""}>{p.gas}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Max System Efficiency</td>
                            {parts.map(p => (
                                <td key={`seer2-${p.id}`} className={p.diffSEER2 ? "diff-cell" : ""}>
                                    <span className={p.diffSEER2 ? "diff-highlight" : ""}>{p.seer2} SEER2</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Voltage / Phase</td>
                            {parts.map(p => (
                                <td key={`vol-${p.id}`}>
                                    <span>{p.voltage}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Rated Load Amps</td>
                            {parts.map(p => (
                                <td key={`amp-${p.id}`} className={p.diffAmperage ? "diff-cell" : ""}>
                                    <span className={p.diffAmperage ? "diff-highlight" : ""}>{p.amperage}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Locked Rotor Amps</td>
                            {parts.map(p => (
                                <td key={`lra-${p.id}`} className={p.diffLRA ? "diff-cell" : ""}>
                                    <span className={p.diffLRA ? "diff-highlight" : ""}>{p.lra}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Suction Connection</td>
                            {parts.map(p => (
                                <td key={`suc-${p.id}`}>
                                    <span>{p.connectionSuction}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Liquid Connection</td>
                            {parts.map(p => (
                                <td key={`liq-${p.id}`}>
                                    <span>{p.connectionLiquid}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Charged Oil Type</td>
                            {parts.map(p => (
                                <td key={`oil-${p.id}`}>
                                    <span>{p.oilType}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Physical Dimensions</td>
                            {parts.map(p => (
                                <td key={`dim-${p.id}`}>
                                    <span>{p.dimensions}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Dry Weight</td>
                            {parts.map(p => (
                                <td key={`wt-${p.id}`}>
                                    <span>{p.weight}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Manufacturer Warranty</td>
                            {parts.map(p => (
                                <td key={`war-${p.id}`}>
                                    <span>{p.warranty}</span>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Unit Cost (List)</td>
                            {parts.map(p => (
                                <td key={`cost-${p.id}`} style={{ fontWeight: 'bold' }}>
                                    {p.price}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Availability</td>
                            {parts.map(p => (
                                <td key={`stock-${p.id}`}>
                                    {p.stock === 'Backordered' ?
                                        <span className="badge badge-red">{p.stock}</span> :
                                        <span className="badge badge-green">{p.stock}</span>}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{ border: 'none' }}></td>
                            {parts.map(p => (
                                <td key={`act-${p.id}`} style={{ border: 'none', paddingTop: '16px' }}>
                                    <button className="btn btn-primary" style={{ width: '100%' }}>Substitute Part</button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
