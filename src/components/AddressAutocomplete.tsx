"use client";

import { useEffect, useRef } from "react";

type AddressAutocompleteProps = {
  name?: string;
  placeholder?: string;
};

const GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/js";

export default function AddressAutocomplete({
  name = "address",
  placeholder = "Start typing your address"
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey || !inputRef.current) {
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-google-places="true"]`
    );

    const loadAutocomplete = () => {
      if (!window.google?.maps?.places || !inputRef.current) {
        return;
      }

      const bounds = new window.google.maps.LatLngBounds(
        { lat: 43.48, lng: -80.15 },
        { lat: 44.2, lng: -79.0 }
      );

      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          bounds,
          componentRestrictions: { country: "ca" },
          fields: ["formatted_address", "geometry"],
          strictBounds: false
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.formatted_address || !inputRef.current) {
          return;
        }
        inputRef.current.value = place.formatted_address;
      });
    };

    if (existingScript) {
      existingScript.addEventListener("load", loadAutocomplete);
      if (existingScript.dataset.loaded === "true") {
        loadAutocomplete();
      }
      return () => {
        existingScript.removeEventListener("load", loadAutocomplete);
      };
    }

    const script = document.createElement("script");
    script.src = `${GOOGLE_PLACES_URL}?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.dataset.googlePlaces = "true";
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      loadAutocomplete();
    });
    document.head.appendChild(script);
  }, []);

  return (
    <input
      ref={inputRef}
      name={name}
      type="text"
      placeholder={placeholder}
      autoComplete="street-address"
      inputMode="text"
    />
  );
}
