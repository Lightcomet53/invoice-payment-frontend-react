import { useState, useEffect } from "react";
import countryList from "country-list";

export interface Country {
  code: string;
  name: string;
}

/**
 * Hook for fetching and filtering country data using the country-list package
 */
const useCountries = (options?: { excludeCountries?: string[] }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);

      const allCountries = countryList
        .getData()
        .map((country) => ({
          code: country.code,
          name: country.name,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      let filteredCountries = [...allCountries];

      if (options?.excludeCountries?.length) {
        // If countries to exclude are specified, remove them
        filteredCountries = filteredCountries.filter(
          (country) => !options.excludeCountries?.includes(country.code)
        );
      }

      setCountries(filteredCountries);
      setLoading(false);
    } catch (err) {
      setError("Failed to load countries");
      setLoading(false);
      console.error("Error loading countries:", err);
    }
  }, [options?.excludeCountries]);

  return {
    countries,
    loading,
    error,
  };
};

export default useCountries;
