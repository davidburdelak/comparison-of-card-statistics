let labels1= ['ASENSO', 'DE GEA', 'PIQUE', 'CARVAJAL', 'THIAGO', 'PAREJO'];
let data1 = [83, 89, 88, 85, 87, 86];
let colors1= ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD484'];

let myChart1 = document.getElementById("myChart1").getContext('2d');

let chart1 = new Chart(myChart1, {
	type: 'pie',
	data: {
		labels: labels1,
		datasets: [ {
			data: data1,
			backgroundColor: colors1
		}]
	},
	options: {
		title: {
			text: "Player ratings of Spain",
			display: true
		}
	}
});

let labels2 = ['CRISTIANO RONALDO', 'GRIEZMANN', 'AGUERO', 'AUBAMEYANG', 'LEWANDOWSKI', 'MBAPPE'];
let data2 = [90, 81, 80, 94, 77, 96];
let colors2 = ['#49A9EA', '#AC5353', '#34496E', '#CFD484', '#B210DF', '#36CAAB'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
	type: 'bar',
	data: {
		labels: labels2,
		datasets: [ {
			data: data2,
			backgroundColor: colors2
		}]
	},
	options: {
		title: {
			text: "Pace (PAC) the best attackers",
			display: true
		},
		legend: {
			display: false
		}
	}
});

let labels3 = ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'];
let colors3 = ['#49A9EA', '#36CAAB', '#34496E', '#B370CF', '#B220CF'];

let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
	type: 'radar',
	data: {
		labels: labels3,
		datasets: [ 
		{
			label: 'LEWANDOWSKI',
			fill: true,
			backgroundColor: "rgba(179, 181, 198, 0.2)",
			borderColor: "rgba(179, 181, 198, 1)",
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(179, 181, 198, 1)",
			data: [77, 87, 74, 85, 41, 82]
		},
		{
			label: 'MILIK',
			fill: true,
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			borderColor: "rgba(255, 99, 132, 1)",
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(255, 99, 132, 1)",
			data: [69, 85, 64, 76, 39, 74]
		},
		{
			label: 'PIĄTEK',
			fill: true,
			backgroundColor: "rgba(140, 49, 122, 0.2)",
			borderColor: "rgba(140, 49, 122, 1)",
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(140, 49, 122, 1)",
			data: [76, 80, 53, 73, 38, 71]
		},
		{
			label: 'TEODORCZYK',
			fill: true,
			backgroundColor: "rgba(240, 150, 112, 0.2)",
			borderColor: "rgba(240, 150, 112, 1)",
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(240, 150, 112, 1)",
			data: [63, 74, 60, 66, 33, 77]
		}
		]
	},
	options: {
		title: {
			text: "Polish strikers skills",
			display: true
		}
	}
});

let labels4 = ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'];
let colors4 = ['#49A9EA', '#36CAAB', '#34496E', '#B370CF', '#B220CF'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
	type: 'radar',
	data: {
		labels: labels4,
		datasets: [ 
		{
			label: 'DE JONG',
			fill: true,
			backgroundColor: "rgba(179, 181, 198, 0.2)",
			borderColor: "rgba(179, 181, 198, 1)",
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(179, 181, 198, 1)",
			data: [79, 64, 84, 88, 76, 76]
		},
		{
			label: 'VAN DIJK',
			fill: true,
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			borderColor: "rgba(255, 99, 132, 1)",
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(255, 99, 132, 1)",
			data: [77, 60, 70, 72, 90, 86]
		},
		{
			label: 'DE LIGT',
			fill: true,
			backgroundColor: "rgba(140, 49, 122, 0.2)",
			borderColor: "rgba(140, 49, 122, 1)",
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(140, 49, 122, 1)",
			data: [67, 58, 66, 69, 83, 84]
		}
		]
	},
	options: {
		title: {
			text: "Netherlands defender skills",
			display: true
		}
	}
});