export default function MapArea() {
    return (
        <main className="map-area">
            <div className="map-ph"><span>Area Peta</span></div>

            

            {/* Controls right */}
            <div className="map-controls-right">
                <div className="map-btn">
                    <svg viewBox="0 0 24 24">
                        <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                </div>
                <div className="map-btn">
                    <svg viewBox="0 0 24 24">
                        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                </div>
                <div className="map-btn">+</div>
                <div className="map-btn" style={{ fontSize: 22 }}>−</div>
                <div className="map-btn">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3" />
                        <line x1="12" y1="2" x2="12" y2="7" /><line x1="12" y1="17" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="7" y2="12" /><line x1="17" y1="12" x2="22" y2="12" />
                    </svg>
                </div>
                <div className="map-btn">
                    <svg viewBox="0 0 24 24">
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="8" y1="7" x2="8" y2="9" /><line x1="12" y1="5" x2="12" y2="8" /><line x1="16" y1="7" x2="16" y2="9" />
                    </svg>
                </div>
                <div className="map-btn">
                    <svg viewBox="0 0 24 24">
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                </div>
                <div className="map-btn">
                    <svg viewBox="0 0 24 24">
                        <polyline points="12 6 12 12 16 14" /><circle cx="12" cy="12" r="9" />
                    </svg>
                </div>
            </div>

            {/* Scale */}
            <div className="map-scale">
                <span>400 km</span>
                <div className="scale-bar" />
            </div>

            {/* Credit */}
            <div className="map-credit">©2021 Developed by Braga Technologies</div>
        </main>
    );
}