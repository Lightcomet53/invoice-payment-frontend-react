import React from "react";
import { formatZip } from "../../utils/helpers/formatting";
import useCountries from "../../utils/hooks/useCountries";

interface CountryRegionFormProps {
  country: string;
  zipCode: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  excludeCountries?: string[];
}

/**
 * Form component for country selection and zip/postal code input
 */
const CountryRegionForm: React.FC<CountryRegionFormProps> = ({
  country,
  zipCode,
  onChange,
  onKeyDown,
  excludeCountries,
}) => {
  const { countries, loading, error } = useCountries({
    excludeCountries,
  });

  return (
    <div>
      <label htmlFor="country" className="block font-medium text-gray-600 mb-1">
        Country or region
      </label>
      <div className="relative w-full rounded-md border border-gray-300 shadow-sm">
        <div className="relative">
          <select
            id="country"
            className="appearance-none w-full cursor-pointer rounded-md border-b rounded-b-none border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            name="country"
            value={country}
            onChange={onChange}
            autoComplete="country"
            disabled={loading}
            aria-busy={loading}
            aria-invalid={!!error}
          >
            {loading ? (
              <option value="">Loading countries...</option>
            ) : error ? (
              <option value="">Error: {error}</option>
            ) : countries.length === 0 ? (
              <option value="">No countries available</option>
            ) : (
              <>
                <option value="">Select a country</option>
                {countries.map((countryOption) => (
                  <option key={countryOption.code} value={countryOption.name}>
                    {countryOption.name}
                  </option>
                ))}
              </>
            )}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-800">
            {loading ? (
              <span className="w-6 h-6 flex items-center justify-center">
                <span className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></span>
              </span>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        </div>
        <input
          id="zipCode"
          type="text"
          placeholder="ZIP"
          name="zipCode"
          className="w-full rounded-md px-3 py-2 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          value={formatZip(zipCode)}
          onChange={onChange}
          onKeyDown={onKeyDown}
          autoComplete="postal-code"
          aria-required="true"
        />
      </div>
    </div>
  );
};

export default CountryRegionForm;
