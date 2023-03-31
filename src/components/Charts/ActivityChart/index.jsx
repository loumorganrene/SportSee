import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';
import '../ActivityChart/ActivityChart.scss'
import PropTypes from 'prop-types'
/**
 * Component for showing the user's activity bar chart.
 *
 * @component
 * @param {object} Object as a list of informations about user metabolism.
 * @example
 * const userActivity = [
 *   {date: "2020-07-01", day: 1, bodyweight: 80, calories: 240},
 *   {date: "2020-07-02", day: 2, bodyweight: 80, calories: 220}
 * ]
 *
 * <ActivityChart sessions={userActivity} />
 */
function ActivityChart({ sessions }) {

	return (
		<div className="backgroundActivity">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					barGap={8}
					data={sessions}
				>
					<CartesianGrid vertical={false} strokeDasharray="3 3" />
					<YAxis
						dataKey="bodyweight"
						tickLine={false}
						axisLine={false}
						tickCount={3}
						orientation="right"
						yAxisId="right"
						domain={['dataMin - 10', 'dataMax + 5']}
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
					<XAxis type="category" dataKey="day"
						tickLine={false} tickMargin={15} />
					<Tooltip
						isAnimationActive={false}
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
							fontSize: '1rem',
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
					<text
						className='activity--label'
						y="6%"
					>
						Activité quotidienne
					</text>
					<Bar
						barSize={7}
						name="Poids (kg)"
						unit="kg"
						dataKey="bodyweight"
						fill="black"
						radius={[10, 10, 0, 0]}
						yAxisId="right"
						isAnimationActive={false}
					/>
					<Bar
						barSize={7}
						name="Calories brûlées (kCal)"
						unit="kCal"
						dataKey="calories"
						fill="var(--primary-clr)"
						radius={[10, 10, 0, 0]}
						yAxisId="left"
						isAnimationActive={false}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

ActivityChart.propTypes = {
	sessions: PropTypes.arrayOf(PropTypes.shape({
		date: PropTypes.string.isRequired,
		day: PropTypes.number.isRequired,
		bodyweight: PropTypes.number.isRequired,
		calories: PropTypes.number.isRequired
	})).isRequired
}

export default ActivityChart