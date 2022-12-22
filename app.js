const canvas = d3.select('.canva');

// const svg = canvas.append('svg').attr('width', '400').attr('height', '250');

// svg
// 	.append('circle')
// 	.attr('cx', 100)
// 	.attr('cy', 100)
// 	.attr('r', 50)
// 	.attr('fill', 'blue');
// svg
// 	.append('rect')
// 	.attr('width', 100)
// 	.attr('height', 100)
// 	.attr('x', 140)
// 	.attr('y', 50)
// 	.attr('fill', 'green')
// 	.attr('rx', 150)
// 	.attr('ry', 150);

// svg
// 	.append('line')
// 	.attr('x1', 129)
// 	.attr('x2', 45)
// 	.attr('y1', 100)
// 	.attr('y2', 46)
// 	.attr('stroke', 'gray');

// svg
// 	.append('text')
// 	.text('Hello There!')
// 	.attr('text-anchor', 'start')
// 	.attr('stroke', 'green')
// 	.attr('fill', 'darkgray')
// 	.attr('font-size', 32)
// 	.attr('x', 200)
// 	.attr('y', 100);
// svg
// 	.append('text')
// 	.text('Hello There!')
// 	.attr('text-anchor', 'middle')
// 	.attr('fill', 'darkgray')
// 	.attr('font-size', 32)
// 	.attr('x', 200)
// 	.attr('y', 150);

// svg
// 	.append('text')
// 	.text('Hello There!')
// 	.attr('text-anchor', 'end')
// 	.attr('stroke', 'green')

// 	.attr('fill', 'darkgray')
// 	.attr('font-size', 32)
// 	.attr('x', 200)
// 	.attr('y', 200);

const dataArray = [4, 15, 34, 123, 23, 1, 14, 60, 29];

const svg = canvas.append('svg').attr('width', 600).attr('height', 600);
// const svg = canvas.select('svg');
// dataArray.forEach((d) => {
// 	svg.append('rect');
// });
// svg.append('rect');
// const rect = svg.append('rect');
const rect = svg.selectAll('rect');
rect
	.data(dataArray)
	.enter()
	.append('rect')
	.attr('fill', (d) => {
		return d < 20 ? 'blue' : d > 50 ? 'red' : 'green';
	})
	.attr('width', 24)
	.attr('height', (d) => d * 2)
	.attr('y', (d, i) => {
		return 100 - d * 2;
	})
	.attr('x', (d, i) => i * 25);
