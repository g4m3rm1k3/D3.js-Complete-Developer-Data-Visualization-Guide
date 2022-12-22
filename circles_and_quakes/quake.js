const canvas = d3.select('.canva');

let width = 1600;
let height = 800;
const api_url =
	'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

const svg = canvas.append('svg').attr('width', width).attr('height', height);

// Define a div for a tooltip
let div = d3
	.select('body')
	.append('div')
	.attr('class', 'tooltip')
	.style('opacity', 0);

function timeStampToDate(mTime) {
	let mDate = new Date(mTime);
	return mDate.toLocaleDateString();
}

// Parse Json
d3.json(api_url).then(({ features }) => {
	// Here we have our data and start putting it all together
	console.log(features);
	svg
		.selectAll('circle')
		.data(features)
		.enter()
		.append('circle')
		.attr('cx', ({ geometry }, i) => Math.abs(geometry.coordinates[0] * 5))
		.attr('cy', ({ geometry }, i) => Math.abs(geometry.coordinates[1] * 5))
		.attr('r', ({ properties }, i, n) => {
			console.log(n[i]);
			return properties.mag * 2;
		})
		.attr('fill', ({ properties }, i) => properties.alert || 'red')
		.attr('opacity', 0.3)
		.attr('id', 'circleBasicTooltip')
		.on('mouseover', (d, i, n) => {
			d3.select(n[i]).transition().duration(100).style('opacity', 1);
			div.transition().duration(200).style('opacity', 0.9);
			div
				.html(
					'<p> Mag:' +
						d.properties.mag +
						'</p>' +
						'<p> Where: ' +
						d.properties.place.split(',')[1].trim() +
						'</p>' +
						'<p> Time:' +
						timeStampToDate(d.properties.time) +
						'</p>'
				)
				.style('left', d3.event.pageX + 'px')
				.style('top', d3.event.pageY - 50 + 'px');
		})
		.on('mouseout', (d, i, n) => {
			d3.select(n[i]).transition().duration(100).style('opacity', 0.3);
			div.transition().duration(500).style('opacity', '0');
		});
});
