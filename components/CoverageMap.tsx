"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import { coverageRegions } from "@/data/coverage";

// We manage the Leaflet map imperatively (instead of react-leaflet's
// <MapContainer>) because MapContainer doesn't reliably survive React's
// dev-mode Strict Mode double effect invocation (mount -> cleanup -> mount
// again): Leaflet stamps the container div with a `_leaflet_id` on init,
// and if cleanup hasn't fully cleared it before the second mount, the
// second `L.map()` call throws "Map container is already initialized."
// Doing it ourselves lets us guard against that directly and guarantees
// `map.remove()` runs on unmount.
export default function CoverageMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Defensive guard: if a stale Leaflet instance is still stamped on
    // this DOM node (e.g. from a Strict Mode remount), clear the stamp
    // before creating a new map instead of letting Leaflet throw.
    const stamped = container as HTMLDivElement & { _leaflet_id?: number };
    if (stamped._leaflet_id) {
      stamped._leaflet_id = undefined;
    }

    const map = L.map(container, {
      center: [-3.5, 117],
      zoom: 5,
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    coverageRegions.forEach((region) => {
      const color = region.status === "available" ? "#D8207C" : "#e9b93a";
      L.circleMarker([region.lat, region.lng], {
        radius: 9,
        color,
        fillColor: color,
        fillOpacity: 0.55,
        weight: 2,
      })
        .addTo(map)
        .bindPopup(
          `<strong>${region.group}</strong><br />${
            region.status === "available" ? "Tersedia" : "Akan Tersedia"
          }<br />${region.cities.join(", ")}`
        );
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="border border-line overflow-hidden">
      <div ref={containerRef} style={{ height: "420px", width: "100%" }} />
    </div>
  );
}
