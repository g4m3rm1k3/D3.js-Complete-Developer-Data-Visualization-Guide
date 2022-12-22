const canvas = d3.select('.canva');

const svg = canvas.append('svg').attr('width', 600).attr('height', 600);

const rect = svg.selectAll('rect');

d3.json('test.json').then((data) => {
	rect
		.data(data)
		.enter()
		.append('rect')
		.attr('fill', (d) => d.fill)
		.attr('width', 24)
		.attr('height', (d) => d.height * 2)
		.attr('y', (d, i) => 100 - d.height * 2)
		.attr('x', (d, i) => i * 25);
});
