import React from 'react';
import {
  Box,
} from '@mui/material';
import LicenceCard from './LicenceCard';


export default function LicenceSection() {
  const featuresListBasics = [{
    title: "One end products",
    available: true,
  },
  {
    title: "12 months updates",
    available: true,
  },
  {
    title: "Commercial applications",
    available: true,
  },
  {
    title: "Design Resources",
    available: false,
  },
  {
    title: "TypeScript version",
    available: false,
  },
  {
    title: "JavaScript version",
    available: false,
  },
  {
    title: "6 months of support",
    available: false,
  }
  ]
  return (
    <Box sx={{
      p: '0px 120px 0px 120px',
      m: '10px',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'dashed #e3dfde',
        borderRadius: '10px'
      }}>

        <LicenceCard
          featuresListBasics={featuresListBasics}
          title={"Standard"}
          key={1}
        />
        <LicenceCard
          featuresListBasics={featuresListBasics}
          title={"Standard Plus"}
          key={2}
        />
        <LicenceCard
          featuresListBasics={featuresListBasics}
          title={"Extended"}
          key={3}
        />

      </Box>

    </Box>
  )
}
