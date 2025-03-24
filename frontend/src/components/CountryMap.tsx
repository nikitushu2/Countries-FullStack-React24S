import { Box, CircularProgress, Paper, Typography } from "@mui/material";

interface Coords {
    lon: number;
    lat: number;
}

interface CountryMapProps {
    coordinates: Coords | undefined;
  }

export default function CountryMap({coordinates}: CountryMapProps) {
    console.log(coordinates);
  return (
      <>
      <Paper sx={{ p: 2, mt: 2 }}>
      <img src={`https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${coordinates?.lon},${coordinates?.lat}&zoom=5&apiKey=${import.meta.env.VITE_GEOPIFY_API_KEY}`}></img>
      </Paper>
      </>
  );
}