import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from '../data/mockGeo'
import { mockGeographyData } from '../data/mockData'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'

const ChoroplethChart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return < ResponsiveChoropleth
    data={mockGeographyData}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: colors.grey[100],
          },
        },
        legend: {
          text: {
            fill: colors.grey[100],
          },
        },
        ticks: {
          line: {
            stroke: colors.grey[100],
            strokeWidth: 1,
          },
          text: {
            fill: colors.grey[100],
            fontWeight: 700
          },
        },
      },
      legends: {
        text: {
          fill: theme.palette.mode === "light" ? colors.grey[900] : colors.grey[100],
        },
        title: {
          text: {
            color: "yellow"
          }
        }
      },
      tooltip: {
        container: {
          color: theme.palette.mode === "dark" ? colors.grey[900] : colors.grey[100],
        }
      },
    }
    }
    features={geoFeatures.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="nivo"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={false}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"

    legends={
      [
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemTextColor: colors.grey[100],
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: colors.grey[600],
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
  />
}

export default ChoroplethChart