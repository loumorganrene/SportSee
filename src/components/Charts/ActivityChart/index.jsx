import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';


function ActivityChart({data}) {

	//     const activity = data.map((session, i) => ({
	// 		"date": session.day,
	// 		"day": i + 1,
	// 		"bodyweight": session.kilogram,
	// 		"calories": session.calories,
	// 	}))

    // console.log(activity)
	
    return (
			<ResponsiveContainer width="70%" height={250}>
				<BarChart barGap={8}>
					{/* data={data} */}
					<CartesianGrid vertical={false} strokeDasharray="3 3" />
					<YAxis
						dataKey="bodyweight"
						tickLine={false}
						tickCount={3}
						orientation="right"
						yAxisId="right"
						domain={['dataMin - 2', 'dataMax + 5']}
					/>
					<YAxis
						dataKey="calories"
						tickLine={false}
						tickCount={3}
						orientation="left"
						yAxisId="left"
						domain={['dataMin - 100', 'dataMax + 20']}
						hide
					/>
					<XAxis type="category" dataKey="day" tickLine={false} />
					<Tooltip
						cursor={{ fill: '#C4C4C4', fillOpacity: '50%' }}
						offset={20}
						contentStyle={{
							backgroundColor: '#ff0101',
							border: 'none',
							textAlign: 'center',
						}}
						wrapperStyle={{
							outline: 'none',
						}}
						itemStyle={{
							fontSize: '7px',
							color: '#fff',
							lineHeight: '24px',
						}}
						labelFormatter={() => ''}
						separator=""
						formatter={(value) => ['', value]}
						active="true"
					/>
					<Legend
						iconType="circle"
						height={50}
						align="right"
						verticalAlign="top"
						iconSize={8}
					/>
					<Bar
						barSize={7}
						name="Poids (kg)"
						unit="kg"
						dataKey="bodyweight"
						fill="#000"
						radius={[10, 10, 0, 0]}
						yAxisId="right"
					/>
					<Bar
						barSize={7}
						name="Calories brûlées (kCal)"
						unit="kCal"
						dataKey="calories"
						fill="#ff0101"
						radius={[10, 10, 0, 0]}
						yAxisId="left"
					/>
				</BarChart>
			</ResponsiveContainer>
  )
}

export default ActivityChart