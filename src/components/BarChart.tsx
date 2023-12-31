import { ResponsiveBar } from '@nivo/bar'
import { mockBarData } from '../data/mockData'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'


const BarChart = ({ compact = false }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return <ResponsiveBar
    data={mockBarData}
    keys={[
      'hot dog',
      'burger',
      'sandwich',
      'kebab',
      'fries',
      'donut'
    ]}
    theme={{
      // added
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
          fill: colors.grey[100],
        },
      },
      tooltip: {
        container: {
          color: theme.palette.mode === "dark" ? colors.grey[900] : colors.grey[100],
        }
      },
    }}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    borderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          1.6
        ]
      ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: compact? 90: 0,
      legend: compact? undefined: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: compact? undefined: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    enableGridY={false}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'theme',
      modifiers: [
        [
          'darker',
          1.6
        ]
      ]
    }}
    legends={
      [
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          itemTextColor: colors.primary[200],
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    role="application"
    isFocusable={true}
    ariaLabel="Nivo bar chart"
    barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
  />

}

export default BarChart