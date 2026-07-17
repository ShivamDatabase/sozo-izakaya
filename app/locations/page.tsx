"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingButtons from "@/components/ui/FloatingButtons";
import { getLocations } from "@/app/actions/locations";
import { ZONES, type Zone, type Location } from "@/lib/locations";
import styles from "./page.module.css";


interface NearestResult {
  id: string;
  distance: number;
}

function haversine(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function LocationsPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [zone, setZone] = useState<Zone>("All Areas");
  const [nearest, setNearest] = useState<NearestResult | null>(null);
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState("");

  useEffect(() => {
    getLocations().then((res) => setLocations(res as Location[]));
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    
    // Slight timeout ensures React has finished painting the new elements
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale")
        .forEach((el) => obs.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, [locations, nearest, zone]);

  const findNearest = () => {
    setLocating(true);
    setLocError("");
    if (locations.length === 0) {
      setLocError("Locations not loaded yet.");
      setLocating(false);
      return;
    }
    if (!navigator.geolocation) {
      setLocError("Geolocation not supported by your browser.");
      setLocating(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let nearestLoc = locations[0];
        let minDist = haversine(latitude, longitude, locations[0].lat, locations[0].lng);
        locations.forEach((loc) => {
          const d = haversine(latitude, longitude, loc.lat, loc.lng);
          if (d < minDist) { minDist = d; nearestLoc = loc; }
        });
        setNearest({ id: nearestLoc.id, distance: minDist });
        setLocating(false);
      },
      () => {
        setLocError("Unable to get your location. Please allow location access.");
        setLocating(false);
      }
    );
  };

  const filtered =
    zone === "All Areas" ? locations : locations.filter((l) => l.zone === zone);

  return (
    <>
      <ScrollProgress />
      <FloatingButtons />
      <Navbar />

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/dining_ambience.jpg" alt="Sozo Izakaya Locations" fill priority quality={90} style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroBadge}>✦ 4 Outlets Across Mumbai ✦</p>
          <h1 className={styles.heroTitle}>Our <em className={styles.gold}>Locations</em></h1>
          <p className={styles.heroSub}>Find your nearest Sozo Izakaya and book a table today</p>
        </div>
      </div>

      <main className={styles.main}>
        <div className="container">

          {/* Find Nearest Feature */}
          <div className={`${styles.nearestBox} reveal`}>
            <div className={styles.nearestLeft}>
              <span className={styles.nearestIcon}>📍</span>
              <div>
                <h3 className={styles.nearestTitle}>Find Your Nearest Sozo</h3>
                <p className={styles.nearestDesc}>Allow location access to find the closest outlet to you.</p>
              </div>
            </div>
            <button className={styles.nearestBtn} onClick={findNearest} disabled={locating}>
              {locating ? "Locating…" : "Find Nearest ↗"}
            </button>
          </div>

          {nearest && (
            <div className={`${styles.nearestResult} reveal`}>
              {(() => {
                const loc = locations.find((l) => l.id === nearest.id)!;
                return (
                  <>
                    <span className={styles.nearestPin}>🎯</span>
                    <div>
                      <strong>{loc.name}</strong>{" "}is your nearest outlet&nbsp;
                      <span className={styles.nearestDist}>({nearest.distance.toFixed(1)} km away)</span>
                    </div>
                    <Link href={`/locations/${loc.slug}`} className={styles.nearestView}>View Outlet →</Link>
                  </>
                );
              })()}
            </div>
          )}
          {locError && <p className={styles.locError}>{locError}</p>}

          {/* Zone Filter */}
          <div className={`${styles.zoneFilter} reveal`}>
            {ZONES.map((z) => (
              <button
                key={z}
                className={`${styles.zoneBtn} ${zone === z ? styles.zoneActive : ""}`}
                onClick={() => setZone(z)}
              >
                {z}
              </button>
            ))}
          </div>

          {/* Location Cards */}
          <div className={styles.grid}>
            {filtered.map((loc, i) => (
              <div
                key={loc.id}
                className={`${styles.card} reveal ${nearest?.id === loc.id ? styles.cardNearest : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {nearest?.id === loc.id && (
                  <div className={styles.nearestBadge}>🎯 Nearest to You</div>
                )}
                <div className={styles.cardImg}>
                  <Image src={loc.image} alt={loc.name} fill style={{ objectFit: "cover" }} sizes="(max-width:900px) 90vw, 45vw" loading="lazy" className={styles.cardImgEl} />
                  <div className={styles.cardZone}>{loc.zone}</div>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{loc.name}</h2>
                  <p className={styles.cardArea}>📍 {loc.area}</p>
                  <p className={styles.cardAddr}>{loc.address}</p>
                  <p className={styles.cardPhone}>📞 <a href={`tel:${loc.phoneRaw}`}>{loc.phone}</a></p>

                  <div className={styles.cardSpecialties}>
                    {loc.specialties.map((s) => (
                      <span key={s} className={styles.specialty}>{s}</span>
                    ))}
                  </div>

                  <div className={styles.cardFeatures}>
                    {loc.features.map((f) => (
                      <span key={f} className={styles.feature}>✦ {f}</span>
                    ))}
                  </div>

                  <div className={styles.cardActions}>
                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.actionMap}`}>
                      🗺️ View on Map
                    </a>
                    <a href={`tel:${loc.phoneRaw}`} className={`${styles.actionBtn} ${styles.actionCall}`}>
                      📞 Call Now
                    </a>
                    <Link href={`/locations/${loc.slug}`} className={`${styles.actionBtn} ${styles.actionReserve}`}>
                      Reserve Table
                    </Link>
                  </div>

                  <Link href={`/locations/${loc.slug}`} className={styles.viewDetails}>
                    View Full Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* All Mumbai Map */}
          <div className={`${styles.allMapSection} reveal`}>
            <h2 className={styles.allMapTitle}>All <em className={styles.gold}>Mumbai Locations</em></h2>
            <p className={styles.allMapDesc}>Sozo Izakaya is spread across Mumbai's key neighbourhoods</p>
            <div className={styles.mapGrid}>
              {locations.map((loc) => (
                <div key={loc.id} className={styles.miniMapCard}>
                  <h4>{loc.area}</h4>
                  <iframe src={loc.mapEmbed} width="100%" height="180" style={{ border: 0, borderRadius: 4, filter: "grayscale(20%)" }} loading="lazy" title={loc.name} />
                  <Link href={`/locations/${loc.slug}`} className={styles.miniMapLink}>Details →</Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
